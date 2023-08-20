export type ProjectFilterType =
  | "all"
  | "design system"
  | "illustration"
  | "product"
  | "uxui";

export type ProjectDescriptor = {
  src: string;
  href: string;
  name: string;
  role: string;
  alt: string;
  tag: ProjectFilterType[];
};
