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
    <div className="flex items-center justify-center flex-col gap-5 w-full lg:w-1/2 py-5 rounded-lg">
      <form
        className="flex flex-col gap-4 w-full"
        ref={form}
        onSubmit={(e) => sendEmail(e as unknown as Event)}
      >
        <input
          className="w-full mx-auto border border-[#8F8F8F] dark:border-slate-100 text-[#212121] dark:text-slate-100 bg-transparent placeholder:text-[#212121] dark:placeholder:text-slate-100  py-2 px-4 rounded-md"
          placeholder="Your name here"
          name="user_name"
          type="text"
          required
        />
        <input
          className="w-full mx-auto border border-[#8F8F8F] dark:border-slate-100 text-[#212121] dark:text-slate-100 bg-transparent placeholder:text-[#212121] dark:placeholder:text-slate-100 py-2 px-4 rounded-md"
          placeholder="Your email here"
          name="user_email"
          type="email"
          required
        />
        <input
          className="w-full mx-auto border border-[#8F8F8F] dark:border-slate-100 text-[#212121] dark:text-slate-100 bg-transparent placeholder:text-[#212121] dark:placeholder:text-slate-100 py-2 px-4 rounded-md"
          name="subject"
          placeholder="Subject"
          type="text"
          required
        />
        <textarea
          className="w-full mx-auto border border-[#8F8F8F] dark:border-slate-100 text-[#212121] dark:text-slate-100 bg-transparent placeholder:text-[#212121] dark:placeholder:text-slate-100 py-2 px-4 rounded-md min-h-[16rem] lg:min-h-[16rem]"
          name="message"
          placeholder="Enter your message here"
          required
        />
        <button
          className="text-center border border-[#8F8F8F] dark:border-slate-100 text-[#212121] dark:text-slate-100 bg-transparent w-[10rem] py-2 mx-auto rounded-md"
          type="submit"
        >
          Send!
        </button>
      </form>
    </div>
  )
}

export default ContactForm
