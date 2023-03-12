type StackToggleType = {
  handleTabChange: (e: Event) => void
  id: string
}

function StackToggle({ handleTabChange, id }: StackToggleType) {
  return (
    <li className="text-center w-full">
      <button
        id={id}
        type="button"
        className="w-full py-4"
        onClick={(e) => handleTabChange(e as unknown as Event)}
      >
        {id}
      </button>
    </li>
  )
}

export default StackToggle
