export default function About() {
  return (
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
  );
}