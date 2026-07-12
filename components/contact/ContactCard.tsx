import Card from "@/components/ui/Card";

type ContactCardProps = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

export default function ContactCard({
  icon,
  title,
  children,
}: ContactCardProps) {
  return (
    <Card className="h-full">

      <div className="flex items-center gap-4">

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#E8F1EB] to-[#E8EEF6] text-2xl">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-slate-900">
          {title}
        </h3>

      </div>

      <div className="mt-6 leading-relaxed text-slate-600">
        {children}
      </div>

    </Card>
  );
}