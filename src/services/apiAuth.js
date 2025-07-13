import Supabase, { supabaseUrl } from "../services/Supabase";

export async function signUp({ fullName, email, password }) {
  const { data, error } = await Supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        fullName,

        avatat: "",
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }
  console.log(data);

  return data;
}
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

export async function logout() {
  const { error } = await Supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function updateCurrentUser({ password, fullName, avatar }) {
  //1.Upadate the password  or fullName
  console.log({ password, fullName, avatar });

  let updateData;
  if (password) updateData = { password };
  if (fullName) updateData = { data: { fullName } };

  const { data, error } = await Supabase.auth.updateUser(updateData);
  console.log("data", data);

  if (error) throw new Error(error.message);
  if (!avatar) return data;

  //2 Upload the avatar in the user
  const fileName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await Supabase.storage
    .from("avatar")
    .upload(fileName, avatar);

  if (storageError) throw new Error(error.message);

  //3Update avatar in the user

  // https://xkkjhrbogvzjrzieusah.supabase.co/storage/v1/object/public/avatar//default-user.jpg
  const { data: updatedUser, error: error2 } = Supabase.auth.updateUser({
    data: {
      avatar: `${supabaseUrl}/storage/v1/object/public/avatar/${fileName}`,
    },
  });

  if (error2) throw new Error(error2.message);

  return updatedUser;
}
