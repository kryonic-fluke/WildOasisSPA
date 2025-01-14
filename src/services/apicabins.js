import supabase, { supabaseUrl } from "./Supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

//https://mrunivcyggxphqcnxecl.supabase.co/storage/v1/object/public/cabins-images/cabin-001.jpg
//Create cabin
export async function createEditCabin(newCabin, id) {
  // 1. Handle image path logic 
  const hasImagePath = typeof newCabin.image === 'string' && newCabin.image.startsWith(supabaseUrl);
  
  // 2. Generate image name only if there's a new image file 
  const imageName = !hasImagePath 
    ? `${Math.random()}-${newCabin.image.name}`.replaceAll("/","")
    : newCabin.image.split('/').pop(); // Extract existing image name if using existing image
    
  // 3. Determine the final image path
  const imagePath = hasImagePath 
    ? newCabin.image 
    : `${supabaseUrl}/storage/v1/object/public/cabins-images/${imageName}`;

  // 4. Prepare the query
  let query = supabase.from("cabins");
  
  if (!id) {
    // Create new cabin
    query = query.insert([{ ...newCabin, image: imagePath }]);
  } else {
    // Update existing cabin
    query = query.update({ ...newCabin, image: imagePath }).eq('id', id);
  }

  // 5. Execute the query
  const { data, error } = await query.select().single();
  
  if (error) {
    throw new Error("Cabin could not be created/updated");
  }
  if(hasImagePath) return data

  // 6. Handle image upload only if there's a new image file
  if (!hasImagePath) {
    const { error: storageError } = await supabase
      .storage
      .from("cabins-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      // Clean up if image upload fails
      await supabase.from("cabins").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error("Cabin image could not be uploaded, cabin was not created");
    }
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
