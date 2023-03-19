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
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div className="w-full lg:max-w-5xl lg:mx-auto px-8 lg:px-0 flex flex-col gap-8 lg:gap-18 pt-[74.7px]">
          <PageTitle
            prefix={messages.Contact?.pageTitlePrefix}
            suffix={messages.Contact?.pageTitleSuffix}
            subtitleText={messages.Contact?.pageSubTitle}
          />
          <div className="w-full h-52 lg:h-96 relative overflow-hidden rounded-lg shadow-md">
            <Image
              src={JavascriptCode}
              fill
              priority
              sizes="(max-width: 768px) 100%,
              (max-width: 1200px) 100%,
              100%"
              alt="contact-me-image"
              className="focus:scale-105 hover:scale-105 transition-all rounded-lg"
            />
          </div>
          <ContactSection />
        </div>
      </Layout>
    </>
  )
}

export default Contact
