"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { BiUserCircle } from "react-icons/bi";

const Navbar = () => {
  const isUserLoggedIn = true;
  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    async function getProviders() {
      const response = await getProviders();
      setProviders(response);
    }
    getProviders();
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
      {isUserLoggedIn ? (
        <div className="gap-3 flex md:gap-5">
          <Link
            href={"/create-prompt"}
            className="black_btn">
            Create Post
          </Link>

          <button
            onClick={signOut}
            type="button"
            className="outline_btn">
              Sign Out
          </button>

          <Link
            href={"/profile"}
            className="text-4xl">
            <BiUserCircle />
          </Link>
        </div>) : (
        <div className="black_btn">
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
      {isUserLoggedIn ? (
        <div className="">
          <BiUserCircle
            onClick={() => {
              setToggleDropdown((prev) => !prev);
            }}
            className="text-4xl red"
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
        <div className="black_btn">
          {providers && Object.values(providers).map((provider) => (
            <button
              key={provider.name}
              onClick={() => {}}
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
