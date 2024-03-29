import React, { useState } from "react";
import styles from "./Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../utils/api";
import Input from "../UI/Input";

function Signup() {
  const [inputValue, setInputValue] = useState({
    username: "",
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
      const response = await postData("api/v1/auth/signup", inputValue);

      if (response.status === 401) {
        const validationError = response.data.errors[0].msg;
        throw new Error(validationError);
      }

      if (response.status === 409) {
        throw new Error(response.data.message);
      }

      if (!response.data.success) {
        throw new Error("Something went wrong!");
      }

      navigate("/login");
    } catch (err) {
      console.log(err);
      alert(err || "Something went wrong");
    }
  };

  return (
    <div className={styles.rootContainer}>
      <form onSubmit={submitHandler} className={styles.container}>
        <h3>Signup</h3>
        <div className={styles.fieldControls}>
          <Input
            value={inputValue.username}
            id="username"
            onChange={inputChangeHandler}
            label={"Username"}
          />
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
            type="password"
          />
          <div className={styles.btnContainer}>
            <button className={styles.button}>Signup</button>
            <div className={styles.secondBtnContainer}>
              Already have an account?
              <Link
                style={{
                  margin: "0 2px",
                }}
                to="/login"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Signup;
