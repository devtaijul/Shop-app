import React from "react";
import { connect } from "react-redux";
import { Button } from "antd";
import "./Product.css";

function Product(props) {
  console.log(props);

  return (
    <div className="row p-4">
      {props.productList.map(singleProduct => {
        return (
          <div className="col-md-3 single-product" key={singleProduct.id}>
              <img className='product-img' src={singleProduct.image} alt={singleProduct.title}/>

              <p>Rating: <i class="fas fa-star"></i> 5 </p>

              <h6> {singleProduct.title} </h6>

              <button className='btn btn-info'>Add to cart <i class="fas fa-cart-plus ml-3"></i></button>
          </div>
        );
      })}
    </div>
  );
}

const mapStateToProps = state => {
  console.log(state);

  return {
    productList: state.ProductList
  };
};

const mapDispatchToProps = dispatch => {};

export default connect(mapStateToProps, mapDispatchToProps)(Product);
