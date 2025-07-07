import Heading from "../ui/Heading";
import Row from "../ui/Row";

import BookingTable from "../features/bookings/BookingTable";
import useBookings from "../features/bookings/useBookings";
import Spinner from "../ui/Spinner";
function Bookings() {
  const { bookings, isLoading } = useBookings();
  if(isLoading) return <Spinner/>
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All bookings</Heading>

        <p>TEST</p>
      </Row>
      <BookingTable />
    </>
  );
}

export default Bookings;
