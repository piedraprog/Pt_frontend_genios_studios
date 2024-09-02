import { BadgeUI } from "@/components/ui/badge";

interface IChipsProps {
  label: string;
  value: number;
}

const InfoChips = ({ label, value }: IChipsProps) => {

  const variant = value > 50 ? "success" : "warning";

  return (
    <BadgeUI className="p-2 text-sm" variant={variant}> {label}: {value}%</BadgeUI>
  );
}

export default InfoChips;