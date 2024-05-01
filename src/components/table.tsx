import type Gempa from "../types/gempa"

export default function Table({ data }: Readonly<{ data: any }>) {
  return (
    <div className="bg-white bg-opacity-[40%] backdrop-blur-lg backdrop-filter rounded-lg p-5 mt-5 mb-10">
      <div className="flex flex-col text-[#18191b]">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface">
                <thead className="border-b border-[#18191b] font-medium">
                  <tr>
                    <th scope="col" className="px-6 py-4">
                      No
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
                  </tr>
                </thead>
                <tbody>
                  {data?.Infogempa?.gempa.map((gempa: Gempa, index: number) => (
                    <tr key={gempa.Tanggal} className="text-center border-b border-[#18191b] font-normal">
                      <td className="py-2 whitespace-nowrap px-6 font-medium">{index + 1}</td>
                      <td className="whitespace-nowrap px-6 py-4">{gempa.Jam}</td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {gempa.Lintang} | {gempa.Bujur}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">{gempa.Kedalaman}</td>
                      <td className="whitespace-nowrap px-6 py-4">{gempa.Magnitude}</td>
                      <td className="text-start pl-10 w-full whitespace-nowrap px-6 py-4">{gempa.Wilayah}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
