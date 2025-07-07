import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { getCabins } from "../../services/apicabins";
import Spinner from "../../ui/Spinner";
import CabinRow from "./CabinRow";
import Table from "../../ui/Table";
import Menus from "../../ui/Menus";
import { useSearchParams } from "react-router-dom";
import Empty from "../../ui/Empty";

const TableHeader = styled.header`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;

  background-color: var(--color-grey-50);
  border-bottom: 1px solid var(--color-grey-100);
  text-transform: uppercase;
  letter-spacing: 0.4px;
  font-weight: 600;
  color: var(--color-grey-600);
  padding: 1.6rem 2.4rem;
`;

export default function CabinTable() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getCabins,
  });

  const [searchParams] = useSearchParams();
  
  const filterValue = searchParams.get("discount") || "all";
  console.log(filterValue);
  
  if (isLoading) return <Spinner />;
  
  if(!cabins.length) return <Empty resourceName="cabins"/>
  let filterCabins;

  if (filterValue === "all") filterCabins = cabins;
  if (filterValue === "no-discount")
    filterCabins = cabins.filter((cabin) =>cabin.discount===0);

  if (filterValue === "with-discount")
    filterCabins = cabins.filter((cabin) => cabin.discount > 0);




  //Sorting
const sortBY  = searchParams.get('sort-by') || 'startDate-asc';
const [field,direction] = sortBY.split('-');
const modifier = direction==='asc'? 1:-1;
const sortedCabins = filterCabins.sort((a, b) => {
  const valueA = a[field];
  const valueB = b[field];

  // Handle string sorting
  if (typeof valueA === 'string') {
    return valueA.localeCompare(valueB) * modifier;
  }
    return (valueA - valueB) * modifier;
});




  return (
    <Menus>
      <Table columns="0.6fr 1.8fr 2.2fr 1fr 1fr 1fr">
        <Table.Header role="row">
          <div></div>
          <div>Cabins</div>
          <div>Capacity</div>
          <div>Price</div>
          <div>Discount</div>
          <div></div>
        </Table.Header>

        <Table.Body
          data={sortedCabins}
          render={(cabin) => <CabinRow cabin={cabin} key={cabin.id} />}
        />
      </Table>
    </Menus>
  );
}
