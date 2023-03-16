import React, { useRef } from "react"
import EmailJSResponseStatus from "@emailjs/browser"
import { toast } from "react-toastify"

interface IElement extends Element {
  value?: string
}

function ContactForm() {
  const form = useRef<HTMLFormElement>(null)

  const sendEmail = (e: Event) => {
    e.preventDefault()

    toast
      .promise(
        EmailJSResponseStatus.sendForm(
          process.env.NEXT_PUBLIC_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
          form.current as HTMLFormElement,
          process.env.NEXT_PUBLIC_EMAIL_KEY as string
        ),
        {
          pending: "Sending e-mail...",
          success: "Email sent! 👌",
          error: "Oops! Something went wrong! 🤯",
        }
      )
      .then(() => {
        if (form.current) {
          Array.from(form.current.children).forEach((element: IElement) => {
            element.value = ""
          })
        }
      })
  }

  return (
    <div className="flex items-center justify-center flex-col gap-5 w-full lg:w-1/2 bg-onyx shadow-md shadow-blue-munsell py-5 rounded-lg">
      <form
        className="flex flex-col gap-4 w-full"
        ref={form}
        onSubmit={(e) => sendEmail(e as unknown as Event)}
      >
        <input
          className="w-11/12 mx-auto bg-silver text-onyx placeholder:text-onyx py-2 px-4 rounded-lg"
          placeholder="Your name here"
          name="user_name"
          type="text"
        />
        <input
          className="w-11/12 mx-auto bg-silver text-onyx placeholder:text-onyx py-2 px-4 rounded-lg"
          placeholder="You email here"
          name="user_email"
          type="email"
        />
        <input
          className="w-11/12 mx-auto bg-silver text-onyx placeholder:text-onyx py-2 px-4 rounded-lg"
          name="subject"
          placeholder="Subject"
          type="text"
        />
        <textarea
          className="w-11/12 mx-auto bg-silver text-onyx placeholder:text-onyx py-2 px-4 rounded-lg min-h-[16rem] lg:min-h-[16rem]"
          name="message"
          placeholder="Enter your message here"
        />
        <button
          className="text-center border border-silver text-silver w-[10rem] py-2 mx-auto"
          type="submit"
        >
          Send!
        </button>
      </form>
    </div>
  )
}

export default ContactForm
