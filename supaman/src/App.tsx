import { useEffect } from "react";
import SuperhumanHead, { type SuperhumanHeadData } from "./components/SuperhumanHead";
import BannerSection from "./components/sections/BannerSection";
import FinalCtaSection from "./components/sections/FinalCtaSection";
import GlobalFooter from "./components/sections/GlobalFooter";
import GlobalHeader from "./components/sections/GlobalHeader";
import HeroBackground from "./components/sections/HeroBackground";
import ManifestoSection from "./components/sections/ManifestoSection";
import NoScriptTag from "./components/sections/NoScriptTag";
import SuiteSection from "./components/sections/SuiteSection";
import SvgDefs from "./components/sections/SvgDefs";
import TrustedBySection from "./components/sections/TrustedBySection";
import styles from "./styles/Homepage.module.css";

const headData: SuperhumanHeadData = {
  title: "Superhuman: Docs, Mail, and AI That Work Everywhere",
  description:
    "Superhuman is the AI productivity suite that gives you superpowers everywhere you work. So you can be more creative, strategic, and impactful.",
  ogTitle: "Superhuman: Docs, Mail, and AI That Work Everywhere",
  ogDescription:
    "Superhuman is the AI productivity suite that gives you superpowers everywhere you work. So you can be more creative, strategic, and impactful.",
  ogUrl: "https://superhuman.com/",
  ogImage: "/assets/images/social-share.png",
  twitterSite: "@Superhuman",
  // Scraped Superhuman styles that drive header/hero appearance.
  cssLinks: [
    "/styles/reset-theme-base.css",
    "/styles/layout-header-footer.css",
    "/styles/banner.css",
    "/styles/hero-page.css",
    "/styles/sections-tabbed-homepage.css",
    "/styles/typography-hero-bg.css",
  ],
  fontFaceCss: `@font-face {\n  font-family: "Super Sans";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Sans";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Medium.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Sans Mono";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-RegularItalic.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: normal;\n  font-weight: 580;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-SemiBold.otf') format('opentype');\n}`,
  icons: [
    {
      rel: "icon",
      href: "/assets/images/superhuman-icon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      href: "/assets/images/superhuman-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/assets/images/superhuman-apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};

export default function App() {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>('[data-global-header="true"]');
    const heroSection = document.querySelector<HTMLElement>('[data-hero-section="true"]');

    if (!header || !heroSection) {
      return;
    }

    let rafId = 0;
    const updateHeader = () => {
      rafId = 0;
      const rect = heroSection.getBoundingClientRect();
      const height = rect.height || 1;
      const progress = Math.min(1, Math.max(0, -rect.top / height));
      const opacity = `${Math.round(progress * 100)}%`;

      header.style.setProperty("--header-opacity", opacity);
      header.style.setProperty(
        "--header-has-blur",
        progress === 0 || progress >= 0.99 ? "initial" : "/* empty string */"
      );
      header.style.setProperty("color-scheme", progress >= 0.6 ? "light" : "dark");
      header.dataset.headerVariant = progress >= 0.6 ? "solid" : "transparent";
    };

    const onScroll = () => {
      if (rafId) {
        return;
      }
      rafId = window.requestAnimationFrame(updateHeader);
    };

    updateHeader();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
    };
  }, []);

  return (
    <div className={styles.homepage}>
      <SuperhumanHead data={headData} />
      <NoScriptTag />
      <HeroBackground />
      <SvgDefs />
      <GlobalHeader />
      <main>
        <BannerSection />
        <div className={styles.multiSectionBackground}>
          <div className={`${styles.contentWrapper} ${styles.withVerticalBars}`}>
            <TrustedBySection />
            <SuiteSection />
          </div>
        </div>
        <ManifestoSection />
        <FinalCtaSection />
        <GlobalFooter />
      </main>
    </div>
  );
}
