// Defines the structure for a single link item within the mega menu
export type MegaMenuItem = {
  label: string // The text displayed for the link
  href: string // The URL the link points to
}

// Defines the structure for a column within the mega menu
export type MegaMenuColumn = {
  title?: string // Optional title for a group of links within a column
  links: MegaMenuItem[] // An array of links in this column
}

// Data for the 'AI' mega menu
export const aiMegaMenu: MegaMenuColumn[] = [
  {
    links: [
      { label: "Overview", href: "/services" },
      { label: "AI Agents", href: "/services#ai-data" },
      { label: "Real-Time Data Pipelines", href: "/services#data-infrastructure" },
      { label: "Cloud Native Architecture", href: "/services#cloud-engineering" },
    ],
  },
];


// Data for the 'Hybrid Cloud' mega menu
export const hybridCloudMegaMenu: MegaMenuColumn[] = [
  {
    links: [
      { label: "Overview", href: "/industries" },
      { label: "Cloud Services", href: "/industries#cloud-services" }, // placeholder
      { label: "Hybrid Cloud Platform", href: "/industries#hybrid-cloud" }, // placeholder
      { label: "Cloud Security", href: "/industries#cloud-security" }, // placeholder
    ],
  },
  {
    links: [
      { label: "Data Management", href: "/industries#retail" },
      { label: "Integration", href: "/industries#healthcare" },
      { label: "Automation", href: "/industries#finance" },
      { label: "Containers", href: "/industries#energy" },
    ],
  },
];


// Data for the 'Products' mega menu
export const productsMegaMenu: MegaMenuColumn[] = [
  {
    links: [
      { label: "Overview", href: "/products" }, // Links to the /products page we created
      { label: "Software", href: "#" },
      { label: "Hardware", href: "#" },
      { label: "Industry Solutions", href: "#" },
    ],
  },
  {
    links: [
      { label: "Services", href: "#" },
      { label: "Solutions by Industry", href: "#" },
      { label: "Red Hat Products", href: "#" },
      { label: "Open Source", href: "#" },
    ],
  },
]

// Data for the 'Support' mega menu
export const supportMegaMenu: MegaMenuColumn[] = [
  {
    links: [
      { label: "Overview", href: "#" },
      { label: "Contact Support", href: "#" },
      { label: "Documentation", href: "#" },
      { label: "Community Forums", href: "#" },
    ],
  },
  {
    links: [
      { label: "Downloads", href: "#" },
      { label: "Training", href: "#" },
      { label: "Service Status", href: "#" },
      { label: "Product Lifecycle", href: "#" },
    ],
  },
]
