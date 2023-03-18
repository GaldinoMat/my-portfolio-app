import { useLocale } from "@/hooks/useLocale"
import CTAButton from "../CTAButton"
import ChangingText from "./components/ChangingText"

function AboutMeHero() {
  const { messages } = useLocale()

  return (
    <div className="flex h-[28rem] bg-[#EAEAEA] dark:bg-[#212121] lg:h-[30rem] flex-col items-start justify-center w-full">
      <div className="w-full flex px-4 lg:px-2 flex-col items-start justify-center gap-4 lg:max-w-5xl lg:mx-auto">
        <div className="lg:w-[22rem]">
          <h2 className="text-lg lg:text-2xl lg:px-0 mt-5 font-medium">
            {messages.Home?.bannerIntro ?? ""}
            <span className="text-[#A6A6A6]"> Mateus</span> Galdino
          </h2>
        </div>
        <ChangingText />
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
