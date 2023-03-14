import PageTitle from "@/components/PageTitle"
import React from "react"

function ContactTitle() {
  return (
    <>
      <PageTitle prefix="Contact" suffix="me" />
      <div className="text-center">
        <p className="text-3xl font-normal">Send me an email!</p>
      </div>
    </>
  )
}

export default ContactTitle
