import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Spinner from "../../ui/Spinner"
import useUpdateSetting from './useEditSettings';
function UpdateSettingsForm() {
  const {isUpdating,UpdateSetting} = useUpdateSetting();
  const {isLoading, settings:{minBookingLength,maxBookingLength,maxGuestPerBooking,breakfastPrice}={}} =useSettings();
  
  if(isUpdating) return <Spinner/>

  function handleUpdate(e,name){
    const {value} =e.target;
    console.log(value);
    
    if(!value) return ;
    UpdateSetting({[name]:value})
   }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights'  defaultValue={minBookingLength} onBlur = {(e)=>handleUpdate(e,"minBookingLength")} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBookingLength} onBlur = {(e)=>handleUpdate(e,"maxBookingLength")} disabled={isUpdating}/> 
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestPerBooking} onBlur = {(e)=>handleUpdate(e,"maxGuestPerBooking")} disabled={isUpdating}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur = {(e)=>handleUpdate(e,"breakfastPrice")} disabled={isUpdating}/>
      </FormRow>
    </Form>
  ); 
}

export default UpdateSettingsForm;
