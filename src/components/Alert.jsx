import { StyledAlertBox } from "./styled/Alert.styled";

export default function Alert({children}){
    return (
        <>
        <StyledAlertBox>
            {children} 
        </StyledAlertBox>
        </> 
    )
}