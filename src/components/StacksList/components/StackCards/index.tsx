import Card from "@/components/Card"
import React from "react"
import { InfoCardType } from "@/components/typings/types"

type StackCardsType = {
  cardsInfo: InfoCardType[]
}

function StackCards({ cardsInfo }: StackCardsType) {
  return (
    <div className="flex flex-col gap-6">
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
