import SectionTitle from "@/components/sections/SectionTitle";

type SectionTitleBlock = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;
  alignment?: "left" | "center" | null;
};

type Props = {
  block: SectionTitleBlock;
};

export default function SectionTitleRenderer({
  block,
}: Props) {
  return (
    <section className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionTitle
          eyebrow={block.eyebrow || undefined}
          title={block.title || ""}
          description={block.description || undefined}
          centered={block.alignment === "center"}
        />
      </div>
    </section>
  );
}