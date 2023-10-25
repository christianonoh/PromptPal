"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Profile from '@components/Profile'

const MyProfile = () => {
  const { data: session } = useSession();
  const [prompts, setPrompts] = useState([]);
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
  }, []);
  const handleDelete = async () => {
    console.log('delete')
  }

  const handleEdit = () => {
    console.log('edit')
  }

  return (
    <section>
      <Profile
        name="My"
        description="This is my profile"
        data={prompts}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </section>
  )
}

export default MyProfile;
