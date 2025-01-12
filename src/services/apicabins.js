import supabase, { supabaseUrl } from "./Supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {

  //https://mrunivcyggxphqcnxecl.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg
  //Create cabin
  const imageName=`${Math.random()}-${newCabin.image.name}`.replaceAll("/","");
  const imagePath = `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`
  const {data, error} = await supabase.from("cabins").insert([{...newCabin,image:imagePath}]);
  if (error) {
    throw new Error("Cabins could not be created");
  }
console.log(data);

  const { error :storageError} = await supabase
  .storage
  .from("cabins-images")
  .upload(imageName, newCabin.image ) 
  //3 delete the cabin if there was an error in uploading the correspoding image
  if(storageError){
    await supabase.from("cabins").delete().eq("id", data[0].id)

    console.log(storageError);
    throw new Error("Cabin image could not be uploaded, cabin could not be created");

  }
   return data;
}



export default async function deleteCabins(id) {
  const { data, error } = await supabase.from("cabins").delete().eq("id", id);
  //here we select what row to delete
  if (error) {
    throw new Error("Cabins could not be deleted");
  }

  return data;
}
//we need the image name , and path to image bucket , in newcabin
