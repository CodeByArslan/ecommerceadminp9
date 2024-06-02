'use client'
import { SignIn, SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import { useEffect } from 'react';
import { useClerk } from '@clerk/clerk-react';
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";





export default function Home() {

  // const router = useRouter();
  // const { user } = useClerk();

  // useEffect(() => {
  //   if (!user) {
  //     router.push('/sign-up');
  //   }
  // })
  

  return (
    <div>
      <div className="flex justify-between bg-white h-20 items-center">
        <SignedOut>
          <h1 className="text-body-semibold mt-2 font-extrabold font-serif mx-2">
            Admin Dashboard
          </h1>
      
          <SignInButton>
            <button className="bg-black text-white border rounded-md p-2 h-10 mt-1 pl-7 pr-5 m-5 pt-4 pb-10">
              Sign-In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center mb-10">
            <UserButton />
          </div>
        </SignedIn>
      </div>
    </div>
  );
  
}
