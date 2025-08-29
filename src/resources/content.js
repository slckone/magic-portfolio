import { Logo } from "@once-ui-system/core";

const person = {
  firstName: "Rieddiwaan",
  lastName: "Laatoe",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Graphic Web Designer",
  avatar: "/images/avatar.jpg",
  email: "rlaatoe@gmail.com",
  location: "Africa/Johannesburg", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Afrikaans"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the intersection of
      creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "Download CV",
    icon: "document",
    link: "/images/CV_Resume.pdf",
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/slck1one",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/rlaatoe",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Building bridges between design and code</>,
 
  
  featured: {
    display: true,
    title: <>Download <strong className="ml-4">My CV</strong></>,
    href: "/images/CV_Resume.pdf",
  },
  
  subline: (
    <>
      I'm Rieddiwaan Laatoe, a graphic web designer at <Logo icon="/trademarks/wordmark-dark.svg" light src="/trademarks/wordmark-dark.svg" style={{ display: "inline-flex", top: "0.20em", marginLeft: "-0.05em" }}/>, where I craft intuitive, unique & immersive user experiences. After hours, I code & build my own dev projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/rieddiwaan-laatoe-4nyzdj/15min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Creative and detail-oriented Graphic & Web Designer with over 15 years of hands-on experience in digital
        design, DTP, motion graphics, and web development. Proven track record in managing branding, print
        production, and team collaboration across fast-paced environments. Passionate about delivering clean,
        innovative visual solutions that elevate brand presence. Skilled in modern design tools and cross-functional
        communication.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
        {
        company: "Fabi Sportswear",
        timeframe: "04/2022 - 12/2024",
        role: "Senior Graphic Designer",
        achievements: [
          <>
            Designed sportswear kits across soccer, netball, rugby, and cricket categories.
          </>,
          <>
            Built layout templates to streamline production and increase speed-to-market.
          </>,
            <>
            Created original artwork for sports teams, events, and promotional clothing.
          </>,
          <>
            Collaborated with sales reps on custom client orders and personalized gear.
          </>,
        ],
        images: [
      
        ],
      },
      {
        company: "MSB Sportswear",
        timeframe: "08/2018 - 03/2022",
        role: "Lead Graphic Designer",
        achievements: [
          <>
            Customized designs for school uniforms, sports kits, and branded items.
          </>,
          <>
            Prepared apparel mock-ups, proofs, and final production files.
          </>,
             <>
            Supported embroidery digitizing and heat press print layouts.
          </>,
          <>
           Communicated directly with production and printing departments to avoid delays.
          </>,
        ],
        images: [],
      },
      {
        company: "Genuine Connection",
        timeframe: "04/2015 - 07/2018",
        role: "Graphic Designer",
        achievements: [
          <>
            Created factory-ready artwork for screen printing, embroidery, and sublimation.
          </>,
          <>
            Developed branding for client apparel including logos, labels, and swing tags.
          </>,
            <>
            Produced high-quality mock-ups for client approval and internal production.
          </>,
          <>
            Assisted in product development and design planning with sales and factory.
          </>,
        ],
        images: [
      
        ],
      },
      {
        company: "Xanita",
        timeframe: "01/2010 - 03/2015",
        role: "Graphic Designer",
        achievements: [
          <>
            Designed POS displays, exhibition booths, and retail units from Xanita board.
          </>,
          <>
            Translated client briefs into functional, eco-friendly visual solutions.
          </>,
             <>
            Built die-lines and vector layouts for CNC cutting, folding, and assembly.
          </>,
          <>
           Created instructional visuals and assembly guides for installers and clients.
          </>,
        ],
        images: [],
      },
      
    ],
    
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Prestige College",
        description: <>Diploma in Graphic Web Design.</>,
      },
      {
        name: "Bergrivier Senior High",
        description: <>Senior Certificate. (Matric)</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "My work",
    skills: [
      {
        title: "Section 1",
        description: <>Short description of content goes here.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/image-08.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/image-05.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
            {
            src: "/images/projects/project-01/image-14.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/image-10.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Section 2",
        description: <>Short description of content goes here.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
              {
            src: "/images/projects/project-01/cover-06.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design trends, tech & more...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};


  const slck1 = {
  path: "/slck1",
  label: "slck1",
  title: `slck1 – ${person.name}`,
  description: `slck1 Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
            };

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own

  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/video-1.mp4",
      alt: "video",
      orientation: "horizontal",
    },
      {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/video-2.mp4",
      alt: "video",
      orientation: "horizontal",
    }, 
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
      {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
      {
      src: "/images/gallery/vertical-garments.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-garments_2.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
  
};

export { person, social, newsletter, home, about, blog, work, gallery, slck1 };
