import { HeroContent } from "../data/HeroContent";
import type { HeroProps } from "../Interfaces/interfaces.app";

const Hero = ({ lang }: HeroProps) => {
  const text = HeroContent[lang];

  return (
    <section className="min-h-screen flex items-center pt-16 sm:pt-15 lg:pt-5 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl text-center lg:text-left">
        <div className="grid lg:grid-cols-2 items-center sm:gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <div className="space-y-6 sm:space-y-6 animate-fade-in  order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-sm sm:text-md lg:text-lg font-mono ">
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

            <div className="flex items-center justify-center lg:justify-start gap-6 sm:gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs sm:text-sm font-mono">
                  {text.available}
                </span>
              </div>
            </div>
          </div>

          {/* Right side - Profile image */}
          <div className="flex items-center justify-center mb-8 lg:mb-0 order-1 lg:order-2">
            <img
              src="/Photo.webp"
              alt="Foto de perfil"
              className="w-50 h-50 sm:w-52 sm:h-52 lg:w-64 lg:h-64 xl:w-80 xl:h-80 rounded-full object-cover border border-border shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
