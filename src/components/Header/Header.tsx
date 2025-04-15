import SocialLinks from "../SocialLinks/SocialLinks";

export default function Header({ activeId, sections }) {
  return (
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
        <nav className="nav hidden lg:block" aria-label="In-page jump links">
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
      <SocialLinks />
    </header>
  );
}