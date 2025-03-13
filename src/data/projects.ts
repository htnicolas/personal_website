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
    title: "Automated Home Studio",
    year: "2025",
    description: [
      "A paternity leave project - now that I realized my childhood dream of having a music room in the attic, complete with an electronic drum kit, bass, guitar, keyboards, monitors, recording interface... how do I let people know I'm recording, please do not disturb?",
      "This project uses a Raspberry Pi running an OSC server to receive messages from a DAW (Digital Audio Workstation), namely Logic Pro X. When the DAW is recording, the Raspberry Pi triggers an optocoupler to light up an LED strip to indicate that recording is in progress.",
      "But why stop there? What if starting a recording session could also trigger video recording, and control the light differently during recording and playback?",
      "Github Repo: <a href='https://github.com/htnicolas/logic_recording_light' target='_blank' rel='noopener noreferrer'>Logic Recording Light</a>"
    ],
    media: [
      {
        type: "image",
        url: "/images/logic_recording_light/studio_fisheye.png",
        alt: "Fisher-eye view of the music room"
      },
      {
        type: "image",
        url: "/images/logic_recording_light/logic_rec_light_seq_diagram.png",
        alt: "General sequence diagram for the Logic Recording Light project"
      },
      {
        type: "video",
        url: "/images/interaction-demo.mp4",
        alt: "Demonstration of interactive features"
      }
    ],
    tags: ["Python", "MIDI", "OSC", "Raspberry Pi", "OBS Studio", "Logic Pro X"]
  },
  {
    id: 2,
    title: "MIDI2AE: A webapp to bring MIDI in After Effects",
    year: "2023",
    description: [
      "I'm particularly fascinated by the synergy between music and visuals. The process of animation in After Effects is tedious enough as it is - bring in audio and you add a whole new level of complexity trying to lining up motion and transients. Imagine having to animate an entire musical performance, and making a shape transform a certain way every time the snare is hit.",
      "<a href='https://midi2ae.com/' target='_blank' rel='noopener noreferrer'>MIDI2AE</a> is a webapp that converts MIDI files into a format that After Effects can easily understand. A few clicks and all your snare hits can control the shape you want.",
      "The goal is to make it easier for motion designers to create animations that are in sync with music.",
    ],
    media: [
      {
        type: "image",
        url: "/images/midi2ae/midi2ae_screenshot.png",
        alt: "MIDI2AE webapp screenshot"
      },
      {
        type: "video",
        url: "https://youtu.be/k0KLAznm8ug",
        alt: "Youtube MIDI2AE demo video"
      },
      {
        type: "video",
        url: "https://youtu.be/fNAr_giiEXc",
        alt: "Youtube MIDI2AE tutorial video"
      }
    ],
    tags: ["Webapp", "Python", "Flask", "MIDI", "After Effects", "React", "Google Cloud"]
  },
  {
    id: 3,
    title: "Conductor",
    year: "2022",
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
