import styles from "./FinalCtaSection.module.css";
import textStyles from "../../styles/HomepageText.module.css";
import sectionStyles from "../../styles/Section.module.css";

export default function FinalCtaSection() {
  return (
    <>
      <section
        className={sectionStyles.section}
        style={{
          background:
            "center/cover no-repeat, linear-gradient(270deg, #554DCB 9.04%, #86CBF9 84.36%, #F7DBFF 100%)",
        }}
      >
        <div className={sectionStyles.background}>
          <picture className="picture_responsive__QoHw7">
            <source
              srcSet="/assets/images/homepage-tonal-flower.webp__w_375_fm_avif 375w, assets/images/homepage-tonal-flower.webp__w_750_fm_avif 750w, assets/images/homepage-tonal-flower.webp__w_768_fm_avif 768w, assets/images/homepage-tonal-flower.webp__w_1080_fm_avif 1080w, assets/images/homepage-tonal-flower.webp__w_1125_fm_avif 1125w, assets/images/homepage-tonal-flower.webp__w_1280_fm_avif 1280w, assets/images/homepage-tonal-flower.webp__w_1536_fm_avif 1536w, assets/images/homepage-tonal-flower.webp__w_2160_fm_avif 2160w, assets/images/homepage-tonal-flower.webp__w_2304_fm_avif 2304w, assets/images/homepage-tonal-flower.webp__w_2560_fm_avif 2560w, assets/images/homepage-tonal-flower.webp__w_3240_fm_avif 3240w, assets/images/homepage-tonal-flower.webp__w_3840_fm_avif 3840w"
              sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 1280px, (min-width: 1440px) 1280px, 100vw"
              type="image/avif"
            />
            <source
              srcSet="/assets/images/homepage-tonal-flower.webp__w_375_fm_webp 375w, assets/images/homepage-tonal-flower.webp__w_750_fm_webp 750w, assets/images/homepage-tonal-flower.webp__w_768_fm_webp 768w, assets/images/homepage-tonal-flower.webp__w_1080_fm_webp 1080w, assets/images/homepage-tonal-flower.webp__w_1125_fm_webp 1125w, assets/images/homepage-tonal-flower.webp__w_1280_fm_webp 1280w, assets/images/homepage-tonal-flower.webp__w_1536_fm_webp 1536w, assets/images/homepage-tonal-flower.webp__w_2160_fm_webp 2160w, assets/images/homepage-tonal-flower.webp__w_2304_fm_webp 2304w, assets/images/homepage-tonal-flower.webp__w_2560_fm_webp 2560w, assets/images/homepage-tonal-flower.webp__w_3240_fm_webp 3240w, assets/images/homepage-tonal-flower.webp__w_3840_fm_webp 3840w"
              sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 1280px, (min-width: 1440px) 1280px, 100vw"
              type="image/webp"
            />
            <source
              srcSet="/assets/images/homepage-tonal-flower.webp__w_375 375w, assets/images/homepage-tonal-flower.webp__w_750 750w, assets/images/homepage-tonal-flower.webp__w_768 768w, assets/images/homepage-tonal-flower.webp__w_1080 1080w, assets/images/homepage-tonal-flower.webp__w_1125 1125w, assets/images/homepage-tonal-flower.webp__w_1280 1280w, assets/images/homepage-tonal-flower.webp__w_1536 1536w, assets/images/homepage-tonal-flower.webp__w_2160 2160w, assets/images/homepage-tonal-flower.webp__w_2304 2304w, assets/images/homepage-tonal-flower.webp__w_2560 2560w, assets/images/homepage-tonal-flower.webp__w_3240 3240w, assets/images/homepage-tonal-flower.webp__w_3840 3840w"
              sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 1280px, (min-width: 1440px) 1280px, 100vw"
            />
            <img
              alt="Tonal Flower"
              className="image_cover__p04Oj picture_responsive__QoHw7"
              src="/assets/images/homepage-tonal-flower.webp__w_1280"
              width="960"
              height="3024"
              loading="lazy"
              fetchPriority="low"
              sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 1280px, (min-width: 1440px) 1280px, 100vw"
            />
          </picture>
        </div>
        <div className={`${styles.contentWrapper} ${styles.section}`}>
          <h2 className={`text_text__RO8_0 ${textStyles.headingLarge}`}>
            AI that works everywhere you work
          </h2>
          <a
            className="link_link__AAIEV button_button__RzPSK button_primaryHeart__SVFEx"
            aria-disabled="false"
            data-color-scheme="dark"
            href="https://superhuman.com/auth/signup?screen_hint=signup"
          >
            <span className="button_buttonContent__3qg6Y">
              <span className="text_text__RO8_0 button_text__zGLt3">Get Superhuman</span>
            </span>
          </a>
        </div>
      </section>
    </>
  );
}
