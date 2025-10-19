import { useState } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { Proyectos } from "../components/Proyectos";
import { Experiencia } from "../components/Experiencia";
import { Footer } from "../components/Footer";

export const Home = () => {
  const [lang, setLang] = useState<"es" | "en">("es");

  const toggleLanguage = () => {
    setLang(lang === "es" ? "en" : "es");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header lang={lang} onLanguageToggle={toggleLanguage} />
      <main>
        <Hero lang={lang} />
        <Proyectos lang={lang} />
        <Experiencia lang={lang} />
      </main>
      <Footer lang={lang} />
    </div>
  );
};
