import type { FooterProps } from "../Interfaces/interfaces.app";
import { footerContent } from "../data/footerContent";

export const Footer = ({ lang }: FooterProps) => {
  const text = footerContent[lang];

  return (
    <footer>
      <div className="container mx-auto max-w-6xl px-4  py-16 sm:py-20 lg:py-24 text-center">
        <div className="mt-10 sm:mt-20 lg:mt-5 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row  gap-4 text-xs sm:text-sm text-muted-foreground "></div>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left side - CTA */}
          <div className="space-y-4 sm:space-y-6 mt-10">
            <h2 className="text-sm sm:text-lg lg:text-2xl font-bold text-">
              {text.cta}
            </h2>
          </div>

          {/* Right side - Contact links */}
          <div className="space-y-4 sm:space-y-6 lg:text-right">
            <p className="text-xs sm:text-lg font-mono text-muted-foreground">
              {text.contact}
            </p>
            <div className="space-y-4 ">
              <a
                href="mailto:francodevs01@gmail.com"
                className="block text-lg sm:text-xl hover:text-muted-foreground transition-colors break-all"
              >
                francodevs01@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 sm:mt-20 lg:mt-24 pt-6 sm:pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-muted-foreground font-mono">
          <p className="text-center md:text-right">
            Francisco Pereira - {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};
