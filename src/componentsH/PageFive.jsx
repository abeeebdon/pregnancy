const PageFive = () => {
  return (
    <section className="px-14 py-12">
      <div className="text-primarytext">
        <h1 className="text-4xl font-bold">
          Hello. <span className="font-normal"> Dayo!</span>
        </h1>
        <p className="text-xl mt-2 opacity-80">Good Morning</p>
      </div>

      <div className=" mt-10 pl-8 ml-10 w-full h-fit relative ">
        <img
          src="map2.png"
          alt="map"
          className="-ml-6 z-20 "
          style={{ height: '50vh' }}
        />
      </div>
      <div className="my-4">
        <div className="text-center m-4">
          <img src="exclamation.png" className="inline" />
          <p className="inline"> 15 mins away from the hospitals</p>
        </div>
        <div className="text-center m-4">
          <button className="bg-blue-500 py-3 px-8 text-white rounded-[10px]">
            Show details
          </button>
        </div>
      </div>
    </section>
  )
}
export default PageFive
