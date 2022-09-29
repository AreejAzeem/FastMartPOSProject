import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import "./homePage.css";
import Product from "../../Components/product/Product";
import FastMart from "../../Components/Animations/FastMart.jsx";
import Cart from "../../Components/Animations/Cart";
import ProductDialog from "../../Components/ProductDialog/ProductDialog";
import Button from "@mui/material/Button";
import { BsCashStack } from "react-icons/bs";
import { BsCreditCardFill } from "react-icons/bs";
import ReceiptDialog from "../../Components/ReceiptDialog/ReceiptDialog.jsx";
import axios from "axios";
import config from "../../Config/config";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
function HomePage() {
  const [active, setActive] = useState(false);
  const [cashActive, setCashActive] = useState(false);

  const [inputText, setInputText] = useState("");
  const [enter, setEnter] = useState(false);
  const [openReceiptDialog, setOpenReceiptDialog] = useState(false);

  // const [cartRedux, setCartRedux]=useState([]);
  const [product, setProduct] = useState();
 const [cartRedux, setCartRedux]=useState([]);
  const [cartProduct, setCartProduct] = useState([
    {
      productBarcode: 16484303003889,
      productName: "Olperssssssssss",
      category: "gdhghhhhhhhhh",
      productPrice: "23044",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
    {
      productBarcode: 1,
      productName: "Olpers",
      category: "Dairy",
      productPrice: "230",
      stockStatus: "20",
      productShortDescription: "Olpers",
    },
  ]);
  const [length, setLength] = useState(cartProduct.length);

  useEffect(() => {
    console.log("88");
    console.log(product);
   
    if (product) {
      setEnter(true);
      HandleSearch();
  
    
    }
  }, [product,setCartRedux]);
  const getProduct = async () => {
    console.log("in line 162 " + inputText);
    let result1 = await fetch(
      config.apiURL + `/products/productByBarcode?productBarcode=${inputText} `
    );

    console.log("in line 153");
    var result = await result1.json();

    //setProduct(result["data"][0]);

    console.log("in search ");
    if (result["data"] != undefined) {
      console.log(result["data"]);
      setProduct(result["data"]);
      console.log("Last" + product);
      console.log("in line 174" + enter);
    }
    // setProduct(pro);
  };

  const HandleSearch = () => {
    console.log("value of enter in line 158" + enter);
    console.log(`In line 159 ${product}`);

    return (
      <div>
        {product != null ? (
          <ProductDialog product={product} setProduct={setProduct}/>
          
        ) : (
          <div>Product not found</div>
        )}
       
      </div>
    );
  };
  const HandleOrder = () => {
    console.log("in order dialog   ");
    console.log("in line 52 " + openReceiptDialog);
    console.log("in line 54 " + openReceiptDialog);
    useEffect(() => {});
    return (
      <div>
        {openReceiptDialog ? (
          <ReceiptDialog className="receipt_dialog_component" />
        ) : null}
      </div>
    );
  };
  const CartComponent = ({setCartRedux}) => {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
   
    useEffect(() => {
      console.log("in cart compooo");

      setCartRedux(cartItems);
      console.log("in line 203");
      console.log(cartItems);
      console.table(cartItems);
      console.log(cartItems[0]);
    }, [cart,dispatch]);
    const removeHandler=(id)=>{
      dispatch(removeFromCart(id))
    }
  
    return (
      <div>
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          console.log("Line 205: "+ cartItems.length),
          cartItems.map((cartProduct) => {
            console.log("in line 210 of homepage")
            console.log(cartProduct.qty);
            return <Product product={cartProduct} removeHandler={removeHandler} />;
          })
        )}
        {/* {cartProduct.map((cartProduct)=>{  
              return <Product product={cartProduct}  />})} */}
      </div>
    );
  };
  return (
    <div className="homePage_container">
      <div className="homePage_containerWrapper">
        <div className="homePage_topSection">
          <div className="homePage_header">
            <h2 className="homePage_head">FastMart</h2>
            <Cart />
          </div>
          <div className="homePage_searchContain">
            <TextField
              className="search_input"
              id="outlined-basic"
              variant="outlined"
              label="Search"
              placeholder="Enter barcode / product name"
              onChange={(e) => {
                setOpenReceiptDialog(false);
                setProduct(null);
                setInputText(e.target.value);
              }}
              size="medium"
            />

            <Button
              onClick={() => {
                setOpenReceiptDialog(false);
                getProduct();
                //setEnter(true);
              }}
            >
              {" "}
              Search
            </Button>
            {product ? <HandleSearch /> : null}
          

          </div>
        </div>

        {console.log("in bottom renderig")}
        <div className="homePage_bottomContain">
          <div className="homePage_bottomContain_productSection">
            <div className="homePage_bottomContain_productSection_headerDiv">
              <div className="homePage_bottomContain_productSection_header">
                <div className="homePage_bottomContain_productSection_image">
                  Image
                </div>
                <div className="homePage_bottomContain_productSection_barcode">
                  Barcode
                </div>
                <div className="homePage_bottomContain_productSection_productName">
                  Product
                </div>
                <div className="homePage_bottomContain_productSection_productCategory">
                  Category
                </div>
                <div className="homePage_bottomContain_productSection_productPrice">
                  Price
                </div>
                <div className="homePage_bottomContain_productSection_productQty">
                  Quantity
                </div>
              </div>
            </div>
            <div
              className={
                length <= 9
                  ? ""
                  : "homePage_bottomContain_productSection_productDiv_Scroll"
              }
            >
         <CartComponent setCartRedux={setCartRedux}/>
            </div>
          </div>
          <div className="homePage_bottomContain_checkoutSection">
            <div className="homePage_bottomContain_checkoutSectionWrapper">
              <div className="checkoutSection_headerDiv">
                <h3 className="checkoutSection_header">Checkout</h3>
              </div>
              <div className="checkoutSection_subtotalDiv">
                <div className="checkoutSection_subtotal">
                  <div className="checkoutSection_subtotalHeader">
                    <h5 className="subtotal">Subtotal</h5>
                  </div>
                  <div className="checkoutSection_subtotalNumber">
                    <h5 className="rupees">Rs. 200</h5>
                  </div>
                </div>
                <div className="checkoutSection_line"></div>
              </div>
              <div className="checkoutSection_taxDiv">
                <div className="checkoutSection_tax">
                  <div className="checkoutSection_taxHeader">
                    <h5>Tax</h5>
                  </div>
                  <div className="checkoutSection_taxNumber">
                    <h5 className="rupees">Rs. 50</h5>
                  </div>
                </div>
                <div className="checkoutSection_line"></div>
              </div>
              <div className="checkoutSection_grandtotalDiv">
                <div className="checkoutSection_grandtotal">
                  <div className="checkoutSection_grandtotalHeader">
                    <h5 className="grandtotal">Grand Total</h5>
                  </div>
                  <div className="checkoutSection_grandtotalNumber">
                    <h5 className="rupees">Rs. 200</h5>
                  </div>
                </div>
                <div className="checkoutSection_line"></div>
              </div>
              <div className="checkoutSection_paymentMethodDiv">
                <div className="checkoutSection_paymentMethodHeader">
                  Payment Method
                </div>
                <div className="checkoutSection_paymentMethod_iconContain">
                  <div
                    className={
                      active
                        ? "checkoutSection_paymentMethod_creditCard active"
                        : "checkoutSection_paymentMethod_creditCard"
                    }
                    onClick={() => {
                      setActive((current) => !current);
                      console.log("in line 179 ");
                      setCashActive(false);
                      setOpenReceiptDialog(false);
                      setProduct("");
                    }}
                  >
                    <BsCreditCardFill className="checkoutSection_paymentMethod_icon" />
                    <h5 className="checkoutSection_paymentMethod_text">
                      Credit Card
                    </h5>
                  </div>
                  <div
                    className={
                      cashActive
                        ? "checkoutSection_paymentMethod_cash cashActive"
                        : "checkoutSection_paymentMethod_cash"
                    }
                    onClick={() => {
                      setCashActive((current) => !current);
                      setActive(false);
                      setOpenReceiptDialog(false);
                    }}
                  >
                    <BsCashStack className="checkoutSection_paymentMethod_icon" />
                    <h5 className="checkoutSection_paymentMethod_text">Cash</h5>
                  </div>
                  <div></div>
                </div>
              </div>
              <div className="checkoutSection_buttonDiv">
                <Button className="checkoutSection_cancel" variant="contained">
                  Cancel
                </Button>
                <Button
                  className="checkoutSection_pay"
                  variant="contained"
                  onClick={() => {
                    console.log("in line 197 after click " + openReceiptDialog);

                    setOpenReceiptDialog(true);
                    // return(<HandleOrder/>)
                  }}
                >
                  Pay
                </Button>
                {console.log("in handle order renderig")}
                {openReceiptDialog ? <HandleOrder /> : null}
                {/* <GetCartRedux setCartRedux={setCartRedux}/> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
