const Sos = () => {
  return (
    <section className="px-14 py-12">
      <div className="text-primarytext">
        <h1 className="text-4xl font-bold">
          Hello. <span className="font-normal"> Dayo!</span>
        </h1>
        <p className="text-xl mt-2 opacity-80">Good Morning</p>
      </div>
      <div className="flex mt-10 items-center">
        <div className="bg-red text-center z-10 w-[100px] h-[300px] rounded-[42px] red-box flex items-center justify-center">
          <div className="min-w-[100px]"></div>
        </div>
        <img src="fullmap.png" alt="map" className="-ml-6 z-10 flex-3 z-20" />
      </div>
      <div className="text-center m-4">
        <img src="exclamation.png" className="inline" />
        <p className="inline"> The driver is 15 mins away to you</p>
      </div>
    </section>
  )
}
export default Sos
