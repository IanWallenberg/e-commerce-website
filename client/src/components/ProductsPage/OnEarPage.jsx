import styled from "styled-components";
import { useFetchOnEarProducts } from "../../hooks/useFetchOnEarProduct";
import Card from "./Card";
import { Link } from "react-router-dom";

const Header = styled.div`
  background-image: url("./assets/products-header.png");
  height: 30%;
`;
const CardsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const BigTitle = styled.h1`
  text-align: center;
  font-size: 3rem;
  padding: 30px 0;
`;

const Button = styled.button`
  font-size: 1.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding-left: 50px;
`;

export const OnEarPage = () => {
  const onEarProducts = useFetchOnEarProducts();

  return (
    <div>
      <Header />
      <BigTitle>On Ear Products</BigTitle>
      <Button>FILTER</Button>
      {onEarProducts.map((product) => (
        <CardsContainer key={product.id}>
          <Link to={`/product/${product.id}`} key={product.id} state={product}>
            <Card {...product} />
          </Link>
        </CardsContainer>
      ))}
    </div>
  );
};
