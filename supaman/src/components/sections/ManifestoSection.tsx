import styles from "./ManifestoSection.module.css";
import textBase from "../../styles/Text.module.css";
import textStyles from "../../styles/HomepageText.module.css";
import sectionStyles from "../../styles/Section.module.css";
import gridStyles from "../../styles/Grid.module.css";
import buttonStyles from "../../styles/Button.module.css";
import linkStyles from "../../styles/Link.module.css";
import mediaStyles from "../../styles/Media.module.css";

export default function ManifestoSection() {
  return (
    <>
      <section
        className={sectionStyles.section}
        style={{ backgroundColor: "var(--green-90)" }}
        data-color-scheme="dark"
      >
        <div className={styles.contentWrapper}>
          <div className={`${gridStyles.grid} ${gridStyles.isReversed} ${styles.grid}`}>
            <div className={`${styles.columnLayout} ${styles.column}`}>
              <h2 className={`${textBase.text} ${textStyles.headingMedium} ${styles.heading}`}>
                Becoming Superhuman.
              </h2>
              <p className={`${textBase.text} ${textStyles.copy} ${styles.copy}`}>
                When AI works everywhere you work, it starts to change <em>how</em> you work. At
                first, you think faster and more deeply. Before you know it, you have the time to be
                more creative, strategic, and impactful—free to do what only you can do.
              </p>
              <a
                className={`${linkStyles.link} ${buttonStyles.button} ${buttonStyles.secondaryHeart}`}
                aria-disabled="false"
                href="https://blog.superhuman.com/introducing-new-superhuman/"
              >
                <span className={buttonStyles.buttonContent}>
                  <span className={`${textBase.text} ${buttonStyles.text}`}>
                    Read our announcement
                  </span>
                </span>
              </a>
            </div>
            <picture className={`${mediaStyles.responsivePicture} full-bleed ${styles.image}`}>
              <source
                srcSet="/assets/images/homepage-manifesto.webp__w_375_fm_avif 375w, assets/images/homepage-manifesto.webp__w_640_fm_avif 640w, assets/images/homepage-manifesto.webp__w_750_fm_avif 750w, assets/images/homepage-manifesto.webp__w_768_fm_avif 768w, assets/images/homepage-manifesto.webp__w_1080_fm_avif 1080w, assets/images/homepage-manifesto.webp__w_1125_fm_avif 1125w, assets/images/homepage-manifesto.webp__w_1280_fm_avif 1280w, assets/images/homepage-manifesto.webp__w_1536_fm_avif 1536w, assets/images/homepage-manifesto.webp__w_1920_fm_avif 1920w, assets/images/homepage-manifesto.webp__w_2160_fm_avif 2160w, assets/images/homepage-manifesto.webp__w_2304_fm_avif 2304w, assets/images/homepage-manifesto.webp__w_3240_fm_avif 3240w"
                sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                type="image/avif"
              />
              <source
                srcSet="/assets/images/homepage-manifesto.webp__w_375_fm_webp 375w, assets/images/homepage-manifesto.webp__w_640_fm_webp 640w, assets/images/homepage-manifesto.webp__w_750_fm_webp 750w, assets/images/homepage-manifesto.webp__w_768_fm_webp 768w, assets/images/homepage-manifesto.webp__w_1080_fm_webp 1080w, assets/images/homepage-manifesto.webp__w_1125_fm_webp 1125w, assets/images/homepage-manifesto.webp__w_1280_fm_webp 1280w, assets/images/homepage-manifesto.webp__w_1536_fm_webp 1536w, assets/images/homepage-manifesto.webp__w_1920_fm_webp 1920w, assets/images/homepage-manifesto.webp__w_2160_fm_webp 2160w, assets/images/homepage-manifesto.webp__w_2304_fm_webp 2304w, assets/images/homepage-manifesto.webp__w_3240_fm_webp 3240w"
                sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                type="image/webp"
              />
              <source
                srcSet="/assets/images/homepage-manifesto.webp__w_375 375w, assets/images/homepage-manifesto.webp__w_640 640w, assets/images/homepage-manifesto.webp__w_750 750w, assets/images/homepage-manifesto.webp__w_768 768w, assets/images/homepage-manifesto.webp__w_1080 1080w, assets/images/homepage-manifesto.webp__w_1125 1125w, assets/images/homepage-manifesto.webp__w_1280 1280w, assets/images/homepage-manifesto.webp__w_1536 1536w, assets/images/homepage-manifesto.webp__w_1920 1920w, assets/images/homepage-manifesto.webp__w_2160 2160w, assets/images/homepage-manifesto.webp__w_2304 2304w, assets/images/homepage-manifesto.webp__w_3240 3240w"
                sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
              />
              <img
                alt="Girl drafting a Superhuman manifesto"
                className={`${mediaStyles.imageCover} ${mediaStyles.responsivePicture}`}
                src="/assets/images/homepage-manifesto.webp__w_1080"
                width="1080"
                height="888.2386363636364"
                loading="lazy"
                fetchPriority="low"
                sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
              />
            </picture>
          </div>
        </div>
      </section>
    </>
  );
}
