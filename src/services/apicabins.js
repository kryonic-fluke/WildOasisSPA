import supabase from "./Supabase";

export async function getCabins() {
  let { data ,error } = await supabase.from("cabins").select("*");
  if(error){
      throw new Error("Cabins could not be loaded")
  }

  return data;
}

 