import { supabase } from "./supabase";

// Login 
export const signUserIn = async (email: string, password: string) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password
  })
    if (error) console.error('Error signing in:,',error);

    return data;
}

// Logout
export const signUserOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) console.error('Error signing user out:',error);
}

// Check if logged in
export const getUserSession = async () => {
  const { data: { session }, error } = await supabase.auth.getSession();

  if (error) console.error('Error fetching user session:',error);

  return session;
}