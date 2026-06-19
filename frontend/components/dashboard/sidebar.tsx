import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl shadow-md p-6">
      <ul className="space-y-6">

        <li>
          <Link
            href="/dashboard"
            className="hover:text-green-600"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/profile"
            className="hover:text-green-600"
          >
            Profile
          </Link>
        </li>

        <li>
          <Link
            href="/booking"
            className="hover:text-green-600"
          >
            My Bookings
          </Link>
        </li>

        <li>
          <Link
            href="/settings"
            className="hover:text-green-600"
          >
            Settings
          </Link>
        </li>

      </ul>
    </div>
  );
}