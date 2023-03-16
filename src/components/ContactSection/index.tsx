import React from "react"
import ContactBox from "./components/ContactBox"
import ContactForm from "./components/ContactForm"

function ContactSection() {
  return (
    <div className="flex flex-col h-full lg:flex-row lg:items-center lg:justify-between gap-6 justify-self-center">
      <ContactBox />
      <ContactForm />
    </div>
  )
}

export default ContactSection
