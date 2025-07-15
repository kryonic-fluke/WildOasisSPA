import styled from "styled-components";
import useRecentBookings from "./useRecentBookings";
import Spinner from "../../ui/Spinner";
import useRecentStays from "./useRecentStays";
import Stats from "../../ui/Stats";
import useCabins from "../../features/cabins/useCabins";
import SalesChart from "../dashboard/SalesChart";

const StyledDashboardLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { bookings, isLoading1 } = useRecentBookings();
  // console.log("bookings", bookings);

  const {
    isLoading: isLoading2,
    stays,
    confirmedStays,
    numDays,
  } = useRecentStays();
  // console.log(isLoading2,stays,confirmedStays,numDays);

  const { cabins, isLoading3 } = useCabins();
  // console.log(bookings);

  if (isLoading1 || isLoading2 || isLoading3) return <Spinner />;

  return (
    <>
      <StyledDashboardLayout>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />

        <div>Today acticity</div>
        <div>Chart stay durations</div>
        <SalesChart bookings={bookings} numDays={numDays}/>

      </StyledDashboardLayout>
    </>
  );
}

export default DashboardLayout;
