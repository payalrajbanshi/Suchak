type Props = {
  title: string;
  children: React.ReactNode;
};

const DashboardCard = ({ title, children }: Props) => {
  return (
    <div
      className="
        h-full
        bg-white/[0.03]
        backdrop-blur-xl
        border
        border-white/10
        rounded-3xl
        p-6
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-violet-500/20
        hover:shadow-2xl
      "
    >
      <h2 className="text-lg font-semibold text-white mb-5">
        {title}
      </h2>

      {children}
    </div>
  );
};

export default DashboardCard;