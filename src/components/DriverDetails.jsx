import driver from '../Images/driver.png'
import car from '../Images/car-icon.png'
import trip from '../Images/bx_trip.png'
import star from '../Images/star-icon.png'
import truck from '../Images/truck-driver.png'
const DriverDetails = () => {
  return (
    <section className="bg-white p-8 ">
      <div className="w-80 pt-4 bg-white ">
        <div className="flex align-text-bottom justify-around bg-white gap-4 m-4">
          <div className="flex align-bottom">
            <p className=" inline content-baseline text-white">Dele Jimmy</p>
          </div>
          <img src={driver} />
        </div>
        <div className="bg-white">
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
    </section>
  )
}
export default DriverDetails
