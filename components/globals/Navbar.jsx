"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);
  

  useEffect(() => {
    async function fetchProviders() {
      const response = await getProviders();
      setProviders(response);
    }
    fetchProviders();
  }
  , []);
  
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link
        href={"/"}
        className="flex gap-2 flex-center">
        <Image
        src="/assets/images/logo.svg"
        alt="PromptPal logo"
        width={30}
        height={30}
      />
        <p className="logo_text">PromptPal</p>
      </Link>

      {/* Desktop menu */}
      <div className="sm:flex hidden">
      {session?.user ? (
        <div className="gap-3 flex md:gap-5">
          <Link
            href={"/create-prompt/new"}
            className="black_btn">
            Create Post
          </Link>

          <button
            onClick={signOut}
            type="button"
            className="outline_btn">
              Sign Out
          </button>

          <Link href={"/profile"}>
            <Image
            src={session.user.image}
            alt="Profile picture"
            width={37}
            height={37}
            className="rounded-full" />
          </Link>
        </div>) : (
        <div>
          {providers && Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={() => signIn(provider.id)}
              type="button"
              className="black_btn">
                Sign In with {provider.name}
            </button>
          ))
          }
        </div>)}
      </div>

      {/* Mobile Menu */}
      <div className="sm:hidden flex relative">
      {session?.user ? (
        <div className="">
          <Image
            src={session.user.image}
            alt="Profile picture"
            width={37}
            height={37}
            className="rounded-full"
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
          />
          {toggleDropdown && 
          <div className="dropdown">
            <Link
              href="/profile"
              className="dropdown_link"
              onClick={() => {
                setToggleDropdown(false);
              }}>
                Profile
            </Link>
            <Link
              href="/create-prompt"
              className="dropdown_link"
              onClick={() => {
                setToggleDropdown(false);
              }}>
                Create Prompt
            </Link>
            <button
              href="/create-prompt"
              className="mt-5 black_btn w-full"
              onClick={() => {
                setToggleDropdown(false);
                signOut();
              }}>
                Sign Out
            </button>
          </div>}
        </div>
      ) : (
        <div>
          {providers && Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={() => {signIn(provider.id)}}
              type="button"
              className="black_btn">
                Sign In with {provider.name}
            </button>
          ))
          }
        </div>
      )}
      </div>
    </nav>
  )
}

export default Navbar
