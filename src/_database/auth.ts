import { supabase } from "./supabase";

// Sign Up
export const signUserUp = async (name: string, email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
            emailRedirectTo: "https://personal-finance-app-test-ruddy.vercel.app/email-confirmed",
        },
    });

    if (error) console.error("Error signing user up:", error);

    return { data, error };
};
// Login
export const signUserIn = async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
    });

    if (error) console.error("Error signing in:", error);

    return { data, error };
};

// Logout
export const signUserOut = async () => {
    const { error } = await supabase.auth.signOut();

    if (error) console.error("Error signing user out:", error);
};

// Check if logged in
export const getUserSession = async () => {
    const {
        data: { session },
        error,
    } = await supabase.auth.getSession();

    if (error) console.error("Error fetching user session:", error);

    return session;
};
