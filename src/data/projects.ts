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
    title: "IRMAI",
    year: "2025",
    description: [
        "IRMAI is still under wraps - check back later!"
    ],
    media: [
    ],
    tags: ["LLMs", "Celery", "Docker", "Semantic Search", "Python", "React", ]
  },
  {
    id: 2,
    title: "CastroStudio",
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
    tags: ["Python", "MIDI over the Network", "OSC", "Raspberry Pi", "OBS Studio", "Logic Pro X"]
  },
  {
    id: 3,
    title: "MIDI2AE",
    year: "2023",
    description: [
      "In short: MIDI2AE brings MIDI to After Effects, and enables motion designers to create animations that are in sync with music, easily.",
      "I'm particularly fascinated by the synergy between music and visuals. The process of animation in After Effects is tedious enough as it is - bring in audio and you add a whole new level of complexity trying to lining up motion and transients. Imagine having to animate an entire musical performance, and making a shape transform a certain way every time the snare is hit.",
      "<a href='https://midi2ae.com/' target='_blank' rel='noopener noreferrer'>MIDI2AE</a> is a webapp that converts MIDI files into a format that After Effects can easily understand. All the notes in your MIDI files become time events that you can use to control your shapes in your comp. A simple example: a few clicks and all your snare hits can make a circle appear, while the volume of the hits can control the diameter of the circle.",
      "As a bonus, MIDI2AE also computes exhaustive chord information from the input MIDI file - that lets you effectively transcribe any MIDI track, time-synced. And you can even use it to generate synethesia-like animations: e.g. make all altered chords fuchsia, or all minor 11th chords cyan...",
      "MIDI2AE is 100% free.",
    ],
    media: [
      {
        type: "image",
        url: "/images/midi2ae/midi2ae_screenshot.png",
        alt: "MIDI2AE webapp screenshot"
      },
      {
        type: "video",
        url: "https://youtu.be/fNAr_giiEXc",
        alt: "Youtube MIDI2AE tutorial video"
      },
      {
        type: "instagram",
        url: "https://www.instagram.com/p/CnVgPhYP6gs/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
        alt: "Youtube MIDI2AE tutorial video"
      },
    ],
    tags: ["Webapp", "Python", "Flask", "MIDI", "After Effects", "React", "Google Cloud"]
  },
  {
    id: 4,
    title: "Conductor",
    year: "2022",
    description: [
      "One can argue that music is all about expressivity: music manufacturers create countless tools to bring out and capture every nuance of a performance.",
      "But what if instead of sliders, knobs, pedals, and wheels, you could use the fine motor controls of your own hand? Much like a conductor, you could shape the music in real-time, with the same expressivity and precision.",
      "Conductor uses your computer camera in a simple webapp to capture your hand motion, and derive CC controls from its positions and gestures.",
      "Raise your hand to increase the gain; move it to the left to sweep a low-pass filter; spread your fingers to open up a wah pedal... or come up with your own gestures and mappings.",
    ],
    media: [
      {
        type: "video",
        url: "https://youtu.be/do1IYZOVTWQ",
        alt: "Youtube Conductor demo video"
      },
    ],
    tags: ["WASM", "React", "Python", "MIDI"]
  },
  {
    id: 4,
    title: "Processing",
    year: "2019",
    description: [
      "A series of sketches and experiments in Processing, most of them focused on music visualization.",
    ],
    media: [
      {
        type: "video",
        url: "https://youtu.be/do1IYZOVTWQ",
        alt: "Processing sketches"
      },
    ],
    tags: ["Processing", "Audiovisual"]
  },
  {
    id: 5,
    title: "SmoothOperator",
    year: "2018",
    description: [
      "A very public demo (an audience of 15k!) of the project Smooth Operator, at Adobe MAX 2018.",
      "You put in all the work to minutiously edit, carefully color-grade, and patientialy stitch your video... But nowadays, the work doesn't stop at publishing time: to maximize visibility, you need to create multiple versions of your video, each tailored to each different platform and aspect ratio. This is what Smooth Operator aims to solve.",
      "The project was selected to be shown at MAX after 2 rounds of internal competition, and is a collaboration with Adobe Research and Premiere Pro.",
      "Smooth Operator then got productized and became the <a href='https://helpx.adobe.com/premiere-pro/using/auto-reframe.html' target='_blank' rel='noopener noreferrer'>AutoReframe feature</a> in Adobe Premiere Pro and Premiere Rush, and was deployed as a service to become <a href='https://experienceleague.adobe.com/en/docs/experience-manager-learn/assets/dynamic-media/video/dynamic-media-smart-crop-video' target='_blank' rel='noopener noreferrer'>Dynamic Media Smart Crop for Video</a> in Adobe Experience Manager (AEM).",
    ],
    media: [
      {
        type: "image",
        url: "/images/smooth_operator/AZ5Y3576_crop.jpg",
        alt: "Project Smooth Operator demo at Adobe MAX 2018"
      },
      {
        type: "video",
        url: "https://youtu.be/MImphmT5dy8",
        alt: "Project Smooth Operator demo video at Adobe MAX 2018"
      },
      {
        type: "image",
        url: "/images/smooth_operator/max_2_crop.jpeg",
        alt: "Project Smooth Operator demo at Adobe MAX 2018"
      },
      {
        type: "image",
        url: "/images/smooth_operator/smooth_operator.webp",
        alt: "Gif of auto-reframing in action"
      },
    ],
    tags: ["ML", "Unet", "Convex Optimization", "Video", "Adobe"]

  },
  {
    id: 6,
    title: "NordStagePatch",
    year: "2018",
    description: [
      "A custom patch for Nord Stage 3 featuring signature catchphrases from your favorite rappers and hip-hop artists.",
      "Download the patch here: <a href='https://drive.google.com/file/d/1e6IBA5yn7ZLurAU-T74sv6-CfTLV22qT/view?usp=sharing' target='_blank' rel='noopener noreferrer'>Nord Stage Rap/Hip-hop Ad Lib Sample Patch</a>",
    ],
    media: [
      {
        type: "video",
        url: "https://youtu.be/obEjaRUIsGk",
        alt: "Youtube Conductor demo video"
      },
    ],
    tags: ["Nord", "Python"]
  },
  {
    id: 7,
    title: "AssetPlacementInVideos",
    year: "2017",
    description: [
      "A research project at Uru, to embed digital assets in videos in a way that is both realistic and efficient, using homography for planar transforms.",
    ],
    media: [
      {
        type: "image",
        url: "/images/uru/crossing_med_00_3.webp",
        alt: "Example of asset placement in video"
      },
    ],
    tags: ["Python", "OpenCV", "Epipolar Geometry", "Computer Vision"]
  },
  {
    id: 8,
    title: "Patents",
    year: "*",
    description: [
      "A list of patents I've been involved in.",
      "<li> <a href='https://patentimages.storage.googleapis.com/b9/c0/33/a927e7e7dff949/US11490048.pdf' target='_blank' rel='noopener noreferrer'>US11490048B2</a>: Intelligent video reframing. A method for intelligently reframing video content to fit different aspect ratios, while preserving the most important content.",
      "<li> <a href='https://patentimages.storage.googleapis.com/cd/87/0d/59e610a9f9a164/US10733452.pdf' target='_blank' rel='noopener noreferrer'>US10733452B2</a>: Brand safety in video content. A method for ensuring that video content is brand-safe, by analyzing the content and its context.",
      "<li> <a href='https://patentimages.storage.googleapis.com/d0/9a/33/2298dc8e56d069/US10522186.pdf' target='_blank' rel='noopener noreferrer'>US10522186B2</a>: Apparatus, systems, and methods for integrating digital media content. An algorithm for integrating digital media content, such as ads, into video content - without extra AR sensor data such as IMU.",
      "<li> <a href='https://patentimages.storage.googleapis.com/43/a0/f2/a7aa3b2782f3e8/US10726599.pdf' target='_blank' rel='noopener noreferrer'>US10726599B2</a>: Realistic augmentation of images and videos with graphics. An algorithm for warping planar media with projective distortion for seamless integration and harmonization.",
      "<li> <a href='https://patentimages.storage.googleapis.com/23/f3/37/05c623f9593af9/US20200356818A1.pdf' target='_blank' rel='noopener noreferrer'>US20200356818A1</a>: Logo Detection. An architecture for multi-class logo detection.",
      "<li> <a href='https://patentimages.storage.googleapis.com/d4/79/52/17a7840cd635e7/US20240362506A1.pdf' target='_blank' rel='noopener noreferrer'>US20240362506A1</a>: Efficiently inferencing digital videos utilizing machine-learning models.",
      "<li> <a href='https://patentimages.storage.googleapis.com/b0/2b/04/2b1e1857a92bdd/US20230377339A1.pdf' target='_blank' rel='noopener noreferrer'>US20230377339A1</a>: Processing framework for temporal-consistent face manipulation in videos.",
    ],
    media: [
      {
        type: "image",
        url: "/images/patents/intelligent_video_reframing.png",
        alt: "Intelligent video reframing patent diagram"
      },
    ],
    tags: []
  }
];
