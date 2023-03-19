import Card from "@/components/Card"
import React from "react"
import { InfoCardType } from "@/components/typings/types"
import { AnimatePresence, motion } from "framer-motion"
import { StackCardsType } from "./typings/types"

function StackCards({ cardsInfo }: StackCardsType) {
  return (
    <AnimatePresence mode="wait" initial>
      <div className="flex flex-col lg:flex-row lg:flex-wrap lg:max-w-3xl gap-6">
        {cardsInfo?.map((cardInfo: InfoCardType) => (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              type: "spring",
              stiffness: 125,
              damping: 20,
            }}
            key={cardInfo.alt}
          >
            <Card
              logoSource={cardInfo.logoSource}
              title={cardInfo.title}
              subtitle={cardInfo.subtitle}
              alt={cardInfo.alt}
              stackCard
            />
          </motion.div>
        ))}
      </div>
    </AnimatePresence>
  )
}

export default StackCards
