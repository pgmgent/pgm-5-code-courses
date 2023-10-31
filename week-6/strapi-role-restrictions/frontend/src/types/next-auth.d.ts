import { DefaultUser } from 'next-auth';
declare module 'next-auth' {
    interface Session {
        user?: DefaultUser & { id: string; role: string; jwt: string };
    }
    interface User extends DefaultUser {
        role: string;
        username: string;
    }
}
