import Layout from "@/components/Layout"
import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { AnimatePresence } from "framer-motion"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component {...pageProps} />
      </AnimatePresence>
    </Layout>
  )
}
