import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import FormRow from "../../ui/FormRow";

import { useForm } from "react-hook-form";
import useCreateCabin from "./useCreateCabin";
import useEditCabin from "./useEditCabin";

function CreateCabinForm({ cabinToEdit = {} ,onCloseModal}) {
  const { id: editId, ...editValues } = cabinToEdit;

  const isEditSession = Boolean(editId);

  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });
  const { isCreating, createCabin } = useCreateCabin();
  const { isEditing, editCabin } = useEditCabin();
  const { errors } = formState;

  const isWorking = isCreating || isEditing;

  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];
    //checking what type of image that is getting passed through

    console.log(data);
    
    if (isEditSession)
      editCabin(
        { newCabinData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
            
          }, //this call back has the access to the data returned by mutation function
        }
      );
    else
      createCabin(
        { ...data, image },
        {
          onSuccess: (data) => reset(),
        }
      ); //mutate function
  }

  function onError(error) {
    console.log(error.message);
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit, onError)} type={onCloseModal? "modal" :"regular"}>
      <FormRow label="Cabin name" error={errors?.name?.message}>
        <Input
          type="text"
          id="name"
          {...register("name", {
            required: "This filed is required",
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="maxCapacity" error={errors?.maxCapacity?.message}>
        <Input
          type="number"
          id="maxCapacity"
          {...register("maxCapacity", {
            required: "This filed is required",
            min: {
              value: 1,
              message: "Capacity should be atleast 1",
            },
          })}
          disabled={isWorking}
        />
      </FormRow>
      {/* maxCapacity: "123"  // The name you passed to register becomes the key */}

      <FormRow label="regularPrice" error={errors?.regularPrice?.message}>
        <Input
          type="number"
          id="regularPrice"
          {...register("regularPrice", {
            required: "This filed is required",
            min: {
              value: 110,
              message: "Capacity should be atleast 110",
            },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Input
          type="number"
          id="discount"
          defaultValue={0}
          {...register("discount", {
            validate: (value) => {
              const regularPrice = Number(getValues().regularPrice);
              return (
                Number(value) <= regularPrice ||
                "Discount should be less than the regular price"
              );
            },
          })}
          disabled={isWorking}
        />
      </FormRow>

      <FormRow
        label="Description for a website"
        error={errors?.description?.message}
      >
        <Textarea type="number" id="description" defaultValue="" />
      </FormRow>

      <FormRow label="Cabin photo" disabled={isWorking}>
        <FileInput
          id="image"
          accept="image/*"
          {...register("image", {
            required: isEditSession ? false : "This filed is required",
          })}
        />
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" type="reset" onClick = {()=>onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isWorking}>
          {isEditSession ? "Edit cabin" : "Create new cabin"}
        </Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
