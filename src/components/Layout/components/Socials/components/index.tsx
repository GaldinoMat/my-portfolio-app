import Image from "next/image"
import { InfoType } from "./typings/types"

function SocialLink({ logoSource, alt, href }: InfoType) {
  return (
    <div className="w-6 h-6">
      <a href={href}>
        <Image src={logoSource} alt={alt} />
      </a>
    </div>
  )
}

export default SocialLink
