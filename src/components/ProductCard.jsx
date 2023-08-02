import { StyledProductCard } from "./styled/ProductCard.styled";

export default function ProductCard({product}) {
    return (
        <>
        <StyledProductCard className="card">
         
                <img src={product.image} className="card-img" />
  
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description.substring(0,40)}..</p>
                    <p className="card-price-text">{product.price} €</p>
                    <button className="btn">Fav</button>
                </div>
        </StyledProductCard>
        </>
    )
}