import * as React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import {FiPlusCircle} from "react-icons/fi";
import {FiMinusCircle} from "react-icons/fi";
import "./ReceiptDialog.css";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';
import { ClearAll, WifiLock } from "@mui/icons-material";
import axios from "axios";
import config from "../../Config/config";
import {useDispatch, useSelector} from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
   
  },
}));

const BootstrapDialogTitle = (props) => {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other} >
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ReceiptDialog(props) {
  const [opens, setOpens] = React.useState(true);
  const[length, setLength]=useState(5);

  var orderData='';
  const [order, setOrder] = useState();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const dispatch=useDispatch();
  useEffect(()=>{
    
    console.log("in use EFFECT of receipt")
console.log(props.receiptOrderNo);
console.log(cartItems)
 
  },[]);
  const getCartSubtotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const getCartGrandtotal = () => {
    const totalwithTax = cartItems.reduce(
      (price, item) => item.price * item.qty + price,
      0
    );
    return totalwithTax - ((7/100)*getCartSubtotal());
  };
const getOrderData=async(orderNo)=>{
  console.log(orderNo);
  await axios.get(config.apiURL+`/orders/order?orderNo=${orderNo}`).then (res=>{
    console.log(res.data.data[0]);
    orderData=res.data.data[0];
    // setOrder((order=>({...order, ...res.data.data[0]})));
    console.log(orderData);
    
    // var orderProducts=res.data.data[0].orderProducts;
    // console.log(orderProducts);
    // orderProducts.map( async(product )=>{
          
    //       let response= await axios.get(config.apiURL + `/products/productByBarcode?productBarcode=${product.productBarcode} `);
    //       console.log(response['data']['data'][0]);

    //     })

  
  }).catch(err=>{
    console.log(err);
  }

  ) 


//   console.log(result['data']['data'][0]);
//   if(result['data']['data'][0]!==undefined){
//   setOrder(result['data']['data'][0]);
//   console.log(order);
//   var orderProducts=order['orderProducts']
//   orderProducts.map( async(product )=>{
//     let response= await axios.get(config.apiURL + `/products/productByBarcode?productBarcode=${product.productBarcode} `);
//     console.log(response);
//   })
// }
 
cartItems.map((cartProduct) => {
  console.log("in line 210 of homepage");
  console.log(cartProduct.qty);
  {
   
  }

  // setOrderProducts((orderProducts) => [
  //   ...orderProducts,
  //   {

  //   }
  // ]);

 
})

}
const GetOrderDat=()=>{
console.log(cartItems);
  return( 
    <div>
  { cartItems.map((cartProduct) => {
      console.log(cartProduct);
    <div className="productContainer">
    <div className="productContainer_wrapper">
      <div className="productContainer_productName">{cartProduct.productId}</div>
      <div className="productConatiner_productQty">2</div>
      <div className="productConatiner_productPrice">Rs. 200</div>
      <div className="productConatiner_productTotal">Rs.400</div>
    </div>
  </div>
    })}
    </div>
  )

    
  
}
  const handleClose = () => {
    setOpens(false);
    props.setOpenReceiptDialog(false);
    
    
  };
 
  const ProductContainer=(product)=>{
product=product['product'];
    return(
      <div className="productContainer">
        <div className="productContainer_wrapper">
          <div className="productContainer_productName">{product.name}</div>
          <div className="productConatiner_productQty">{product.qty}</div>
          <div className="productConatiner_productPrice">{product.price}</div>
          <div className="productConatiner_productTotal">{product.price*product.qty}</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{width:'500px !important'}} >
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opens}
        fullWidth
        maxWidth="sm"
        
      >
        {/* <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Product
        </BootstrapDialogTitle> */}
        <DialogContent >
          <div className="receiptDialog">
            <div className="receiptDialog_wrapper">
              <div className="receiptDialog_topContain">
                <div className="receiptDialog_top_header">Receipt</div>
                <div className="receiptDialog_top_date">{new Date().toLocaleString()}</div>
                <div className="receiptDialog_top_orderNo">{props.receiptOrderNo} </div>
              </div>
              <div className="receiptDialog_middleContain">
                <div className="middleContain_line"></div>
                <div className="middleContain_header">
                  <div className="middleContain_productName">Product</div>
                  <div className="middleContain_productQty">QTY</div>
                  <div className="middleContain_productPrice">Unit Price</div>
                  <div className="middleContain_total">Total</div>
                </div>
                <div className="middleContain_line"></div>
                <div className={length>=5?"middleContain_productContainer_scroll":"middleContain_productContainer"}>
              {console.log("in receeipt renders")}
               { cartItems ? cartItems.map((cartProduct)=>{
              console.log(cartProduct);
              return(
                  <ProductContainer product={cartProduct}/>)
            }):null }
            {/* <ProductContainer/> */}
                </div>
                <div className="middleContain_line"></div>
              </div>
              <div className="receiptDialog_bottomContain">
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Subtotal</div>
                  <div className="receiptDialog_subtotalNumber"> {getCartSubtotal()}</div>
                </div>
                <div className="middleContain_line"></div>
                {/* <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Discount</div>
                  <div className="receiptDialog_subtotalNumber"> 300</div>
                </div> */}
                <div className="middleContain_line"></div>
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Grand Total</div>
                  <div className="receiptDialog_subtotalNumber">{getCartGrandtotal()}</div>
                </div>
                <div className="middleContain_line"></div>

              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="printReceipt">
          Continue
          </Button>
        </DialogActions>
      </BootstrapDialog>
      
    </div>

  );
}
