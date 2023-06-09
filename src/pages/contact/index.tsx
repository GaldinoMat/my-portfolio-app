import React from "react"
import ContactSection from "@/components/ContactSection"
import "react-toastify/dist/ReactToastify.css"
import PageTitle from "@/components/PageTitle"
import Head from "next/head"
import JavascriptCode from "public/JavaScript-code.jpg"
import Image from "next/image"
import Layout from "@/components/Layout"
import { useLocale } from "@/hooks/useLocale"

function Contact() {
  const { messages } = useLocale()

  return (
    <>
      <Head>
        <title>Contact | Mateus Galdino</title>
        <meta
          name="description"
          content="Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis em Next.js e React. Confira meus projetos e cases de sucesso em e-commerce e outras tecnologias. Com habilidades em design, usabilidade e desenvolvimento web, eu posso ajudar a transformar suas ideias em realidade. Entre em contato e vamos trabalhar juntos!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="mx-auto flex w-full flex-col gap-8 px-8 pt-[74.7px] md:max-w-xl md:px-0 lg:max-w-5xl lg:gap-14">
          <PageTitle
            prefix={messages.Contact?.pageTitlePrefix}
            suffix={messages.Contact?.pageTitleSuffix}
            subtitleText={messages.Contact?.pageSubTitle}
          />
          <div className="flex flex-col gap-6 lg:gap-10">
            <div className="relative h-52 w-full overflow-hidden rounded-lg shadow-md lg:h-96">
              <Image
                src={JavascriptCode}
                fill
                priority
                sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
                alt="contact-me-image"
                className="rounded-lg transition-all hover:scale-105 focus:scale-105"
              />
            </div>
            <ContactSection />
          </div>
        </div>
      </Layout>
    </>
  )
}

export default Contact
