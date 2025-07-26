import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { AuthSession, Session, User, WeakPassword } from "@supabase/supabase-js";
import { signUserIn, signUserOut, signUserUp } from "@/_database/auth";
import { supabase } from "@/_database/supabase";

interface UserData {
    user: User | null;
    session: Session | null;
}

interface UserContextType {
    signUp: (
        name: string,
        email: string,
        password: string
    ) => Promise<{
        user: User | null;
        session: Session | null;
    }>;
    signIn: (
        email: string,
        password: string
    ) => Promise<{
        data: UserData;
        weakPassword?: WeakPassword | undefined;
    }>;
    signOut: () => Promise<void>;
    session: AuthSession | null;
    isLoading: boolean;
    error: string;
}
const UserAuthContext = createContext<UserContextType | undefined>(undefined);

export default function UserAuthProvider({ children }: { children: ReactNode }) {
    const [session, setSession] = useState<AuthSession | null>(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>("");

    const signUp = async (name: string, email: string, password: string) => {
        setIsLoading(true);
        const { data, error } = await signUserUp(name, email, password);
        if (error) {
            setError(error.message);
        } else {
            setError("");
        }
        setIsLoading(false);
        return data;
    };

    const signIn = async (email: string, password: string) => {
        setIsLoading(true);
        const { data, error } = await signUserIn(email, password);
        if (error) {
            setError(error.message);
        } else {
            setError("");
        }
        setIsLoading(false);
        return { data };
    };

    const signOut = async () => {
        setIsLoading(true);
        const response = await signUserOut();
        setIsLoading(false);
        return response;
    };

    useEffect(() => {
        const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session);
        });

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);
    return (
        <UserAuthContext.Provider value={{ error, signUp, signIn, signOut, session, isLoading }}>
            {children}
        </UserAuthContext.Provider>
    );
}

export const useUserAuth = () => {
    const context = useContext(UserAuthContext);
    if (!context) {
        throw new Error("useModal must be used within a ModalProvider");
    }
    return context;
};
