
import ProjectItem from "./ProjectDetail";
const projects = [
  {
    title: "Karmm: Astrology & Matchmaking",
    description: "Karmm is an all-in-one platform offering astrology, matchmaking, and dating features. Users can chat with astrologers via text, audio, or video for personalized horoscope readings. The app also includes an e-commerce section for spiritual products, a secure matrimony feature with earning options through face recognition, and a dating section that promotes real connections with video, audio, and chat options.",
    image: "/assets/karmm-user.webp",
    link: "https://karmm.com/",
    tech: [],
    github: "",
    stars: "100k+ Installs",
  },
  {
    title: "Karmm Pro",
    description: "Karmm: Pro is a dedicated platform for professional astrologers and spiritual product sellers. Astrologers can connect with users via video, audio, or chat for consultations. Sellers can manage their e-commerce stores with full inventory control and selling features. The app also supports live streaming, allowing astrologers to engage with audiences in real time, enhancing trust and visibility.",
    image: "/assets/karmm-pro.webp",
    link: "https://karmm.com/",
    github: "",
    tech: [],
    stars: "1k+ Installs",
  },
  {
    title: "Find-Me",
    description: "Find Me is an advanced application designed to facilitate the recovery of lost pets using cutting-edge geolocation technology. The app provides real-time tracking and updates, enabling pet owners to report and locate lost animals. It integrates multiple APIs to deliver a seamless user experience across Android, iOS, and web platforms, featuring an intuitive interface for efficient pet recovery.",
    image: "/assets/find-me.webp",
    link: "https://play.google.com/store/apps/details?id=com.pets.find_me&hl=en_IN",
    stars: "",
    github: "",
    tech: [],
  },
  {
    title: "PayPark",
    description: "A parking management app for the UAE, available on Android and iOS, designed to simplify finding, booking, and paying for parking spots.",
    image: "/assets/paypark.webp",
    link: "https://apps.apple.com/in/app/paypark-uae/id1516081945",
    stars: "",
    github: "",
    tech: [],
  },
  {
    title: "The Academix",
    description: "An educational app for Android, iOS, and Web, offering interactive lessons, quizzes, and a comprehensive study material library for students and teachers.",
    image: "/assets/academix.webp",
    link: "https://play.google.com/store/apps/details?id=com.institute.theacademix&hl=en_IN",
    stars: "",
     github: "",
    tech: [],
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project, i) => (
            <ProjectItem key={i} project={project} />
          ))}
        </ul>
      </div>
    </section>
  );
}