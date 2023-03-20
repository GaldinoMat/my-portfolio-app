import { useLocale } from "@/hooks/useLocale"
import Desktop from "public/desktop-icon.svg"
import Card from "../Card"
import CTAButton from "../CTAButton"

function ServicesList() {
  const { messages } = useLocale()

  return (
    <div className="-mt-20 flex w-full flex-col gap-6 lg:gap-10">
      <div className="flex flex-col gap-6 md:flex-row md:flex-wrap md:justify-center lg:justify-between">
        <Card
          first
          logoSource={Desktop}
          title={messages.Home?.serviceCardTitle1}
          subtitle={messages.Home?.serviceCardSubtitle1}
          alt="desktop-icon"
        />
        <Card
          logoSource={Desktop}
          title={messages.Home?.serviceCardTitle2}
          subtitle={messages.Home?.serviceCardSubtitle2}
          alt="ecommerce-icon"
        />
        <Card
          logoSource={Desktop}
          title={messages.Home?.serviceCardTitle3}
          subtitle={messages.Home?.serviceCardSubtitle3}
          alt="joystick-icon"
        />
      </div>
      <CTAButton text={messages.Home?.servicesCTA} href="/portfolio" />
    </div>
  )
}

export default ServicesList
