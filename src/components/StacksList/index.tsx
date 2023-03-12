import { useEffect, useState } from "react"
import StackToggle from "./components/StackToggle"
import StackCards from "./components/StackCards"
import stacks from "./utils/stacksObjects"

function StacksList() {
  const [selectedTab, setSelectedTab] = useState("languages")
  const [selectedStack, setSelectedStack] = useState(stacks.languages)
  const handleTabChange = (event: Event) => {
    const { target } = event

    if (target) setSelectedTab((target as HTMLButtonElement).id)
  }

  useEffect(() => {
    const selectedIndex = Object.keys(stacks).indexOf(selectedTab.toLowerCase())

    setSelectedStack(Object.values(stacks)[selectedIndex])
  }, [selectedTab])

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-5xl text-center font-medium">
        <span className="text-[#481380]">My</span> stacks
      </h4>
      <div className="bg-[#191919] text-center rounded-lg">
        <ul className="flex flex-col items-center">
          <StackToggle id="Languages" handleTabChange={handleTabChange} />
          <StackToggle id="Frameworks" handleTabChange={handleTabChange} />
          <StackToggle id="FrontEnd" handleTabChange={handleTabChange} />
          <StackToggle id="BackEnd" handleTabChange={handleTabChange} />
          <StackToggle id="GameDev" handleTabChange={handleTabChange} />
        </ul>
      </div>
      <StackCards cardsInfo={selectedStack} />
    </div>
  )
}

export default StacksList
