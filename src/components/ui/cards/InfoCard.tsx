interface InfoCardProps {
  value: string | number;
  label: string;
}

const InfoCard = ({ value, label }: InfoCardProps) => {
  return (
    <div className="w-30 flex flex-col items-center gap-2 p-4 font-mono text-xs border rounded-2xl bg-amber-800/10 border-amber-900 hover:border-amber-400 hover:shadow-[0_0_5px_#FFB900] transition">
      <p className="text-4xl text-amber-400">{value}</p>
      <p className="text-center text-neutral-400">{label}</p>
    </div>
  );
};

export default InfoCard;
