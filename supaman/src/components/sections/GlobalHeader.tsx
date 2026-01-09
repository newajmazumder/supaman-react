import styles from "./GlobalHeader.module.css";
import navStyles from "../../styles/NavLinks.module.css";

export default function GlobalHeader() {
  return (
    <>
      {/* Sticky navigation header (styles come from scraped CSS assets). */}
      <header className={styles.header} data-global-header="true">
        <div className={`${styles.contentWrapper} ${styles.headerContent}`}>
          <a className={`link_link__AAIEV ${styles.logo}`} href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              width="168"
              fill="currentColor"
              aria-label="Superhuman Home"
            >
              <use href="#superhuman-logo"></use>
            </svg>
          </a>
          <nav className={styles.nav}>
            <ul className={`${navStyles.navList} ${navStyles.primary}`}>
              <li className="">
                <div aria-expanded="false" aria-haspopup="menu" id="«R1l9mH1»">
                  <button className={`button_unstyled__Gf24r ${navStyles.navLink}`}>
                    <span className="button_buttonContent__3qg6Y">
                      <span className="text_text__RO8_0">Product</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="10"
                        height="10"
                        className={navStyles.icon}
                      >
                        <use href="#arrow-down-icon"></use>
                      </svg>
                    </span>
                  </button>
                </div>
              </li>
              <li className="">
                <a
                  className={`link_link__AAIEV ${navStyles.navLink}`}
                  href="/solutions/enterprise"
                >
                  Enterprise
                </a>
              </li>
              <li className="">
                <a className={`link_link__AAIEV ${navStyles.navLink}`} href="/plans">
                  Pricing
                </a>
              </li>
              <li className="">
                <a className={`link_link__AAIEV ${navStyles.navLink}`} href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.ctas}>
            <div className={styles.ctaButtons}>
              <a
                className="link_link__AAIEV button_unstyled__Gf24r"
                aria-disabled="false"
                data-nav-link="true"
                href="https://superhuman.com/auth/signin"
              >
                <span className="button_buttonContent__3qg6Y">
                  <span className="text_text__RO8_0 button_text__zGLt3">Log in</span>
                </span>
              </a>
              <a
                className="link_link__AAIEV button_button__RzPSK button_primaryMysteria__gdDUj button_compact__d5yM_"
                aria-disabled="false"
                href="https://superhuman.com/auth/signup?screen_hint=signup"
              >
                <span className="button_buttonContent__3qg6Y">
                  <span className="text_text__RO8_0 button_text__zGLt3">Sign up</span>
                </span>
              </a>
            </div>
            <div className={styles.menuButton}>
              <button className="button_unstyled__Gf24r">
                <span className="button_buttonContent__3qg6Y">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="42"
                    height="42"
                    aria-label="Open navigation menu"
                  >
                    <use href="#menu-icon"></use>
                  </svg>
                </span>
              </button>
            </div>
            <dialog className={styles.dialog}>
              <div className={`${styles.column} ${styles.dialogContent}`}>
                <header className={styles.header}>
                  <div className={`${styles.contentWrapper} ${styles.headerContent}`}>
                    <a className={`link_link__AAIEV ${styles.logo}`} href="/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="25"
                        width="168"
                        fill="currentColor"
                        aria-label="Superhuman Home"
                      >
                        <use href="#superhuman-logo"></use>
                      </svg>
                    </a>
                    <div className={styles.ctas}>
                      <button className="button_unstyled__Gf24r">
                        <span className="button_buttonContent__3qg6Y">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="42"
                            height="42"
                            aria-label="Dismiss navigation menu"
                          >
                            <use href="#close-icon"></use>
                          </svg>
                        </span>
                      </button>
                    </div>
                  </div>
                </header>
                <div className={styles.dialogBody}>
                  <nav className="">
                    <ul className={`${navStyles.navList} ${navStyles.secondary}`}>
                      <li className={navStyles.navListItem}>
                        <button className={`button_unstyled__Gf24r ${navStyles.navLink}`}>
                          <span className="button_buttonContent__3qg6Y">
                            <span className="text_text__RO8_0">Product</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="10"
                              height="10"
                              className={navStyles.icon}
                            >
                              <use href="#arrow-down-icon"></use>
                            </svg>
                          </span>
                        </button>
                        <div
                          role="menu"
                          className={`${navStyles.navLinkItemContainer} display-none`}
                        >
                          <ul className={`${styles.column} ${styles.gap4x}`}>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`link_link__AAIEV ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/go-ai-assistant"
                              >
                                Superhuman Go
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`link_link__AAIEV ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/grammarly"
                              >
                                Grammarly
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`link_link__AAIEV ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/coda"
                              >
                                Coda
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`link_link__AAIEV ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="https://superhuman.com/products/mail"
                              >
                                Superhuman Mail
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`link_link__AAIEV ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="https://superhuman.com/store/agents"
                              >
                                Agent Store
                              </a>
                            </li>
                          </ul>
                        </div>
                      </li>
                      <li className={navStyles.navListItem}>
                        <a
                          className={`link_link__AAIEV ${navStyles.navLink}`}
                          href="/solutions/enterprise"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li className={navStyles.navListItem}>
                        <a className={`link_link__AAIEV ${navStyles.navLink}`} href="/plans">
                          Pricing
                        </a>
                      </li>
                      <li className={navStyles.navListItem}>
                        <a className={`link_link__AAIEV ${navStyles.navLink}`} href="/contact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <footer className={styles.dialogFooter}>
                  <a
                    className="link_link__AAIEV button_unstyled__Gf24r"
                    aria-disabled="false"
                    data-nav-link="true"
                    href="https://superhuman.com/auth/signin"
                  >
                    <span className="button_buttonContent__3qg6Y">
                      <span className="text_text__RO8_0 button_text__zGLt3">Log in</span>
                    </span>
                  </a>
                  <a
                    className="link_link__AAIEV button_button__RzPSK button_primaryMysteria__gdDUj button_compact__d5yM_"
                    aria-disabled="false"
                    href="https://superhuman.com/auth/signup?screen_hint=signup"
                  >
                    <span className="button_buttonContent__3qg6Y">
                      <span className="text_text__RO8_0 button_text__zGLt3">Sign up</span>
                    </span>
                  </a>
                </footer>
              </div>
            </dialog>
          </div>
        </div>
      </header>
    </>
  );
}
