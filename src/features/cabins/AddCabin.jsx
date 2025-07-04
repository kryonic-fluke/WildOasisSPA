import { useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm copy";
import CabinTable from '../cabins/CabinTable'

function AddCabin() {
  return (
    <Modal>
      <Modal.Open opens = "cabin-form">
        <Button>Add new Cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm/>
      </Modal.Window>


 <Modal.Open opens = "table">
        <Button>Show cabin</Button>
      </Modal.Open>
   <Modal.Window name='table'>
      <CabinTable/>
      </Modal.Window>
      {/* <Modal.Open opens>
       Show table
      </Modal.Open>
       <Modal.Window>

       </Modal.Window> */}

    </Modal>
  );
}
// function AddCabin() {
//     const [isOpenModal,setisOpenModal]=useState(false);
//     return (
//         <div>
//              <Button onClick={()=>setisOpenModal((show)=>!show)}>
//         Add new cabin
//       </Button>
//       {isOpenModal && <Modal onClose={()=>setisOpenModal(false)}>

//         <CreateCabinForm onCloseModal={()=>setisOpenModal(false)}/>
//         </Modal>}
//         </div>
//     )
// }

export default AddCabin;
