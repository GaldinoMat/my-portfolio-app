import LinkedinLogo from "public/linkedin-logo.svg"
import GithubLogo from "public/github-icon.svg"
import InstagramLogo from "public/instagram-logo.svg"
import SocialLink from "./components"

function Socials() {
  return (
    <section className="w-full py-4 lg:p-14 bg-[#101010] fixed lg:z-20 lg:left-0 lg:h-full lg:w-auto lg:top-0 bottom-0">
      <div className="max-w-xs mx-auto flex lg:flex-col items-center justify-between lg:justify-center lg:gap-10 lg:h-full">
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
    </section>
  )
}

export default Socials
