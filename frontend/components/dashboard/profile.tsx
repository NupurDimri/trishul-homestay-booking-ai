export default function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white p-6 rounded-2xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">
        Profile Information
      </h2>

      <div className="space-y-2">
        <p>
          <span className="font-semibold">Name:</span>{" "}
          Nupur Dimri
        </p>

        <p>
          <span className="font-semibold">Username:</span>{" "}
          nupur123
        </p>

        <p>
          <span className="font-semibold">Email:</span>{" "}
          nupur@example.com
        </p>
      </div>
    </div>
  );
}