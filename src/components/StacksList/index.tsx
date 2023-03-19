import { useEffect, useState } from "react"
import { useLocale } from "@/hooks/useLocale"
import StackToggle from "./components/StackToggle"
import StackCards from "./components/StackCards"
import PageTitle from "../PageTitle"
import useStacksObjects from "./utils"

function StacksList() {
  const { messages } = useLocale()
  const list = useStacksObjects()
  const [selectedTab, setSelectedTab] = useState("Stacks")
  const [selectedStack, setSelectedStack] = useState(list.stacks)

  const handleTabChange = (event: Event) => {
    const { target } = event

    if (target) setSelectedTab((target as HTMLButtonElement).id)
  }

  useEffect(() => {
    const selectedIndex = Object.keys(list).indexOf(selectedTab.toLowerCase())

    setSelectedStack(Object.values(list)[selectedIndex])
  }, [selectedTab, list])

  return (
    <div className="flex flex-col gap-8 w-full">
      <PageTitle
        prefix={messages.Home?.homeStacksPrefix}
        suffix={messages.Home?.homeStacksSuffix}
      />
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="bg-[#212121] dark:bg-[#373737] shadow-md text-center rounded-lg lg:h-[17.5rem] lg:min-w-[20rem]">
          <ul className="flex flex-col items-center lg:h-auto w-full">
            <StackToggle
              id="Stacks"
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
              id="Engines"
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
