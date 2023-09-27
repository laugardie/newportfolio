type MetaPropsProps = {
  tag: string;
  description: string;
  className?: string;
};

const MetaProps = ({ tag, description, className }: MetaPropsProps) => (
  <div className={`${className ?? ""}`}>
    <dt className="font-regular font-source text-sm text-lightGray pb-2 uppercase">
      {tag}
    </dt>
    <dd className="font-semibold font-source text-xl h-9 whitespace-nowrap mb-6">
      {description}
    </dd>
  </div>
);

export default MetaProps;
