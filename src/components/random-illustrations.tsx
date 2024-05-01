export default function RandomImage() {
  return (
    <div className="absolute -z-10 w-full">
      <img src={`https://source.unsplash.com/random/1800x1800/?bali`} alt="Random" className="w-full h-full object-cover object-center" loading="lazy" />
    </div>
  )
}
