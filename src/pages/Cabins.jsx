import CabinTable from "../features/cabins/CabinTable copy";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
function Cabins() {
 

  return (
    <>
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>filter/Sort</p>
    </Row>

    <Row>
      <CabinTable/>
      <AddCabin/>
    </Row>
    </>
  );
} 

export default Cabins;
