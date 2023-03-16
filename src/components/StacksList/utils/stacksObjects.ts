import JavascriptIcon from "public/javascript-svgrepo-com.svg"
import TypescriptIcon from "public/typescript-icon-svgrepo-com.svg"
import CSharpIcon from "public/csharp-svgrepo-com.svg"
import ReactIcon from "public/react-fill-svgrepo-com.svg"
import NextIcon from "public/nextjs-fill-svgrepo-com.svg"
import TailwindIcon from "public/tailwind-svgrepo-com.svg"
import DotNetIcon from "public/dotnet-svgrepo-com.svg"
import SassIcon from "public/sass-svgrepo-com.svg"
import GraphQlIcon from "public/graphql-svgrepo-com.svg"
import JestIcon from "public/jest-svgrepo-com.svg"
import ReduxIcon from "public/redux-svgrepo-com.svg"
import ViteIcon from "public/vitejs-svgrepo-com.svg"
import NodeIcon from "public/nodejs-icon-svgrepo-com.svg"
import MongoIcon from "public/mongo-svgrepo-com.svg"
import UnityIcon from "public/unity-svgrepo-com.svg"
import UnrealIcon from "public/unreal-engine-svgrepo-com.svg"

const languages = [
  {
    logoSource: JavascriptIcon,
    title: "Javascript",
    subtitle: "Popular scripting language used for web development and beyond.",
    alt: "javascript-icon",
  },
  {
    logoSource: TypescriptIcon,
    title: "Typescript",
    subtitle:
      "Superset of JavaScript with added type annotations for enhanced reliability.",

    alt: "typescript-icon",
  },
  {
    logoSource: CSharpIcon,
    title: "C#",
    subtitle:
      "Object-oriented programming language used to build Windows desktop and web applications.",

    alt: "csharp-icon",
  },
]
const frameworks = [
  {
    logoSource: ReactIcon,
    title: "React.js",
    subtitle:
      "JavaScript library used to build dynamic and interactive user interfaces.",

    alt: "react.js-icon",
  },
  {
    logoSource: NextIcon,
    title: "Next.js",
    subtitle:
      "Framework built on top of React for server-side rendering and static site generation.",

    alt: "next.js-icon",
  },
  {
    logoSource: TailwindIcon,
    title: "Tailwind",
    subtitle: " Utility-first CSS framework for rapid UI development.",

    alt: "tailwind-icon",
  },
  {
    logoSource: DotNetIcon,
    title: ".NET",
    subtitle:
      "Framework for building Windows desktop and web applications, using C# and other languages.",

    alt: ".NET-icon",
  },
]
const frontend = [
  {
    logoSource: SassIcon,
    title: "Sass/Less",
    subtitle:
      "CSS pre-processors that add functionality and efficiency to stylesheet authoring.",

    alt: "sass/less-icon",
  },
  {
    logoSource: GraphQlIcon,
    title: "GraphQL (Apollo)",
    subtitle:
      "Client-side library for using GraphQL in JavaScript applications.",

    alt: "graphQL-icon",
  },
  {
    logoSource: JestIcon,
    title: "Jest/React Testing Library",
    subtitle:
      "JavaScript testing frameworks for testing React components and applications.",

    alt: "jest-icon",
  },
  {
    logoSource: ReduxIcon,
    title: "Redux",
    subtitle:
      "Predictable state container for JavaScript apps, making state management more organized and maintainable.",

    alt: "redux-icon",
  },
  {
    logoSource: ViteIcon,
    title: "Bundlers (Vite/Webpack)",
    subtitle:
      "Tools that bundle, optimize and transform JavaScript and CSS assets for use in the browser.",

    alt: "vite-icon",
  },
]
const backend = [
  {
    logoSource: NodeIcon,
    title: "Node",
    subtitle:
      "JavaScript runtime for building scalable server-side applications.",

    alt: "node-icon",
  },
  {
    logoSource: GraphQlIcon,
    title: "GraphQL (Apollo)",
    subtitle:
      "Server-side library for implementing GraphQL APIs in JavaScript applications.",

    alt: "graphQL-icon",
  },
  {
    logoSource: MongoIcon,
    title: "MongoDB",
    subtitle:
      "Document-based NoSQL database used for storing and retrieving large amounts of data in real-time.",

    alt: "mongoDB-icon",
  },
]
const gamedev = [
  {
    logoSource: UnityIcon,
    title: "Unity",
    subtitle:
      "Cross-platform game engine for building 2D and 3D games for desktop, mobile, and console platforms.",

    alt: "unity-icon",
  },
  {
    logoSource: UnrealIcon,
    title: "Unreal",
    subtitle:
      "Game engine used for developing high-fidelity 3D games with advanced graphics and physics simulations.",

    alt: "unreal-icon",
  },
]

const stacks = {
  languages,
  frameworks,
  frontend,
  backend,
  gamedev,
}

export default stacks
