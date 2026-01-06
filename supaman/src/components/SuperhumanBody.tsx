type SuperhumanBodyProps = {
  html: string;
};

export default function SuperhumanBody({ html }: SuperhumanBodyProps) {
  return <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />;
}
