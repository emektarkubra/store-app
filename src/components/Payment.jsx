import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { StyledPaymentBox } from "./styled/Payment.styled";

export default function Payment() {
  const { totalPrice } = useContext(CartContext);
  return (
    <>
      <StyledPaymentBox>
        <div className="credit-box">
          <div className="total-credit-box">
            <h3>TOTAL</h3>
            <p>{totalPrice.toFixed(2)} €</p>
          </div>
          <div className="total-credit-quantity">
            <p>*KDV DAHİL</p>
          </div>
        </div>
        <div className="countinue-button-box">
          <button className="continue-button">CONTINUE</button>
        </div>
      </StyledPaymentBox>
    </>
  );
}
