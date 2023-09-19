import Image from "next/image";

type JobProps = {
  src: string;
  alt: string;
  description?: string;
  role: string;
  company: string;
  type?: string;
  place: string;
  from: string;
  year1: number;
  to: string;
  year2: number;
};

const Job = ({
  src,
  alt,
  description,
  role,
  company,
  place,
  type,
  from,
  year1,
  to,
  year2,
}: JobProps) => (
  <div className="flex">
    <div className="w-16 h-16 mr-4">
      <Image
        src={src}
        width={0}
        height={0}
        alt={alt}
        style={{ objectFit: "contain", width: "100%", height: "auto" }}
        sizes="100vw"
      />
    </div>
    <div className="flex flex-col flex-1">
      <div className="mb-4">
        <div className="flex justify-between flex-col lg:flex-row">
          <div className="font-source font-bold text-xl lg:text-2xl">
            {role}
          </div>
          <div className="font-source text-lg lg:text-xl text-lightGray">
            {from} {year1} - {to} {year2}
          </div>
        </div>
        <div className="font-source text-lg lg:text-xl text-lightGray">
          {company} {place} {type}
        </div>
      </div>
      <div className="font-source text-lg lg:text-xl">{description}</div>
    </div>
  </div>
);

export default Job;
