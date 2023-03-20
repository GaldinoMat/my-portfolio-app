import { useLocale } from "@/hooks/useLocale"
import CTAButton from "../CTAButton"
import ChangingText from "./components/ChangingText"

function AboutMeHero() {
  const { messages } = useLocale()

  return (
    <div className="flex h-[28rem] w-full flex-col items-start justify-center bg-[#EAEAEA] dark:bg-[#212121] lg:h-[40rem]">
      <div className="mx-auto flex w-full flex-col items-start justify-center gap-4 px-4 md:max-w-xl lg:max-w-5xl lg:px-2">
        <div className="lg:w-[22rem]">
          <h2 className="mt-5 text-lg font-medium lg:px-0 lg:text-2xl">
            {messages.Home?.bannerIntro}
            <span className="text-[#A6A6A6]"> Mateus</span> Galdino
          </h2>
        </div>
        <ChangingText />
        <div className="flex flex-col gap-3 lg:max-w-lg">
          <p className="text-sm font-medium lg:text-base">
            {messages.Home?.intro}
          </p>
          <p className="text-sm font-medium lg:text-base">
            {messages.Home?.bannerDisclaimer}
          </p>
          <p className="text-sm font-medium lg:text-base">
            {messages.Home?.collaborationDisclaimer}
          </p>
        </div>
        <CTAButton text={messages.Home?.contactCTA} href="/contact" />
      </div>
    </div>
  )
}

export default AboutMeHero
