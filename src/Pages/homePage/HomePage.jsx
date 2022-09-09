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

function HomePage() {
  const [length, setLength]=useState(10);
  const[active, setActive]=useState(false);
  const[cashActive , setCashActive]=useState(false);
  const[refresh, setRefresh]=useState(false);
  
  const [inputText, setInputText] = useState("");
  const [enter, setEnter] = useState(false);
  const [openReceiptDialog, setOpenReceiptDialog] = useState(false);
  const [product, setProduct] = useState({
    productId: 1,
    productName: "Olpers",
    categoryName: "Dairy",
    productPrice: "230",
    stockStatus: "20",
  });
  // let inputHandler = (e) => {
  //   var lowerCase = e.target.value.toLowerCase();
  //   console.log(" in line 8 " + lowerCase);
  //   setInputText(lowerCase);
  // };
  useEffect(() => {
    console.log("88");
   
  }, [refresh]);
  const HandleEnterKey = (e) => {
    if (e.key == "Enter") {
      setEnter(true);
      setInputText(e.target.value);
      setOpenReceiptDialog(false);
    
      console.log("value is " + inputText);

      // alert(e.target.value+"key pressed");
    }
    return (
      <div>{        
        inputText != "" ? <ProductDialog input={inputText} /> : null}</div>
    );
  };
  const HandleOrder = () => {
    console.log("in order dialog   ");
   console.log("in line 52 "+openReceiptDialog);
   
   console.log("in line 54 "+openReceiptDialog);
    return (
      <div>
        {openReceiptDialog ? <ReceiptDialog  className="receipt_dialog_component"/> : null}    
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
              // onChange={inputHandler}
              onChange={HandleEnterKey}
              size="medium"
              onKeyDown={HandleEnterKey}
            />
            {/* {inputText!=='' && enter?(

          <ProductDialog 
          maxWidth="500px"  />
          )
          :null} */}
         {inputText!=='' ?  <HandleEnterKey />:null}
          </div>
        </div>
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
            <div className={length<=9 ?'':'homePage_bottomContain_productSection_productDiv_Scroll'}>
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
              <Product />
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
                  <div className={active ? "checkoutSection_paymentMethod_creditCard active" :"checkoutSection_paymentMethod_creditCard" }onClick={()=>{setActive(current=>!current)
                    console.log("in line 179 ")
                    setInputText('');
                    setCashActive(false)
                    setOpenReceiptDialog(false)}}>
                    <BsCreditCardFill className="checkoutSection_paymentMethod_icon" />
                    <h5 className="checkoutSection_paymentMethod_text">
                      Credit Card
                    </h5>
                  </div>
                  <div className= {cashActive ? "checkoutSection_paymentMethod_cash cashActive":"checkoutSection_paymentMethod_cash"} onClick={()=>{setCashActive(current=>!current)
                    setActive(false)
                    setInputText('');
                    setOpenReceiptDialog(false)}}>
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
                  
                    console.log("in line 197 after click "+openReceiptDialog)
                    setInputText('');
                    setRefresh(!refresh);
                    setOpenReceiptDialog(true);
                     HandleOrder()
                    
                  }}
                >
                  Pay
                </Button>
               {console.log("in handle order renderig")}
               { openReceiptDialog? <HandleOrder />:null}
              
              </div>
            </div>
          </div>
     

        </div>
      </div>
    
    </div>
    
  );
}

export default HomePage;
