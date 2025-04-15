// import { useState } from 'react'

// import '../App.css'
import { useEffect, useState } from "react";
function Home() {
  const sections = ["about", "experience", "projects"];
  const [activeId, setActiveId] = useState("about");
  const experienceData = [
    {
      company: "GTS Infosoft",
      role: "Node.js Backend Developer",
      duration: "Dec 2021 — Nov 2024",
      url: "https://gtsinfosoft.com/",
      description:
        "Built scalable RESTful APIs using Node.js and Express.js, efficiently managing over 10,000 concurrent users. Integrated secure payment gateways (Stripe, PayPal, PhonePe, CCAvenue) and real-time communication with Twilio and Branch.io. Contributed to responsive, high-performance web apps with React and Tailwind CSS.",
      techStack: [
        "JavaScript",
        "MySQL",
        "MongoDB",
        "PostgreSQL",
        "Google Cloud Functions",
        "Firebase",
        "Stripe",
        "PayPal",
        "PhonePe",
        "CCAvenue",
        "Jira",
        "Trello",
        " Third-Party APIs (under NDA)",
        "React",
        "Tailwind",
        "Bootstrap",
      ],
    },
    {
      company: "Unanimous Technologies",
      role: "Node.js Backend Developer",
      duration: "Aug 2021 — Nov 2021",
      url: "https://www.unanimous.tech/",
      description:
        "Worked on backend services using Express.js and MongoDB. Developed internal APIs and helped integrate third-party APIs under NDA-based clients.",
      techStack: ["Node.js", "Express.js", "MongoDB", "Postman", "Javascript"],
    },
    {
      company: "Suncity Techno",
      role: "Web Developer",
      duration: "Mar 2021 — Aug 2021",
      url: "https://www.suncitytechno.com/",
      description:
        "Created web components and dynamic content for WordPress sites. Gained hands-on experience in responsive design and basic backend workflows.",
      techStack: ["HTML", "CSS", "JS", "PHP", "jQuery"],
    },
  ];
  const projects = [
    {
      title: "Karmm: Astrology & Matchmaking",
      description:
        "Karmm is an all-in-one platform offering astrology, matchmaking, and dating features. Users can chat with astrologers via text, audio, or video for personalized horoscope readings. The app also includes an e-commerce section for spiritual products, a secure matrimony feature with earning options through face recognition, and a dating section that promotes real connections with video, audio, and chat options.",
        image:"/src/assets/karmm-user.webp",
      // image:
      //   "https://play-lh.googleusercontent.com/0HRbiktczjMZiGifnCDqsYuWZdNHkjos-eFoI70X4nC5011TzAJkQd0DxkvRSx29B9vC=w240-h480-rw",
      link: "https://karmm.com/",
      tech: [],
      github: "",
      stars: "100k+ Installs",
    },
    {
      title: "Karmm Pro",
      description:
        "Karmm: Pro is a dedicated platform for professional astrologers and spiritual product sellers. Astrologers can connect with users via video, audio, or chat for consultations. Sellers can manage their e-commerce stores with full inventory control and selling features. The app also supports live streaming, allowing astrologers to engage with audiences in real time, enhancing trust and visibility.",
        image:"/src/assets/karmm-pro.webp",
      link: "https://karmm.com/",
      github: "",
      tech: [],
      stars: "1k+ Installs",
    },
    {
      title: "Find-Me",
      description:
        "Find Me is an advanced application designed to facilitate the recovery of lost pets using cutting-edge geolocation technology. The app provides real-time tracking and updates, enabling pet owners to report and locate lost animals. It integrates multiple APIs to deliver a seamless user experience across Android, iOS, and web platforms, featuring an intuitive interface for efficient pet recovery.",
        image:"/src/assets/find-me.webp",
      link: "https://play.google.com/store/apps/details?id=com.pets.find_me&hl=en_IN",
      stars: "",
      tech: [],
    },

    {
      title: "PayPark",
      description:
        "A parking management app for the UAE, available on Android and iOS, designed to simplify finding, booking, and paying for parking spots.",
        image:"/src/assets/paypark.webp",
      link: "https://apps.apple.com/in/app/paypark-uae/id1516081945",
      stars: "",
      tech: [],
    },
    {
      title: "The Academix",
      description:
        "An educational app for Android, iOS, and Web, offering interactive lessons, quizzes, and a comprehensive study material library for students and teachers.",
        image:"/src/assets/academix.webp",
      link: "https://play.google.com/store/apps/details?id=com.institute.theacademix&hl=en_IN",
      stars: "",
      tech: [],
    },
  ];

  //   const [count, setCount] = useState(0)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -40% 0px" } // adjust as needed
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <>
    
      <main className="main">
        <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
          <div className="lg:flex lg:justify-between lg:gap-4">
            <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
                  <a href="/">Rahul Kankariya</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
                  Node.js Backend Developer
                </h2>
                <p className="mt-4 max-w-xs leading-normal">
                  I architect robust, scalable, and secure backend systems that
                  power seamless digital experiences.
                </p>
                <nav
                  className="nav hidden lg:block"
                  aria-label="In-page jump links"
                >
                  <ul className="mt-16 w-max">
                    {sections.map((section) => (
                      <li key={section}>
                        <a
                          href={`#${section}`}
                          className={`group flex items-center py-3 ${
                            activeId === section ? "active" : ""
                          }`}
                        >
                          <span
                            className={`nav-indicator mr-4 h-px w-8 transition-all motion-reduce:transition-none ${
                              activeId === section
                                ? "w-16 bg-slate-200"
                                : "bg-slate-600 group-hover:w-16 group-hover:bg-slate-200"
                            }`}
                          ></span>
                          <span
                            className={`nav-text text-xs font-bold uppercase tracking-widest ${
                              activeId === section
                                ? "text-slate-200"
                                : "text-slate-500 group-hover:text-slate-200"
                            }`}
                          >
                            {section.charAt(0).toUpperCase() + section.slice(1)}
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
              <ul
                className="ml-1 mt-8 flex items-center"
                aria-label="Social media"
              >
                <li className="mr-5 shrink-0 text-xs">
                  <a
                    className="block hover:text-slate-200"
                    href="https://github.com/rahulkankariya"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                    title="GitHub"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
                <li className="mr-5 shrink-0 text-xs">
                  <a
                    className="block hover:text-slate-200"
                    href="https://www.linkedin.com/in/rahulkankariya/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="LinkedIn (opens in a new tab)"
                    title="LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                    </svg>
                  </a>
                </li>

                <li className="mr-5 shrink-0 text-xs">
                  <a
                    className="block hover:text-slate-200"
                    href="https://www.instagram.com/rahul_kankariya_/?next=%2F"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram (opens in a new tab)"
                    title="Instagram"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1000 1000"
                      fill="currentColor"
                      className="h-6 w-6"
                      aria-hidden="true"
                    >
                      <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                    </svg>
                  </a>
                </li>

                <li className="mr-5 shrink-0 text-xs">
                  <a
                    className="block hover:text-slate-200"
                    href="https://x.com/i/flow/login?redirect_after_login=%2FRahulKankriya17"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Twitter (opens in a new tab)"
                    title="Twitter"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
                  </a>
                </li>
              </ul>
            </header>
            <main id="content" className="pt-24 lg:w-[52%] lg:py-24">
              <section
                id="about"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="About me"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    About
                  </h2>
                </div>
                <div>
                  <p className="mb-4">
                    I’m a passionate backend developer with 3+ years of
                    experience building secure and scalable applications using
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Node.js
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Express.js
                    </span>
                    . I specialize in designing RESTful APIs and microservices
                    architecture, ensuring high performance and clean code
                    structure.
                  </p>
                  <p className="mb-4">
                    My expertise spans across relational and NoSQL databases
                    like
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      MySQL, PostgreSQL
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      MongoDB{"  "}
                    </span>
                    with a strong focus on query optimization and data
                    integrity.
                  </p>
                  <p className="mb-4">
                    AWS
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      (EC2, RDS, S3, Lambda),
                    </span>{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Google Cloud Functions
                    </span>{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Node.js
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Firebase
                    </span>
                    , enabling cloud-native and serverless solutions.
                  </p>
                  <p className="mb-4">
                    I have integrated numerous third-party services and payment
                    gateways, including
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Stripe, PayPal, PhonePe,
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      CCAvenue{" "}
                    </span>
                    , while following industry best practices for security and
                    compliance.
                  </p>
                  <p className="mb-4">
                    I also implement real-time communications and notification
                    systems using
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Twilio, SendGrid,
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Mailtrap.
                    </span>
                  </p>
                  <p className="mb-4">
                    With experience in Agile teams, I’m comfortable
                    collaborating via
                    <span className="font-medium text-slate-200 hover:text-teal-300">
                      {" "}
                      Jira, Trello,
                    </span>{" "}
                    and Git-based workflows to ensure transparency and timely
                    delivery.
                  </p>
                </div>
              </section>
              <section
                id="experience"
                className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
                aria-label="Work experience"
              >
                <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                  <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
                    Experience
                  </h2>
                </div>
                <div>
                  <ol className="group/list">
                    {experienceData.map((exp, index) => (
                      <li key={index} className="mb-12">
                        <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                          <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                            {exp.duration}
                          </header>
                          <div className="z-10 sm:col-span-6">
                            <h3 className="font-medium leading-snug text-slate-200">
                              <a
                                href={exp.url}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                              >
                                <span>
                                  {exp.role} ·{" "}
                                  <span className="inline-block">
                                    {exp.company}
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform ml-1 translate-y-px group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                                      aria-hidden="true"
                                    >
                                      <path
                                        // fillRule="evenodd"
                                        // clipRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              {exp.description}
                            </p>
                            <ul
                              className="mt-2 flex flex-wrap"
                              aria-label="Technologies used"
                            >
                              {exp.techStack.map((tech) => (
                                <li key={tech} className="mr-1.5 mt-2">
                                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium text-teal-300">
                                    {tech}
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ol>

                  <div className="mt-12">
                    <a
                      className="inline-flex items-baseline hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
                      href="../../public/Resume.pdf"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="View Full Résumé (opens in a new tab)"
                    >
                      <span>
                        View Full{" "}
                        <span className="inline-block">
                          Résumé
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                            aria-hidden="true"
                          >
                            <path
                              // fill-rule="evenodd"
                              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                              // clip-rule="evenodd"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </a>
                  </div>
                </div>
              </section>
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
                      <li key={i} className="mb-12">
                        <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                          <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                          <div className="z-10 sm:order-2 sm:col-span-6">
                            <h3>
                              <a
                                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base"
                                href={project.link}
                                target="_blank"
                                rel="noreferrer noopener"
                              >
                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                <span>
                                  {project.title}
                                  <span className="inline-block">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 20 20"
                                      fill="currentColor"
                                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                                      aria-hidden="true"
                                    >
                                      <path
                                        // fillRule="evenodd"
                                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                        clipRule="evenodd"
                                      />
                                    </svg>
                                  </span>
                                </span>
                              </a>
                            </h3>
                            <p className="mt-2 text-sm leading-normal">
                              {project.description}
                            </p>

                            {project.stars && (
                              <div className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-teal-300 focus-visible:text-teal-300">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                  className="mr-1 h-4 w-4"
                                >
                                  <path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" />
                                </svg>
                                <span>{project.stars}</span>
                              </div>
                            )}

                            {project.tech.length > 0 && (
                              <ul
                                className="mt-2 flex flex-wrap"
                                aria-label="Technologies used:"
                              >
                                {project.tech.map((t, j) => (
                                  <li key={j} className="mr-1.5 mt-2">
                                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                                      {t}
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <img
                            alt={project.title}
                            loading="lazy"
                            width="200"
                            height="200"
                            decoding="async"
                            className="aspect-video object-cover rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                            style={{ color: "transparent" }}
                            src={project.image}
                          />
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            </main>
          </div>
        </div>
      </main>
      
    </>
  );
}

export default Home;
