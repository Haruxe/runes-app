"use client";
import Image from "next/image";
import Link from "next/link";

export default function BottomBar() {
  return (<nav className="bg-zinc-600 flex lg:hidden justify-between fixed bottom-0 w-screen place-items-center">
    <div className="flex p-5 max-w-6xl w-full" >
      <div className="flex gap-3 place-items-start text-center w-full justify-between place-content-between">
          <Link href='/' className="cursor-pointer space-y-3 flex flex-col place-content-center my-3">
           <Image src='/images/verified.svg' width={40} height={40} alt='verified' className="mx-auto"  />
            <h1 className="text-sm">Verified</h1>
          </Link>
          <Link href='/permissionless' className=" cursor-pointer flex space-y-3 flex-col place-content-center my-3">
           <Image src='/images/perm.svg' width={40} height={40} alt='permissionless' className="mx-auto" />
            <h1 className="text-sm">Permissionless</h1>
          </Link >
          <Link href='/create'  className=" cursor-pointer flex flex-col space-y-3 place-content-center my-3">
           <Image src='/images/create.svg' width={40} height={40} alt='create' className="mx-auto"  />
            <h1 className="text-sm">Create A Launch</h1>
          </Link >
          <div className="relative space-y-3">
           <Image src='/images/etcher.svg' width={40} height={40} alt='etcher' className="mx-auto"  />
            <h1 className="text-sm">Runes Etcher</h1>
            <h1 className="px-2 py-1 bg-slate-900 text-white rounded-full outline outline-1 text-xs">Coming Soon</h1>
            </div>
          <div className="relative space-y-3">
           <Image src='/images/scan.svg' width={40} height={40} alt='scan' className="mx-auto"  />
            <h1 className="text-sm">Runesscan</h1>
            <h1 className="px-2 py-1 bg-slate-900 text-white rounded-full outline outline-1 text-xs">Coming Soon</h1>
          </div>
      </div>
    </div>
    
  </nav>);
}