import {
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "@/components/buttons";
import Head from "next/head";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";


export default function Home({ session }) {
  const signInButtonNode = () => {
    if (session) {
      return false;
    }

    return (
      <div>
        <LoginButton />
      </div>
    );
  };

  const signOutButtonNode = () => {
    if (!session) {
      return false;
    }

    return (
      <div>
        <LogoutButton />
      </div>
    );
  };

  if (!session) {
    return (
      <div className="hero">
        <div className="navbar">
          {signOutButtonNode()}
          {signInButtonNode()}
        </div>
        <div className="text">You aren't authorized to view this page</div>
      </div>
    );
  }

  return (
    <div className="hero">
      <Head>
        <title>Index Page</title>
      </Head>
      <div className="navbar">
        <RegisterButton />
        {signOutButtonNode()}
        {signInButtonNode()}
        <ProfileButton />
      </div>
      <div className="text">Hello world</div>
    </div>
  );
}
