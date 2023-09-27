import SectionSm from "./design system/SectionSm";

type NextBackProps = {
  href: string;
  next: string;
};

const NextBack = ({ href, next }: NextBackProps) => (
  <SectionSm>
    <div className="flex place-content-between pt-10 pb-20">
      <div>
        <a
          className="font-inter text-xl md:text-2xl font-semibold hover:text-accent"
          href="/"
        >
          ← Back
        </a>
        <p className="font-source text-lg md:text-xl text-lightGray">
          All projects
        </p>
      </div>
      <div className="text-right">
        <a
          className="font-inter text-xl md:text-2xl font-semibold hover:text-accent"
          href={href}
        >
          Next →
        </a>
        <p className="font-source text-lg md:text-xl text-lightGray">{next}</p>
      </div>
    </div>
  </SectionSm>
);

export default NextBack;
