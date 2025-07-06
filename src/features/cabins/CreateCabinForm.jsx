c/*
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import { createEditCabin } from "../../services/apicabins";


function CreateCabinForm() {
const queryClient=useQueryClient()
  
const {register,handleSubmit,reset,getValues,formState}=  useForm();
const {errors} =formState;

const {mutate:createCabin,isLoading:isCreating}=useMutation({
  mutationFn:createCabin,
  onSuccess:()=>{
    toast.success("New cabin has been successfully created");
    queryClient.invalidateQueries({
      queryKey:["cabins"]

    });
    reset();
  },

  onError:(err)=> toast.error(err.message)
});


const {mutate:editCabin,isLoading:isEditing}=useMutation({
  mutationFn: ({newCabinData, id})=>createEditCabin(newCabinData,id),
  onSuccess:()=>{
    toast.success("cabin has been successfully edited");
    queryClient.invalidateQueries({
      queryKey:["cabins"]

    });
    reset();
  },

  onError:(err)=> toast.error(err.message)
});

const isWorking =isCreating ||isEditing

  function onSubmit(data){
    const image =typeof data.image === "string" ? data.imgae : data.image[0]
    if(isEditing) editCabin({newCabinData: {...data,image},id})
    else createCabin({...data, image:image})
  } 

  function onError(error){
    console.log(error.message);
    
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit,onError)}>
      

      <FormRow label="Cabin name" error={errors?.name?.message}>
      <Input type="text" id="name" {...register("name", {
          required:"This filed is required",
        })}  disabled={isWorking}/>
      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" {...register("maxCapacity", {
          required:"This filed is required",
          min:{
            value:1,
            message:"Capacity should be atleast 1"
          }
        })} disabled={isWorking}/>
      </FormRow>
       maxCapacity: "123"  // The name you passed to register becomes the key */

//       <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
//         <Input type="number" id="regularPrice" {...register("regularPrice", {
//           required:"This filed is required",
//           min:{
//             value:110,
//             message:"Capacity should be atleast 110"
//           }
//         })} disabled={isWorking}/>
//       </FormRow>

//       <FormRow label="discount" error={errors?.discount?.message}>
//         <Input type="number" id="discount" defaultValue={0} {...register("discount", {
//           required:"This filed is required",
//           validate:(value)=>value <=getValues().regularPrice ||"Discount should be less than the regularPrice"
//         })} disabled={isWorking}/>
//       </FormRow>

//       <FormRow label="Description for a website" error={errors?.description?.message}>
//         <Textarea type="number" id="description" defaultValue="" />
//       </FormRow>

//       <FormRow label="Cabin photo" disabled={isWorking}>
//         <FileInput id="image" accept="image/*" {...register("image", {
//           required:"This filed is required",})} />
//       </FormRow> 

//       <FormRow>
//         {/* type is an HTML attribute! */}
//         <Button variation="secondary" type="reset">
//           Cancel
//         </Button>
//         <Button disabled={isWorking}>add cabin</Button>
//       </FormRow>
//     </Form>
//   );
// }
// */
// export default CreateCabinForm;
// */