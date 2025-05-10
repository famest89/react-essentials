interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title, ...props }: SectionProps) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;
