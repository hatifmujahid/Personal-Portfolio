import Project from "./project"
import { useGithubRepos, WorkingOn, GithubList } from "./github-projects"
import devday from "../assets/devday.png"
import coder from "../assets/coders_cup.png"

export default function Projects() {
  const { workingOn, repos, status } = useGithubRepos();

  return (
    <section
      id="projects"
      class="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <h2 className="text-2xl font-bold tracking-tight text-slate-200 sm:text-3xl my-6">
        Projects
      </h2>
      <WorkingOn workingOn={workingOn} status={status} />
      <div>
        <h3 className="mb-6 text-sm font-medium text-slate-200">Selected work</h3>
        <ul class="group/list">

          <li class="mb-12">
            <Project
              name="Agentic RFP Response Engine"
              description="Engineered an autonomous agent utilising RAG (Retrieval-Augmented Generation) to process technical specifications, featuring a self-correction loop to verify content against compliance guidelines."
              tags={["Python", "LangGraph", "Azure Logic Apps", "OpenAI", "RAG"]}
            />
          </li>

          <li class="mb-12">
            <Project
              name="Autonomous Financial Reconciliation Agent"
              description="Developed a multi-agent system to automate bank-to-GL reconciliation, utilising fuzzy matching and semantic data reasoning to identify anomalies, reducing manual overhead by 75%."
              tags={["Python", "Pandas", "OpenAI", "LangGraph", "SQL"]}
            />
          </li>

          <li class="mb-12">
            <Project
              name="Generative AI Malware Classifier"
              description="Designed a deep learning model to identify zero-day malicious software through data intelligence, achieving 96% detection accuracy on complex datasets."
              tags={["TensorFlow", "Streamlit", "Python"]}
            />
          </li>

          <li class="mb-12">
            <Project
              name="Grafana Dashboard for Azure"
              description="Implemented and managed centralised monitoring and alerting workflows using Grafana for cloud infrastructure hosted on Microsoft Azure, enabling proactive incident detection and improved system reliability."
              tags={["Grafana", "Azure", "CI/CD", "Monitoring"]}
            />
          </li>

          {/* <li class="mb-12">
            <Project
              name="ACM DevDay '24"
              link="https://acmdevday.com"
              description="A registration portal for ACM DevDay '24, a conference for developers, designers, and tech enthusiasts. Features a real-time AI-driven chatbot powered by IBM WatsonX."
              img={devday}
              tags={["React", "Node.js", "IBM WatsonX", "MongoDB"]}
            />
          </li>

          <li class="mb-12">
            <Project
              name="ACM Coder's Cup 2024"
              link="https://www.acmcoderscup.online/"
              description="Coding competition registration platform built with the MERN stack (MongoDB, Express.js, React.js, Node.js), hosted at acmcoderscup.online."
              img={coder}
              tags={["MongoDB", "Express.js", "React", "Node.js"]}
            />
          </li> */}

        </ul>
      </div>
      <GithubList repos={repos} status={status} />
    </section>
  );
}
