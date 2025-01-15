import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import useSettings from './useSettings';
import Spinner from "../../ui/Spinner"
import useUpdateSetting from './useEditSettings';
function UpdateSettingsForm() {
  const {isUpdating,UpdateSetting} = useUpdateSetting();
  const {isLoading, settings:{minBooking_Length,maxBooking_Length,maxGuestsPerBooking,breakfastPrice}={}} =useSettings();
  
  if(isUpdating) return <Spinner/>

  function handleUpdate(e,name){
    const {value} =e.target;
    if(!value) return ;
    UpdateSetting({[name]:value})
   }

  return (
    <Form>
      <FormRow label='Minimum nights/booking'>
        <Input type='number' id='min-nights' defaultValue={minBooking_Length} onBlur = {(e)=>handleUpdate(e,"minBooking_Length")}/>
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input type='number' id='max-nights' defaultValue={maxBooking_Length} onBlur = {(e)=>handleUpdate(e,"maxBooking_Length")}/> 
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input type='number' id='max-guests' defaultValue={maxGuestsPerBooking} onBlur = {(e)=>handleUpdate(e,"maxGuestsPerBooking")}/>
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input type='number' id='breakfast-price' defaultValue={breakfastPrice} onBlur = {(e)=>handleUpdate(e,"breakfastPrice")}/>
      </FormRow>
    </Form>
  ); 
}

export default UpdateSettingsForm;
