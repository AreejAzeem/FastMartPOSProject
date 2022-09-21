import React, {useState} from "react";
import "./product.css";

function Product(props) {
  const [product, setProduct] = useState(
    // productId: 1,
    // productImg:'https://islamabad.olpersmart.pk/wp-content/uploads/2020/11/olpers-fcmp-800gm-1.jpg',
    // productName: "Olpers",
    // category: "Dairy",
    // productPrice: "230",
    // stockStatus:
    //   "IN",
    //   productShortDesc:"the full cream mil with pro biotic and less fat"
  props.product
  );
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
            <h5 className="product_barcode">{product.productBarcode}</h5>
          </div>
          <div className="product_productNameDiv">
          <h5 className="product_productName">{product.productName}</h5>
          </div>
          <div className="product_productCategoryDiv">
          <h5 className="product_productCategory">{product.category}</h5>
          </div>
          <div className="product_productPriceDiv">
          <h5 className="product_productPrice">Rs.{product.productPrice}</h5>
          </div>
          <div className="product_productQtyDiv">
          <h5 className="product_productQty">13</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
