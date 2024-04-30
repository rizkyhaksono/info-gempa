import type Gempa from "../types/gempa"

export default function Table({ data }: { data: any }) {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>No</th>
          <th>Jam</th>
          <th>Lintang</th>
          <th>Bujur</th>
          <th>Kedalaman</th>
          <th>Magnitudo</th>
          <th>Wilayah</th>
        </tr>
      </thead>
      <tbody>
        {data.Infogempa.gempa.map((gempa: Gempa, index: number) => (
          <tr>
            <td>{index + 1}</td>
            <td>{gempa.Jam}</td>
            <td>{gempa.Lintang}</td>
            <td>{gempa.Bujur}</td>
            <td>{gempa.Kedalaman}</td>
            <td>{gempa.Magnitude}</td>
            <td>{gempa.Wilayah}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
