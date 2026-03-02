import { ResponsivePie } from "@nivo/pie";
import "./habilidades.css";
import type { ReactNode } from "react";
import {
  FaReact,
  FaJava,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
  SiPostgresql,
  SiJson
} from "react-icons/si";

const data = [
  { id: "React", value: 40, color: "#61DAFB" },
  { id: "Java", value: 35, color: "#f89820" },
  { id: "TypeScript", value: 20, color: "#3178C6" },
  { id: "Spring Boot", value: 15, color: "#6DB33F" },
  { id: "JSON", value: 5, color: "#ec9ffc" },
  { id: "Git", value: 5, color: "#F05032" },
  { id: "PostgreSQL", value: 5, color: "#336791" },
  { id: "Python", value: 15, color: "#3776AB" },
  { id: "JavaScript", value: 20, color: "#F7DF1E" },
  { id: "HTML", value: 20, color: "#E34F26" },
  { id: "CSS", value: 20, color: "#1572B6" }
];

export default function Habilidades() {
  const icons: Record<string, ReactNode> = {
    React: <FaReact color="#61DAFB" size={42} />,
    Java: <FaJava color="#f89820" size={42} />,
    TypeScript: <SiTypescript color="#3178C6" size={42} />,
    "Spring Boot": <SiSpringboot color="#6DB33F" size={42} />,
    
    JSON: <SiJson color="#ec9ffc" size={42} />,
    Git: <FaGitAlt color="#F05032" size={42} />,
    PostgreSQL: <SiPostgresql color="#336791" size={42} />,
    Python: <FaPython color="#3776AB" size={42} />,
    JavaScript: <FaJs color="#F7DF1E" size={42} />,
    HTML: <FaHtml5 color="#E34F26" size={42} />,
    CSS: <FaCss3Alt color="#1572B6" size={42} />
  };

  return (
    <>
      <div className="titulo2" id="habilidades">
        <h1 className="titulo">HABILIDADES</h1>
      </div>

      <div style={{ height: "500px" }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 40, left: 80 }}
          innerRadius={0.65}
          padAngle={1}
          cornerRadius={8}
          activeOuterRadiusOffset={15}
          colors={{ datum: "data.color" }}
          borderWidth={2}
          borderColor={{
            from: "color",
            modifiers: [["darker", 0.3]],
          }}
          enableArcLinkLabels={false}
          arcLabelsSkipAngle={10}
          arcLabelsTextColor="#ffffff"
          tooltip={({ datum }: any) => (
            <div
              style={{
                background: "#0f172a",
                padding: "12px 16px",
                borderRadius: "10px",
                color: "white",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.4)"
              }}
            >
              {icons[datum.id]}
              <div>
                <strong>{datum.id}</strong>
                <div style={{ fontSize: "13px", opacity: 0.8 }}>
                  Nível: {datum.value}
                </div>
              </div>
            
            </div>
          )}
        />
      </div>
      <div className="organizar">
      <div className="icons-container">
  {Object.values(icons).map((icon, index) => (
    <div key={index} className="icon-item">
      {icon}
    </div>
    
  ))}
</div>
</div>
    </>
  );
}