import LinkedinLogo from "public/linkedin-logo.svg"
import GithubLogo from "public/github-icon.svg"
import InstagramLogo from "public/instagram-logo.svg"
import Link from "next/link"
import { useLocale } from "@/hooks/useLocale"
import SocialLink from "./components"

function Socials() {
  const { messages } = useLocale()

  return (
    <section className="flex w-full flex-col gap-4 bg-[#212121] p-6 text-slate-100">
      <div className="flex justify-center gap-4 text-center">
        {[
          ["Home", "/"],
          [messages.Navigation?.navPortfolio, "portfolio"],
          [messages.Navigation?.navContact, "contact"],
        ].map(([title, url]) => (
          <Link href={url} key={url} className="text-base">
            {title}
          </Link>
        ))}
      </div>
      <div className="mx-auto flex justify-center gap-4 lg:max-w-[17rem]">
        <SocialLink
          alt="linkedin-icon"
          href="https://www.linkedin.com/in/mateus-galdino-silva/"
          logoSource={LinkedinLogo}
        />
        <SocialLink
          alt="github-icon"
          href="https://github.com/GaldinoMat"
          logoSource={GithubLogo}
        />
        <SocialLink alt="instagram-icon" href="/" logoSource={InstagramLogo} />
      </div>
      <div className="text-center">
        <p>© 2023 Mateus Galdino | {messages.Socials?.socialsCopyright}</p>
      </div>
    </section>
  )
}

export default Socials
