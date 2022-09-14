import * as React from "react";
import { useState , useEffect} from "react";
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
import config from "../../Config/config";
import axios from "axios";



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
    productBarcode: 1,
    productImg:'https://islamabad.olpersmart.pk/wp-content/uploads/2020/11/olpers-fcmp-800gm-1.jpg',
    productName: "Olpers",
    category: "Dairy",
    productPrice: "230",
    stockStatus:
      "IN",
      productShortDesc:"the full cream mil with pro biotic and less fat"
   
  });
  const [productQty, setProductQty]=useState(1);
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
  useEffect(() => {
   
      // let result = await fetch(config.apiURL+`/categories/category?categoryName=${searchInput}`);
      // result = await result.json();
      // console.log(result);
      // setCategory(result["data"]);
  //  await axios.get(config.apiURL+`/products/product?productBarcode=${props.input}`)
  //     .then((response) => {
  //       console.table(response.data);
  //       setProduct(response.data);
  //     })
  //     console.log("in search ")
    
  //     console.table(product);
   
  }, []);
  const handleClose = () => {
    setOpens(false);
    
  };
  const handleAddtoCart=()=>{
    setOpens(false);
  }
  const IncreProductQty=()=>{
    if(productQty<5){
    console.log("in qty incre"+productQty)
    setProductQty((current)=>(current+1))
    console.log("in110 incre"+productQty)}
    else{
      setProductQty(productQty);
    }
  }
  const DecreProductQty=()=>{
    if(productQty>1){
    setProductQty((current)=>(current-1))}
    else{
      setProductQty(productQty);
    }
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
                <img  className="productDialog_image" src={product.productImg}/>
              </div>
              <div className="produtDialog_topRightContainer">
              <div className="productDialog_titleDiv">
              <h2 className="productDialog_title">{props.input}</h2>
            </div>
            <div className="productDialog_categoryDiv">
              <h5 className="productDialog_category">{product.category}</h5>
            </div>
            <div className="productDialog_priceDiv">
              <h3 className="productDialog_price">Rs. {product.productPrice}</h3>
            </div>
            <div className="productDialog_stockDiv">
              <h3 className="productDialog_stock">{product.stockStatus} Stock</h3>
            </div>
            <div className="productDialog_descDiv">
              <h5 className="productDialog_desc">{product.productShortDesc}</h5>
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
                    <FiPlusCircle className="productDialog_qtyPlus" onClick={IncreProductQty}/>
                    <h5 className="productDialog_qtyText">{productQty}</h5>
                    <FiMinusCircle className="productDialog_qtyMinus" onClick={DecreProductQty}/>
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
