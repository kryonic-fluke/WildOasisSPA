import Supabase from "../services/Supabase";

export async function login({ email, password }) {
  console.log(email, password);

  const { data, error } = await Supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await Supabase.auth.getSession();

  if (!session.session) return null;

  const { data, error } = await Supabase.auth.getUser();

  console.log(data);

  if (error) {
    throw new Error(error.message);
  }

  return data?.user;
}


export async function logout(){

const  {error} = await Supabase.auth.signOut();
if(error) throw new Error(error.message);

}