import Footer from "app/components/footer";
export default function Page() {
  const experiences = [
    {
      company: "Zeel Infotech",
      role: "Software Engineer",
      period: "June 2024 – May 2025",
      tech: ["Delphi", "MySQL", "PLSQL"],
      description:
        "Built and maintained enterprise communication and networking software in Delphi, supporting regulatory compliance and real-time network monitoring for client systems.",
    },
  ];
  return (
    <div>
      <h1 className="font-semibold tracking-tighter mb-5">about</h1>

      <div className="space-y-6">
        <p className="text-gray-300">
          I'm a full-stack developer working mostly in the Node.js and React
          world, though my first real job had me writing Delphi for a telecom
          monitoring system, so I've made peace with jumping into whatever a
          company already runs on. I started at Zeel Infotech building a Network
          Management System for telecom infra. Real-time SNMP monitoring,
          dashboards that surface faults before someone calls in a panic, and
          watchdog services that auto-restart things that fail.
        </p>
      </div>
      <hr className="mt-8 mb-8 border-t border-gray-100" />
      <div className="space-y-6">
        <p className="text-gray-300">
          Frontend is React, with Tailwind and Sass for styling. Backend is Node
          — Express when the project is simple, NestJS when it needs more
          structure and I want the compiler yelling at me before my users do.
          Data lives in PostgreSQL, MongoDB, MySQL or Redis depending on what's
          being asked of it. Redis mostly shows up when something needs to be
          fast or queued. Infra is AWS (EC2, ECS, S3, RDS) with Docker and
          Kubernetes holding it together, GitHub Actions for CI/CD, and
          Prometheus/Grafana so I know something's wrong before a user tells me.
        </p>
      </div>
      <hr className="mt-8 mb-8 border-t border-gray-100" />
      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className=" p-3 shadow-md border border-transparent transition-colors duration-300"
          >
            <div className="flex justify-between items-start mb-2">
              <h1 className=" ">{exp.company}</h1>
              <span className=" text-gray-400 text-xs">{exp.period}</span>
            </div>

            <p className=" text-gray-300 mb-2">{exp.role}</p>

            <p className=" text-gray-300 mb-4">{exp.description}</p>

            {/* <div className="flex flex-wrap gap-2 ">
              {exp.tech.map((tech) => (
                <span
                  key={tech}
                  className="bg-gray-800 text-xs px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div> */}
          </div>
        ))}
      </div>
      <hr className="mt-8 mb-8 border-t border-gray-300" />
      <div className="my-8">
        <Footer />
      </div>
    </div>
  );
}
