import React from "react"
import ContactSection from "@/components/ContactSection"
import ContactTitle from "@/components/ContactTitle"

function Contact() {
  return (
    <div className="w-full h-full lg:h-screen py-20 px-8 flex flex-col gap-6 lg:max-w-7xl lg:mx-auto">
      <ContactTitle />
      <ContactSection />
    </div>
  )
}

export default Contact
