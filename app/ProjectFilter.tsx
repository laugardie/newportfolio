import Tab from "@/components/design system/Tab";
import { ProjectFilterType } from "@/types";

type ProjectFilterProps = {
  filter: ProjectFilterType;
  setFilter: (filter: ProjectFilterType) => void;
};

export default function ProjectFilter({
  filter,
  setFilter,
}: ProjectFilterProps) {
  return (
    <div className="pb-10 flex gap-6 items-center">
      <Tab
        isSelected={filter === "all"}
        filterByTab={() => {
          setFilter("all");
        }}
      >
        All
      </Tab>
      <span className="font-source text-sm">•</span>
      <Tab
        isSelected={filter === "design system"}
        filterByTab={() => {
          setFilter("design system");
        }}
      >
        Design System
      </Tab>
      <span className="font-source text-sm">•</span>
      <Tab
        isSelected={filter === "illustration"}
        filterByTab={() => {
          setFilter("illustration");
        }}
      >
        Illustration
      </Tab>
      <span className="font-source text-sm">•</span>
      <Tab
        isSelected={filter === "product"}
        filterByTab={() => {
          setFilter("product");
        }}
      >
        Product
      </Tab>
      <span className="font-source text-sm">•</span>
      <Tab
        isSelected={filter === "uxui"}
        filterByTab={() => {
          setFilter("uxui");
        }}
      >
        UX/UI
      </Tab>
    </div>
  );
}
