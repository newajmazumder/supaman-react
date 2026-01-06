export type SuperhumanTagBlock = {
  tagName: string;
  attrs: Record<string, string>;
  innerHtml: string;
};

type SuperhumanTagProps = {
  block: SuperhumanTagBlock;
};

const toCamelCase = (value: string) =>
  value.replace(/-([a-z])/g, (_, letter: string) => letter.toUpperCase());

const parseStyle = (style: string) => {
  const styleObj: Record<string, string> = {};
  style
    .split(";")
    .map((part) => part.trim())
    .filter(Boolean)
    .forEach((part) => {
      const [key, ...rest] = part.split(":");
      if (!key || rest.length === 0) return;
      const rawKey = key.trim();
      const rawValue = rest.join(":").trim();
      if (!rawKey || !rawValue) return;
      styleObj[toCamelCase(rawKey)] = rawValue;
    });
  return styleObj;
};

const buildProps = (attrs: Record<string, string>) => {
  const props: Record<string, string | Record<string, string>> = {};
  Object.entries(attrs).forEach(([key, value]) => {
    if (key === "class") {
      props.className = value;
      return;
    }
    if (key === "for") {
      props.htmlFor = value;
      return;
    }
    if (key === "style") {
      props.style = parseStyle(value);
      return;
    }
    props[key] = value;
  });
  return props;
};

export default function SuperhumanTag({ block }: SuperhumanTagProps) {
  const Tag = block.tagName as keyof JSX.IntrinsicElements;
  const props = buildProps(block.attrs);
  return <Tag {...props} dangerouslySetInnerHTML={{ __html: block.innerHtml }} />;
}
