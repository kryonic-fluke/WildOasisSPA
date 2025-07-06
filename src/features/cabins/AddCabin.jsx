import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm copy";


function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new Cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}
{
  /* <Modal.Open opens>
 Show table
</Modal.Open>
 <Modal.Window>

 </Modal.Window> */
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
