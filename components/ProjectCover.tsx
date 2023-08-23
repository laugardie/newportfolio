import Image from "next/image";
import Link from "next/link";

type ProjectCoverProps = {
  href: string;
  src: string;
  alt: string;
  name: string;
  role: string;
};

const ProjectCover = ({ href, src, alt, name, role }: ProjectCoverProps) => (
  <Link className="text-center cursor-pointer" href={href}>
    <div className="overflow-hidden ease-in-out duration-200">
      <Image
        src={src}
        width={450}
        height={595}
        alt={alt}
        className="block ease-in-out duration-200 hover:scale-110"
      />
    </div>
    <div className="font-inter font-semibold text-2xl pt-8">{name}</div>
    <div className="font-source text-xl text-lightGray">{role}</div>
  </Link>
);

export default ProjectCover;
