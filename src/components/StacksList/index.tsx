import { useState } from "react"
import StackToggle from "./components/StackToggle"

function StacksList() {
  const [selectedTab, setSelectedTab] = useState("Languages")

  const handleTabChange = (event: Event) => {
    const { target } = event

    if (target) setSelectedTab((target as HTMLButtonElement).id)
  }

  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-5xl text-center font-medium">
        <span className="text-[#481380]">My</span> stacks
      </h4>
      <div className="bg-[#191919] text-center rounded-lg">
        <ul className="flex flex-col items-center">
          <StackToggle id="Languages" handleTabChange={handleTabChange} />
          <StackToggle id="Frameworks" handleTabChange={handleTabChange} />
          <StackToggle id="Front-end" handleTabChange={handleTabChange} />
          <StackToggle id="Back-end" handleTabChange={handleTabChange} />
          <StackToggle id="Game Dev" handleTabChange={handleTabChange} />
        </ul>
      </div>
      <div>
        <p>Javascript</p>
        <p>Typescript</p>
        <p>C#</p>
      </div>
      <div>
        <p>React.js</p>
        <p>Next.js</p>
        <p>Tailwind</p>
        <p>.NET</p>
      </div>
      <div>
        <p>GraphQL (Apollo)</p>
        <p>Jest/React Testing Library</p>
        <p>Redux</p>
        <p>Bundlers (Vite/Webpack)</p>
      </div>
      <div>
        <p>Node</p>
        <p>GraphQL (Apollo)</p>
      </div>
      <div>
        <p>Unity</p>
        <p>Unreal</p>
      </div>
    </div>
  )
}

export default StacksList
