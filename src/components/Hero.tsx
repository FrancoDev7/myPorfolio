import { HeroContent } from "../data/HeroContent";
import type { HeroProps } from "../Interfaces/interfaces.app";

const Hero = ({ lang }: HeroProps) => {
  const text = HeroContent[lang];

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-mono text-muted-foreground">
                {text.greeting}
              </p>
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                {text.title1}
                <br />
                <span className="text-muted-foreground">{text.title2}</span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-md">
              {text.description}
            </p>

            <div className="flex items-center gap-6 sm:gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono">
                  {text.available}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Large accent element */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div className="w-64 h-64 xl:w-80 xl:h-80 border border-border relative">
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent" />
                <div className="absolute bottom-0 right-0 w-24 h-24 xl:w-32 xl:h-32 border-t border-l border-border" />
                <div className="absolute top-0 left-0 w-20 h-20 xl:w-24 xl:h-24 border-b border-r border-border" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
