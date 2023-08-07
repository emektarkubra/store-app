
import { useContext } from "react";
import { StyledAlertBox, StyledSuccessAlertBox } from "../components/styled/Alert.styled";
import { SignContext } from "../context/SignContext";
import { StyledSignupBox } from "./styled/Signup.styled";
import { BsX } from "react-icons/bs";
import { Navigate } from "react-router-dom";

export default function Signup() {

    const { handleChangeSignupInput, handleSignup, user, userAdded } = useContext(SignContext)

    const storedUserList = JSON.parse(localStorage.getItem("userList"))
    const exist = storedUserList ? storedUserList.some(loginUser => loginUser.email === user.email) : false

    return (
        <StyledSignupBox className="loginBox">
            {
                exist ? <StyledAlertBox>User is exist <button> <BsX /></button> </StyledAlertBox> : (userAdded && null)
            }

            <div className="loginFormBox">
                <div>Welcome to K-Store! Let’s begin the adventure</div>
                <form>
                    <div className="inputEmail">
                        <label htmlFor="inputEmail" className="form-label">Enter your email*</label>
                        <input onChange={handleChangeSignupInput} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email" required />
                    </div>
                    <div className="inputPassword">
                        <label htmlFor="inputPassword" className="form-label">Create a password*</label>
                        <input onChange={handleChangeSignupInput} type="password" className="form-control" id="inputPassword" name="password" required />
                    </div>
                    <div className="inputUserName">
                        <label htmlFor="inputUserName" className="form-label">Enter a username*</label>
                        <input onChange={handleChangeSignupInput} type="text" className="form-control" id="inputUserName" name="userName" required />
                    </div>
                    <button onClick={handleSignup} type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        </StyledSignupBox>


    )
}