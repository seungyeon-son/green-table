import { auth } from "../firebase/auth/auth";
import React, { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // 로그인 성공 시 로직
        const user = userCredential.user;
        console.log("로그인 성공", user);
      })
      .catch((error: { code: any; message: any }) => {
        // 로그인 실패 시 오류 처리
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("로그인 실패", errorCode, errorMessage);
      });
  };

  return (
    <div>
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
};

export default Login;
