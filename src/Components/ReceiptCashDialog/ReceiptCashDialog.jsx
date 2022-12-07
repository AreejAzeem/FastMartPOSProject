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
import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import "./ReceiptCashDialog.css";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Snackbar from "@mui/material/Snackbar";
import { ClearAll, WifiLock } from "@mui/icons-material";
import axios from "axios";
import config from "../../Config/config";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../../redux/actions/cartActions";
import Success from "../Animations/Success";

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
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
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
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ReceiptCashDialog(props) {
  const [opens, setOpens] = React.useState(true);
  const [length, setLength] = useState(5);
  var orderData = "";
  const [order, setOrder] = useState();
  const [orderProducts, setOrderProducts] = useState();
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const[showSuccess, setShowSuccess]=useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("in use EFFECT of receipt");
    console.log(props.cashOrderNo);
    console.log(cartItems);
    getOrderData();
    
   
  }, []);

  const getOrderData = async () => {
    await axios({
      method: "GET",
      url: config.apiURL + `/orders/order?orderNo=${props.cashOrderNo}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        console.log(res.data.data[0]);
        var data = res.data.data[0];
        setOrder(data);
        console.log(order);
        console.log(res.data.data[0].orderProducts);
        var products = res.data.data[0].orderProducts;
        var qty = [];
        qty.push({
          _id: products[0]._id,
          productName: products[0].productName,
          productPrice: products[0].productPrice,
          count: 1,
        });
        console.log(qty);
        var index1 = 0;
        products.map((product, index) => {
          console.log(product._id);
          console.log(index1);
          if (index != 0) {
            if (qty[index1]._id != product._id) {
              qty.push({
                _id: product._id,
                productName: product.productName,
                productPrice: product.productPrice,
                count: 1,
              });
              index1++;
            } else {
              qty[index1].count = qty[index1].count + 1;
            }
          }
       
        });
        console.log(qty);
        setOrderProducts(qty);
      })
      .catch((err) => {
        console.log(err);
      });
  };


const updateStatus=async()=>{
  console.log(order.orderId)
  await axios({
    method: "post",
    url: config.apiURL + "/orders/orderUpdate",
    headers: {
      "Content-Type": "application/json",
    },
    data: {
      orderId: order.orderId,
      status: "success",
    
    }
  })
  .then((res) => {
    console.log(res);
    if(res.data.message==="Success"){
        setShowSuccess(true);
        sendNotification();
    }
    

  }).catch((err) => {
    console.log(err);
  });
}
const getFCMToken = async (id) => {
  console.log(id);
  return await axios({
    method: "get",
    url: config.apiURL + "/users/getUser?id=" + id,
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      if (res.data.data) {
        console.log(res.data.data.fcmToken);
      return res.data.data.fcmToken;
        // setToken(res.data.data.fcmToken);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

const sendNotification=async()=>{
  console.log(order.orderId)
  console.log(order.orderUser.id)
  await getFCMToken(order.orderUser.id).then((res) => {
    console.log(res);
   axios({
      method: "post",
      url: config.apiURL + "/notifications/forOrder",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
       orderNo:order.orderNo,
       orderDate:order.orderDate,
        orderTime:order.orderTime,
        orderTotal:order.total,
        paymentMethod:'Cash',
        fcm_token:res
      }
    })
    .then((res) => {
      console.log(res);
    }).catch((err) => {
      console.log(err);
    });
  });
 
}



  const handleClose = () => {
    updateStatus();
    console.log("afterr status ipdate");
    //sendNotification(); 
  window.setTimeout(() => {
    setOpens(false);
    props.setOpenReceiptDialog(false);
  }, 2000);
  };


  //  setOpens(false);

  //
  

  const ProductContainer = (product) => {
    console.log(product.product.productName);
    return (
      <div className="productContainer">
        <div className="productContainer_wrapper">
          <div className="productContainer_productName">
            {product.product.productName}
          </div>
          <div className="productConatiner_productQty">{product.product.count}</div>
          <div className="productConatiner_productPrice">
            {product.product.productPrice}
          </div>
          <div className="productConatiner_productTotal">{product.product.productPrice*product.product.count}</div>
        </div>
      </div>
    );
  };

  return (
    <div style={{ width: "30px !important" }}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
{!showSuccess ? 
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opens}
        fullWidth
        maxWidth="sm"
      >
       
        <DialogContent>
          <div className="cashreceiptDialog">
            <div className="cashreceiptDialog_wrapper">
              <div className="cashreceiptDialog_topContain">
                <div className="cashreceiptDialog_top_header">Receipt Cash</div>
              { order ? <div className="cashreceiptDialog_top_date">
                  {order.orderDate ? order.orderDate+"    "+"  "+order.orderTime : ""}
                </div>:null}
                <div className="cashreceiptDialog_top_orderNo">
                  {props.receiptOrderNo}{" "}
                </div>
              </div>
              <div className="cashreceiptDialog_middleContain">
                <div className="middleContain_line"></div>
                <div className="middleContain_header">
                  <div className="middleContain_productName">Product</div>
                  <div className="middleContain_productQty">QTY</div>
                  <div className="middleContain_productPrice">Unit Price</div>
                  <div className="middleContain_total">Total</div>
                </div>
                <div className="middleContain_line"></div>
                <div
                  className={
                    length >= 5
                      ? "middleContain_productContainer_scroll"
                      : "middleContain_productContainer"
                  }
                >
                  {console.log("in receeipt renders")}
                  {orderProducts
                    ? orderProducts.map((orderProduct) => {
                        console.log(orderProduct);
                        return <ProductContainer product={orderProduct} />;
                      })
                    : null}
                  {/* <ProductContainer/> */}
                </div>
                <div className="middleContain_line"></div>
              </div>
              <div className="cashreceiptDialog_bottomContain">
                <div className="cashreceiptDialog_subtotal">
                  <div className="cashreceiptDialog_subtotalText">Subtotal</div>
                 {order? <div className="cashreceiptDialog_subtotalNumber">
                    
                    {order.total}
                  </div>:null}
                </div>
                <div className="middleContain_line"></div>
             
                <div className="middleContain_line"></div>
               
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="printReceipt">
            Receive Payment
          </Button>
        </DialogActions>
      </BootstrapDialog>:<BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opens}
       maxWidth="sm"
        width="30px !important"
        
      >
        <div style={{
          height:'300px',
          marginLeft:"-140px"
        }}>
       <Success/>
       {/* <div style={{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        marginTop:'20px',
        color:'orange',
       


       }}>Order Successful</div> */}
       </div>
        <DialogContent>
         
        </DialogContent>
        <DialogActions>
          
        </DialogActions>
      </BootstrapDialog>}
    </div>
  );
}
