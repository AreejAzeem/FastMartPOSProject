import * as React from "react";
import { useState } from "react";
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
import { WifiLock } from "@mui/icons-material";




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

export default function ReceiptDialog() {
  const [opens, setOpens] = React.useState(true);
  const[length, setLength]=useState(5);
  const [order, setOrder] = useState({
    orderId: 1,
    orderName: "Olpers",
    categoryName: "Dairy",
    productPrice: "230",
    stockStatus:
      "20",
      productDesc:"the full cream mil with pro biotic and less fat"
   
  });
//   const [state, setState] = React.useState({
//     open: true,
//     vertical: 'top',
//     horizontal: 'center',
//   });

//   const { vertical, horizontal, open } = state;
// const SuccessBar=()=>{

//   return(
// <Snackbar
//   anchorOrigin={{ vertical, horizontal }}
//   open={open}
  
  
//   key={vertical + horizontal}
// >
// <Alert severity="success">This is a success message!</Alert>
// </Snackbar>
//   )
// }
  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };

  const handleClose = () => {
    setOpens(false);
  };
  const handleAddtoCart=()=>{
    setOpens(false);
  }
  const ProductContainer=()=>{
    
    return(
      <div className="productContainer">
        <div className="productContainer_wrapper">
          <div className="productContainer_productName">Olpers</div>
          <div className="productConatiner_productQty">2</div>
          <div className="productConatiner_productPrice">Rs. 200</div>
          <div className="productConatiner_productTotal">Rs.400</div>
        </div>
      </div>
    );
  }

  return (
    <div style={{width:'30px !important'}} >
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
                <div className="receiptDialog_top_orderNo">jhh45fbu4495gf0850bfh8bffhjnej789 </div>
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
                  <ProductContainer/>
                  <ProductContainer/>
                  <ProductContainer/>
                  <ProductContainer/>
                  <ProductContainer/>
                  <ProductContainer/>
                </div>
                <div className="middleContain_line"></div>
                
              </div>
              <div className="receiptDialog_bottomContain">
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Subtotal</div>
                  <div className="receiptDialog_subtotalNumber"> Rs. 3000</div>
                </div>
                <div className="middleContain_line"></div>
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Discount</div>
                  <div className="receiptDialog_subtotalNumber"> 300</div>
                </div>
                <div className="middleContain_line"></div>
                <div className="receiptDialog_subtotal">
                  <div className="receiptDialog_subtotalText">Grand Total</div>
                  <div className="receiptDialog_subtotalNumber">Rs. 3300</div>
                </div>
                <div className="middleContain_line"></div>

              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="printReceipt">
           Print Receipt
          </Button>
        </DialogActions>
      </BootstrapDialog>
      
    </div>

  );
}
