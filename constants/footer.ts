import { Mail, Phone } from "lucide-react"

export const footerSection = {
  address: {
    street: "23 gamal abdelnaser st",
    city: "shebin elkom",
    country: "egypt"
  },
  aboutUs: {
    title: "About us",
    links: [
      {
        title: "Our Story",
        link: "#"
      },
      {
        title: "Designer",
        link: "#"
      },
      {
        title: "Architecture",
        link: "#"
      },
      {
        title: "Interior",
        link: "#"
      }
    ]
  },
  services: {
    title: "Services",
    links: [
      {
        title: "Design",
        link: "#"
      },
      {
        title: "Architecture",
        link: "#"
      },
      {
        title: "Interior",
        link: "#"
      }
    ]
  },
  contact: {
    title: "Contact us",
    links: [
      {
        icon: Mail,
        link: "help@interior.com"
      },
      {
        icon: Phone,
        link: "01152640142"
      },
    ]
  }
}