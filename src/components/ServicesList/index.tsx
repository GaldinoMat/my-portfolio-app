import { useLocale } from "@/hooks/useLocale"
import Desktop from "public/desktop-icon.svg"
import Card from "../Card"
import CTAButton from "../CTAButton"

function ServicesList() {
  const { messages } = useLocale()

  return (
    <div className="flex flex-col gap-6 -mt-20 w-full">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
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
