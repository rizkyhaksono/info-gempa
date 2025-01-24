export default function ShakeMap({ data }: Readonly<{ data: any }>) {
  const originalTanggal = data?.Infogempa?.gempa[0].Tanggal;
  const originalJam = data?.Infogempa?.gempa[0].Jam;

  function formatDate(inputDate: string) {
    const monthNames = {
      Jan: "01",
      Feb: "02",
      Maret: "03",
      April: "04",
      Mei: "05",
      Jun: "06",
      Jul: "07",
      Agu: "08",
      Sep: "09",
      Okt: "10",
      Nov: "11",
      Des: "12",
    };

    const parts = inputDate.split(" ");
    const day = parts[0];
    const monthName = parts[1];
    const year = parts[2];

    const monthNumber = monthNames[monthName as keyof typeof monthNames];
    const formattedDate = `${year}${monthNumber}${day.padStart(2, "0")}`;
    return formattedDate;
  }

  function formatTime(inputTime: string) {
    const [time] = inputTime.split(" ");
    const [hour, minute, second] = time.split(":");

    const formattedTime = `${hour}${minute}${second}`;
    return formattedTime;
  }

  const formattedDate = formatDate(originalTanggal);
  const formattedTime = formatTime(originalJam);
  const shakeTime = `${formattedDate}${formattedTime}`;

  return (
    <div className="mt-5">
      <img src={`https://data.bmkg.go.id/DataMKG/TEWS/${shakeTime}.mmi.jpg`} alt="Shake Map" loading="lazy" className="rounded-lg w-full" />
    </div>
  );
}
