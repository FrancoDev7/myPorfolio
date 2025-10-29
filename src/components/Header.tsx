import { Github, Linkedin } from "lucide-react";
import type { HeaderProps } from "../Interfaces/interfaces.app";

const Header = ({ lang, onLanguageToggle }: HeaderProps) => {
  return (
    <>
      {/* header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border/50">
        <div className="container mx-auto max-w-6xl px-3 py-3 sm:px-6 lg:px-0 flex items-center justify-between">
          <div className="text-xs sm:text-lg font-mono">FrancoDev</div>

          {/* Social links and language toggle */}
          <div className="flex items-center gap-4">
            {/* Social navigation */}
            <nav className="flex gap-4">
              <a
                href="https://github.com/FrancoDev7"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>

              <a
                href="https://www.linkedin.com/in/francodev7/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </nav>

            {/* Language toggle button */}
            <button
              onClick={onLanguageToggle}
              className="cursor-pointer text-xs font-mono text-muted-foreground hover:text-foreground transition-colors px-2 py-1 border border-border rounded"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
