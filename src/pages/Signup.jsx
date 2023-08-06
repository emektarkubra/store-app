
import { useContext } from "react";
import Alert from "../components/Alert";
import { SignContext } from "../context/SignContext";
import { StyledSignupBox } from "./styled/Signup.styled";

export default function Signup() {

    const { handleChangeSignupInput, handleSignup } = useContext(SignContext)

    return (
        <StyledSignupBox className="loginBox">
            {
                // <Alert />

            }
            <div className="loginFormBox">
                <div>Welcome to K-Store! Let’s begin the adventure</div>
                <form>
                    <div className="inputEmail">
                        <label htmlFor="inputEmail" className="form-label">Enter your email*</label>
                        <input onChange={handleChangeSignupInput} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name="email" />
                    </div>
                    <div className="inputPassword">
                        <label htmlFor="inputPassword" className="form-label">Create a password*</label>
                        <input onChange={handleChangeSignupInput} type="password" className="form-control" id="inputPassword" name="password" />
                    </div>
                    <div className="inputUserName">
                        <label htmlFor="inputUserName" className="form-label">Enter a username*</label>
                        <input onChange={handleChangeSignupInput} type="text" className="form-control" id="inputUserName" name="userName" />
                    </div>
                    <button onClick={handleSignup} type="submit" className="btn btn-primary">Sign up</button>
                </form>
            </div>
        </StyledSignupBox>


    )
}