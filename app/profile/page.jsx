"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import Profile from '@components/Profile'

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPrompts = async () => {
      try {
        const response = await fetch(`/api/users/${session?.user.id}/prompts`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPrompts(data);
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    if(session?.user.id) fetchPrompts();
  }, [session?.user.id]);

  // Delete prompt 
  const handleDelete = async (promptId) => {
    const confirmDelete = confirm("Are you sure you want to delete this prompt?");
    if(confirmDelete) {
      try {
        const res = await fetch(`/api/prompt/${promptId.toString()}`, {
          method: "DELETE",
        });
        console.log(res);
        if(res.ok) {
          const filteredPrompts = prompts.filter((p) => p._id !== promptId);
          setPrompts(filteredPrompts);
          router.push("/profile");
        }
      } catch (error) {
        throw Error(error);
      }
    }
  }

  // Edit prompt 
  const handleEdit = (promptId) => {
    router.push(`/update-prompt?id=${promptId}`)
  }

  return (
    <section>
    {session?.user.id && (
        <Profile
          name={session.user.name.split(' ').slice(0, 2).join(' ')}
          description="Your Creative Haven: Craft, curate, and share prompts that showcase your imaginative brilliance, sparking inspiration in others."
          data={prompts}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        )}    
      </section>
  )
}

export default MyProfile;
