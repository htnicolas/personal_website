export interface Media {
  type: 'image' | 'video';
  url: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  year: string;
  description: string;
  media: Media[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Data Visualization",
    year: "2023",
    description: "An interactive data visualization tool built with D3.js that allows users to explore complex datasets through intuitive interfaces. This project focused on making data accessible and understandable through thoughtful design and interactive elements. The visualization uses a combination of charts, graphs, and interactive filters to help users discover patterns and insights within the data.",
    media: [
      {
        type: "image",
        url: "/images/midi2ae/midi2ae_pickwhip.gif",
        alt: "Dashboard view of data visualization"
      },
      {
        type: "video",
        url: "https://youtu.be/pC0CIRbHIYg",
        alt: "Demonstration of interactive features"
      }
    ],
    tags: ["D3.js", "Data Visualization", "UX/UI", "JavaScript"]
  },
  {
    id: 2,
    title: "MIDI2AE",
    year: "2022",
    description: "A clean, minimal mobile app designed for productivity and focus. This project involved user research, wireframing, and iterative design to create an intuitive experience that helps users achieve their goals efficiently. The design system was built with scalability in mind, allowing for easy updates and maintenance as the product evolves.",
    media: [
      {
        type: "image",
        url: "/images/app-screens.jpg",
        alt: "App screen mockups"
      },
      {
        type: "image",
        url: "/images/user-flow.jpg",
        alt: "User flow diagram"
      }
    ],
    tags: ["Mobile", "UX/UI", "Figma", "User Testing"]
  },
  {
    id: 3,
    title: "E-commerce Platform",
    year: "2021",
    description: "A full-featured e-commerce platform with a focus on user experience and conversion optimization. This project showcases my skills in front-end development, back-end integration, and understanding of e-commerce best practices. The platform includes custom checkout flows, inventory management, and analytics dashboards for business owners.",
    media: [
      {
        type: "image",
        url: "/images/ecommerce-1.jpg",
        alt: "Homepage design"
      },
      {
        type: "image",
        url: "/images/ecommerce-2.jpg",
        alt: "Product page"
      },
      {
        type: "image",
        url: "/images/ecommerce-3.jpg",
        alt: "Checkout process"
      },
      {
        type: "image",
        url: "/images/ecommerce-4.jpg", 
        alt: "Admin dashboard"
      }
    ],
    tags: ["E-commerce", "React", "Node.js", "UX/UI"]
  }
];
