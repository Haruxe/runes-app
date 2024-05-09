"use client";
import Image from "next/image";
import Link from "next/link";

export default function Sidebar() {
  return (
    <>
    <nav className="bg-[#424250] hidden lg:flex flex-col max-w-xs w-full justify-between place-items-center">
      <div className="space-y-12 w-full">
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
          <Link href='/' className="px-6 py-4 flex space-x-4 !mt-20 bg-[#4D4D5E] cursor-pointer">
           <Image src='/images/verified.svg' width={20} height={20} alt='verified' />
            <h1 className="text-lg">Verified</h1>
          </Link>
          <Link href='/permissionless' className="px-6 py-4 flex space-x-4  cursor-pointer">
           <Image src='/images/perm.svg' width={20} height={20} alt='permissionless' />
            <h1 className="text-lg">Permissionless</h1>
          </Link >
          <Link href='/create'  className="px-6 py-4 flex space-x-4 bg-[#4D4D5E]  cursor-pointer">
           <Image src='/images/create.svg' width={20} height={20} alt='create' />
            <h1 className="text-lg">Create A Launch</h1>
          </Link >
          <div className="px-6 py-4 flex space-x-4 relative">
           <Image src='/images/etcher.svg' width={20} height={20} alt='etcher' />
            <h1 className="text-lg">Runes Etcher</h1>
            <h1 className="px-2 py-1 bg-slate-900 text-white rounded-full absolute top-2 right-2 outline outline-1 text-xs">Coming Soon</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4 bg-[#4D4D5E] relative">
           <Image src='/images/scan.svg' width={20} height={20} alt='scan' />
            <h1 className="text-lg">Runesscan</h1>
            <h1 className="px-2 py-1 bg-slate-900 text-white rounded-full absolute top-2 right-2 outline outline-1 text-xs">Coming Soon</h1>
          </div>
          <div className="px-6 py-4 flex space-x-4">
           <Image src='/images/help.svg' width={20} height={20} alt='help' />
            <h1 className="text-lg">Help</h1>
          </div>
        </div>
        <div></div>
      </div>
    </nav>
    <nav className="bg-zinc-600 bg-opacity-50 lg:hidden flex justify-between place-items-center">
    <div className="flex p-5 max-w-6xl">
      <div className="flex gap-3 place-items-center">
        <Link href='/'>
          <Image
            src="/images/logo3.svg"
            className="rounded-fulle"
            alt="logo"
            width={180}
            height={40}
          />
        </Link>
        <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
          <h1 className="text-sm">RUNESCAN</h1>
        </div>
        <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
          <h1 className="text-sm">RUNES ETCHER</h1>
        </div>
        <div className="px-6 py-2 rounded-full outline outline-1 lg:flex hidden">
          <h1 className="text-sm">RUNES BOOK</h1>
        </div>
      </div>
      <div></div>
    </div>
    <div className="p-5 flex space-x-4 place-items-center">
    <div className="px-8 py-2 rounded-full outline outline-1 lg:flex hidden">
          <h1 className="text-lg font-bold">Blog</h1>
        </div>
       <Link href='/app' className="px-4 cursor-pointer py-2 outline outline-1 rounded-full">
          <h1 className="text-lg font-bold">0x23423</h1>
        </Link>
        <div className="p-3 rounded-full outline outline-1 lg:hidden flex">
          <Image src='/images/search.svg' alt='hamburger' width={15} height={15} />
        </div>
    </div>
  </nav>
  </>
  );
}
