import React, { useCallback, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Root.module.css";
import Expenses from "./Expenses/Expenses";
import Header from "./UI/Header";
import Profile from "./Profile/Profile";
import ExpenseContext from "../store/expense-context";

const Root = () => {
  const navigate = useNavigate();

  const clickHandler = () => {
    navigate("/add-expense");
  };

  const expenseCtx = useContext(ExpenseContext);

  const logoutHandler = () => {
    const confirmLogout = window.confirm("do you want to logout?");
    if (!confirmLogout) return;

    localStorage.clear();
    navigate("/login");
    expenseCtx.onClearContext();
  };

  const [showProfile, setShowProfile] = useState(false);

  const profileToggleHandler = useCallback(() => {
    setShowProfile(!showProfile);
  }, [showProfile]);

  return (
    <div className={styles.root}>
      <Header onLogout={logoutHandler} onProfileToggle={profileToggleHandler} />
      <Profile
        showProfile={showProfile}
        onProfileToggle={profileToggleHandler}
      />
      <div className={styles.btnContainer}>
        <button className={styles.addExpenseButton} onClick={clickHandler}>
          Add New Expense
        </button>
      </div>
      <Expenses />
    </div>
  );
};

export default Root;
