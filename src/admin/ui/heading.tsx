interface HeadingProps {
  title: string;
  description: string;
}

const Heading = ({ title, description }: HeadingProps) => {
  return (
    <div>
      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>
      <p className="text-sm text-grey">{description}</p>
    </div>
  );
};

export default Heading;
