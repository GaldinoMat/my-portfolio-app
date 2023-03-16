import React from "react"
import ContactSection from "@/components/ContactSection"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import PageTitle from "@/components/PageTitle"

function Contact() {
  return (
    <div className="w-full h-full lg:h-screen py-20 px-8 flex flex-col gap-6 lg:max-w-7xl lg:mx-auto">
      <PageTitle
        prefix="Contact"
        suffix="me."
        subtitleText="Send me an email!"
      />
      <ContactSection />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="dark"
      />
    </div>
  )
}

export default Contact
