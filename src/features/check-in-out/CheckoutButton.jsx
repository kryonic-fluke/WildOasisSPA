import Button from "../../ui/Button";
import {useCheckOut} from "../bookings/useCheckOut"
function CheckoutButton({ bookingid }) {

  const {checkout,isCheckingOut} =useCheckOut();

  return (
    <Button variation="primary" size="small" onClick={()=>checkout(bookingid)}  disabled={isCheckingOut}>
      Check out
    </Button>
  );
}

export default CheckoutButton;
