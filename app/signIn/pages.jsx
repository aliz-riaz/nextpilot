"use client";

import { signIn, signOut } from "next-auth/react";

const SignInpage = () => {
  return (
    <form>
      <h4>SignIn form</h4>
      <div>
        <label>email</label>
        <input type="text" placeholder="email" />
      </div>
      <div>
        <label>password</label>
        <input type="password" placeholder="password" />
      </div>
      <div>
        <button type="submit" className="btn">
          SignIn
        </button>
      </div>
    </form>
  );
};

export default SignInpage;
