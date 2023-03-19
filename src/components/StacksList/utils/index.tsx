import { useMemo } from "react"
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
import { useLocale } from "@/hooks/useLocale"

function useStacksObjects() {
  const { messages } = useLocale()

  return useMemo(() => {
    return {
      stacks: [
        {
          logoSource: JavascriptIcon,
          title: "Javascript",
          subtitle: messages.Home?.languageSubtitle1,
          alt: "javascript-icon",
        },
        {
          logoSource: TypescriptIcon,
          title: "Typescript",
          subtitle: messages.Home?.languageSubtitle2,
          alt: "typescript-icon",
        },
        {
          logoSource: CSharpIcon,
          title: "C#",
          subtitle: messages.Home?.languageSubtitle3,
          alt: "csharp-icon",
        },
      ],
      frameworks: [
        {
          logoSource: ReactIcon,
          title: "React.js",
          subtitle: messages.Home?.frameworkSubtitle1,
          alt: "react.js-icon",
        },
        {
          logoSource: NextIcon,
          title: "Next.js",
          subtitle: messages.Home?.frameworkSubtitle2,
          alt: "next.js-icon",
        },
        {
          logoSource: TailwindIcon,
          title: "Tailwind",
          subtitle: messages.Home?.frameworkSubtitle3,
          alt: "tailwind-icon",
        },
        {
          logoSource: DotNetIcon,
          title: ".NET",
          subtitle: messages.Home?.frameworkSubtitle4,
          alt: ".NET-icon",
        },
      ],
      frontend: [
        {
          logoSource: SassIcon,
          title: "Sass/Less",
          subtitle: messages.Home?.frontEndSubtitle1,
          alt: "sass/less-icon",
        },
        {
          logoSource: GraphQlIcon,
          title: "GraphQL (Apollo Client)",
          subtitle: messages.Home?.frontEndSubtitle2,
          alt: "graphQL-icon",
        },
        {
          logoSource: JestIcon,
          title: "Jest/React Testing Library",
          subtitle: messages.Home?.frontEndSubtitle3,
          alt: "jest-icon",
        },
        {
          logoSource: ReduxIcon,
          title: "Redux",
          subtitle: messages.Home?.frontEndSubtitle4,
          alt: "redux-icon",
        },
        {
          logoSource: ViteIcon,
          title: "Bundlers (Vite/Webpack)",
          subtitle: messages.Home?.frontEndSubtitle5,
          alt: "vite-icon",
        },
      ],
      backend: [
        {
          logoSource: NodeIcon,
          title: "Node",
          subtitle: messages.Home?.backEndSubtitle1,
          alt: "node-icon",
        },
        {
          logoSource: MongoIcon,
          title: "MongoDB",
          subtitle: messages.Home?.backEndSubtitle2,
          alt: "mongoDB-icon",
        },
        {
          logoSource: GraphQlIcon,
          title: "GraphQL (Apollo Server)",
          subtitle: messages.Home?.backEndSubtitle3,
          alt: "graphQL-icon",
        },
      ],
      engines: [
        {
          logoSource: UnityIcon,
          title: "Unity",
          subtitle: messages.Home?.gameSubtitle1,
          alt: "unity-icon",
        },
        {
          logoSource: UnrealIcon,
          title: "Unreal",
          subtitle: messages.Home?.gameSubtitle2,
          alt: "unreal-icon",
        },
      ],
    }
  }, [messages.Home])
}

export default useStacksObjects
