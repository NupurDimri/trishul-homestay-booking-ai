interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
  error?: string;
}

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  error,
}: TextareaProps) {
  return (
    <div className="flex flex-col gap-2">
      {label && (
        <label className="font-medium text-gray-700 dark:text-gray-300">
          {label}
        </label>
      )}

      <textarea
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        rows={6}
        className="
          border border-gray-300 dark:border-gray-600
          bg-white dark:bg-gray-700
          text-black dark:text-white
          rounded-lg px-4 py-3
          resize-none
          focus:outline-none focus:ring-2 focus:ring-green-500
        "
      />

      {error && (
        <p className="text-sm text-red-500">
          {error}
        </p>
      )}
    </div>
  );
}