"use client"
import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ prompt, handleTagClick, handleEdit, handleDelete}) => {
  const [copied, setCopied] = useState(false);
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const handleCopyClick = () => {
    navigator.clipboard.writeText(prompt.prompt);
    setCopied(prompt.prompt);
    setTimeout(() => {
      setCopied("");
    }
    , 3000);
  };

  const handleProfileClick = () => {
    if (prompt.creator._id === session?.user.id) return router.push("/profile");

    router.push(`/profile/${prompt.creator._id}?name=${prompt.creator.username}`);

  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div
          onClick={handleProfileClick}
          className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={prompt.creator.image}
            width={40}
            height={40}
            alt='user_image'
            className="rounded-full object-contain"
          />
        <div className="flex flex-col">
          <h3 className="font-semibold text-gray-900">
            {prompt.creator.name}
          </h3>
          <p className="text-sm text-gray-500">
            {prompt.creator.username}
          </p>
        </div>
        </div>

        <div className="copy_btn">
          <Image
            src={copied === prompt.prompt ? "/assets/icons/tick.svg" : "/assets/icons/copy.svg"}
            width={20}
            height={20}
            alt='copy_icon'
            className="cursor-pointer"
            onClick={handleCopyClick}
          />
        </div>
      </div>
      <p className="text-sm my-4">
        {prompt.prompt}
      </p>
      <div className="flex flex-between">
      <p className="text-sm blue_gradient cursor-pointer" onClick={() => handleTagClick && handleTagClick(prompt.tag)}>
        #{prompt.tag}
      </p>
      <p className="text-sm text-gray-500">
        {new Date(prompt.createdAt).toLocaleString('en-US', { dateStyle: 'short' })}
      </p>
      </div>
      {session?.user.id === prompt.creator._id && pathName === '/profile' && (
        <div className="flex flex-center pt-4 gap-6 border-t">
          <button className="blue_gradient" onClick={handleEdit}>
            Edit
          </button>
          <button className="orange_gradient" onClick={handleDelete}>
            Delete
          </button>
        </div>
      )}
    </div>
  )
}

export default PromptCard
