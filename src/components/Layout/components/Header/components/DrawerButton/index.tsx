import { DrawerType } from "../typings/types"

function DrawerButton({ isNavOpen, setIsNavOpen }: DrawerType) {
  return (
    <section className="flex items-center justify-end">
      <button
        type="button"
        className="group z-30 flex h-8 w-8 flex-col items-end justify-between py-[.375rem]"
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        <span
          className={`block h-[3px] bg-[#A6A6A6] transition-all group-hover:w-full group-hover:bg-[#292929] dark:bg-slate-300 dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen ? "w-full translate-y-[0.5rem] rotate-45" : "w-1/3"
          }`}
        />
        <span
          className={`block h-[3px] w-1/2 bg-[#A6A6A6] transition-all group-hover:w-full group-hover:bg-[#292929] dark:bg-slate-300 dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen && "opacity-0"
          }`}
        />
        <span
          className={`block h-[3px] w-full bg-[#A6A6A6] transition-all group-hover:w-full group-hover:bg-[#292929] dark:bg-slate-300 dark:group-hover:bg-[#A6A6A6] ${
            isNavOpen ? "-translate-y-[0.6rem] -rotate-45" : ""
          }`}
        />
      </button>
    </section>
  )
}

export default DrawerButton
