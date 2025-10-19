import { Github } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import type { ProjectsProps } from "../Interfaces/interfaces.app";
import { ProyectosContent } from "../data/proyectosContent";

export const Proyectos = ({ lang }: ProjectsProps) => {
  const text = ProyectosContent[lang];

  return (
    <section
      id="projects"
      className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          {text.title}
        </h2>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
        {text.projects.map((project, index) => (
          <Card
            key={index}
            className="p-3 sm:p-4 bg-card border border-border  transition-all duration-300 group"
          >
            {/* Header del card */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
                <span className="text-xl sm:text-2xl flex-shrink-0">
                  {project.icon}
                </span>
                <h3 className="text-base sm:text-lg font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                  {project.name}
                </h3>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors flex-shrink-0 ml-2"
                aria-label={`GitHub repository for ${project.name}`}
              >
                <Github className="h-4 w-4 sm:h-5 sm:w-5" />
              </a>
            </div>

            <p className="text-xs sm:text-sm text-muted-foreground mb-3 leading-relaxed">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {project.tags.map((tag, tagIndex) => (
                <Badge
                  key={tagIndex}
                  variant="secondary"
                  className="text-xs px-2 py-0.5 bg-secondary text-secondary-foreground"
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};
