import LinkedinLogo from "public/linkedin-logo.svg"
import GithubLogo from "public/github-icon.svg"
import InstagramLogo from "public/instagram-logo.svg"
import SocialLink from "./components"

function Socials() {
  return (
    <section className="w-full py-4 lg:p-14 bg-onyx">
      <div className="max-w-[17rem] mx-auto flex items-center justify-between lg:justify-center lg:gap-10 lg:h-full">
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
