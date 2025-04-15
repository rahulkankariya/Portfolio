type Experience = {
    company: string;
    role: string;
    duration: string;
    url:string,
    description?: string,
    techStack:string[];
  };
interface ExperienceItemProps {
    exp: Experience;
  }
export default function ExperienceItem({ exp }: ExperienceItemProps) {
    return (
      <li className="mb-12">
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
                      <path d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" />
                    </svg>
                  </span>
                </span>
              </a>
            </h3>
            <p className="mt-2 text-sm leading-normal">
              {exp.description}
            </p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
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
    );
  }