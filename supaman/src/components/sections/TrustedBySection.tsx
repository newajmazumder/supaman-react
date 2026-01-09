import styles from "./TrustedBySection.module.css";
import sectionStyles from "../../styles/Section.module.css";

export default function TrustedBySection() {
  return (
    <>
      <section className={sectionStyles.section}>
        <div className={`${styles.contentWrapper} ${styles.page} ${styles.section}`}>
          <p className={styles.heading}>
            Trusted by the most innovative companies in the world
          </p>
          <div className={styles.grid}>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="OpenAI"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-openai.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="Figma"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-figma.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="HubSpot"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-hubspot.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="Doordash"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-doordash.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="Expensify"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-expensify.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
            <div className={styles.cell}>
              <picture className={styles.asset}>
                <img
                  alt="Eventbrite"
                  className={styles.image}
                  src="/assets/images/trustedby-logo-eventbrite.svg"
                  width="228"
                  height="80"
                  loading="lazy"
                  fetchPriority="low"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 213.33333333333334px, (min-width: 1440px) 213.33333333333334px, 100vw"
                />
              </picture>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
