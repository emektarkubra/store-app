import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";
import { StyledLoginBox } from "./styled/Login.styled";

export default function Login(){

    const { handleChangeLoginInput, handleLogin } = useContext(LoginContext)

    return (
        <StyledLoginBox className = "loginFormBox">
            <form>
                <div className="inputEmail">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input onChange={handleChangeLoginInput} type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" name = "email"/>
                </div>
                <div className="inputPassword">
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input onChange={handleChangeLoginInput} type="password" className="form-control" id="inputPassword" name = "password"/>
                </div>
                <div className="form-check">
                    <input onChange={handleChangeLoginInput} type="checkbox" className="form-check-input" id="check" name = "check"/>
                    <label className="form-check-label" htmlFor="check">Check me out</label>
                </div>
                <button onClick={handleLogin} type="submit" className="btn btn-primary">Sign in</button>
            </form>
        </StyledLoginBox>
    )
}