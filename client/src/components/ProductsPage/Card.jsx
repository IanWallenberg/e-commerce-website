import "./Card.css";

const Card = ({ image1, brandModel, brand, price }) => {
  return (
    <div className="card">
      <div className="colors">
        <div className="color red"></div>
        <div className="color blue"></div>
        <div className="color black"></div>
      </div>
      {!image1 ? (
        <img
          src="/assets/headphonesLogo.png"
          alt="headphones-logo"
          className="product-img"
        />
      ) : (
        <img src={image1} alt="Product" className="product-img" />
      )}
      <div className="product-info">
        <h3 className="title">{brandModel}</h3>
        <div className="divider"></div>
        <h3 className="thin">{brand}</h3>
        <h3 className="price">
          <strong>$</strong> {price}
        </h3>
      </div>
    </div>
  );
};

export default Card;
