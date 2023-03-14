import React, { useRef } from "react"
import EmailJSResponseStatus from "@emailjs/browser"

function ContactForm() {
  const form = useRef(null)

  const sendEmail = (e: Event) => {
    e.preventDefault()

    const currentForm = form.current as unknown as string | HTMLFormElement

    EmailJSResponseStatus.sendForm(
      process.env.NEXT_PUBLIC_SERVICE_ID as string,
      process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
      currentForm,
      process.env.NEXT_PUBLIC_EMAIL_KEY as string
    )
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full lg:w-1/2 bg-[#191919] py-5 rounded-md">
      <form
        className="flex flex-col gap-4 w-full"
        ref={form}
        onSubmit={(e) => sendEmail(e as unknown as Event)}
      >
        <input
          className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
          placeholder="Your name here"
          name="user_name"
          type="text"
        />
        <input
          className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
          placeholder="You email here"
          name="user_email"
          type="email"
        />
        <input
          className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md"
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <textarea
          className="w-11/12 mx-auto bg-[#050505] py-2 px-4 rounded-md h-full lg:min-h-[16rem]"
          name="message"
          placeholder="Enter your message here"
        />
        <button
          className="text-center border border-[#481380] text-[#481380] w-[10rem] py-2 mx-auto"
          type="submit"
        >
          Send!
        </button>
      </form>
    </div>
  )
}

export default ContactForm
