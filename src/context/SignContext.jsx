import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const SignContext = createContext();

export default function SignContextProvider({ children }) {
  const navigate = useNavigate();

  const defaultUser = {
    email: "",
    password: "",
    userName: "",
  };

  const [user, setUser] = useState(defaultUser);
  const [userList, setUserList] = useState([]);
  const [userListcount, setUserListCount] = useState(0);

  useEffect(() => {
    const storedUserList = JSON.parse(localStorage.getItem("userList"));
    setUserList(storedUserList ?? []);
  }, []);

  useEffect(() => {
    if (userListcount > 0) {
      localStorage.setItem("userList", JSON.stringify(userList));
    }
  }, [userListcount]);

  function handleChangeSignupInput(e) {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSignup(e) {
    setUserList((prev) => [...prev, user]);
    setUserListCount((prev) => prev + 1);
    e.preventDefault();
  }

  // ---------------------------------

  const defaultUserValue = {
    email: "",
    password: "",
    check: false,
  };
  const [userValue, setUserValue] = useState(defaultUserValue);
  const [loginUser, setLoginUser] = useState({});
  const [onlineUser, setOnlineUser] = useState(null);
  const [onlineUserCount, setOnlineUserCount] = useState(0);

  useEffect(() => {
    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    setOnlineUser(storedOnlineUser ?? null);
  }, []);

  useEffect(() => {
    if (onlineUserCount > 0) {
      localStorage.setItem("onlineUser", JSON.stringify(onlineUser));
    }
  }, [onlineUserCount]);

  function handleChangeLoginInput(e) {
    setUserValue((prev) => {
      return {
        ...prev,
        [e.target.name]:
          e.target.type === "checkbox" ? e.target.checked : e.target.value,
      };
    });
    e.preventDefault();
  }

  function handleLogin(e) {
    const loginUser = userList.find(
      (user) =>
        user.email === userValue.email && user.password === userValue.password
    );
    setLoginUser(loginUser);
    setOnlineUser(loginUser);
    setOnlineUserCount((prev) => prev + 1);
    e.preventDefault();
  }

  function handleSignout(e) {
    setOnlineUser(null);
    setOnlineUserCount((prev) => prev + 1);
    navigate("/login");
  }

  return (
    <>
      <SignContext.Provider
        value={{
          handleChangeSignupInput,
          handleSignup,
          handleChangeLoginInput,
          handleLogin,
          handleSignout,
          onlineUser,
          userList,
          loginUser,
        }}>
        {children}
      </SignContext.Provider>
    </>
  );
}
