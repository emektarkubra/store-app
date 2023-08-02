import { styled } from "styled-components";

export const StyledProductsLayout = styled.div`
/* border : 1px solid red; */
display : flex;


& > .products {
    width: 75%;

}
& > .products>h1 {
    font-size : 30px;
    margin-left : 100px;
    margin-bottom :0;

}
& > .categories {
    width: 25%;
    
    
}

& > .categories>h1 {
    font-size : 30px;
    margin-left : 10px;
    margin-bottom :0;

}


`