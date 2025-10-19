import { experienciaContent } from "../data/experienciaContent";
import type { ExperienceProps } from "../Interfaces/interfaces.app";

export const Experiencia = ({ lang }: ExperienceProps) => {
  const text = experienciaContent[lang];
  return (
    <section
      id="experience"
      className="container mx-auto max-w-6xl px-4 sm:px-6 py-12 md:py-16 lg:py-20"
    >
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
          {text.title}
        </h2>
      </div>

      <div className="space-y-6 md:space-y-8">
        {text.jobs.map((job, index) => (
          <div
            key={index}
            className="relative pl-6 sm:pl-8 border-l border-border"
          >
            <div className="absolute left-0 top-1 -translate-x-1/2">
              <div className="h-2 w-2 rounded-full bg-muted-foreground" />
            </div>

            <div className="space-y-2">
              {/* Title and Period Row */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <h3 className="text-base sm:text-lg font-semibold text-foreground">
                  {job.title}
                </h3>
                <p className="text-sm text-muted-foreground">{job.period}</p>
              </div>

              {/* Company - Always left aligned */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                <p className="text-sm text-muted-foreground font-medium">
                  {job.company}
                </p>
              </div>

              {/* Description */}
              <p className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-sm text-muted-foreground leading-relaxed">
                {job.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mt-3">
                {job.technologies.map((technology, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded border border-border/50"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
