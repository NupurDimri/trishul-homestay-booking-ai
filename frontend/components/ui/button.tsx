interface ButtonProps {
  text: string;
  variant?: "primary" | "secondary" | "outline";
  type?: "button" | "submit";
}

export default function Button({
  text,
  variant = "primary",
  type = "button",
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition duration-300";

  const variants = {
    primary: "bg-green-600 text-white hover:bg-green-700",
    secondary: "bg-gray-600 text-white hover:bg-gray-700",
    outline:
      "border border-green-600 text-green-600 hover:bg-green-600 hover:text-white",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]}`}
    >
      {text}
    </button>
  );
}