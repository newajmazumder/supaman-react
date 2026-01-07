"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [745],
  {
    209: (e, t, r) => {
      r.d(t, { o1: () => u, p2: () => l });
      var n = r(4148);
      let i = ["__nextLocalePatch", "pid"],
        s = (e) => null != e,
        a = (e) => !i.includes(e),
        { basePath: o } = (0, n.z)().paths,
        l = (e, t) => {
          if (e.startsWith("http://") || e.startsWith("https://")) return e;
          let r = e.startsWith("/") ? e : "/".concat(e);
          return t ? "/preview/slug".concat(r) : e;
        },
        u = function (e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (!e) return "about:blank";
          if (null == e ? void 0 : e.startsWith("#")) return e;
          try {
            let r = new URL(e, o);
            return c(r, t);
          } catch (e) {}
          return o;
        },
        c = (e, t) => {
          for (let r of Object.keys(t)) {
            let n = t[r];
            if (s(n) && a(r))
              if (Array.isArray(n)) for (let t of n) e.searchParams.append(r, t.toString());
              else e.searchParams.append(r, n.toString());
          }
          return e.href;
        };
    },
    587: (e, t, r) => {
      r.d(t, { Im: () => i, ik: () => n, uv: () => s });
      let n = (e) =>
          Object.entries(e)
            .map((e) => {
              let [t, r] = e;
              return [t, "string" == typeof r ? r.toLowerCase() : r];
            })
            .reduce((e, t) => {
              let [r, n] = t;
              return Object.assign(e, { [r]: n });
            }, {}),
        i = (e) => 0 === Object.keys(e).length;
      function s(e) {
        return Object.keys(e);
      }
    },
    1286: (e, t, r) => {
      r.d(t, {
        LO: () => g,
        Yv: () => a,
        ZH: () => i,
        ip: () => s,
        td: () => d,
        u0: () => l,
        uJ: () => o,
      });
      var n = r(3283);
      let i = (e) => e && e.charAt(0).toUpperCase() + e.slice(1),
        s = (e) =>
          e
            .split(" ")
            .map((e) => i(e))
            .join(" "),
        a = function () {
          for (var e, t = arguments.length, r = Array(t), n = 0; n < t; n++) r[n] = arguments[n];
          let i = r.join(" ");
          return null !=
            (e =
              null == i
                ? void 0
                : i
                    .normalize("NFD")
                    .replaceAll(/[\u0300-\u036F]/g, "")
                    .toLowerCase()
                    .trim()
                    .replaceAll(/[^a-z0-9 ]/g, "")
                    .replaceAll(/\s+/g, "-"))
            ? e
            : "";
        };
      function o(e, t) {
        return Object.values(t).includes(e);
      }
      let l = () => Math.random().toString(36).slice(2, 11),
        u = new Set(["canvas"]),
        c = new Set(["analytics"]);
      function d(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
          r = e.split(" ").at(-1);
        if (!r) return e;
        let n = r.toLowerCase();
        return 1 !== Math.abs(t) && u.has(n)
          ? "".concat(e, "es")
          : "".concat(e).concat(1 === Math.abs(t) || c.has(n) ? "" : "s");
      }
      function g(e) {
        try {
          let t = (0, n.domainToASCII)(e);
          if (t === e) return e;
          return "".concat(e, " (").concat(t, ")");
        } catch (t) {
          return e;
        }
      }
    },
    1810: (e, t, r) => {
      r.d(t, { K: () => n });
      class n {
        static create(e) {
          return e ? new n(e) : n.None;
        }
        getAttr(e) {
          return this.data[e];
        }
        get id() {
          return this.getAttr("id");
        }
        get isNone() {
          return this === n.None;
        }
        get isAnonymous() {
          let e = this.getAttr("anonymous");
          return "boolean" == typeof e ? e : !!this.isNone;
        }
        get isTest() {
          return this.getAttr("isTest");
        }
        get email() {
          return this.getAttr("email");
        }
        constructor(e) {
          this.data = e;
        }
      }
      n.None = new n({});
    },
    2107: (e, t, r) => {
      r.d(t, { Hk: () => o, Ri: () => u, TV: () => c });
      var n = r(753),
        i = r(9649),
        s = r(516);
      let a = (0, r(4148).z)().domains.cookie;
      var o = (function (e) {
        return (
          (e.CsrfToken = "csrf-token"),
          (e.GoInstallationSource = "sh_installation_flow_source"),
          (e.AtcVisited = "superhuman_atc_visited"),
          (e.WebDevice = "web-device"),
          (e.ShMailExtensionInstalled = "sh_mail_extension_installed"),
          e
        );
      })({});
      let l = (e, t) => {
          let r = Error("Cannot ".concat(t, " cookie ").concat(e, " at the server-side"));
          i.Bx.Logging.getLogger("cookie.interception").warn(
            "Cannot "
              .concat(t, " cookie ")
              .concat("set" === t ? "to" : "from", " document at the server-side"),
            { cookieName: e, stackTrace: r.stack }
          );
        },
        u = (e) => (s.KJ ? n.qg(document.cookie)[e] : void l(e, "parse")),
        c = (e, t, r) => {
          if (!s.KJ) return void l(e, "set");
          document.cookie = n.lK(e, t.toString(), {
            expires: r ? new Date(Date.now() + 1e3 * r) : void 0,
            path: "/",
            domain: a,
          });
        };
    },
    2225: (e, t, r) => {
      r.d(t, { H2: () => f, jG: () => w, tZ: () => p });
      var n = r(706),
        i = r.n(n),
        s = r(6133),
        a = r(9649),
        o = r(4148),
        l = r(516),
        u = r(3608),
        c = r(5398),
        d = r(7257),
        g = r(6311),
        h = r(2272);
      let { tracking: m } = (0, o.z)(),
        p = (0, s.Bj)(a.Bx.Logging.getLogger);
      async function v(e) {
        let t = {
          ...e.context,
          url: (0, c.N)(document.location.href),
          pathname: document.location.pathname,
        };
        if (e.level >= a.y7.$.WARN)
          try {
            t.containerId = await d.yQ.getContainerId();
          } catch (r) {
            let e = r instanceof Error ? (0, u.b)(r) : "unknown";
            t.containerId = "Cannot get containerID: ".concat(e);
          }
        return e.addContext(t);
      }
      function f(e) {
        if (!l.KJ)
          return void a.Bx.Logging.getLogger("superfunnel.client").warn(
            "Warn: Trying to configure client logging on the server"
          );
        let t = l.p8 ? fetch.bind(window) : (0, g.tz)(() => {}),
          r = new a.GU.pz(m.felog.url + "/log", e, l.hl, l.Gu, t, !1),
          n = async (e) => {
            let t = await v(e);
            ((!l.p8 || "prod" !== l.Gu || e.level >= a.y7.$.WARN) && a.GU.Cr.printToConsole(t),
              (!l.p8 || "prod" !== l.Gu || e.level >= a.y7.$.INFO) &&
                r.append(t).catch((e) => console.error("Error sending logs", e)));
          },
          i = new a.GU.FL(e, a.y7.$.TRACE, n);
        a.GU._U.configure(i);
      }
      function w(e) {
        if (l.KJ)
          return void a.Bx.Logging.getLogger("superfunnel.ssr").warn(
            "Warn: Trying to configure server logging on the client"
          );
        (a.GU._U.configure(
          new a.GU.FL(e, a.y7.$.INFO, (e) => {
            h.stdout.write(JSON.stringify(e) + i().EOL);
          })
        ),
          a.Bx.Logging.root.context.add({ hostname: i().hostname(), box_id: h.env.BOX_ID }));
      }
    },
    3356: (e, t, r) => {
      r.d(t, { W: () => n });
      let n = r(5977).createContext({
        trackAssignment: () => {},
        generatePixelUrl: () => null,
        getAssignedExperimentNames: () => [],
      });
    },
    4163: (e, t, r) => {
      r.d(t, { Q: () => u });
      var n = r(7765),
        i = r(516),
        s = r(7948),
        a = r(2225),
        o = r(5900);
      let l = "superfunnel";
      function u(e) {
        return (
          i.KJ || ((0, a.jG)(l), o.h.initOnServer()),
          (t) => {
            let r = (0, s.th)();
            return (i.KJ && ((0, a.H2)(l), o.h.initOnClient(r)), (0, n.jsx)(e, { ...t }));
          }
        );
      }
    },
    6087: (e, t, r) => {
      r.d(t, { Or: () => o, th: () => a, v$: () => s });
      var n = r(5977),
        i = r(6496);
      let s = () => (0, n.useContext)(i.J),
        a = () => s().browserService,
        o = () => s().userService;
    },
    6496: (e, t, r) => {
      r.d(t, { J: () => _, G: () => G });
      var n = r(5977),
        i = r(8076),
        s = r(9358),
        a = r(587),
        o = r(1286);
      class l {
        getOrFalse(e) {
          return this.getOrDefault(e, !1);
        }
        getOrDefault(e, t) {
          return this.info ? e(this.info) : t;
        }
        get macOsVersion() {
          return this.getOrDefault((e) => {
            var t;
            return null == (t = e.os) ? void 0 : t.split(";")[0];
          }, "");
        }
        get windowsOsVersion() {
          if (this.isWindows) return this.getOrDefault((e) => e.os.split(" ")[1], "");
        }
        get isWindows() {
          return this.getOrFalse((e) => e.os.includes(i.sd.Windows));
        }
        get isMac() {
          return this.getOrFalse((e) => e.os.includes(i.sd.Mac)) && !this.isIOS;
        }
        get isIOS() {
          return this.getOrFalse((e) => e.osGroup.includes(i._g.iOS));
        }
        get isIPad() {
          return (this.isIOS && this.isTablet) || this.isIPadOS13;
        }
        get isIPadOS13() {
          return this.isMac && (0, s.C)();
        }
        get isAndroid() {
          return this.getOrFalse((e) => e.osGroup.includes(i._g.Android));
        }
        get deviceType() {
          return this.isIPadOS13
            ? i.bq.Tablet
            : this.getOrDefault((e) => e.deviceType, i.bq.Unknown);
        }
        get isMobile() {
          return this.getOrFalse((e) => e.deviceType === i.bq.Mobile);
        }
        get isMobileAndroidOrIOS() {
          return this.isIOS || this.isAndroid;
        }
        get isTablet() {
          return this.getOrFalse((e) => e.deviceType === i.bq.Tablet);
        }
        get isMobileOrTablet() {
          return this.isMobile || this.isTablet;
        }
        get isChrome() {
          return this.getOrFalse((e) => e.browserGroup === i.MY.Chrome);
        }
        get isFirefox() {
          return this.getOrFalse((e) => e.browserGroup === i.MY.Firefox);
        }
        get isSafari() {
          return this.getOrFalse((e) => e.browserGroup === i.MY.Safari);
        }
        get isIE() {
          return this.getOrFalse((e) => e.browserGroup === i.MY.IE);
        }
        get isEdge() {
          return this.getOrFalse((e) => e.browserGroup === i.MY.Edge);
        }
        get isEdgeChromium() {
          return this.isEdge && this.majorVersion >= 79;
        }
        get operatingSystem() {
          return this.getOrDefault((e) => e.os, "");
        }
        get operatingSystemDisplayName() {
          return this.getOrDefault((e) => (e.os === i._g.iOS ? "iOS" : (0, o.ZH)(e.os) || ""), "");
        }
        get browserDisplayName() {
          return (0, o.ip)(this.browserName);
        }
        get browserName() {
          return this.getOrDefault((e) => e.browser || "", "");
        }
        get majorVersion() {
          return this.getOrDefault((e) => e.majorVersion, 0);
        }
        constructor(e) {
          let { clientCapabilities: t } = e.get();
          this.info = t ? (0, a.ik)(t) : null;
        }
      }
      var u = r(8755),
        c = r(7257),
        d = r(2107),
        g = r(516);
      let h = {},
        m = new Set(Object.values(h).map((e) => e.name)),
        p = {},
        v = new Set(Object.values(p).map((e) => e.name));
      class f {
        parseToExperimentObj(e) {
          return e
            ? e.split(",").reduce((e, t) => {
                let r = t.split(":");
                return r.length < 2 ? { ...e } : { ...e, [r[0]]: r[1] };
              }, {})
            : {};
        }
        getLocalStorageFallbackOverrides() {
          if (!g.KJ || !window.localStorage) return {};
          try {
            let e = window.localStorage.getItem(f.STORAGE_KEY);
            return e ? this.parseToExperimentObj(e) : {};
          } catch (e) {
            return {};
          }
        }
        clearStoredOverrides() {
          if (g.KJ)
            try {
              window.localStorage.removeItem(f.STORAGE_KEY);
            } catch (e) {}
        }
        storeOverrides(e) {
          if (g.KJ)
            try {
              window.localStorage.setItem(f.STORAGE_KEY, e);
            } catch (e) {}
        }
        getExperimentOverrides() {
          var e;
          let t = {},
            r = (null == (e = this.navigationService) ? void 0 : e.currentQueryParams) || {},
            n = "string" == typeof r.experimentOverrideReset ? r.experimentOverrideReset : void 0,
            i = "string" == typeof r.experimentOverrides ? r.experimentOverrides : void 0;
          n && this.clearStoredOverrides();
          try {
            if (!i) return this.getLocalStorageFallbackOverrides();
            i && ((t = this.parseToExperimentObj(i)), this.storeOverrides(i));
          } catch (e) {}
          return t;
        }
        hasOverrides() {
          return Object.keys(this.getExperimentOverrides()).length > 0;
        }
        clearOverrides() {
          this.clearStoredOverrides();
        }
        constructor(e) {
          this.navigationService = e;
        }
      }
      f.STORAGE_KEY = "shExperimentOverrides";
      class w extends u.aj {
        static isPixelExperiment(e) {
          return "isPixelExperiment" in e && !0 === e.isPixelExperiment;
        }
        constructor(e, t) {
          (super(e, [...t]), (this.isPixelExperiment = !0));
        }
      }
      class O {
        async getApplicationRequestHeaders() {
          let e = await c.yQ.getContainerId();
          return {
            "Content-Type": "application/json",
            "X-CSRF-Token": g.KJ ? (0, d.Ri)(d.Hk.CsrfToken) : void 0,
            "X-Client-Type": g.OX,
            "X-Client-Version": g.hl,
            "X-Container-Id": e,
          };
        }
        createSDKExperimentClient(e, t) {
          var r;
          let n = new u.eb(
              e,
              {
                getApplicationHeaders: this.getApplicationRequestHeaders.bind(this),
                timeout: O.TIMEOUT,
              },
              g.Gu
            ),
            i = new u.mP(
              e,
              {
                getApplicationHeaders: this.getApplicationRequestHeaders.bind(this),
                timeout: O.TIMEOUT,
              },
              g.Gu
            ),
            s = new u.Re(n, Object.values(h), i, Object.values(p), { ssrDisableLogging: !g.KJ }),
            a = null != (r = t.get().treatments) ? r : [],
            o = [
              ...Object.entries(this._experimentOverrides.getExperimentOverrides()).map((e) => {
                let [t, r] = e,
                  n = v.has(t) ? "gate" : "experiment";
                return {
                  experimentName: t,
                  groupName: "".concat(r, "_1"),
                  experimentId: "dummy",
                  type: n,
                };
              }),
              ...a,
            ].filter((e) => v.has(e.experimentName) || m.has(e.experimentName));
          return (s.setPrefetchedTreatments(o), s);
        }
        isValidTreatment(e, t) {
          return e.experiencesArray.includes(t) || "NOT_ASSIGNED" === t;
        }
        isValidGateTreatment(e, t) {
          return e.experience === t || "NOT_ASSIGNED" === t;
        }
        getOverrideTreatment(e) {
          let t = this._experimentOverrides.getExperimentOverrides()[e.name];
          return t && this.isValidTreatment(e, t) ? t : null;
        }
        getGateOverrideTreatment(e) {
          let t = this._experimentOverrides.getExperimentOverrides()[e.name];
          return t && this.isValidGateTreatment(e, t) ? t : null;
        }
        trackAssignedTreatment(e, t) {
          (this._experimentsWithAssignedTreatment.set(e.name, t),
            w.isPixelExperiment(e) && this._pixelTracker.trackAssignment(e.name));
        }
        constructor(e, t, r, n) {
          ((this.getTreatment = (e) => {
            let t = this.getOverrideTreatment(e);
            if (!t) {
              var r, n;
              t = w.isPixelExperiment(e)
                ? (null == (r = this._sdkExperimentClient)
                    ? void 0
                    : r.getTreatmentWithExposureLoggingDisabled(e)) || null
                : (null == (n = this._sdkExperimentClient) ? void 0 : n.getTreatment(e)) || null;
            }
            return (t && this.trackAssignedTreatment(e, t), t);
          }),
            (this.peekTreatment = (e) => {
              var t;
              return (
                this.getOverrideTreatment(e) ||
                (null == (t = this._sdkExperimentClient)
                  ? void 0
                  : t.getTreatmentWithExposureLoggingDisabled(e)) ||
                null
              );
            }),
            (this.isGateEnabled = (e) => {
              var t;
              let r = this.getGateOverrideTreatment(e);
              return r
                ? r === e.experience
                : null == (t = this._sdkExperimentClient)
                  ? void 0
                  : t.isGateEnabled(e);
            }),
            (this._experimentOverrides = new f(n)),
            (this._experimentsWithAssignedTreatment = new Map()),
            (this._pixelTracker = r),
            (this._sdkExperimentClient = this.createSDKExperimentClient(e, t)));
        }
      }
      O.TIMEOUT = 1e4;
      class x {
        getExampleExperimentAssignment() {
          return this.experimentClient.getTreatment(h.ExampleStatsigExperiment);
        }
        constructor(e) {
          this.experimentClient = e;
        }
      }
      var b = r(209);
      class y {
        get currentQueryParams() {
          return g.KJ
            ? [...new URL(window.location.href).searchParams.entries()].reduce((e, t) => {
                let [r, n] = t;
                return ((e[r] = n), e);
              }, {})
            : this.serverQueryParams
              ? Object.entries(this.serverQueryParams).reduce((e, t) => {
                  let [r, n] = t;
                  return ((e[r] = Array.isArray(n) ? n[0] || "" : n || ""), e);
                }, {})
              : {};
        }
        constructor(e) {
          var t = this;
          ((this.navigateUrl = function (e) {
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return t.navigate((0, b.o1)(e, r));
          }),
            (this.navigate = (e) => {
              g.KJ && window.location.assign(e);
            }),
            (this.serverQueryParams = e));
        }
      }
      let E = (0, r(2225).tZ)("user.clientFallback");
      async function S() {
        try {
          let e = await fetch("/v1/mediator/token", {
            method: "GET",
            credentials: "include",
            headers: { Accept: "application/json" },
          });
          if (401 === e.status || !e.ok) return null;
          let t = await e.json();
          if (!t.token) return null;
          let r = await fetch("/auth/v5/api/userinfo", {
            method: "GET",
            credentials: "include",
            headers: { Accept: "application/json", Authorization: "Bearer ".concat(t.token) },
          });
          if (401 === r.status || !r.ok) return null;
          return await r.json();
        } catch (e) {
          return (E.error("Error fetching user with token:", e), null);
        }
      }
      var T = r(1810),
        k = (function (e) {
          return (
            (e.Empty = "empty"),
            (e.Success = "success"),
            (e.Pending = "pending"),
            (e.Error = "error"),
            e
          );
        })(k || {});
      let C = { state: "empty" };
      class A {
        async initialLoad() {
          if (!this.currentUser.isNone) return this.currentUser;
          "pending" !== this.userPayload.state &&
            (this.userPayload = { state: "pending", promise: S().then((e) => T.K.create(e)) });
          try {
            return (
              (this.currentUser = await this.userPayload.promise),
              (this.userPayload = { state: "success" }),
              this.currentUser
            );
          } catch (e) {
            return (
              (this.userPayload = { state: "error" }),
              (this.currentUser = T.K.None),
              this.currentUser
            );
          }
        }
        constructor(e) {
          this.userPayload = C;
          let { user: t } = e.get();
          this.currentUser = T.K.create(t);
        }
      }
      let I = async (e, t) => ({
          ok: !0,
          status: 200,
          statusText: "OK",
          headers: new Headers(),
          redirected: !1,
          type: "default",
          url: "",
          clone: () => {
            throw Error("Not Implemented");
          },
          body: null,
          bodyUsed: !1,
          bytes: async () => {
            throw Error("Not Implemented");
          },
          async arrayBuffer() {
            throw Error("Not Implemented");
          },
          async blob() {
            throw Error("Not Implemented");
          },
          async formData() {
            throw Error("Not Implemented");
          },
          json: async () => ({}),
          text: async () => "",
        }),
        G = (e, t, r) => {
          let n = e(),
            i = new l(n),
            s = new A(n),
            a = new y(r),
            o = new x(new O(g.X3 ? I : fetch.bind(window), n, t, a));
          return {
            shWebServerService: n,
            browserService: i,
            userService: s,
            experimentService: o,
            navigationService: a,
          };
        },
        _ = (0, n.createContext)({});
    },
    7948: (e, t, r) => {
      r.d(t, {
        th: () => n.th,
        v$: () => n.v$,
        eO: () => h,
        co: () => d,
        lb: () => m,
        Or: () => n.Or,
      });
      var n = r(6087),
        i = r(5977),
        s = r(9584),
        a = r(5900),
        o = r(8103),
        l = r(3608),
        u = r(2081),
        c = r(7257);
      let d = (e) => {
          let {
            pageId: t,
            pageSlug: r,
            isPreview: n = !1,
            isStaticFallback: s = !1,
            isCustom: a = !1,
          } = e;
          (0, i.useEffect)(() => {
            n ||
              (c.a2.pageShow({
                pageId: t,
                pageSlug: r,
                referrer: document.referrer,
                url: window.location.href,
                isCustomPage: a,
                isStaticFallback: s,
              }),
              g(r));
          }, [t, r, n, s]);
        },
        g = (e) => {
          a.h.getMetric(o.XR.Page).getCounter(o.MU.Show).setContext({ pageSlug: e }).increment();
        },
        h = () => {
          let [e, t] = (0, i.useState)(""),
            r = (0, i.useRef)(null),
            [n] = (0, i.useState)(
              () =>
                new Promise((e) => {
                  r.current = e;
                })
            );
          return (
            (0, i.useEffect)(() => {
              c.yQ
                .getContainerId()
                .then((e) => {
                  var n;
                  (t(e), null == (n = r.current) || n.call(r, e));
                })
                .catch((e) => {
                  var t;
                  ((0, u.v)("Error getting Gnar container id", u.Y.GnarContainerIdFailed, {
                    error: (0, l.D)(e),
                  }),
                    null == (t = r.current) || t.call(r, ""));
                });
            }, []),
            { containerId: e, containerIdPromise: n }
          );
        },
        m = (e, t) => {
          let { user: r } = (0, s.i)();
          ((0, i.useEffect)(() => {
            (0, c.om)(r);
          }, []),
            (0, i.useEffect)(() => {
              r.isNone || (0, c.om)(r);
            }, [r]));
        };
    },
    8076: (e, t, r) => {
      r.d(t, { MY: () => s, OJ: () => l, _g: () => o, bq: () => i, sd: () => a });
      var n = r(582),
        i = (function (e) {
          return (
            (e.Desktop = "desktop"),
            (e.Mobile = "mobile"),
            (e.Tablet = "tablet"),
            (e.Other = "other"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        s = (function (e) {
          return (
            (e.Chrome = "chrome"),
            (e.Firefox = "firefox"),
            (e.Safari = "safari"),
            (e.IE = "internet explorer"),
            (e.Edge = "microsoft edge"),
            (e.Other = "other"),
            (e.Unknown = "unknown"),
            e
          );
        })({}),
        a = (function (e) {
          return ((e.Mac = "mac"), (e.Windows = "windows"), e);
        })({}),
        o = (function (e) {
          return ((e.iOS = "ios"), (e.Android = "android"), e);
        })({});
      function l(e) {
        let t = new n.UAParser(e),
          { version: r, name: i } = t.getBrowser(),
          { version: s, name: a } = t.getOS(),
          { type: o } = t.getDevice();
        return {
          deviceType: ((e) => {
            if (!e) return "desktop";
            let t = e.toLowerCase();
            return "mobile" === t
              ? "mobile"
              : "tablet" === t
                ? "tablet"
                : "console" === t || "smarttv" === t || "wearable" === t || "embedded" === t
                  ? "other"
                  : "unknown";
          })(o),
          osGroup: ((e) => {
            if (!e) return "unknown";
            let t = e.toLowerCase();
            return "mac os" === t
              ? "mac"
              : "windows" === t
                ? "windows"
                : "ios" === t || "watchos" === t
                  ? "ios"
                  : "android" === t || "android-x86" === t
                    ? "android"
                    : "other";
          })(a),
          os: a ? "".concat(a, " ").concat(s) : "unknown",
          browserGroup: ((e) => {
            if (!e) return "unknown";
            let t = e.toLowerCase();
            return "chrome" === t ||
              "chrome headless" === t ||
              "chrome webview" === t ||
              "chromium" === t
              ? "chrome"
              : "firefox" === t ||
                  "firefox focus" === t ||
                  "firefox reality" === t ||
                  "fennec" === t ||
                  "firebird" === t
                ? "firefox"
                : "safari" === t || "mobile safari" === t
                  ? "safari"
                  : "ie" === t || "iemobile" === t || "internet explorer" === t
                    ? "internet explorer"
                    : "edge" === t
                      ? "microsoft edge"
                      : "other";
          })(i),
          browser: i || "unknown",
          browserVersion: r || "unknown",
          majorVersion: Number.parseInt(r || "-1"),
        };
      }
    },
    8967: (e, t, r) => {
      r.d(t, { l: () => p });
      var n = r(7765),
        i = r(5977),
        s = r(8076),
        a = r(587),
        o = r(516);
      class l {
        static getDefaultServerData(e) {
          return { requestId: "unknown", pageSlug: "unknown", clientCapabilities: (0, s.OJ)(e) };
        }
        get() {
          return this.cachedData;
        }
        pick(e) {
          return this.get()[e];
        }
        constructor(e, t) {
          var r, n, i;
          this.cachedData =
            e && !(0, a.Im)(e)
              ? {
                  requestId: e.requestId,
                  pageSlug: e.pageSlug,
                  user: e.user,
                  clientCapabilities: e.clientCapabilities,
                  heroImageSeed: e.heroImageSeed,
                  treatments: e.treatments,
                  extras: e.extras,
                }
              : (o.KJ && (null == (r = window) ? void 0 : r.ShData)) ||
                l.getDefaultServerData(
                  o.KJ
                    ? null == (i = window) || null == (n = i.navigator)
                      ? void 0
                      : n.userAgent
                    : t
                );
        }
      }
      var u = r(6496);
      let c = (0, r(4148).z)();
      class d {
        trackAssignment(e) {
          this.shouldTrack && this.assignedExperiments.add(e);
        }
        getAssignedExperimentNames() {
          return [...this.assignedExperiments];
        }
        generatePixelUrl(e) {
          let t = this.getAssignedExperimentNames();
          if (0 === t.length) return null;
          let r = new URL(
            "/api/v1/treatments/assign",
            o.DS && o.KJ ? window.location.origin : c.paths.basePath
          );
          return (
            r.searchParams.set("experiments", t.join(",")),
            e && r.searchParams.set("isPreview", "true"),
            r.toString()
          );
        }
        constructor(e) {
          ((this.assignedExperiments = new Set()), (this.shouldTrack = e));
        }
      }
      var g = r(7257),
        h = r(9358),
        m = r(3356);
      function p(e) {
        return (t) => {
          let { requestData: r, userAgent: s, queryParams: a, ...c } = t,
            [p, v] = ((e, t, r) => {
              let [n] = (0, i.useState)(() => new d(o.X3 || (o.KJ && o.DS))),
                [s] = (0, i.useState)(() => (0, u.G)(() => new l(e, t), n, r));
              return (
                o.KJ &&
                  ((0, g.oM)({
                    deviceType: s.browserService.deviceType,
                    isMobile: s.browserService.isMobileOrTablet,
                    isTouchDevice: (0, h.C)(),
                    os: s.browserService.operatingSystem,
                    env: o.Gu,
                  }),
                  g.yQ.getContainerId().catch((e) => {})),
                [s, n]
              );
            })(r, s, a);
          return (0, n.jsx)(u.J.Provider, {
            value: p,
            children: (0, n.jsx)(m.W.Provider, { value: v, children: (0, n.jsx)(e, { ...c }) }),
          });
        };
      }
    },
    9358: (e, t, r) => {
      r.d(t, { C: () => n });
      let n = () => !1;
    },
    9584: (e, t, r) => {
      r.d(t, { L: () => s, i: () => a });
      var n = r(5977);
      let i = (0, n.createContext)(void 0),
        s = i.Provider,
        a = () => {
          let { user: e, isLoading: t } = (() => {
            let e = (0, n.useContext)(i);
            if (!e)
              throw Error(
                "Attempted to access CurrentUser context outside of CurrentUser provider."
              );
            return e;
          })();
          return { user: e, isLoading: t };
        };
    },
  },
]);
//# sourceMappingURL=745-37a3309cf3aed90c.js.map
