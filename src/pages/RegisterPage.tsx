import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../firebase/auth";
import React, { useState } from "react";
const auth = getAuth(app);

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // 회원가입 성공 시 로직
        const user = userCredential.user;
        console.log("회원가입 성공", user);
      })
      .catch((error: { code: any; message: any }) => {
        // 회원가입 실패 시 오류 처리
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("회원가입 실패", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleSignUp}>회원가입</button>
    </div>
  );
}

export default SignUp;
