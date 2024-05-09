import Image from "next/image";

export default function Home() {

  return (
    <main className="min-h-screen w-full flex-col px-12 mx-auto space-y-12 max-w-[1400px] ">
      <div className="!mt-12">
        <h1 className="text-left text-4xl font-bold">Permissionless Sales</h1>
        <div className="bg-[#FFF8A6] p-8 rounded-3xl mt-8 w-full">
          <h1 className="text-left text-2xl font-bold text-black">Upcoming Sales</h1>
          <table className="table-fixed text-sm !mt-5 text-black text-left w-full">
            <thead>
              <tr className="text-[#5F6F6A]">
                <th>Project</th>
                <th>Total Raise</th>
                <th>Starting In</th>
                <th>Price</th>
                <th>Tags</th>
                <th>Exchanges</th>
                <th>Distribution Chain</th>
                
              </tr>
            </thead>
            <tbody className="place-items-center">
              <tr className="!mb-5">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="space-x-3 flex !mx-0 !px-0">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
              <tr className="rounded-3xl p-4">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="!mt-4 space-x-3 flex">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#B8E7BF] p-8 rounded-3xl mt-8 w-full">
          <h1 className="text-left text-2xl font-bold text-black">In-Progress</h1>
          <table className="table-fixed text-sm !mt-5 text-black text-left w-full">
            <thead>
              <tr className="text-[#5F6F6A]">
                <th>Project</th>
                <th>Total Raise</th>
                <th>Starting In</th>
                <th>Price</th>
                <th>Tags</th>
                <th>Exchanges</th>
                <th>Distribution Chain</th>
                
              </tr>
            </thead>
            <tbody className="place-items-center">
              <tr className="!mb-5">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="space-x-3 flex !mx-0 !px-0">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
              <tr className="rounded-3xl p-4">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="!mt-4 space-x-3 flex">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-[#A8A0CF] p-8 rounded-3xl mt-8 w-full">
          <h1 className="text-left text-2xl font-bold text-black">Completed</h1>
          <table className="table-fixed text-sm !mt-5 text-black text-left w-full">
            <thead>
              <tr className="text-[#5F6F6A]">
                <th>Project</th>
                <th>Total Raise</th>
                <th>Starting In</th>
                <th>Price</th>
                <th>Tags</th>
                <th>Exchanges</th>
                <th>Distribution Chain</th>
                
              </tr>
            </thead>
            <tbody className="place-items-center">
              <tr className="!mb-5">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="space-x-3 flex !mx-0 !px-0">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
              <tr className="rounded-3xl p-4">
              <td className="!mt-4 flex my-auto space-x-4">
                <Image src='/images/RUNI.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Runespad</h1>
                  <h2 className="text-xs text-[#5F6F6A]">RUNI</h2>
                </div>
              </td>
                <td>
                  <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$100,000</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">10 Hours</h1>
                  <h2 className="text-xs text-[#5F6F6A]">12 April 2024 14:00</h2>
                </div>
                </td>
                <td>
                <div className="my-auto !mt-4 ">
                  <h1 className="text-lg">$1.05</h1>
                  <h2 className="text-xs text-[#5F6F6A]">USDT</h2>
                </div>
                </td>
                <td>
                  <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Refundable</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Capless</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-gray-100 outline outline-1 outline-gray-400 text-black">
                      <h1>Fill</h1>
                    </div>
                  </div>
                </td>
                <td>
                <div className="flex flex-wrap gap-2 place-items-start">
                    <div className="py-1 px-4 rounded-full bg-[#F7D3CF] outline outline-1 outline-gray-400 text-black">
                      <h1>Bybit</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#FDB08F] outline outline-1 outline-gray-400 text-black">
                      <h1>KuCoin</h1>
                    </div>
                    <div className="py-1 px-4 rounded-full bg-[#8691E1] outline outline-1 outline-gray-400 text-black">
                      <h1>Gate</h1>
                    </div>
                  </div>
                </td>
              <td className="!mt-4 space-x-3 flex">
                <Image src='/images/btc.svg' width={40} height={40} alt='runi' />
                <div className="my-auto">
                  <h1 className="text-lg">Bitcoin</h1>
                  <h2 className="text-xs text-[#5F6F6A]">Runes Protocol</h2>
                </div>
              </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
