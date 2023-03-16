import LinkedinLogo from "public/linkedin-logo.svg"
import GithubLogo from "public/github-icon.svg"
import InstagramLogo from "public/instagram-logo.svg"
import Link from "next/link"
import SocialLink from "./components"

function Socials() {
  return (
    <section className="w-full p-6 flex flex-col gap-4 bg-[#212121] text-white text-silver">
      <div className="text-center flex justify-center gap-4">
        {["Home", "Portfolio", "Contact"].map((item) => (
          <Link
            href={`${item === "Home" ? "/" : item.toLowerCase()}`}
            key={item}
            className="text-base"
          >
            {item}
          </Link>
        ))}
      </div>
      <div className="lg:max-w-[17rem] flex justify-center mx-auto gap-4">
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
        <p>© 2023 Mateus Galdino | Made with Next.JS and TailwindCSS</p>
      </div>
    </section>
  )
}

export default Socials
