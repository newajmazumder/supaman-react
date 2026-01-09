import styles from "./HeroBackground.module.css";

export default function HeroBackground() {
  return (
    <>
      {/* Hero background video layer (fixed, behind content). */}
      <div className={styles.container}>
        <video
          className={styles.video}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        >
          <source src="/assets/videos/hero-background.mp4" type="video/mp4" />
          Sorry, your browser doesn&#x27;t support embedded videos.
        </video>
      </div>
    </>
  );
}
