"use client"

import Form from "@components/Form"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";


const CreatePrompt = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [prompt, setPrompt] = useState({
    prompt: "",
    tag: "",
  });

  const createPrompt = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/prompt/new", {
        method: "POST",
        body: JSON.stringify({
          prompt: prompt.prompt,
          tag: prompt.tag,
          userId: session?.user.id,
        }),
      });
      if(res.ok) {
        router.push("/");
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
      type="Create"
      prompt={prompt}
      setPrompt={setPrompt}
      handleSubmit={createPrompt}
      submitting={submitting}
    />
  )
}

export default CreatePrompt
