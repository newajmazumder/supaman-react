import { useRef } from "react";
import styles from "./GlobalHeader.module.css";
import navStyles from "../../styles/NavLinks.module.css";
import textBase from "../../styles/Text.module.css";
import buttonStyles from "../../styles/Button.module.css";
import linkStyles from "../../styles/Link.module.css";

export default function GlobalHeader() {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const openMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (typeof dialog.showModal === "function") {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }
    dialog.setAttribute("open", "");
  };

  const closeMenu = () => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }
    if (dialog.open) {
      dialog.close();
    }
  };

  return (
    <>
      {/* Sticky navigation header (styles come from scraped CSS assets). */}
      <header className={styles.header} data-global-header="true">
        <div className={`${styles.contentWrapper} ${styles.headerContent}`}>
          <a className={`${linkStyles.link} ${styles.logo}`} href="/">
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
                  <button className={`${buttonStyles.unstyled} ${navStyles.navLink}`}>
                    <span className={buttonStyles.buttonContent}>
                      <span className={`${textBase.text}`}>Product</span>
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
                  className={`${linkStyles.link} ${navStyles.navLink}`}
                  href="/solutions/enterprise"
                >
                  Enterprise
                </a>
              </li>
              <li className="">
                <a className={`${linkStyles.link} ${navStyles.navLink}`} href="/plans">
                  Pricing
                </a>
              </li>
              <li className="">
                <a className={`${linkStyles.link} ${navStyles.navLink}`} href="/contact">
                  Contact us
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles.ctas}>
            <div className={styles.ctaButtons}>
              <a
                className={`${linkStyles.link} ${buttonStyles.unstyled}`}
                aria-disabled="false"
                data-nav-link="true"
                href="https://superhuman.com/auth/signin"
              >
                <span className={buttonStyles.buttonContent}>
                  <span className={`${textBase.text} ${buttonStyles.text} ${styles.logInText}`}>
                    Log in
                  </span>
                </span>
              </a>
              <a
                className={`${linkStyles.link} ${buttonStyles.button} ${buttonStyles.primaryMysteria} ${buttonStyles.compact} ${styles.signUpButton}`}
                aria-disabled="false"
                href="https://superhuman.com/auth/signup?screen_hint=signup"
              >
                <span className={buttonStyles.buttonContent}>
                  <span className={`${textBase.text} ${buttonStyles.text} ${styles.signUpText}`}>
                    Sign up
                  </span>
                </span>
              </a>
            </div>
            <div className={styles.menuButton}>
              <button className={buttonStyles.unstyled} onClick={openMenu}>
                <span className={buttonStyles.buttonContent}>
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
            <dialog
              className={styles.dialog}
              ref={dialogRef}
              onCancel={closeMenu}
              onClick={(event) => {
                if (event.target === event.currentTarget) {
                  closeMenu();
                }
              }}
            >
              <div className={`${styles.column} ${styles.dialogContent}`}>
                <header className={styles.header}>
                  <div className={`${styles.contentWrapper} ${styles.headerContent}`}>
                    <a className={`${linkStyles.link} ${styles.logo}`} href="/">
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
                      <button className={buttonStyles.unstyled} onClick={closeMenu}>
                        <span className={buttonStyles.buttonContent}>
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
                        <button className={`${buttonStyles.unstyled} ${navStyles.navLink}`}>
                          <span className={buttonStyles.buttonContent}>
                            <span className={`${textBase.text}`}>Product</span>
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
                                className={`${linkStyles.link} ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/go-ai-assistant"
                              >
                                Superhuman Go
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`${linkStyles.link} ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/grammarly"
                              >
                                Grammarly
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`${linkStyles.link} ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="/products/coda"
                              >
                                Coda
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`${linkStyles.link} ${navStyles.navLink} ${navStyles.navLinkItem}`}
                                href="https://superhuman.com/products/mail"
                              >
                                Superhuman Mail
                              </a>
                            </li>
                            <li className={navStyles.navMenuListItem}>
                              <a
                                className={`${linkStyles.link} ${navStyles.navLink} ${navStyles.navLinkItem}`}
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
                          className={`${linkStyles.link} ${navStyles.navLink}`}
                          href="/solutions/enterprise"
                        >
                          Enterprise
                        </a>
                      </li>
                      <li className={navStyles.navListItem}>
                        <a className={`${linkStyles.link} ${navStyles.navLink}`} href="/plans">
                          Pricing
                        </a>
                      </li>
                      <li className={navStyles.navListItem}>
                        <a className={`${linkStyles.link} ${navStyles.navLink}`} href="/contact">
                          Contact us
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
                <footer className={styles.dialogFooter}>
                  <a
                    className={`${linkStyles.link} ${buttonStyles.unstyled}`}
                    aria-disabled="false"
                    data-nav-link="true"
                    href="https://superhuman.com/auth/signin"
                  >
                    <span className={buttonStyles.buttonContent}>
                      <span
                        className={`${textBase.text} ${buttonStyles.text} ${styles.logInText}`}
                      >
                        Log in
                      </span>
                    </span>
                  </a>
                  <a
                    className={`${linkStyles.link} ${buttonStyles.button} ${buttonStyles.primaryMysteria} ${buttonStyles.compact} ${styles.signUpButton}`}
                    aria-disabled="false"
                    href="https://superhuman.com/auth/signup?screen_hint=signup"
                  >
                    <span className={buttonStyles.buttonContent}>
                      <span
                        className={`${textBase.text} ${buttonStyles.text} ${styles.signUpText}`}
                      >
                        Sign up
                      </span>
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
