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
  const [userAdded, setUserAdded] = useState(false);

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
    const isAdded = userList.some(
      (loginUser) => loginUser.email === user.email
    );
    if (!isAdded) {
      const newUserList = [...userList, user];
      setUserList(newUserList);
      setUserListCount((prev) => prev + 1);
      // Kullanıcı eklenip eklenmediğini başka bir bileşene geçirme
      setUserAdded(true);
      navigate("/login");
    }

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

    if(loginUser){
      setLoginUser(loginUser);
      setOnlineUser(loginUser);
      setOnlineUserCount((prev) => prev + 1);
      loginUser === undefined ? navigate("/login") : navigate("/");
    }else {
      setOnlineUser("")
    }
    
    e.preventDefault();
  }

  function handleSignout(e) {
    setOnlineUser(null);
    setOnlineUserCount((prev) => prev + 1);
    navigate("/login");
    setUserAdded(false);
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
          user,
          userAdded,
        }}>
        {children}
      </SignContext.Provider>
    </>
  );
}
