import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen w-full flex-col px-12 mx-auto space-y-12 max-w-[1400px] ">
      <div className="!mt-12">
        <h1 className="text-left text-4xl font-bold">Create A Permissionless Launch</h1>
        <div className="flex text-black gap-4 !mt-8 flex-wrap flex-col rounded-3xl p-10 bg-[#A8A0CF]">
        <h1 className="text-left text-3xl font-bold text-black">Basic Information</h1>
        <h1 className="font-medium text-lg">
            Project Name
        </h1>
        <input className="rounded-3xl bg-[#F8E9FF] p-5 max-w-[40rem] text-xl border-none outline-none place-items-center flex" />

        <h1 className="font-medium text-lg">
            Project Description
        </h1>
        <textarea className="rounded-3xl bg-[#F8E9FF] p-5 max-w-[40rem] h-[20rem] text-xl border-none outline-none place-items-center flex" />
        <button className="bg-[#3FF2C8] !mt-12 text-xl font-bold p-3 text-center rounded-full">
            Create
        </button>
        </div>
      </div>
    </main>
  );
}
