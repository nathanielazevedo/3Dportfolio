import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  creative_mines,
  spark,
  ibanban,
  jobit,
  earth,
  threejs,
  chicken,
  gpt,
  code,
  br,
} from '../assets'

const test = 'test'

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
]

const services = [
  {
    title: 'Full-Stack Developer',
    icon: web,
  },
  {
    title: 'JavaScript',
    icon: mobile,
  },
  {
    title: 'Python',
    icon: backend,
  },
  {
    title: 'React',
    icon: creator,
  },
]

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'MongoDB',
    icon: mongodb,
  },
  {
    name: 'Three JS',
    icon: threejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
]

const experiences = [
  {
    title: 'Full Stack Developer',
    company_name: 'Boehringer Ingleheim',
    icon: br,
    iconBg: 'black',
    date: 'March 2024 - Current',
    points: [
      'Designed and implemented the entire frontend architecture, including user interface components and interactions, resulting in a user-friendly and responsive application that met business requirements.',
      'Collaborated with cross-functional teams to gather requirements, design solutions, and integrate APIs to streamline data retrieval processes, enhancing data accuracy and reducing processing time by 30%.',
      'Conducted code reviews and implemented best practices to ensure scalable and maintainable codebase, resulting in improved code quality and reduced technical debt.',
      'Provided technical support and training to end-users on using internal tools effectively, resulting in a 25% increase in user adoption and satisfaction.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Creative Mines',
    icon: creative_mines,
    iconBg: 'black',
    date: 'November 2021 - March 2023',
    points: [
      'Collaborated with over 10 teams to create an cybersecurity application used by companies such as NASA, The US Air Force and thousands of other highly respected businesses worldwide.',
      'Spearheaded the development of a game-changing feature that optimized product usability and attained a 25%  higher conversion rate in a team of 6 developers.',
      'Restructured the main grid by breaking down complex code segments and implementing efficient data structures; decreased backend requests and re-rendering by 50%, leading to a streamlined system performance and reduced server load.',
      'Optimized the performance of the app by implementing redux, functional programming and asynchronous loading techniques; reduced page load times by 60% and raised user experience rating by 35%.',
      'Tracked and reported software defects using bug-tracking tools and assisted with root cause analysis, resolved 75% of issues discovered.',
    ],
  },
  {
    title: 'Full Stack Developer',
    company_name: 'Spark Business Works',
    icon: spark,
    iconBg: 'black',
    date: 'April 2021 - October 2021',
    points: [
      'Promoted within 3 months due to strong performance and organizational impact - ahead of schedule by 12 months.',

      'Led cross-functional team in the design and development of a new feature that increased user satisfaction by 50%; improved client throughput by over 40%.',

      'Minimized sprint time from 4 weeks to 2 weeks and eliminated bottlenecks by streamlining the development process from user stories through code check-in.',

      'Automated manual testing using Python and Selenium to reduce the time taken for regression testing by 50%.',
    ],
  },
]

const testimonials = [
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Nate does.",
    name: 'Asif Lundstrom',
    designation: 'Attorney',
    company: 'Foundry Law',
    image: 'https://randomuser.me/api/portraits/men/4.jpg',
  },
  {
    testimonial:
      'Nate is an incredible teammate and will add hard work, technical ability and skills to any team he joins.',
    name: 'Jake Northey',
    designation: 'CEO',
    company: 'Creative Mines',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      'Nate is a skilled software engineer and a great mentor. It was an honor to work with him.',
    name: 'Lohane Diogo',
    designation: 'Web Developer',
    company: 'Youx Group',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
]

const projects = [
  {
    name: 'Web Dev Interviews',
    description:
      'Online code editor for practicing web development interview questions.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Python',
        color: 'pink-text-gradient',
      },
      {
        name: 'Postgresql',
        color: 'green-text-gradient',
      },
      {
        name: 'DynamoDb',
        color: 'blue-text-gradient',
      },
      {
        name: 'AWS',
        color: 'green-text-gradient',
      },
    ],
    image: code,
    source_code_link: 'https://github.com/nathanielazevedo/webdevinterviews',
    live_link: 'https://www.webdevinterviews.com/',
  },
  {
    name: 'Chicken Tinder',
    description:
      'Organize a group dinner without the hassle. Chicken Tinder helps your party decide where to eat and when.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'blue-text-gradient',
      },
      {
        name: 'AWS',
        color: 'green-text-gradient',
      },
    ],
    image: chicken,
    source_code_link: 'https://github.com/nathanielazevedo/chickentinder',
    live_link: 'https://www.thechickentinder.com/',
  },
  {
    name: 'Ibanban',
    description:
      'Web-based platform that teaches Mandarin with mini games. Over 300 mandarin words and 4 pure HTML, CSS, JS mini games. Learn Mandarin, play games.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'TypeScript',
        color: 'green-text-gradient',
      },
      {
        name: 'Express',
        color: 'pink-text-gradient',
      },
      {
        name: 'MongoDB',
        color: 'blue-text-gradient',
      },
      {
        name: 'Tailwind',
        color: 'green-text-gradient',
      },
    ],
    image: ibanban,
    source_code_link: 'https://github.com/nathanielazevedo/ibanban',
    live_link: 'https://nathanielazevedo.github.io/ibanban/',
  },
  {
    name: 'Sociopedia',
    description:
      "Full-Stack Facebook mock website. Includes authentication and authorization. Image uploading and redux perist with JWT's. Make and account and post!",
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'pink-text-gradient',
      },
      {
        name: 'redux',
        color: 'blue-text-gradient',
      },
    ],
    image: jobit,
    source_code_link: 'https://github.com/nathanielazevedo/social-client',
    live_link: 'https://nathanielazevedo.github.io/social-client/',
  },
  {
    name: 'Geo',
    description:
      'Full-Stack Location tracking website. Click the button and watch your location light up on the Earth.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'postgesql',
        color: 'pink-text-gradient',
      },
      {
        name: 'three.js',
        color: 'blue-text-gradient',
      },
    ],
    image: earth,
    source_code_link: 'https://github.com/nathanielazevedo/geo_front',
    live_link: 'https://nathanielazevedo.github.io/geo_front/',
  },
  {
    name: 'GPT-Helper',
    description:
      'This is a simple web app that uses the GPT-4 API to generate text. It is a simple way to get started with the GPT-4 API.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'express',
        color: 'green-text-gradient',
      },
      {
        name: 'GPT-API',
        color: 'pink-text-gradient',
      },
    ],
    image: gpt,
    source_code_link: 'https://github.com/nathanielazevedo/gpt_front',
    live_link: 'https://nathanielazevedo.github.io/gpt_front/',
  },
  // {
  //   name: "Trip Guide",
  //   description:
  //     "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://github.com/",
  // },
]

export { services, technologies, experiences, testimonials, projects }
