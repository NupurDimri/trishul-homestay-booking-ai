interface SummaryCardProps {
  title: string;
  value: string;
}

export default function SummaryCard({
  title,
  value,
}: SummaryCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-md p-6">
      <h3 className="text-gray-500 dark:text-gray-300 text-sm">
        {title}
      </h3>

      <p className="text-2xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}