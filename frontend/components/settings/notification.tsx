export default function NotificationSettingsCard() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white">
    
      <h2 className="text-2xl font-bold mb-6">
        Notification Settings
      </h2>

      <div className="space-y-4">

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" />
          Email Notifications
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" />
          Booking Notifications
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input type="checkbox" />
          Promotional Offers
        </label>

      </div>
    </div>
  );
}