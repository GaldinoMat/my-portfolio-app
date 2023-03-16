import { useEffect, useMemo, useState } from "react"
import CTAButton from "../CTAButton"

function AboutMeHero() {
  const stacks = useMemo(() => ["web", "game", "Front-end"], [])
  const [selectedStack, setSelectedStack] = useState(stacks[0])
  const [typing, setTyping] = useState("isTyping")

  const [displayedStack, setDisplayedStack] = useState("")

  const sleep = (ms: number) =>
    new Promise((resolve) => {
      setTimeout(resolve, ms)
    })

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (typing === "isTyping" && displayedStack !== selectedStack) {
        setDisplayedStack(selectedStack.slice(0, displayedStack.length + 1))
      } else if (displayedStack === selectedStack && typing === "isTyping") {
        sleep(2000).then(() => {
          setTyping("isDeleting")
        })
      } else if (
        (displayedStack === selectedStack && typing === "isDeleting") ||
        typing === "isDeleting"
      ) {
        setDisplayedStack(selectedStack.slice(0, displayedStack.length - 1))

        if (displayedStack.length <= 1) {
          setTyping("isTyping")
          setSelectedStack(
            selectedStack === stacks[stacks.length - 1]
              ? stacks[0]
              : stacks[stacks.indexOf(selectedStack) + 1]
          )
        }
      }
    }, 150)
    return () => clearTimeout(timeout)
  }, [displayedStack, selectedStack, stacks, typing])

  return (
    <div className="flex h-[28rem] bg-[#EAEAEA] dark:bg-[#212121] lg:h-[30rem] flex-col items-start justify-center w-full">
      <div className="w-full flex px-4 lg:px-2 flex-col items-start justify-center gap-4 lg:max-w-5xl lg:mx-auto">
        <div className="lg:w-[22rem]">
          <h2 className="text-lg lg:text-2xl lg:px-0 mt-5 font-medium">
            Hello, I am
            <span className="text-[#A6A6A6]"> Mateus</span> Galdino
          </h2>
        </div>
        <div>
          <p className="text-3xl lg:text-6xl font-medium">
            A{" "}
            <span className="text-[#A6A6A6] after:content-['|'] after:animate-blinking">
              {displayedStack}
            </span>
            developer
          </p>
        </div>
        <div className="flex flex-col gap-3 lg:max-w-lg">
          <p className="text-sm lg:text-base font-medium">Hello and welcome!</p>
          <p className="text-sm lg:text-base font-medium">
            With a passion for front-end development, e-commerce solutions, and
            immersive gaming experiences, I strive to create memorable and
            engaging digital solutions.
          </p>
          <p className="text-sm lg:text-base font-medium">
            Let&apos;s collaborate to bring your project to life!
          </p>
        </div>
        <CTAButton text="Let's talk!" href="/contact" />
      </div>
    </div>
  )
}

export default AboutMeHero
