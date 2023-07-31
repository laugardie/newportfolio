import Image from "next/image";
import Link from "next/link";

export default function ProjectCover(props) {
  return (
    <Link className="text-center cursor-pointer" href={props.href}>
      <div className="inline-block overflow-hidden ease-in-out duration-200">
        <Image
          src={props.src}
          width={450}
          height={595}
          alt={props.alt}
          className="block ease-in-out duration-200 hover:scale-110"
        />
      </div>
      <div className="font-inter font-semibold text-2xl pt-8">{props.name}</div>
      <div className="font-source text-xl text-lightGray">{props.role}</div>
    </Link>
  );
}
