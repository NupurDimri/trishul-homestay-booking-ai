import Input from "@/components/ui/input";

export default function ProfileSettingsCard() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold mb-6">
     
        Profile Settings
      </h2>

      <div className="space-y-4">
        <Input
          label="Name"
          placeholder="Enter your name"
        />

        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
        />

        <Input
          label="Phone"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}