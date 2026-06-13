export default function DashboardPage() {
  return (
    <main className="min-h-[70vh] bg-gray-100 p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6 mb-10">

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Total Rooms</h3>
          <p className="text-3xl font-bold"> total rooms will be shown here</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Bookings</h3>
          <p className="text-3xl font-bold"> total bookings will be shown here</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Guests</h3>
          <p className="text-3xl font-bold"> total guests will be shown here</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow">
          <h3 className="text-gray-500">Revenue</h3>
          <p className="text-3xl font-bold"> total revenue will be shown here</p>
        </div>

      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-2xl font-bold mb-4">
          Recent Bookings
        </h2>

        <p>Booking data will appear here.</p>
      </div>

    </main>
  );
}