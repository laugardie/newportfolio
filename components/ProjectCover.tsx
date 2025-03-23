import Image from "next/image";
import Link from "next/link";

type ProjectCoverProps = {
  href: string;
  src: string;
  alt: string;
  name: string;
  role: string;
  year: string;
};

const ProjectCover = ({ href, src, alt, name, role, year }: ProjectCoverProps) => (
  <Link className="cursor-pointer" href={href}>
    <div className="overflow-hidden ease-in-out duration-200 rounded-lg border border-border">
      <Image
        src={src}
        width={450}
        height={595}
        alt={alt}
        className="block ease-in-out duration-200 hover:scale-110"
      />
    </div>
    <div className="px-3 mt-3 text-left">
      <div className="font-figtree font-semibold text-base">{name}</div>
      <div className="font-figtree font-light text-sm mt-0.5">{role}</div>
      <div className="font-figtree font-light text-sm mt-0.5">{year}</div>
    </div>
  </Link>
);

export default ProjectCover;
