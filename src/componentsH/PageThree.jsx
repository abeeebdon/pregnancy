const PageThree = () => {
  return (
    <section className="px-14 py-12 w-full">
      <div className="flex justify-between">
        <div className="text-primarytext">
          <h1 className="text-4xl font-bold">
            Hello. <span className="font-normal"> Dayo!</span>
          </h1>
          <p className="text-xl mt-2 opacity-80">Good Morning</p>
        </div>
        <div>
          <button className="border-solid border-2 border-black rounded-lg px-8 py-4">
            Edit Profile
          </button>
        </div>
      </div>
      <form className="grid grid-cols-2 gap-6 my-8 max-w-lg">
        <div>
          <label className="block my-1">First name</label>
          <input
            type="text"
            placeholder="Robert"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">Last name</label>
          <input
            type="text"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">Gender</label>
          <input
            type="text"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">Date of birth</label>
          <input
            type="text"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">E-mail address</label>
          <input
            type="e-mail"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">Phone Number</label>
          <input
            type="number"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">Place of residence</label>
          <input
            type="e-mail"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
        <div>
          <label className="block my-1">State of residence</label>
          <input
            type="e-mail"
            placeholder="Miguel"
            className="p-3 bg-[#EEEEEE] rounded-lg"
          />
        </div>
      </form>
    </section>
  )
}
export default PageThree
