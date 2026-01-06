import Head from "next/head";

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
  return (
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width" />
      <title>{data.title}</title>
      {data.description ? (
        <meta name="description" content={data.description} />
      ) : null}
      {data.ogTitle ? <meta property="og:title" content={data.ogTitle} /> : null}
      {data.ogDescription ? (
        <meta property="og:description" content={data.ogDescription} />
      ) : null}
      {data.ogUrl ? <meta property="og:url" content={data.ogUrl} /> : null}
      {data.ogImage ? <meta property="og:image" content={data.ogImage} /> : null}
      {data.twitterSite ? (
        <meta name="twitter:site" content={data.twitterSite} />
      ) : null}
      {data.icons.map((icon) => (
        <link
          key={`${icon.rel}-${icon.href}`}
          rel={icon.rel}
          href={icon.href}
          sizes={icon.sizes}
          type={icon.type}
        />
      ))}
      {data.fontFaceCss ? (
        <style dangerouslySetInnerHTML={{ __html: data.fontFaceCss }} />
      ) : null}
      {data.cssLinks.map((href) => (
        <link key={href} rel="stylesheet" href={href} />
      ))}
    </Head>
  );
}
