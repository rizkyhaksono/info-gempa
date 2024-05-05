import type Gempa from "../types/gempa"

export default function Table({ data }: Readonly<{ data: any }>) {
  return (
    <div className="bg-[#404040] bg-opacity-[40%] backdrop-blur-lg backdrop-filter rounded-lg p-5 mt-5 mb-10 shadow-2xl">
      <div className="flex flex-col text-white">
        <div className="overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-thin scrollbar-thumb-[#525252] scrollbar-track-gray-100">
          <div className="inline-block min-w-full py-2">
            <table className="min-w-full text-left text-sm font-light text-surface">
              <thead className="border-b border-white font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    No
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Tanggal
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Jam
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Lintang & Bujur
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Kedalaman
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Magnitudo
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Wilayah
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Dirasakan
                  </th>
                </tr>
              </thead>
              <tbody>
                {data?.Infogempa?.gempa.map((gempa: Gempa, index: number) => (
                  <tr key={gempa.Tanggal} className="text-center border-b border-[#737373] font-normal">
                    <td className="py-2 whitespace-nowrap px-6 font-medium">{index + 1}</td>
                    <td className="whitespace-nowrap px-6 py-4">{gempa.Tanggal}</td>
                    <td className="whitespace-nowrap px-6 py-4">{gempa.Jam}</td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {gempa.Lintang} | {gempa.Bujur}
                    </td>
                    <td className="whitespace-nowrap py-4">{gempa.Kedalaman}</td>
                    <td className="whitespace-nowrap py-4">{gempa.Magnitude}</td>
                    <td className="text-start whitespace-nowrap px-6 py-4">{gempa.Wilayah}</td>
                    <td className="text-start whitespace-nowrap px-6 py-4">{gempa.Dirasakan}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}
