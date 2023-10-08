import Button from '../Button'
import DriverDetails from './DriverDetails'

const SosDriver = ({ showDriver, showDriverDetails }) => {
  const onClick = () => {
    showDriver()
  }
  return (
    <section className="px-14 py-12">
      <div className="text-primarytext">
        <h1 className="text-4xl font-bold">
          Hello. <span className="font-normal"> Dayo!</span>
        </h1>
        <p className="text-xl mt-2 opacity-80">Good Morning</p>
      </div>
      <div>
        <div className="flex mt-10 items-center relative h-full">
          <div className="bg-red text-center z-10 w-[100px] h-[300px] rounded-[42px] red-box flex items-center justify-center">
            <div className="min-w-[100px]"></div>
          </div>
          <img src="fullmap.png" alt="map" className="-ml-6 z-10 flex-3 z-20" />
          <div className="top-0 bottom-0 left-1/2 right-1/2 z-20 absolute">
            {showDriverDetails && <DriverDetails />}
          </div>
        </div>
      </div>

      <div className="text-center m-4">
        <img src="exclamation.png" className="inline" />
        <p className="inline"> The driver is 15 mins away to you</p>
      </div>
      <div className="text-center m-4">
        <Button
          className="bg-blue-500 py-3 px-8 text-white rounded-[10px]"
          text={
            showDriverDetails
              ? 'Hide Driver details'
              : 'click to show Driver details'
          }
          onClick={onClick}
        />
      </div>
    </section>
  )
}
export default SosDriver
