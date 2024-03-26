import { createContext, useState } from 'react';

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true
})

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
}

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}