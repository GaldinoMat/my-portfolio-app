import Desktop from "public/desktop-icon.svg"
import Card from "../Card"

function ServicesList() {
  return (
    <div className="flex flex-col gap-6">
      <h4 className="text-5xl text-center font-medium">
        My <span className="text-[#481380]">services</span>
      </h4>
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6">
        <Card
          logoSource={Desktop}
          text="Front-end development"
          alt="desktop-icon"
        />
        <Card
          logoSource={Desktop}
          text="E-commerce Development"
          alt="ecommerce-icon"
        />
        <Card
          logoSource={Desktop}
          text="Game Development"
          alt="joystick-icon"
        />
      </div>
    </div>
  )
}

export default ServicesList