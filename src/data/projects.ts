export interface Media {
  type: 'image' | 'video';
  url: string;
  alt: string;
}

export interface Project {
  id: number;
  title: string;
  year: string;
  description: string[]; // Changed from string to string[] (array of strings)
  media: Media[];
  tags: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Interactive Data Visualization",
    year: "2023",
    description: [
      "An interactive data visualization tool built with D3.js that allows users to explore complex datasets through intuitive interfaces. This project focused on making data accessible and understandable through thoughtful design and interactive elements.",
      "The visualization uses a combination of charts, graphs, and interactive filters to help users discover patterns and insights within the data. Users can drill down into specific data points and export their findings.",
      "This project was built using D3.js, React, and TypeScript, with a Node.js backend for data processing."
    ],
    media: [
      {
        type: "image",
        url: "/images/data-viz-1.jpg",
        alt: "Dashboard view of data visualization"
      },
      {
        type: "image",
        url: "/images/data-viz-2.jpg",
        alt: "Interactive chart example"
      },
      {
        type: "video",
        url: "/images/interaction-demo.mp4",
        alt: "Demonstration of interactive features"
      }
    ],
    tags: ["D3.js", "Data Visualization", "UX/UI", "JavaScript"]
  },
  {
    id: 2,
    title: "Mobile App Design",
    year: "2022",
    description: [
      "A clean, minimal mobile app designed for productivity and focus. This project involved user research, wireframing, and iterative design to create an intuitive experience that helps users achieve their goals efficiently.",
      "The design system was built with scalability in mind, allowing for easy updates and maintenance as the product evolves.",
      "This app has been downloaded over 50,000 times and maintains a 4.8-star rating in the App Store."
    ],
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
    description: [
      "A full-featured e-commerce platform with a focus on user experience and conversion optimization. This project showcases my skills in front-end development, back-end integration, and understanding of e-commerce best practices.",
      "The platform includes custom checkout flows, inventory management, and analytics dashboards for business owners.",
      "Since launch, this platform has processed over $2M in transactions for the client, with a 28% increase in conversion rate compared to their previous solution."
    ],
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
