import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthSession, Session } from "@supabase/supabase-js";
import { signUserIn, signUserOut } from "@/_database/auth";
import { supabase } from "@/_database/supabase";

interface UserContextType {
    signIn: (email: string, password: string) => Promise<Session | undefined>;
    signOut: () => Promise<void>;
    session: AuthSession | null;
    isLoading: boolean;
}
const UserAuthContext = createContext<UserContextType | undefined>(undefined);

export default function UserAuthProvider ({children}: {children: ReactNode}) {
    const [session, setSession] = useState<AuthSession | null>(null);
    const [isLoading, setIsLoading] = useState(false);

       const signIn = async (email:string, password: string) => {
           setIsLoading(true);
            const response = await signUserIn(email, password);
            if (response.session) {
                console.log('User signed in with session:',response.session)
                return response.session;
            }
            setIsLoading(false)
        }

        const signOut = async () => {
            setIsLoading(true);
            const response = await signUserOut();
            return response;
            setIsLoading(false)
        }

        useEffect(()=>{
            const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
            });

            return () => {
            listener.subscription.unsubscribe();
            };  
        }, [])
    return (
        <UserAuthContext.Provider value={{signIn, signOut, session, isLoading}}>
        {children}
        </UserAuthContext.Provider>
    )
}

export const useUserAuth = () => {
    const context = useContext(UserAuthContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};