import { useEffect, useRef, useState } from "react";
import styles from "./SuiteSection.module.css";
import textStyles from "../../styles/HomepageText.module.css";
import sectionStyles from "../../styles/Section.module.css";
import gridStyles from "../../styles/Grid.module.css";

const SECTION_IDS = [
  "tabbed-section-superhuman-mail",
  "tabbed-section-grammarly",
  "tabbed-section-coda",
  "tabbed-section-go",
];

export default function SuiteSection() {
  const [activeId, setActiveId] = useState(SECTION_IDS[0]);
  const sectionRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const tabHeaderRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            setActiveId(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    SECTION_IDS.forEach((id) => {
      const el = sectionRefs.current[id];
      if (el) {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (id: string) => {
    const el = sectionRefs.current[id];
    if (!el) {
      return;
    }
    const globalHeader = document.querySelector<HTMLElement>('[data-global-header="true"]');
    const offset =
      (globalHeader?.getBoundingClientRect().height ?? 0) +
      (tabHeaderRef.current?.getBoundingClientRect().height ?? 0);
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
    setActiveId(id);
  };
  return (
    <>
      <section
        className={sectionStyles.section}
        style={{ backgroundColor: "var(--neutral-10)" }}
      >
        <div className={`${styles.contentWrapper} ${styles.container}`}>
          <header className={styles.header} ref={tabHeaderRef}>
            <div className={styles.headerContent}>
              <h2 className={`text_text__RO8_0 ${textStyles.headingMedium}`}>
                Your Superhuman suite
              </h2>
              <a
                className="link_link__AAIEV button_button__RzPSK button_secondaryMysteria__aFWKF"
                aria-disabled="false"
                href="https://superhuman.com/plans"
              >
                <span className="button_buttonContent__3qg6Y">Get the suite</span>
              </a>
            </div>
            <div className={`${gridStyles.grid} ${styles.nav}`} role="tablist">
              <button
                className={`button_unstyled__Gf24r ${styles.navItem}${
                  activeId === "tabbed-section-superhuman-mail"
                    ? ` ${styles.navItemActive}`
                    : ""
                }`}
                role="tab"
                aria-selected={activeId === "tabbed-section-superhuman-mail"}
                aria-controls="tabbed-section-superhuman-mail"
                onClick={() => handleNavClick("tabbed-section-superhuman-mail")}
              >
                <span className="button_buttonContent__3qg6Y">
                  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23">
                    <use href="#superhuman-mail-with-background-icon"></use>
                  </svg>
                  <h2
                    className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.navItemText}`}
                  >
                    Mail
                  </h2>
                </span>
              </button>
              <button
                className={`button_unstyled__Gf24r ${styles.navItem}${
                  activeId === "tabbed-section-grammarly"
                    ? ` ${styles.navItemActive}`
                    : ""
                }`}
                role="tab"
                aria-selected={activeId === "tabbed-section-grammarly"}
                aria-controls="tabbed-section-grammarly"
                onClick={() => handleNavClick("tabbed-section-grammarly")}
              >
                <span className="button_buttonContent__3qg6Y">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                    <use href="#grammarly-bubble-icon"></use>
                  </svg>
                  <h2
                    className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.navItemText}`}
                  >
                    Grammarly
                  </h2>
                </span>
              </button>
              <button
                className={`button_unstyled__Gf24r ${styles.navItem}${
                  activeId === "tabbed-section-coda" ? ` ${styles.navItemActive}` : ""
                }`}
                role="tab"
                aria-selected={activeId === "tabbed-section-coda"}
                aria-controls="tabbed-section-coda"
                onClick={() => handleNavClick("tabbed-section-coda")}
              >
                <span className="button_buttonContent__3qg6Y">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                    <use href="#coda-logo-icon"></use>
                  </svg>
                  <h2
                    className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.navItemText}`}
                  >
                    Coda
                  </h2>
                </span>
              </button>
              <button
                className={`button_unstyled__Gf24r ${styles.navItem}${
                  activeId === "tabbed-section-go" ? ` ${styles.navItemActive}` : ""
                }`}
                role="tab"
                aria-selected={activeId === "tabbed-section-go"}
                aria-controls="tabbed-section-go"
                onClick={() => handleNavClick("tabbed-section-go")}
              >
                <span className="button_buttonContent__3qg6Y">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23">
                    <use href="#go-logo-icon"></use>
                  </svg>
                  <h2
                    className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.navItemText}`}
                  >
                    Go
                  </h2>
                </span>
              </button>
            </div>
          </header>
          <div className={`${styles.column} ${styles.gap9x} ${styles.content}`}>
            <div
              id="tabbed-section-superhuman-mail"
              ref={(el) => {
                sectionRefs.current["tabbed-section-superhuman-mail"] = el;
              }}
              style={{ scrollMarginTop: "120px" }}
            >
              <div
                className={`two-column_container__mjQRh two-column_mediumSingleCol__zTQo_ ${styles.contentContainer}`}
              >
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyStart} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.titleWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23">
                      <use href="#superhuman-mail-with-background-icon"></use>
                    </svg>
                    <h2
                      className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.title}`}
                    >
                      Mail
                    </h2>
                  </div>
                  <div className={`${styles.column} ${styles.contentBody}`}>
                    <div>
                      <h2
                        className={`text_text__RO8_0 text_headerLarge__NqQNP text_fontWeightRegular__x7Y7W ${styles.heading}`}
                      >
                        The most productive email app ever made
                      </h2>
                    </div>
                    <div className={styles.copyWrapper}>
                      <p className="text_text__RO8_0 text_bodyMedium__dDqhi">
                        Fly through your inbox twice as fast as before, never drop the ball again,
                        and save 4 hours every single week.
                      </p>
                    </div>
                    <div className={styles.linkWrapper}>
                      <a
                        className={`link_link__AAIEV ${styles.link}`}
                        href="https://superhuman.com/products/mail"
                      >
                        <span className={styles.linkText}>
                          Learn more about Mail
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="14.17"
                          fill="none"
                          viewBox="0 0 20 14.17"
                        >
                          <circle cx="1" cy="7.5" r="1" fill="currentColor"></circle>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.667"
                            d="M13 1.667 18.833 7.5 13 13.333M4.666 7.5h14.167"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <ul className="">
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Respond faster to what matters most
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Follow up on time, every time
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Write with AI that sounds like you
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Save 4 hours every single week
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyCenter} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={`animation-video_animationVideo__vx3xK ${styles.mediaVideo}`}>
                      <video
                        className="video_video__EuXrX"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/images/mail-fallback.png"
                        width="1358"
                        height="1336"
                      >
                        <source src="/assets/videos/mail_animation.mp4" type="video/mp4" />
                        Sorry, your browser doesn&#x27;t support embedded videos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabbed-section-grammarly"
              ref={(el) => {
                sectionRefs.current["tabbed-section-grammarly"] = el;
              }}
              style={{ scrollMarginTop: "120px" }}
            >
              <div
                className={`two-column_container__mjQRh two-column_mediumSingleCol__zTQo_ ${styles.contentContainer}`}
              >
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyStart} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.titleWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22">
                      <use href="#grammarly-bubble-icon"></use>
                    </svg>
                    <h2
                      className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.title}`}
                    >
                      Grammarly
                    </h2>
                  </div>
                  <div className={`${styles.column} ${styles.contentBody}`}>
                    <div>
                      <h2
                        className={`text_text__RO8_0 text_headerLarge__NqQNP text_fontWeightRegular__x7Y7W ${styles.heading}`}
                      >
                        Everyone’s favorite AI writing partner
                      </h2>
                    </div>
                    <div className={styles.copyWrapper}>
                      <p className="text_text__RO8_0 text_bodyMedium__dDqhi">
                        Turn your thoughts into writing that’s clear, credible, and impossible to
                        ignore.
                      </p>
                    </div>
                    <div className={styles.linkWrapper}>
                      <a
                        className={`link_link__AAIEV ${styles.link}`}
                        href="https://superhuman.com/products/grammarly"
                      >
                        <span className={styles.linkText}>
                          Learn more about Grammarly
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="14.17"
                          fill="none"
                          viewBox="0 0 20 14.17"
                        >
                          <circle cx="1" cy="7.5" r="1" fill="currentColor"></circle>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.667"
                            d="M13 1.667 18.833 7.5 13 13.333M4.666 7.5h14.167"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <ul className="">
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Works everywhere you write
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Find the right words instantly
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Write with AI that adapts to your tone and voice
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Let your brilliance shine
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyCenter} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={`animation-video_animationVideo__vx3xK ${styles.mediaVideo}`}>
                      <video
                        className="video_video__EuXrX"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/images/grammarly-fallback.png"
                        width="1358"
                        height="1336"
                      >
                        <source src="/assets/videos/grammarly-animation.mp4" type="video/mp4" />
                        Sorry, your browser doesn&#x27;t support embedded videos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabbed-section-coda"
              ref={(el) => {
                sectionRefs.current["tabbed-section-coda"] = el;
              }}
              style={{ scrollMarginTop: "120px" }}
            >
              <div
                className={`two-column_container__mjQRh two-column_mediumSingleCol__zTQo_ ${styles.contentContainer}`}
              >
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyStart} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.titleWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                      <use href="#coda-logo-icon"></use>
                    </svg>
                    <h2
                      className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.title}`}
                    >
                      Coda
                    </h2>
                  </div>
                  <div className={`${styles.column} ${styles.contentBody}`}>
                    <div>
                      <h2
                        className={`text_text__RO8_0 text_headerLarge__NqQNP text_fontWeightRegular__x7Y7W ${styles.heading}`}
                      >
                        The all-in-one AI workspace for teams
                      </h2>
                    </div>
                    <div className={styles.copyWrapper}>
                      <p className="text_text__RO8_0 text_bodyMedium__dDqhi">
                        Build everything from wikis, through project plans, to goal trackers —
                        keeping everyone perfectly in sync.
                      </p>
                    </div>
                    <div className={styles.linkWrapper}>
                      <a
                        className={`link_link__AAIEV ${styles.link}`}
                        href="https://superhuman.com/products/coda"
                      >
                        <span className={styles.linkText}>
                          Learn more about Coda
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="14.17"
                          fill="none"
                          viewBox="0 0 20 14.17"
                        >
                          <circle cx="1" cy="7.5" r="1" fill="currentColor"></circle>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.667"
                            d="M13 1.667 18.833 7.5 13 13.333M4.666 7.5h14.167"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <ul className="">
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Connect Slack, Jira, Salesforce, and 800+ tools
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Build your team wiki, project plans, and company goal trackers
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Create a single source of truth for all your team’s knowledge
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Save time on manual tasks with Coda AI
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyCenter} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={`animation-video_animationVideo__vx3xK ${styles.mediaVideo}`}>
                      <video
                        className="video_video__EuXrX"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/images/coda-fallback.png"
                        width="1358"
                        height="1336"
                      >
                        <source src="/assets/videos/coda-animation.mp4" type="video/mp4" />
                        Sorry, your browser doesn&#x27;t support embedded videos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              id="tabbed-section-go"
              ref={(el) => {
                sectionRefs.current["tabbed-section-go"] = el;
              }}
              style={{ scrollMarginTop: "120px" }}
            >
              <div
                className={`two-column_container__mjQRh two-column_mediumSingleCol__zTQo_ ${styles.contentContainer}`}
              >
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyStart} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.titleWrapper}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23">
                      <use href="#go-logo-icon"></use>
                    </svg>
                    <h2
                      className={`text_text__RO8_0 text_headerSmall__q_Fy3 text_fontWeightRegular__x7Y7W ${styles.title}`}
                    >
                      Go
                    </h2>
                  </div>
                  <div className={`${styles.column} ${styles.contentBody}`}>
                    <div>
                      <h2
                        className={`text_text__RO8_0 text_headerLarge__NqQNP text_fontWeightRegular__x7Y7W ${styles.heading}`}
                      >
                        AI that actually works in every app you use
                      </h2>
                    </div>
                    <div className={styles.copyWrapper}>
                      <p className="text_text__RO8_0 text_bodyMedium__dDqhi">
                        Go is the proactive AI assistant that knows what you know and offers help
                        without you having to ask.
                      </p>
                    </div>
                    <div className={styles.linkWrapper}>
                      <a
                        className={`link_link__AAIEV ${styles.link}`}
                        href="https://superhuman.com/products/go-ai-assistant"
                      >
                        <span className={styles.linkText}>
                          Learn more about Go
                        </span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="14.17"
                          fill="none"
                          viewBox="0 0 20 14.17"
                        >
                          <circle cx="1" cy="7.5" r="1" fill="currentColor"></circle>
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.667"
                            d="M13 1.667 18.833 7.5 13 13.333M4.666 7.5h14.167"
                          ></path>
                        </svg>
                      </a>
                    </div>
                    <ul className="">
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Connect Gmail, Drive, Jira, and all of your favorite apps
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Say the right thing with the right info, everywhere you write
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Schedule meetings without leaving the conversation
                      </li>
                      <li className={`${styles.listItemBase} ${styles.listItem}`}>
                        Work with any app, from any app
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  className={`${styles.column} ${styles.alignStretch} ${styles.justifyCenter} two-column_column__I_bC4`}
                  style={{ ColumnGridSpan: "6" }}
                >
                  <div className={styles.mediaWrapper}>
                    <div className={`animation-video_animationVideo__vx3xK ${styles.mediaVideo}`}>
                      <video
                        className="video_video__EuXrX"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="/assets/images/go-fallback.png"
                        width="1358"
                        height="1334"
                      >
                        <source src="/assets/videos/go-animation.mp4" type="video/mp4" />
                        Sorry, your browser doesn&#x27;t support embedded videos.
                      </video>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
