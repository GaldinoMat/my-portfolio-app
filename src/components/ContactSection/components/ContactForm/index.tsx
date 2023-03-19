import React, { useRef } from "react"
import EmailJSResponseStatus from "@emailjs/browser"
import { toast } from "react-toastify"
import { useLocale } from "@/hooks/useLocale"

interface IElement extends Element {
  value?: string
}

function ContactForm() {
  const { messages } = useLocale()

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
    <div className="flex w-full flex-col items-center justify-center gap-5 rounded-lg py-5 lg:w-1/2">
      <form
        className="flex w-full flex-col gap-4"
        ref={form}
        onSubmit={(e) => sendEmail(e as unknown as Event)}
      >
        <input
          className="mx-auto w-full rounded-md border border-[#8F8F8F] bg-transparent py-2 px-4 text-[#212121] placeholder:text-[#212121]  dark:border-slate-100 dark:text-slate-100 dark:placeholder:text-slate-100"
          placeholder={messages.Contact?.namePlaceholder}
          name="user_name"
          type="text"
          required
        />
        <input
          className="mx-auto w-full rounded-md border border-[#8F8F8F] bg-transparent py-2 px-4 text-[#212121] placeholder:text-[#212121] dark:border-slate-100 dark:text-slate-100 dark:placeholder:text-slate-100"
          placeholder={messages.Contact?.emailPlaceholder}
          name="user_email"
          type="email"
          required
        />
        <input
          className="mx-auto w-full rounded-md border border-[#8F8F8F] bg-transparent py-2 px-4 text-[#212121] placeholder:text-[#212121] dark:border-slate-100 dark:text-slate-100 dark:placeholder:text-slate-100"
          name="subject"
          placeholder={messages.Contact?.subjectPlaceholder}
          type="text"
          required
        />
        <textarea
          className="mx-auto min-h-[16rem] w-full rounded-md border border-[#8F8F8F] bg-transparent py-2 px-4 text-[#212121] placeholder:text-[#212121] dark:border-slate-100 dark:text-slate-100 dark:placeholder:text-slate-100 lg:min-h-[16rem]"
          name="message"
          placeholder={messages.Contact?.messagePlaceholder}
          required
        />
        <button
          className="mx-auto w-[10rem] rounded-md border border-[#8F8F8F] bg-transparent py-2 text-center text-[#212121] dark:border-slate-100 dark:text-slate-100"
          type="submit"
        >
          {messages.Contact?.buttonCTA}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
