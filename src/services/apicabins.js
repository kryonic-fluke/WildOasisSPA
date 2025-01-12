import supabase from "./Supabase";

export async function getCabins() {
  let { data, error } = await supabase.from("cabins").select("*");
  if (error) {
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createCabin(newCabin) {
  const { data,error } = await supabase.from("cabins").insert([newCabin]);
  if (error) {
    throw new Error("Cabins could not be created");
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
