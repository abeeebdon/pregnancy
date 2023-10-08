import passenger from '../Images/passenger.png'
const PassengerDetails = () => {
  return (
    <section className="bg-white p-8 z-20 absolute top-1/2 bottom-1 left-1/2  m-w-fit">
      <div className="flex align-baseline justify-around bg-white gap-4 m-2">
        <div className="flex align-bottom">
          <p className=" inline content-baseline text-black">Aishat Mudi</p>
        </div>
        <div>
          <img src={passenger} />
        </div>
      </div>
    </section>
  )
}
export default PassengerDetails
