type StackToggleType = {
  handleTabChange: (e: Event) => void
  id: string
  selectedTab: string
}

function StackToggle({ handleTabChange, id, selectedTab }: StackToggleType) {
  return (
    <li className="text-center w-full">
      <button
        id={id}
        type="button"
        className={`w-full py-4 rounded-lg transition-all ${
          id.toLowerCase() === selectedTab.toLowerCase()
            ? "bg-[#A6A6A6] text-black"
            : "text-white"
        }`}
        onClick={(e) => handleTabChange(e as unknown as Event)}
      >
        {id}
      </button>
    </li>
  )
}

export default StackToggle
