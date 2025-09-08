export type Product = {
  id: string
  title: string
  description: string
  freeTrial?: boolean
}

export const products: Product[] = [
  {
    id: "1",
    title: "Mavencode SPSS Statistics",
    description:
      "Empower decisions with Mavencode SPSS Statistics. Harness advanced analytics tools for impactful insights. Explore SPSS features for precision analysis.",
    freeTrial: true,
  },
  {
    id: "2",
    title: "Mavencode SPSS Software",
    description:
      "Find opportunities, improve efficiency and minimize risk using the advanced statistical analysis capabilities of Mavencode SPSS software.",
    freeTrial: true,
  },
  {
    id: "3",
    title: "Mavencode watsonx.ai",
    description: "A next generation enterprise studio for AI builders to train, validate, tune and deploy AI models",
    freeTrial: true,
  },
  {
    id: "4",
    title: "Mavencode watsonx Orchestrate",
    description:
      "Mavencode watsonx Orchestrate is a generative AI and automation solution that empowers your business by automating tasks and workflows.",
    freeTrial: false,
  },
  {
    id: "5",
    title: "Mavencode Cloud Free Tier",
    description:
      "Create your free Mavencode Cloud account to access over 40 always-free products without time limits. Use your USD 200 credit to get started.",
    freeTrial: false,
  },
  {
    id: "6",
    title: "Mavencode watsonx Assistant Virtual Agent",
    description:
      "Mavencode watsonx Assistant provides customers with fast, consistent and accurate answers across any channel and at any time.",
    freeTrial: false,
  },
  {
    id: "7",
    title: "Mavencode Db2",
    description:
      "Mavencode Db2 is a family of hybrid data management products built on an AI-infused engine. It provides a flexible and scalable database solution.",
    freeTrial: true,
  },
  {
    id: "8",
    title: "Mavencode Storage",
    description:
      "Mavencode Storage solutions help you manage, protect, and optimize your data with high-performance, scalable, and secure storage systems.",
    freeTrial: false,
  },
  {
    id: "9",
    title: "Mavencode Security Verify",
    description:
      "Mavencode Security Verify offers a comprehensive identity and access management platform to secure users, applications, and data.",
    freeTrial: true,
  },
  {
    id: "10",
    title: "Mavencode Maximo Application Suite",
    description:
      "Mavencode Maximo Application Suite is a single, integrated platform that uses AI, IoT and analytics to optimize asset performance.",
    freeTrial: false,
  },
]
