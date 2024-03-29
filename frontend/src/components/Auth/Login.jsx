import React, { useState } from "react";
import styles from "./Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import Input from "../UI/Input";

function Login() {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const inputChangeHandler = (e) => {
    const { value, id } = e.target;
    setInputValue((prev) => ({ ...prev, [id]: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await postData("api/v1/auth/login", inputValue);

      if (response.status === 404 || response.status === 401) {
        throw new Error("Invalid Email Or Password");
      }

      if (response.status === 500) {
        throw new Error("Server Side Error");
      }

      if (response.status !== 200) {
        throw new Error("Something went wrong. Please try again.");
      }

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("userId", response.data.userId);
        navigate("/");
      }
    } catch (err) {
      // console.log("error => ", err);
      alert(err || "Something went wrong");
    }
  };

  return (
    <div className={styles.rootContainer}>
      <form onSubmit={submitHandler} className={styles.container}>
        <h3>Login</h3>
        <div className={styles.fieldControls}>
          <Input
            value={inputValue.email}
            id="email"
            onChange={inputChangeHandler}
            label={"Email"}
          />
          <Input
            value={inputValue.password}
            id="password"
            onChange={inputChangeHandler}
            label={"Password"}
            type='password'
          />
          <div className={styles.btnContainer}>
            <button type="submit">Login</button>
            <Link
              style={{ alignSelf: "center", margin: "1rem 0 0 0" }}
              className={styles.forgetButton}
              to="/forgot-password"
            >
              Forgot Password
            </Link>
            <div className={styles.secondBtnContainer}>
              Don't have an account yet?{" "}
              <Link
                style={{
                  margin: "0 2px",
                }}
                to="/signup"
              >
                Signup
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
