import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { auth } from '@lib/firebase';
import { formatUser } from '@utils/formatUser';

export const AuthContext = createContext({} as AuthContextProps);

type User = {
    name: string,
    photoUrl: string,
    email: string,
    isEmailVerified: boolean,
    uid: string,
}

interface AuthContextProps {
    user: User,
    isUserLoading: boolean,
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState(null);
    const [isUserLoading, setIsUserLoading] = useState(true);

    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if (user) {
                const formattedUser = formatUser(user);
                setUser(formattedUser);
                setIsUserLoading(false);
                return;
            }

            setUser(null);
            setIsUserLoading(false);
        })
    }, [])

    return (
        <AuthContext.Provider
            value={{
                user,
                isUserLoading,
            }}
        >
            {children}
        </AuthContext.Provider>

    );
}

export function useAuth() {
    return useContext(AuthContext);
}