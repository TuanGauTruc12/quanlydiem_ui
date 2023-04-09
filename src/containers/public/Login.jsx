import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { title } from "../../ultis/title";
import { login } from "../../apis";

const Login = () => {
  document.title = title.login;
  const [email, setEmail] = useState("");
  const [mssv, setMSSV] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (mssv.length === 0 || email.length === 0) {
      setError("MSSV, email và mật khẩu không được bỏ trống");
    } else {
      setError("");
      const user = {
        mssv: mssv,
        email: email
      };
      login(user)
        .then((response) => {
          if(response.data === ''){
            setError("Sai thông tin. Xin vui lòng kiểm tra lại!!!");
          }else{
            localStorage.setItem('mssv', response.data.MSSV);
            navigate('/');
          }
        });

    }
  };

  return (
    <div className="flex justify-center items-center h-y">
      <div className="form shadow-2xl shadow-yellow-500/50 p-10 flex flex-col gap-12 w-1/2">
        <div className="title w-full flex justify-center font-semibold text-2xl">
          <h3 className="title">ĐĂNG NHẬP</h3>
        </div>

        <div className="w-full flex flex-col gap-4 font-serif text-xl">
          <label className="inline-block" htmlFor="mssv">
            Nhập mssv
          </label>
          <input
            id="mssv"
            className="w-full p-2 shadow-2xl rounded-md"
            type="text"
            value={mssv}
            onChange={(e) => setMSSV(e.target.value)}
          />
        </div>

        <div className="w-full flex flex-col gap-4 font-serif text-xl">
          <label className="inline-block" htmlFor="email">
            Nhập email
          </label>
          <input
            id="email"
            className="w-full p-2 shadow-2xl rounded-md"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {error.length === 0 ? (
          <></>
        ) : (
          <span className="text-red-500">{error}</span>
        )}

        <button onClick={() => handleLogin()} className="btn w-full p-4">
          Đăng nhập ngay
        </button>
      </div>
    </div>
  );
};

export default Login;
