import Button from '../Button'
import PassengerDetails from './PassengerDetails'

const DriverThree = ({ showPassenger, showPassengerDetails }) => {
  const onClick = () => {
    showPassenger()
  }
  return (
    <section className="px-14 py-12">
      <div className="text-primarytext">
        <h1 className="text-4xl font-bold">
          Hello. <span className="font-normal"> Dayo!</span>
        </h1>
        <p className="text-xl mt-2 opacity-80">Good Morning</p>
      </div>

      <div className="flex mt-10 items-center relative">
        <div className="bg-green-800 text-center z-0 w-[100px] h-[413px] rounded-[42px] red-box flex items-center justify-center">
          <div className="text-white mx-auto max-w-[193px]"></div>
        </div>

        <img src="fullmap.png" alt="map" className="-ml-6 z-20" />
        <div>{showPassengerDetails && <PassengerDetails />}</div>
      </div>
      <div className="text-center m-4">
        <img src="exclamation.png" className="inline" />
        <p className="inline"> 15 minutes away from pick up point</p>
      </div>
      <div className="text-center m-4">
        <Button
          className="bg-blue-500 py-3 px-8 text-white rounded-[10px]"
          text={
            showPassengerDetails
              ? 'Hide passenger details'
              : 'click to show passenger details'
          }
          onClick={onClick}
        />
      </div>
    </section>
  )
}
export default DriverThree
