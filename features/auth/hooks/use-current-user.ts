import { useSession } from "next-auth/react";
// import { useCurrentUser } from "../hooks/use-current-user";

export const useCurrentUser = ()=>{
    const session = useSession();

    return session?.data?.user
} 