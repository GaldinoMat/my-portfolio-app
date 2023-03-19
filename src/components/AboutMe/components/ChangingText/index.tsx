import { useLocale } from "@/hooks/useLocale"
import React, { useEffect, useMemo, useState } from "react"
import { renderToStaticMarkup } from "react-dom/server"
import parse from "html-react-parser"

function ChangingText() {
  const { messages, locale } = useLocale()

  const stacks = useMemo(() => {
    return ["web", "e-commerce", "front-end"]
  }, [])

  const [selectedStack, setSelectedStack] = useState(stacks[0])
  const [typing, setTyping] = useState("isTyping")

  const [displayedStack, setDisplayedStack] = useState("")

  const spanElement = React.createElement(
    "span",
    {
      className: "text-[#A6A6A6] after:content-['|'] after:animate-blinking",
    },
    displayedStack
  )

  const changingTitle = messages.Home?.changingTitle
    ? parse(
        messages.Home?.changingTitle.replace(
          "{displayedStack}",
          renderToStaticMarkup(spanElement)
        )
      )
    : ""

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
  }, [displayedStack, locale, selectedStack, stacks, typing])

  return (
    <div>
      <p className="text-3xl font-medium lg:text-6xl">{changingTitle}</p>
    </div>
  )
}

export default ChangingText
