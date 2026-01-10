import type { CSSProperties } from "react";
import bannerStyles from "./BannerSection.module.css";
import textBase from "../../styles/Text.module.css";
import sectionStyles from "../../styles/Section.module.css";

export default function BannerSection() {
  return (
    <>
      {/* Hero section content layer (text + visuals). */}
      <section
        className={sectionStyles.section}
        data-color-scheme="dark"
        data-hero-section="true"
      >
        <div
          className={`${bannerStyles.contentWrapper} ${bannerStyles.heroSectionTimeline} ${bannerStyles.hero}`}
        >
          <div
            className={bannerStyles.titleGroup}
          >
            <h1
              className={`${textBase.text} ${bannerStyles.heroTitle} ${bannerStyles.title}`}
            >
              Superpowers, everywhere you work
            </h1>
            <h2
              className={`${textBase.text} ${bannerStyles.heroHeading} ${bannerStyles.heading}`}
            >
              Mail, Docs, and AI that works in every app and tab
            </h2>
            <a
              className={bannerStyles.heroButton}
              href="https://superhuman.com/auth/signup?screen_hint=signup"
              aria-disabled="false"
            >
              <span className={bannerStyles.heroButtonText}>Get Superhuman</span>
              <span className={bannerStyles.heroButtonIconContainer}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  className={bannerStyles.heroButtonIcon}
                >
                  <use href="#arrow-right-icon"></use>
                </svg>
              </span>
            </a>
          </div>
          <div
            className={bannerStyles.visualsContainer}
          >
            <figure className={`full-bleed ${bannerStyles.personPictureContainer}`}>
              <picture className={`${bannerStyles.responsivePicture} ${bannerStyles.personPicture}`}>
                <source
                  srcSet="/assets/images/person-5.webp__w_375_fm_avif 375w, assets/images/person-5.webp__w_640_fm_avif 640w, assets/images/person-5.webp__w_750_fm_avif 750w, assets/images/person-5.webp__w_768_fm_avif 768w, assets/images/person-5.webp__w_1080_fm_avif 1080w, assets/images/person-5.webp__w_1125_fm_avif 1125w, assets/images/person-5.webp__w_1280_fm_avif 1280w, assets/images/person-5.webp__w_1536_fm_avif 1536w, assets/images/person-5.webp__w_1920_fm_avif 1920w, assets/images/person-5.webp__w_2160_fm_avif 2160w, assets/images/person-5.webp__w_2304_fm_avif 2304w, assets/images/person-5.webp__w_3240_fm_avif 3240w"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                  type="image/avif"
                />
                <source
                  srcSet="/assets/images/person-5.webp__w_375_fm_webp 375w, assets/images/person-5.webp__w_640_fm_webp 640w, assets/images/person-5.webp__w_750_fm_webp 750w, assets/images/person-5.webp__w_768_fm_webp 768w, assets/images/person-5.webp__w_1080_fm_webp 1080w, assets/images/person-5.webp__w_1125_fm_webp 1125w, assets/images/person-5.webp__w_1280_fm_webp 1280w, assets/images/person-5.webp__w_1536_fm_webp 1536w, assets/images/person-5.webp__w_1920_fm_webp 1920w, assets/images/person-5.webp__w_2160_fm_webp 2160w, assets/images/person-5.webp__w_2304_fm_webp 2304w, assets/images/person-5.webp__w_3240_fm_webp 3240w"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                  type="image/webp"
                />
                <source
                  srcSet="/assets/images/person-5.webp__w_375 375w, assets/images/person-5.webp__w_640 640w, assets/images/person-5.webp__w_750 750w, assets/images/person-5.webp__w_768 768w, assets/images/person-5.webp__w_1080 1080w, assets/images/person-5.webp__w_1125 1125w, assets/images/person-5.webp__w_1280 1280w, assets/images/person-5.webp__w_1536 1536w, assets/images/person-5.webp__w_1920 1920w, assets/images/person-5.webp__w_2160 2160w, assets/images/person-5.webp__w_2304 2304w, assets/images/person-5.webp__w_3240 3240w"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                />
                <img
                  alt="Person thinking"
                  className={`${bannerStyles.imageCover} ${bannerStyles.responsivePicture}`}
                  src="/assets/images/person-5.webp__w_1080"
                  width="822"
                  height="660"
                  loading="eager"
                  fetchPriority="high"
                  sizes="(max-width: 1024px) 100vw, (min-width: 1280px) 640px, (min-width: 1440px) 640px, 100vw"
                />
              </picture>
            </figure>
            <div className={bannerStyles.visualGroup1}>
              <div className={bannerStyles.visualRow}>
                <div
                  className={`${bannerStyles.heroCardBase} ${bannerStyles.chatCard} ${bannerStyles.visual} ${bannerStyles.visual1}`}
                  style={{ "--index": 1 } as CSSProperties}
                >
                  <div className={bannerStyles.columnGap4x}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="24"
                      className={bannerStyles.chatHeroIcon}
                    >
                      <use href="#hero-icon"></use>
                    </svg>
                    <div className={bannerStyles.columnGap2x}>
                      <span
                        className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.chatMessage}`}
                      >
                        Looks like you&#x27;re chatting with Antonio and Laura in the{" "}
                        <span>#launch-project-chat</span> and need to book a meeting. Would you like
                        me to find a good time?
                      </span>
                      <span
                        className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.chatMessage} ${bannerStyles.chatUserMessage}`}
                      >
                        yes!
                      </span>
                      <span
                        className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.chatMessage} ${bannerStyles.chatHasSuggestions}`}
                      >
                        You&#x27;re all available during these times:
                        <div className={`${bannerStyles.rowCenterGap1x} ${bannerStyles.chatSuggestions}`}>
                          <span className={bannerStyles.rowCenterGap1x}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <path
                                d="M6.5 3.25V6.5H8.66667"
                                stroke="currentColor"
                                strokeWidth="1.08333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M6.49967 11.9168C9.49122 11.9168 11.9163 9.4917 11.9163 6.50016C11.9163 3.50862 9.49122 1.0835 6.49967 1.0835C3.50813 1.0835 1.08301 3.50862 1.08301 6.50016C1.08301 9.4917 3.50813 11.9168 6.49967 11.9168Z"
                                stroke="currentColor"
                                strokeWidth="1.08333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            Monday at 3:00 PM
                          </span>
                          <span className={bannerStyles.rowCenterGap1x}>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="13"
                              height="13"
                              viewBox="0 0 13 13"
                              fill="none"
                            >
                              <path
                                d="M6.5 3.25V6.5L7.58333 4.33333"
                                stroke="currentColor"
                                strokeWidth="1.08333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                              <path
                                d="M6.50065 11.9168C9.49219 11.9168 11.9173 9.4917 11.9173 6.50016C11.9173 3.50862 9.49219 1.0835 6.50065 1.0835C3.50911 1.0835 1.08398 3.50862 1.08398 6.50016C1.08398 9.4917 3.50911 11.9168 6.50065 11.9168Z"
                                stroke="currentColor"
                                strokeWidth="1.08333"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></path>
                            </svg>
                            Tuesday at 1:00 PM
                          </span>
                        </div>
                      </span>
                      <div className={bannerStyles.chatTextInput}>
                        <div className={bannerStyles.rowEndSpaceBetweenGap4x}>
                          <p className={`${textBase.text} ${bannerStyles.heroCard}`}>
                            book it for monday
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            className={bannerStyles.chatSendIcon}
                          >
                            <use href="#send-icon"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`${bannerStyles.heroCardBase} ${bannerStyles.agentsCard} ${bannerStyles.visual} ${bannerStyles.visual2}`}
                  style={{ "--index": 2 } as CSSProperties}
                >
                  <div className={bannerStyles.columnGap2x}>
                    <div className={`${bannerStyles.agentItem} ${bannerStyles.stack}`}>
                      <div className={bannerStyles.agentSelected}></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="24"
                        className={bannerStyles.agentIcon}
                      >
                        <use href="#hero-icon"></use>
                      </svg>
                    </div>
                    <div className={`${bannerStyles.agentItem} ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        className={bannerStyles.agentIcon}
                      >
                        <use href="#grammarly-logo-icon"></use>
                      </svg>
                    </div>
                    <div className={`${bannerStyles.agentItem} ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="26"
                        className={bannerStyles.agentIcon}
                      >
                        <use href="#humanizer-icon"></use>
                      </svg>
                    </div>
                    <div className={`${bannerStyles.agentItem} ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        className={bannerStyles.agentIcon}
                      >
                        <use href="#citation-finder-icon"></use>
                      </svg>
                    </div>
                    <div className={`${bannerStyles.agentItem} ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="23"
                        className={bannerStyles.agentIcon}
                      >
                        <use href="#calendar-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={bannerStyles.mail}>
                <div
                  className={`${bannerStyles.heroCardBase} ${bannerStyles.mailCard} ${bannerStyles.visual} ${bannerStyles.visual6}`}
                  style={{ "--index": 6 } as CSSProperties}
                >
                  <div className={bannerStyles.mailMenu}></div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Important
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      12
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>Calendar</span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      13
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>Docs</span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      8
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>Other</span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      19
                    </span>
                  </div>
                  <div className={`${bannerStyles.mailMessage} ${bannerStyles.mailSelectedMessage}`}></div>
                  <span className={`${textBase.text} ${bannerStyles.heroCard}`}>Sarah Kim</span>
                  <div className={`${bannerStyles.rowCenterGap2x} ${bannerStyles.mailMessageContent}`}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Design Review moved to Thursday
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      Hey team, quick heads-up — we&#x27;re pushing the design review to Thursday at
                      2pm.
                    </span>
                  </div>
                  <div className={bannerStyles.mailMessage}></div>
                  <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                    James Patel
                  </span>
                  <div className={`${bannerStyles.rowCenterGap2x} ${bannerStyles.mailMessageContent}`}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Feedback on your client presentation
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      Great work on the slides. I added a couple of notes around clarity and flow.
                    </span>
                  </div>
                  <div className={bannerStyles.mailMessage}></div>
                  <span className={`${textBase.text} ${bannerStyles.heroCard}`}>Laura Chen</span>
                  <div className={`${bannerStyles.rowCenterGap2x} ${bannerStyles.mailMessageContent}`}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Coffee next week?
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      It&#x27;s been a while since we caught up — are you free for a quick coffee
                      next week?
                    </span>
                  </div>
                  <div className={bannerStyles.mailMessage}></div>
                  <span className={`${textBase.text} ${bannerStyles.heroCard}`}>HR Team</span>
                  <div className={`${bannerStyles.rowCenterGap2x} ${bannerStyles.mailMessageContent}`}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Reminder: Open enrollment closes Friday
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      Don&#x27;t forget to update your benefits selections before the deadline this
                      week.
                    </span>
                  </div>
                  <div className={bannerStyles.mailMessage}></div>
                  <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                    Mike Torres
                  </span>
                  <div className={`${bannerStyles.rowCenterGap2x} ${bannerStyles.mailMessageContent}`}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Sprint planning agenda attached
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.mailFadedText}`}>
                      Please review the agenda ahead of Monday’s sprint planning meeting.
                    </span>
                  </div>
                </div>
                <div
                  className={`${bannerStyles.heroCardBase} ${bannerStyles.toolCard} ${bannerStyles.toolScheduler} ${bannerStyles.visual} ${bannerStyles.visual7}`}
                  style={{ "--index": 7 } as CSSProperties}
                >
                  <div className={bannerStyles.rowCenterGap2xWrap}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                      <use href="#sparkle-icon"></use>
                    </svg>
                    <p className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Schedule 15 minutes for a quick meeting with Mike
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={bannerStyles.visualGroup2}>
              <div
                className={`${bannerStyles.heroCardBase} ${bannerStyles.toolCard} ${bannerStyles.visual} ${bannerStyles.visual3}`}
                style={{ "--index": 3 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2x}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                    <use href="#reader-reactions-icon"></use>
                  </svg>
                  <p className={`${textBase.text} ${bannerStyles.heroCard}`}>
                    Tailor this language for executives
                  </p>
                </div>
              </div>
              <div
                className={`${bannerStyles.heroCardBase} ${bannerStyles.editorCard} ${bannerStyles.visual} ${bannerStyles.visual4}`}
                style={{ "--index": 4 } as CSSProperties}
              >
                <div className={bannerStyles.columnGap4x}>
                  <div className={bannerStyles.rowCenterGap2x}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <use href="#home-icon"></use>
                    </svg>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.editorToolbarText}`}>
                      Team workspace
                    </span>
                    <span
                      className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.editorToolbarText} ${bannerStyles.editorToolbarTextEnd}`}
                    >
                      Share
                    </span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                      <use href="#comment-icon"></use>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
                      <use href="#gear-icon"></use>
                    </svg>
                  </div>
                  <div className={bannerStyles.columnGap3x}>
                    <span className={`${textBase.text} ${bannerStyles.heroCard}`}>
                      Streamlining Team Documentation
                    </span>
                    <span className={`${textBase.text} ${bannerStyles.heroCard} ${bannerStyles.editorText}`}>
                      I&#x27;ve been thinking about how our team can streamline the onboarding
                      process for <u>new-hires</u>.{" "}
                      <span>
                        Right now, documentation is scattered across different tools, which makes it
                        hard to find answers quickly. If we consolidate into a single hub and add
                      </span>{" "}
                      more real-world examples, I think it&#x27;ll cut down on <u>repetative</u>{" "}
                      questions and help people ramp up faster.
                    </span>
                    <div className={`${bannerStyles.rowCenter} ${bannerStyles.editorToolbar}`}>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#font-icon"></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          className={bannerStyles.editorArrowDown}
                        >
                          <use href="#arrow-down-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#bold-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                          <use href="#italic-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#underline-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#strikethrough-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} ${bannerStyles.editorToolbarItem}`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                          <use href="#align-start-icon"></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          className={bannerStyles.editorArrowDown}
                        >
                          <use href="#arrow-down-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`${bannerStyles.heroCardBase} ${bannerStyles.toolCard} ${bannerStyles.visual} ${bannerStyles.visual5}`}
                style={{ "--index": 5 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2x}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18">
                    <use href="#grammarly-logo-icon"></use>
                  </svg>
                  <p className={`${textBase.text} ${bannerStyles.heroCard}`}>
                    Proofread with Grammarly
                  </p>
                </div>
              </div>
              <div
                className={`${bannerStyles.heroCardBase} ${bannerStyles.toolCard} ${bannerStyles.toolScheduler} ${bannerStyles.visual} ${bannerStyles.visual8}`}
                style={{ "--index": 6 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2xWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                    <use href="#sparkle-icon"></use>
                  </svg>
                  <p className={`${textBase.text} ${bannerStyles.heroCard}`}>
                    Schedule 15 minutes for a quick meeting with Mike
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
