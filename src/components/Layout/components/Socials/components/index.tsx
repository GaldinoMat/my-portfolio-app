import { InfoType } from "@/components/typings/types"
import Image from "next/image"

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
