import React from "react"
import ContactBox from "./components/ContactBox"
import ContactForm from "./components/ContactForm"

function ContactSection() {
  return (
    <div className="flex h-full flex-col gap-6 justify-self-center lg:flex-row lg:items-center lg:justify-between">
      <ContactBox />
      <ContactForm />
    </div>
  )
}

export default ContactSection
