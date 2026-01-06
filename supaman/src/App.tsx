import SuperhumanHead, {
  type SuperhumanHeadData,
} from "./components/SuperhumanHead";
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

const headData: SuperhumanHeadData = {
  title: "Superhuman: Docs, Mail, and AI That Work Everywhere",
  description:
    "Superhuman is the AI productivity suite that gives you superpowers everywhere you work. So you can be more creative, strategic, and impactful.",
  ogTitle: "Superhuman: Docs, Mail, and AI That Work Everywhere",
  ogDescription:
    "Superhuman is the AI productivity suite that gives you superpowers everywhere you work. So you can be more creative, strategic, and impactful.",
  ogUrl: "https://superhuman.com/",
  ogImage:
    "/assets/superhumanstatic.com/super-funnel/main/public/images/v1/social-share.png",
  twitterSite: "@Superhuman",
  cssLinks: [
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/d629e4820f855120.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/de4cc959be6b280a.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/a02750e403d01ddc.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/2885cd27d8dd6165.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/02381610e350f0d4.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/6b6f0377fd629164.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/1ef6efeaaa2d35a6.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/346f277257f21704.css",
    "/assets/superhumanstatic.com/super-funnel/main/b/0-11350/_next/static/css/a418de78a5aa7129.css",
  ],
  fontFaceCss: `@font-face {\n  font-family: "Super Sans";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Sans";\n  font-style: normal;\n  font-weight: 500;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Medium.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Sans Mono";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSans-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: normal;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-Regular.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: italic;\n  font-weight: 400;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-RegularItalic.otf') format('opentype');\n}\n\n@font-face {\n  font-family: "Super Serif";\n  font-style: normal;\n  font-weight: 580;\n  font-display: swap;\n  src: url('/assets/superhumanstatic.com/super-funnel/main/public/fonts/v1/SuperSerif-SemiBold.otf') format('opentype');\n}`,
  icons: [
    {
      rel: "icon",
      href: "/assets/superhumanstatic.com/super-funnel/main/public/images/v1/favicons/superhuman-icon.svg",
      sizes: "any",
      type: "image/svg+xml",
    },
    {
      rel: "icon",
      href: "/assets/superhumanstatic.com/super-funnel/main/public/images/v1/favicons/superhuman-icon-96x96.png",
      sizes: "96x96",
      type: "image/png",
    },
    {
      rel: "apple-touch-icon",
      href: "/assets/superhumanstatic.com/super-funnel/main/public/images/v1/favicons/superhuman-apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  ],
};

export default function App() {
  return (
    <>
      <SuperhumanHead data={headData} />
      <NoScriptTag />
      <HeroBackground />
      <SvgDefs />
      <GlobalHeader />
      <main>
        <BannerSection />
        <div className="page_multiSectionBackground__WAzbj">
          <div className="content-wrapper_contentWrapper__9WGiY page_withVerticalBars__dpqpG">
            <TrustedBySection />
            <SuiteSection />
          </div>
        </div>
        <ManifestoSection />
        <FinalCtaSection />
        <GlobalFooter />
      </main>
    </>
  );
}
