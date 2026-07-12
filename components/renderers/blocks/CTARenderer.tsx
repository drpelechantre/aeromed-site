import CTASection from "@/components/sections/CTASection";

type CTABlock = {
  eyebrow?: string | null;
  title?: string | null;
  description?: string | null;

  buttonLabel?: string | null;
  buttonUrl?: string | null;
};

type Props = {
  block: CTABlock;
};

export default function CTARenderer({ block }: Props) {
  return (
    <CTASection
      eyebrow={block.eyebrow || undefined}
      title={block.title || ""}
      description={block.description || undefined}
      primaryLabel={block.buttonLabel || ""}
      primaryHref={block.buttonUrl || ""}
    />
  );
}