interface BookingCardProps {
  bookingId: string;
  roomType: string;
  dates: string;
  status: string;
}

export default function BookingCard({
  bookingId,
  roomType,
  dates,
  status,
}: BookingCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6">
      <p>
        <strong>Booking ID:</strong> {bookingId}
      </p>

      <p>
        <strong>Room Type:</strong> {roomType}
      </p>

      <p>
        <strong>Dates:</strong> {dates}
      </p>

      <p>
        <strong>Status:</strong>{" "}
        <span className="text-green-600 font-semibold">
          {status}
        </span>
      </p>
    </div>
  );
}