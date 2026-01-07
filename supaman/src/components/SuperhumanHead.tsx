import { useEffect } from "react";

export type SuperhumanHeadIcon = {
  rel: string;
  href: string;
  sizes?: string;
  type?: string;
};

export type SuperhumanHeadData = {
  title: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogUrl?: string;
  ogImage?: string;
  twitterSite?: string;
  cssLinks: string[];
  fontFaceCss?: string;
  icons: SuperhumanHeadIcon[];
};

type SuperhumanHeadProps = {
  data: SuperhumanHeadData;
};

export default function SuperhumanHead({ data }: SuperhumanHeadProps) {
  useEffect(() => {
    const head = document.head;
    const managedNodes = head.querySelectorAll('[data-sh-head="true"]');
    managedNodes.forEach((node) => node.remove());

    document.title = data.title;

    const append = (el: HTMLElement) => {
      el.setAttribute("data-sh-head", "true");
      head.appendChild(el);
    };

    const setMeta = (attr: "name" | "property", key: string, content?: string) => {
      if (!content) {
        return;
      }
      const meta = document.createElement("meta");
      meta.setAttribute(attr, key);
      meta.setAttribute("content", content);
      append(meta);
    };

    const charset = document.createElement("meta");
    charset.setAttribute("charset", "utf-8");
    append(charset);

    const viewport = document.createElement("meta");
    viewport.setAttribute("name", "viewport");
    viewport.setAttribute("content", "width=device-width");
    append(viewport);

    setMeta("name", "description", data.description);
    setMeta("property", "og:title", data.ogTitle);
    setMeta("property", "og:description", data.ogDescription);
    setMeta("property", "og:url", data.ogUrl);
    setMeta("property", "og:image", data.ogImage);
    setMeta("name", "twitter:site", data.twitterSite);

    data.icons.forEach((icon) => {
      const link = document.createElement("link");
      link.setAttribute("rel", icon.rel);
      link.setAttribute("href", icon.href);
      if (icon.sizes) {
        link.setAttribute("sizes", icon.sizes);
      }
      if (icon.type) {
        link.setAttribute("type", icon.type);
      }
      append(link);
    });

    if (data.fontFaceCss) {
      const style = document.createElement("style");
      style.textContent = data.fontFaceCss;
      append(style);
    }

    data.cssLinks.forEach((href) => {
      const link = document.createElement("link");
      link.setAttribute("rel", "stylesheet");
      link.setAttribute("href", href);
      append(link);
    });
  }, [data]);

  return null;
}
