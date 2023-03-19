import Image from "next/image"
import { InfoType } from "./typings/types"

function SocialLink({ logoSource, alt, href }: InfoType) {
  return (
    <div className="h-6 w-6">
      <a href={href}>
        <Image src={logoSource} alt={alt} />
      </a>
    </div>
  )
}

export default SocialLink
