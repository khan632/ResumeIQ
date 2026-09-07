import Navbar from "~/component/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "~/constant";
import { ResumeCard } from "~/component/ResumeCard";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ResumeIQ" },
    { name: "description", content: "Smarter Resume. Smarter Applications." },
  ];
}

export default function Home() {
  return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
    <Navbar />
    <section className="main-section">
      <div className="page-heading py-16">
        <h1>Job Hunt Got Messy? We Got You.</h1>
        <h2>Find the red flags before recruiters do.</h2>
      </div>
    {
      resumes.length > 0 && (
        <div className="resume-section">
          {
            resumes.map((resume) => {
              return(
                <ResumeCard key={resume.id} resume={resume} />
              )
            })
          }
        </div>
      )
    }
    </section>
  </main>;
}
