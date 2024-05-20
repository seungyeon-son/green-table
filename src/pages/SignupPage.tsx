import { auth } from "../firebase/auth/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential: { user: any }) => {
        // 회원가입 성공 시 로직
        const user = userCredential.user;
        console.log("회원가입 성공", user);
        alert("회원가입 성공");
        navigate("/main"); // 메인 페이지로 이동
      })
      .catch((error: { code: any; message: any }) => {
        // 회원가입 실패 시 오류 처리
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("회원가입 실패", errorCode, errorMessage);
      });
  };

  return (
    <div className="flex items-center justify-center w-full h-[calc(100vh-65px)]">
      <form
        action=""
        className="flex flex-col items-center justify-center gap-5 w-[440px] px-6 pt-8 pb-10 border rounded-md"
      >
        <h1 className="text-[24px] font-medium text-left w-full">회원가입</h1>
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
        <button onClick={handleSignUp} className=" bg-green-500 text-white w-full h-10 rounded-md">
          회원가입
        </button>
      </form>
    </div>
  );
}
export default SignUp;
