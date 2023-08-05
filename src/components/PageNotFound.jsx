import { StyledPageNotFound } from "./styled/PageNotFound.styled";

export default function PageNotFound(){
    return (
        <>
        <StyledPageNotFound>
            <h1>404</h1>
            <h2>Oops, page not found</h2>
            <p>Sorry, but the requested URL was not found on this server. </p>
        </StyledPageNotFound>
        </>
    )
}