import { DrawerType } from "../typings/types"

function DrawerButton({ isNavOpen, setIsNavOpen }: DrawerType) {
  return (
    <section className="w-full lg:max-w-7xl lg:mx-auto flex justify-end items-center lg:px-8">
      <button
        type="button"
        className="w-12 h-8 flex flex-col justify-between items-end py-[6px] z-20 group"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`block h-[2px] bg-[#A7A7A7] transition-all group-hover:w-full group-hover:bg-white ${
            isNavOpen ? "rotate-45 translate-y-[0.65rem] w-full" : "w-1/2"
          }`}
        />
        <span
          className={`block w-3/4 h-[2px] bg-[#A7A7A7] transition-all group-hover:w-full group-hover:bg-white ${
            isNavOpen && "opacity-0"
          }`}
        />
        <span
          className={`block w-4/5 h-[2px] bg-[#A7A7A7] transition-all group-hover:w-full group-hover:bg-white ${
            isNavOpen ? "-rotate-45 -translate-y-[0.5rem]" : ""
          }`}
        />
      </button>
    </section>
  )
}

export default DrawerButton
