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
    text: "Javascript",
    alt: "javascript-icon",
  },
  {
    logoSource: TypescriptIcon,
    text: "Typescript",
    alt: "typescript-icon",
  },
  {
    logoSource: CSharpIcon,
    text: "C#",
    alt: "csharp-icon",
  },
]
const frameworks = [
  {
    logoSource: ReactIcon,
    text: "React.js",
    alt: "react.js-icon",
  },
  {
    logoSource: NextIcon,
    text: "Next.js",
    alt: "next.js-icon",
  },
  {
    logoSource: TailwindIcon,
    text: "Tailwind",
    alt: "tailwind-icon",
  },
  {
    logoSource: DotNetIcon,
    text: ".NET",
    alt: ".NET-icon",
  },
]
const frontend = [
  {
    logoSource: SassIcon,
    text: "Sass/Less",
    alt: "sass/less-icon",
  },
  {
    logoSource: GraphQlIcon,
    text: "GraphQL (Apollo)",
    alt: "graphQL-icon",
  },
  {
    logoSource: JestIcon,
    text: "Jest/React Testing Library",
    alt: "jest-icon",
  },
  {
    logoSource: ReduxIcon,
    text: "Redux",
    alt: "redux-icon",
  },
  {
    logoSource: ViteIcon,
    text: "Bundlers (Vite/Webpack)",
    alt: "vite-icon",
  },
]
const backend = [
  {
    logoSource: NodeIcon,
    text: "Node",
    alt: "node-icon",
  },
  {
    logoSource: GraphQlIcon,
    text: "GraphQL (Apollo)",
    alt: "graphQL-icon",
  },
  {
    logoSource: MongoIcon,
    text: "MongoDB",
    alt: "mongoDB-icon",
  },
]
const gamedev = [
  {
    logoSource: UnityIcon,
    text: "Unity",
    alt: "unity-icon",
  },
  {
    logoSource: UnrealIcon,
    text: "Unreal",
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
