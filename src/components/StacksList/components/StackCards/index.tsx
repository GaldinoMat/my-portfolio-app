import Card from "@/components/Card"
import React from "react"
import { InfoCardType } from "@/components/typings/types"
import { StackCardsType } from "./typings/types"

function StackCards({ cardsInfo }: StackCardsType) {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-wrap lg:w-2/3 gap-6">
      {cardsInfo.map((cardInfo: InfoCardType) => (
        <Card
          key={cardInfo.alt}
          logoSource={cardInfo.logoSource}
          text={cardInfo.text}
          alt={cardInfo.alt}
        />
      ))}
    </div>
  )
}

export default StackCards
