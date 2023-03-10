"use client";
import { Session } from "next-auth";
import {SessionProvider as Provider} from "next-auth/react";
type Props={
    // expecting a session from nextauth

    children:React.ReactNode;
    session:Session | null;
}

export function SessionProvider({children,session}:Props){
    return <Provider>{children}</Provider>;

}
