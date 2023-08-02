type MetaPropsProps = {
  tag: string;
  description: string;
};

const MetaProps = ({ tag, description }: MetaPropsProps) => (
  <>
    <dt className="font-regular font-source text-sm text-lightGray pb-2 uppercase">
      {tag}
    </dt>
    <dd className="font-semibold font-source text-2xl h-9 whitespace-nowrap mb-6">
      {description}
    </dd>
  </>
);

export default MetaProps;
