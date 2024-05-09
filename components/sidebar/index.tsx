"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-[#424250] rounded-b-3xl justify-between place-items-center">
      <div className="max-w-xl space-y-12 w-full">
        <div className="gap-3 place-items-center w-full">
          <Link className="p-5 flex" href='/'>
            <Image
              src="/images/logo3.svg"
              className="flex mx-auto"
              alt="logo"
              width={180}
              height={40}
            />
          </Link>
          <div className="p-5 rounded-full bg-[#4D4D5E] py-1 px-3 flex mx-4">
            <Image src='/images/search.svg' width={14} height={14} alt='search' />
            <input placeholder="Search" className="bg-transparent px-3 max-w-[200px]" />
          </div>
          <div className="px-6 py-4 flex space-x-4 !mt-20 bg-[#4D4D5E]">
           <Image src='/images/verified.svg' width={20} height={20} alt='verified' />
            <h1 className="text-lg">Verified</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4">
           <Image src='/images/perm.svg' width={20} height={20} alt='permissionless' />
            <h1 className="text-lg">Permissionless</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4 bg-[#4D4D5E]">
           <Image src='/images/create.svg' width={20} height={20} alt='create' />
            <h1 className="text-lg">Create A Launch</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4">
           <Image src='/images/etcher.svg' width={20} height={20} alt='etcher' />
            <h1 className="text-lg">Runes Etcher</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4 bg-[#4D4D5E]">
           <Image src='/images/scan.svg' width={20} height={20} alt='scan' />
            <h1 className="text-lg">Runesscan</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4">
           <Image src='/images/help.svg' width={20} height={20} alt='help' />
            <h1 className="text-lg">Help</h1>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
  );
}
