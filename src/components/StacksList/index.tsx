import { useEffect, useState } from "react"
import StackToggle from "./components/StackToggle"
import StackCards from "./components/StackCards"
import stacks from "./utils/stacksObjects"
import PageTitle from "../PageTitle"

function StacksList() {
  const [selectedTab, setSelectedTab] = useState("Languages")
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
    <div className="flex flex-col gap-8 w-full">
      <PageTitle prefix="My" suffix="stacks." />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-[#212121] dark:bg-[#373737] shadow-md text-center rounded-lg lg:h-[17.5rem] lg:min-w-[20rem]">
          <ul className="flex flex-col items-center lg:h-auto w-full">
            <StackToggle
              id="Languages"
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
            />
            <StackToggle
              id="Frameworks"
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
            />
            <StackToggle
              id="FrontEnd"
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
            />
            <StackToggle
              id="BackEnd"
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
            />
            <StackToggle
              id="GameDev"
              handleTabChange={handleTabChange}
              selectedTab={selectedTab}
            />
          </ul>
        </div>
        <StackCards cardsInfo={selectedStack} />
      </div>
    </div>
  )
}

export default StacksList
