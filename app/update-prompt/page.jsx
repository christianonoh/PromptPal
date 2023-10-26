"use client"

import Form from "@components/Form"
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";


const EditPrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: "",
  });

  useEffect(() => {
    const fetchPrompt = async () => {
      try {
        const response = await fetch(`/api/prompt/${promptId}`);

        const data = await response.json();
        setPrompt({
          prompt: data.prompt,
          tag: data.tag,
        });
      } catch (error) {
        console.error("Error fetching prompts:", error);
      }
    };

    if(promptId) fetchPrompt();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api/prompt/${promptId}`, {
        method: "PATCH",
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
          userId: session?.user.id,
        }),
      });
      if(res.ok) {
        router.push("/profile");
      }
    } catch (error) {
      throw Error(error);
    } finally {
      setSubmitting(false);
    };
  }

  const [submitting, setSubmitting] = useState(false);
  return (
    <Form
      type="Edit"
      prompt={prompt}
      setPrompt={setPrompt}
      handleSubmit={updatePrompt}
      submitting={submitting}
    />
  )
}

export default EditPrompt;
