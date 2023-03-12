import AboutMe from "@/components/AboutMe"
import ServicesList from "@/components/ServicesList"
import StacksList from "@/components/StacksList"
import React from "react"

function About() {
  return (
    <div className="py-20 px-8 flex flex-col gap-8">
      <AboutMe />
      <ServicesList />
      <StacksList />
    </div>
  )
}

export default About
