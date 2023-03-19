import { StackToggleType } from "./typings/type"

function StackToggle({ handleTabChange, id, selectedTab }: StackToggleType) {
  return (
    <li className="w-full text-center">
      <button
        id={id}
        type="button"
        className={`w-full rounded-lg py-4 transition-all ${
          id.toLowerCase() === selectedTab.toLowerCase()
            ? "bg-[#A6A6A6] text-black"
            : "text-slate-100"
        }`}
        onClick={(e) => handleTabChange(e as unknown as Event)}
      >
        {id}
      </button>
    </li>
  )
}

export default StackToggle
