import CabinTable from "../features/cabins/CabinTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import AddCabin from "../features/cabins/AddCabin";
// import { getCabins } from "../services/apicabins";
// import { useEffect } from "react";
function Cabins() {
//  useEffect(function(){
//   getCabins().then((data)=>{
//     console.log(data);
    
//   })
//  })

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
