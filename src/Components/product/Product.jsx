import React from "react";
import "./product.css";

function Product() {
  return (
    <div className="product">
      <div className="productWrapper">
        <div className="product_contain">
          <div className="product_imageDiv">
          <img style={{ width: "40px", borderRadius: "5px", height:'43px' ,marginTop:'5%'}}
                      src="https://pngset.com/images/lays-chips-french-cheese-70-gm-lays-yogurt-and-herb-food-snack-ketchup-mayonnaise-transparent-png-1155585.png"
                      alt=""
                    />
          </div>
          <div className="product_barcodeDiv">
            <h5 className="product_barcode">0209847839954</h5>
          </div>
          <div className="product_productNameDiv">
          <h5 className="product_productName">Lays</h5>
          </div>
          <div className="product_productCategoryDiv">
          <h5 className="product_productCategory">Chips</h5>
          </div>
          <div className="product_productPriceDiv">
          <h5 className="product_productPrice">2000</h5>
          </div>
          <div className="product_productQtyDiv">
          <h5 className="product_productQty">3</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
