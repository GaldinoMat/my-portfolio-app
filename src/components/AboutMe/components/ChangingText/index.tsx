import { useLocale } from "@/hooks/useLocale"
import React, { useEffect, useMemo, useState } from "react"

function ChangingText() {
  const stacks = useMemo(() => ["web", "game", "Front-end"], [])
  const [selectedStack, setSelectedStack] = useState(stacks[0])
  const [typing, setTyping] = useState("isTyping")

  const [displayedStack, setDisplayedStack] = useState("")

  const { messages } = useLocale()

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
    <div>
      <p
        className="text-3xl lg:text-6xl font-medium"
        dangerouslySetInnerHTML={{ __html: messages.Home?.changingTitle }}
      />
    </div>
  )
}

export default ChangingText
