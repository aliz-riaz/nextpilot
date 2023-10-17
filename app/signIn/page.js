"use client";

import { signIn, signOut } from "next-auth/react";
import { useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function SignInpage(props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const [userData, setUserdata] = useState({
    email: "",
    password: "",
  });
  const userName = useRef("");
  const pass = useRef("");
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      username: userData.email,
      password: userData.password,
      redirect: false,
    });

    if (!res?.error) {
      // router.push(callbackUrl ?? "http://localhost:3000");
    }
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <h4>SignIn form</h4>
      <div>
        <label>email</label>
        <input
          type="text"
          placeholder="email"
          // value={userData.email}
          onChange={(e) => setUserdata({ ...userData, email: e.target.value })}
          // onChange={(e) => (userName.current = e.target.value)}
        />
      </div>
      <div>
        <label>password</label>
        <input
          type="password"
          placeholder="password"
          // value={userData.password}
          onChange={(e) =>
            setUserdata({ ...userData, password: e.target.value })
          }
          // onChange={(e) => (pass.current = e.target.value)}
        />
      </div>
      <div>
        <button type="submit" className="btn">
          SignIn
        </button>
      </div>
    </form>
  );
}
