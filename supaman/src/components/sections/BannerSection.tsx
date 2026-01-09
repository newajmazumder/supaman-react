import type { CSSProperties } from "react";
import bannerStyles from "./BannerSection.module.css";
import sectionStyles from "../../styles/Section.module.css";

export default function BannerSection() {
  return (
    <>
      {/* Hero section content layer (text + visuals). */}
      <section
        className={`section_section___xslj ${sectionStyles.section}`}
        data-color-scheme="dark"
      >
        <div
          className={`content-wrapper_contentWrapper__9WGiY ${bannerStyles.contentWrapper} page_heroSection__WbWUz ${bannerStyles.hero}`}
        >
          <div
            className={bannerStyles.titleGroup}
          >
            <h1
              className={`text_text__RO8_0 homepage-text_heroTitle__r7q9C ${bannerStyles.title}`}
            >
              Superpowers, everywhere you work
            </h1>
            <h2
              className={`text_text__RO8_0 homepage-text_heroHeading__yqrt3 ${bannerStyles.heading}`}
            >
              Mail, Docs, and AI that works in every app and tab
            </h2>
            <a
              className="hero-button_heroButton__LEsDD"
              href="https://superhuman.com/auth/signup?screen_hint=signup"
              aria-disabled="false"
            >
              <span className="hero-button_text__vQFmf">Get Superhuman</span>
              <span className="hero-button_iconContainer__RNDuf">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="18"
                  className="hero-button_icon__TW5TY"
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
              <picture className={`picture_responsive__QoHw7 ${bannerStyles.personPicture}`}>
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
                  className="image_cover__p04Oj picture_responsive__QoHw7"
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
                  className={`hero-card_card__SIZev chat_chat__QS9Eh ${bannerStyles.visual} ${bannerStyles.visual1}`}
                  style={{ "--index": 1 } as CSSProperties}
                >
                  <div className={bannerStyles.columnGap4x}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17"
                      height="24"
                      className="chat_heroIcon__yDL04"
                    >
                      <use href="#hero-icon"></use>
                    </svg>
                    <div className={bannerStyles.columnGap2x}>
                      <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B chat_message__oorK8">
                        Looks like you&#x27;re chatting with Antonio and Laura in the{" "}
                        <span>#launch-project-chat</span> and need to book a meeting. Would you like
                        me to find a good time?
                      </span>
                      <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B chat_message__oorK8 chat_userMessage__aAHO7">
                        yes!
                      </span>
                      <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B chat_message__oorK8 chat_hasSuggestions__5w3Tw">
                        You&#x27;re all available during these times:
                        <div className={`${bannerStyles.rowCenterGap1x} chat_suggestions__CldPS`}>
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
                      <div className="chat_textInput__llIdI">
                        <div className={bannerStyles.rowEndSpaceBetweenGap4x}>
                          <p className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                            book it for monday
                          </p>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            className="chat_sendIcon__5XP1Q"
                          >
                            <use href="#send-icon"></use>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className={`hero-card_card__SIZev agents_agents__3ZOtq ${bannerStyles.visual} ${bannerStyles.visual2}`}
                  style={{ "--index": 2 } as CSSProperties}
                >
                  <div className={bannerStyles.columnGap2x}>
                    <div className={`agents_agent__1dXFp ${bannerStyles.stack}`}>
                      <div className="agents_selected__1z99W"></div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="17"
                        height="24"
                        className="agents_icon__zvbiq"
                      >
                        <use href="#hero-icon"></use>
                      </svg>
                    </div>
                    <div className={`agents_agent__1dXFp ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="19"
                        height="18"
                        className="agents_icon__zvbiq"
                      >
                        <use href="#grammarly-logo-icon"></use>
                      </svg>
                    </div>
                    <div className={`agents_agent__1dXFp ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="26"
                        className="agents_icon__zvbiq"
                      >
                        <use href="#humanizer-icon"></use>
                      </svg>
                    </div>
                    <div className={`agents_agent__1dXFp ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="20"
                        className="agents_icon__zvbiq"
                      >
                        <use href="#citation-finder-icon"></use>
                      </svg>
                    </div>
                    <div className={`agents_agent__1dXFp ${bannerStyles.stack}`}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="21"
                        height="23"
                        className="agents_icon__zvbiq"
                      >
                        <use href="#calendar-icon"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className={bannerStyles.mail}>
                <div
                  className={`hero-card_card__SIZev mail_mail__WHUsM ${bannerStyles.visual} ${bannerStyles.visual6}`}
                  style={{ "--index": 6 } as CSSProperties}
                >
                  <div className="mail_menu__dS5rb"></div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Important
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      12
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">Calendar</span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      13
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">Docs</span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      8
                    </span>
                  </div>
                  <div className={bannerStyles.rowCenterGap1x}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">Other</span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      19
                    </span>
                  </div>
                  <div className="mail_message__d496T mail_selectedMessage__Xicr3"></div>
                  <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">Sarah Kim</span>
                  <div className={`${bannerStyles.rowCenterGap2x} mail_messageContent__655WM`}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Design Review moved to Thursday
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      Hey team, quick heads-up — we&#x27;re pushing the design review to Thursday at
                      2pm.
                    </span>
                  </div>
                  <div className="mail_message__d496T"></div>
                  <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                    James Patel
                  </span>
                  <div className={`${bannerStyles.rowCenterGap2x} mail_messageContent__655WM`}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Feedback on your client presentation
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      Great work on the slides. I added a couple of notes around clarity and flow.
                    </span>
                  </div>
                  <div className="mail_message__d496T"></div>
                  <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">Laura Chen</span>
                  <div className={`${bannerStyles.rowCenterGap2x} mail_messageContent__655WM`}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Coffee next week?
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      It&#x27;s been a while since we caught up — are you free for a quick coffee
                      next week?
                    </span>
                  </div>
                  <div className="mail_message__d496T"></div>
                  <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">HR Team</span>
                  <div className={`${bannerStyles.rowCenterGap2x} mail_messageContent__655WM`}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Reminder: Open enrollment closes Friday
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      Don&#x27;t forget to update your benefits selections before the deadline this
                      week.
                    </span>
                  </div>
                  <div className="mail_message__d496T"></div>
                  <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                    Mike Torres
                  </span>
                  <div className={`${bannerStyles.rowCenterGap2x} mail_messageContent__655WM`}>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Sprint planning agenda attached
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B mail_fadedText__Bli0f">
                      Please review the agenda ahead of Monday’s sprint planning meeting.
                    </span>
                  </div>
                </div>
                <div
                  className={`hero-card_card__SIZev tool_tool__lFuFb tool_isScheduler__ifisn ${bannerStyles.visual} ${bannerStyles.visual7}`}
                  style={{ "--index": 7 } as CSSProperties}
                >
                  <div className={bannerStyles.rowCenterGap2xWrap}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                      <use href="#sparkle-icon"></use>
                    </svg>
                    <p className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Schedule 15 minutes for a quick meeting with Mike
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className={bannerStyles.visualGroup2}>
              <div
                className={`hero-card_card__SIZev tool_tool__lFuFb ${bannerStyles.visual} ${bannerStyles.visual3}`}
                style={{ "--index": 3 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2x}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
                    <use href="#reader-reactions-icon"></use>
                  </svg>
                  <p className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                    Tailor this language for executives
                  </p>
                </div>
              </div>
              <div
                className={`hero-card_card__SIZev editor_editor__lP_f3 ${bannerStyles.visual} ${bannerStyles.visual4}`}
                style={{ "--index": 4 } as CSSProperties}
              >
                <div className={bannerStyles.columnGap4x}>
                  <div className={bannerStyles.rowCenterGap2x}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                      <use href="#home-icon"></use>
                    </svg>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B editor_toolbarText___BldC">
                      Team workspace
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B editor_toolbarText___BldC editor_toolbarTextEnd__it_0A">
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
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                      Streamlining Team Documentation
                    </span>
                    <span className="text_text__RO8_0 homepage-text_heroCard__NMA8B editor_editorText__ZoEil">
                      I&#x27;ve been thinking about how our team can streamline the onboarding
                      process for <u>new-hires</u>.{" "}
                      <span>
                        Right now, documentation is scattered across different tools, which makes it
                        hard to find answers quickly. If we consolidate into a single hub and add
                      </span>{" "}
                      more real-world examples, I think it&#x27;ll cut down on <u>repetative</u>{" "}
                      questions and help people ramp up faster.
                    </span>
                    <div className={`${bannerStyles.rowCenter} editor_toolbar__jLb_Y`}>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#font-icon"></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          className="editor_arrowDown__YHEBM"
                        >
                          <use href="#arrow-down-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#bold-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                          <use href="#italic-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#underline-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="16">
                          <use href="#strikethrough-icon"></use>
                        </svg>
                      </div>
                      <div className={`${bannerStyles.rowCenterGap0_5x} editor_toolbarItem__roylq`}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16">
                          <use href="#align-start-icon"></use>
                        </svg>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="10"
                          height="10"
                          className="editor_arrowDown__YHEBM"
                        >
                          <use href="#arrow-down-icon"></use>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`hero-card_card__SIZev tool_tool__lFuFb ${bannerStyles.visual} ${bannerStyles.visual5}`}
                style={{ "--index": 5 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2x}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18">
                    <use href="#grammarly-logo-icon"></use>
                  </svg>
                  <p className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
                    Proofread with Grammarly
                  </p>
                </div>
              </div>
              <div
                className={`hero-card_card__SIZev tool_tool__lFuFb tool_isScheduler__ifisn ${bannerStyles.visual} ${bannerStyles.visual8}`}
                style={{ "--index": 6 } as CSSProperties}
              >
                <div className={bannerStyles.rowCenterGap2xWrap}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17">
                    <use href="#sparkle-icon"></use>
                  </svg>
                  <p className="text_text__RO8_0 homepage-text_heroCard__NMA8B">
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
