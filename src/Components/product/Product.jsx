import React, {useState, useEffect} from "react";
import "./product.css";
import config from "../../Config/config";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

function Product(props) {
  useEffect(() => {
    console.log("in line 7  of Product"+props.product.productBarcode);
//  getProductByBarcode(cart.pId);
  })
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
  var url=config.apiURL;
  const dispatch=useDispatch();
  const getProductByBarcode=async(barcode)=>{
    let result = await fetch(config.apiURL+`/products/product?productBarcode=${barcode} `);
      console.log("in line 153");
      result = await result.json();
      console.log(result["data"]);
      setProduct(result['data']);   
           console.table(product); 
          console.log("in search ")
          // setProduct(pro);
       
  }
  return (
    <div className="product">
      <div className="productWrapper">
        <div className="product_contain">
          <div className="product_imageDiv">
          <img style={{ width: "40px", borderRadius: "5px", height:'43px' ,marginTop:'5%'}}
                      src={url + product.image}
                      alt=""
                    />
          </div>
          <div className="product_barcodeDiv">
            <h5 className="product_barcode">{product.productBarcode}</h5>
          </div>
          <div className="product_productNameDiv">
          <h5 className="product_productName">{product.name}</h5>
          </div>
          <div className="product_productCategoryDiv">
          <h5 className="product_productCategory">{product.category}</h5>
          </div>
          <div className="product_productPriceDiv">
          <h5 className="product_productPrice">Rs.{product.price}</h5>
          </div>
          <div className="product_productQtyDiv">
          <h5 className="product_productQty">{product.qty}</h5>
          </div>
          <div className="product_productDeleteDiv">
            <DeleteIcon className="product_deleteIcon" onClick={()=> dispatch(removeFromCart(product))}/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
