import Desktop from "public/desktop-icon.svg"
import Card from "../Card"
import CTAButton from "../CTAButton"

function ServicesList() {
  return (
    <div className="flex flex-col gap-6 -mt-20">
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <Card
          logoSource={Desktop}
          title="Front-end development"
          subtitle="Crafting visually appealing and intuitive user interfaces with React and Next.js."
          alt="desktop-icon"
        />
        <Card
          logoSource={Desktop}
          title="E-commerce Development"
          subtitle="Seamless online stores with secure payment and intuitive UX."
          alt="ecommerce-icon"
        />
        <Card
          logoSource={Desktop}
          title="Game Development"
          subtitle="Immersive experiences with engaging mechanics, graphics, and user interfaces."
          alt="joystick-icon"
        />
      </div>
      <CTAButton text="Check out my work!" href="/portfolio" />
    </div>
  )
}

export default ServicesList
