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
import "./productDialog.css";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Snackbar from '@mui/material/Snackbar';




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
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function ProductDialog(props) {
  const [opens, setOpens] = React.useState(true);
  const [product, setProduct] = useState({
    productId: 1,
    productName: "Olpers",
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
  

  return (
    <div style={{width:'30px !important'}}>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button> */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={opens}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Product
        </BootstrapDialogTitle>
        <DialogContent >
          <div className="productDialog">
            <div className="productDialogWrapper">
              <div className="productDialog_topContainer"> 
              <div className="productDialog_topLeftContainer">
                <img  className="productDialog_image" src='https://islamabad.olpersmart.pk/wp-content/uploads/2020/11/olpers-fcmp-800gm-1.jpg'/>
              </div>
              <div className="produtDialog_topRightContainer">
              <div className="productDialog_titleDiv">
              <h2 className="productDialog_title">{props.input}</h2>
            </div>
            <div className="productDialog_categoryDiv">
              <h5 className="productDialog_category">{product.categoryName}</h5>
            </div>
            <div className="productDialog_priceDiv">
              <h3 className="productDialog_price">Rs. {product.productPrice}</h3>
            </div>
            <div className="productDialog_stockDiv">
              <h3 className="productDialog_stock">In stock {product.stockStatus}</h3>
            </div>
            <div className="productDialog_descDiv">
              <h5 className="productDialog_desc">{product.productDesc}</h5>
            </div>
              </div>
              </div>
              <div className="productDialog_middleContainer">
              <div className="productDialog_middle"></div>
              </div>
              <div className="productDialog_bottomContainer">
                <div className="productDialog_qtyDiv">
                  <div className="productDialog_qtyHeader">QTY</div>
                  <div className="productDialog_qtyIconDiv">
                    <FiPlusCircle className="productDialog_qtyPlus"/>
                    <h5 className="productDialog_qtyText">2</h5>
                    <FiMinusCircle className="productDialog_qtyMinus"/>
                  </div>
                </div>
   
              </div>
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} className="productDialog_buttonCart">
           Add to Cart
          </Button>
        </DialogActions>
      </BootstrapDialog>
      
    </div>

  );
}
