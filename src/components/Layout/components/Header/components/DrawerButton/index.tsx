import { DrawerType } from "../typings/types"

function DrawerButton({ isNavOpen, setIsNavOpen }: DrawerType) {
  return (
    <section className="flex justify-end items-center">
      <button
        type="button"
        className="w-8 h-8 flex flex-col justify-between items-end py-[.375rem] z-30 group"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`block h-[3px] bg-[#A6A6A6] dark:bg-slate-300 transition-all group-hover:w-full group-hover:bg-[#292929] dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen ? "rotate-45 translate-y-[0.5rem] w-full" : "w-1/3"
          }`}
        />
        <span
          className={`block w-1/2 h-[3px] bg-[#A6A6A6] dark:bg-slate-300 transition-all group-hover:w-full group-hover:bg-[#292929] dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen && "opacity-0"
          }`}
        />
        <span
          className={`block w-full h-[3px] bg-[#A6A6A6] dark:bg-slate-300 transition-all group-hover:w-full group-hover:bg-[#292929] dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen ? "-rotate-45 -translate-y-[0.6rem]" : ""
          }`}
        />
      </button>
    </section>
  )
}

export default DrawerButton
