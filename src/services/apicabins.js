import supabase from "./Supabase";

export async function getCabins() {
  let { data ,error } = await supabase.from("cabins").select("*");
  if(error){
      throw new Error("Cabins could not be loaded")
  }

  return data;
}

 
export default async function deleteCabins(id){
const {data, error } = await supabase
.from('cabins')
.delete()  
.eq('id', id)     
                             //here we select what row to delete
if(error){
  throw new Error("Cabins could not be deleted")
}

return data;  
}