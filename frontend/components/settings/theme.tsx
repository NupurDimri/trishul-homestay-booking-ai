export default function ThemeSettingsCard() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-md p-6">
    
      <h2 className="text-2xl font-bold mb-6">
        Theme Settings
      </h2>

      <div className="flex gap-8">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
          />
          Light
        </label>

        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="theme"
            defaultChecked
          />
          Dark
        </label>
      </div>
    </div>
  );
}