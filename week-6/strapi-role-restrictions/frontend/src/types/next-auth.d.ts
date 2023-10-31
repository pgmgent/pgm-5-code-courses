import { DefaultUser } from 'next-auth';
declare module 'next-auth' {
    export interface Session {
        user?: DefaultUser & { id: string; role: string; };
        jwt: string | null;
    }
    interface User extends DefaultUser {
        role: string;
        username: string;
    }
}
