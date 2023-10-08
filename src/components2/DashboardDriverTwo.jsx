import { NavLink } from 'react-router-dom'
const DashboardDriverTwo = () => {
  return (
    <section className="px-14 py-12">
      <div className="text-primarytext">
        <h1 className="text-4xl font-bold">
          Hello. <span className="font-normal"> Dayo!</span>
        </h1>
        <p className="text-xl mt-2 opacity-80">Good Morning</p>
      </div>

      <div className="flex mt-10 items-center">
        <div className="bg-green-800 text-center z-20 w-[413px] h-[413px] rounded-[42px]  flex items-center justify-center">
          <NavLink to="../take-ride">
            <div className="text-white mx-auto max-w-[193px]">
              <img src="sos.png" alt="sos" className="mx-auto mb-2" />
              <p className="italic uppercase text-4xl mb-2"> sos</p>
              <p className="font-normal text-lg">Accept pick up request</p>
            </div>
          </NavLink>
        </div>

        <img src="map.png" alt="map" className="-ml-6 z-10" />
      </div>
      <div className="m-8 text-center">
        <button className="bg-red py-3 px-8 text-white rounded-[10px]">
          Decline Request
        </button>
      </div>
    </section>
  )
}
export default DashboardDriverTwo
