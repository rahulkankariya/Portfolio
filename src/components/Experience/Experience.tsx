import ExperienceItem from "./ExperienceDetails";

const experienceData = [
  {
    company: "GTS Infosoft",
    role: "Node.js Backend Developer",
    duration: "Dec 2021 — Nov 2024",
    url: "https://gtsinfosoft.com/",
    description: "Built scalable RESTful APIs using Node.js and Express.js, efficiently managing over 10,000 concurrent users. Integrated secure payment gateways (Stripe, PayPal, PhonePe, CCAvenue) and real-time communication with Twilio and Branch.io. Contributed to responsive, high-performance web apps with React and Tailwind CSS.",
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
      "Third-Party APIs (under NDA)",
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
    description: "Worked on backend services using Express.js and MongoDB. Developed internal APIs and helped integrate third-party APIs under NDA-based clients.",
    techStack: ["Node.js", "Express.js", "MongoDB", "Postman", "Javascript"],
  },
  {
    company: "Suncity Techno",
    role: "Web Developer",
    duration: "Mar 2021 — Aug 2021",
    url: "https://www.suncitytechno.com/",
    description: "Created web components and dynamic content for WordPress sites. Gained hands-on experience in responsive design and basic backend workflows.",
    techStack: ["HTML", "CSS", "JS", "PHP", "jQuery"],
  },
];

export default function Experience() {
  return (
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
            <ExperienceItem key={index} exp={exp} />
          ))}
        </ol>
        <div className="mt-12">
          <a
            className="inline-flex items-baseline hover:text-teal-300 focus-visible:text-teal-300 font-semibold text-slate-200 group/link text-base"
            href="/Resume.pdf"
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
                  <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}