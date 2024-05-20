import { auth } from "../firebase/auth/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // 로그인 성공 시 로직
        const user = userCredential.user;
        console.log("로그인 성공", user);
        alert("로그인 성공");
        navigate("/main"); // 메인 페이지로 이동
      })
      .catch((error: { code: any; message: any }) => {
        // 로그인 실패 시 오류 처리
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("로그인 실패", errorCode, errorMessage);
      });
  };
  console.log("FIREBASE_APP_API_KEY");

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-65px)]">
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center gap-5 w-[440px] px-6 pt-8 pb-10 border rounded-md"
      >
        <h1 className="text-[24px] font-medium text-left w-full">로그인</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-200 h-10 w-full px-2 rounded-md"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-200 h-10 w-full px-2 rounded-md"
        />
        <button type="submit" className="bg-green-500 text-white w-full h-10 rounded-md">
          로그인
        </button>
        <div className="mt-5 pt-10 border-t border-gray-200 w-full">
          <p className="text-center mb-5">소셜로그인</p>
          <div className="flex gap-4 items-center justify-center">
            <button className="w-10 h-10 rounded-full bg-yellow-200">kakao</button>
            <button className="w-10 h-10 rounded-full bg-blue-300">google</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
