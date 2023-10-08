import driver from '../Images/driver.png'
import car from '../Images/car-icon.png'
import trip from '../Images/bx_trip.png'
import star from '../Images/star-icon.png'
import truck from '../Images/truck-driver.png'
import passenger from '../Images/passenger.png'

const PageTwo = () => {
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
          className="-ml-6 z-20 w-full"
          style={{ height: '60vh' }}
        />
        <div className="w-1/3 h-fit bg-white absolute  bottom-0 z-20">
          <div className="flex align-bottom justify-around bg-white gap-4 m-4">
            <div className="flex align-bottom">
              <p className=" inline content-baseline text-white">Dele Jimmy</p>
            </div>
            <img src={driver} />
          </div>
          <div className="bg-white m-0 p-0">
            <div className="flex justify-start gap-4 align-center m-4">
              <img src={car} />
              <p>Toyota Fj Crusier - 5FJXK1</p>
            </div>
            <div className="flex justify-start gap-4 align-center m-4">
              <img src={star} />
              <p>Ratings - 4.2</p>
            </div>
            <div className="flex justify-start gap-4 align-center m-4">
              <img src={trip} />
              <p>Trips - 2239</p>
            </div>
            <div className="flex justify-start gap-4 align-center m-4">
              <img src={truck} />
              <p>Years - 2</p>
            </div>
          </div>
        </div>
        <div className="flex align-baseline justify-around bg-white gap-4 m-2 p-2 absolute bottom-0 right-12">
          <div className="flex align-bottom">
            <p className=" inline content-baseline text-black">Aishat Mudi</p>
          </div>
          <div>
            <img src={passenger} />
          </div>
        </div>
      </div>
      <div className="my-4">
        <div className="text-center m-4">
          <img src="exclamation.png" className="inline" />
          <p className="inline"> 15 mins away from pick up points</p>
        </div>
        <div className="text-center m-4">
          <button className="bg-blue-500 py-3 px-8 text-white rounded-[10px]">
            Hide details
          </button>
        </div>
      </div>
    </section>
  )
}
export default PageTwo
