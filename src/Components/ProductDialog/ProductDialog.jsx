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
import {connect} from "react-redux";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {addToCart} from  "../../redux/actions/cartActions"
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

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

function ProductDialog({product,setProduct}) {
  var url=config.apiURL;
  const [opens, setOpens] = React.useState(true);
  //const[input, setInput]=useState(props.input);
  const[loading, setLoading]=useState(true);
  // const cartRedux=useSelector((state)=>state.shopReducer);

  const [productt, setProductt] = useState(product
  //   {
  //     productId:'fhbfhfuhjj',
  //   productBarcode: "1122",
  //   productImg:'https://islamabad.olpersmart.pk/wp-content/uploads/2020/11/olpers-fcmp-800gm-1.jpg',
  //   productName: "Olpers",
  //   category: {categoryName: "dairy", categoryImg: "/uploads/categories/1659766583642-download.png", categoryId: "62ee03b9dcd34"},
  //   productPrice: 230,
  //   productSalePrice:0,
  //   stockStatus:
  //     "IN",
  //     productShortDesc:"the full cream milK with pro biotic and less fat"

  // }
);
const dispatch=useDispatch();
  useEffect(() => {
    //setLoading(true);
    console.log("in use effect ")
   
    console.log("in product dialog line 90");
   console.log("in line 87");
   console.log(product);

   

   if(product !== undefined){
    setProductt(product);
    console.log(url+productt.productImg)
    console.log(productt.productName);
   setLoading (false);
  }
  else{
    setLoading(true);
    alert("No product Found")
  }
   
   
 //  setCart(product);
 // (async()=>{ 
 //   console.log("in line 105 "+props?.inputText)
 //   let result = await fetch(config.apiURL+`/products/product?productName=lays
 //   `);
 //     console.log("in line 153");
 //     result = await result.json();
 //     console.log(result["data"]);
    
 //     console.log("in line 157");
     
 //   })();
    
 
   }, []);
 const getCartRedux=()=>{

 }
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
  
// const GetProduct=async()=>{
//   setLoading(true);
//   //console.log("in line 105 "+input);
//     let result = await fetch(config.apiURL+`/products/product?productName=${input}
//     `);
//       console.log("in line 153");
//       result = await result.json();
//       console.log(result["data"]);
//       setProduct(result['data']);
//       console.log("in product ............")
   
//       if(result['data']){
//         console.log("in line 137");
//         console.log(product);
//         setLoading(false);
//       }
     
//       console.log("in line 157");
// }
  const addToCartt = () => {
   
    console.log("in aaddttt to cart "+productt.productBarcode)
    dispatch(addToCart(productt.productBarcode,productQty));

   // props.setCart(product.productName);
   console.log("in line 121  "+product.productName);
    setOpens(false);
    setProduct(null);
   


   
    
    // return(
    // <GetCartRedux/>);
   
  // props.setCart(product);
   

  };
  const handleClose=()=>{
    setOpens(false);
    setProduct(null);
  }
  const IncreProductQty=()=>{
    if(productQty<5){
    console.log("in qty incre"+productQty)
    setProductQty((current)=>(current+1))
    console.log("in 110 incre"+productQty)}
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
    {!loading ?  
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
                <img  className="productDialog_image" src={url+productt.productImg}/>
              </div>
              <div className="produtDialog_topRightContainer">
              <div className="productDialog_titleDiv">
              <h2 className="productDialog_title">{productt.productName}</h2>
            </div>
            <div className="productDialog_categoryDiv">
              <h5 className="productDialog_category">{productt.category.categoryName}</h5>
            </div>
            <div className="productDialog_priceDiv">
              <h3 className="productDialog_price">Rs. {productt.productPrice}</h3>
            </div>
            <div className="productDialog_stockDiv">
              <h3 className="productDialog_stock">{productt.stockStatus}</h3>
            </div>
            <div className="productDialog_descDiv">
              <h5 className="productDialog_desc">{productt.productShortDesc}</h5>
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
          <Button autoFocus onClick={()=> {setOpens(false); 
          addToCartt();
            console.log("in add to cart  " +productt.productBarcode);
            }} className="productDialog_buttonCart">
           Add to Cart
          </Button>
        </DialogActions>
      </BootstrapDialog>
    :<div>Loading...</div>  }
   
    </div>

  );
}
// const mapDispatchToProps = (dispatch) => {
//   return{
//     addToCart:(id)=>dispatch(addToCart(id)),
//   };
// };
export default ProductDialog;
// const GetCartRedux=()=>{
//   console.log("in get cart redux compo")
//   const cartRedux=useSelector((state)=>state.shopReducer);
//   console.log(cartRedux);
//   return(
//     <>{cartRedux[0].pId}</>
//   )
// }