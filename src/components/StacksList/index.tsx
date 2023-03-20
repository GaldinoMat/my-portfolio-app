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
    <div className="flex w-full flex-col gap-6 lg:gap-10">
      <PageTitle
        prefix={messages.Home?.homeStacksPrefix}
        suffix={messages.Home?.homeStacksSuffix}
      />
      <div className="flex flex-col gap-6 lg:flex-row">
        <div className="rounded-lg bg-[#212121] text-center shadow-md dark:bg-[#373737] lg:h-[17.5rem] lg:min-w-[20rem]">
          <ul className="flex w-full flex-col items-center lg:h-auto">
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
