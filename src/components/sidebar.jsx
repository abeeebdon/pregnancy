import { NavLink } from 'react-router-dom'
const Sidebar = () => {
  return (
    <section className="w-80 bg-coolblue h-screen  px-5">
      <div className="profile flex flex-col items-center gap-11 mt-12">
        <img src="avatar.png" alt="avatar" className="w-36 h-36" />

        <nav className="bg-navyblue flex px-5 py-3 flex-col gap-8">
          <NavLink to="/">
            <div className="flex items-center w-[205px] gap-3">
              <img src="dashboard.png" alt="dashboard" className="w-6 h-6" />
              <span className="capitalize text-white text-2xl  font-sans">
                dashboard
              </span>
            </div>
          </NavLink>

          <ul className="flex flex-col items-start gap-[10px] pb-5 ">
            <NavLink to="sos">
              <li className="flex gap-3 items-center text-yellow">
                <span className="border bg-yellow w-[10px] h-[10px] rounded-[50%]"></span>
                SOS
              </li>
            </NavLink>
            <li className="flex gap-3 items-center text-white opacity-60 bg-opacity-100">
              <span className="border border-[#7F8081] w-[10px] h-[10px] rounded-[50%]"></span>
              profile
            </li>
          </ul>
        </nav>
      </div>
    </section>
  )
}

export default Sidebar
