import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import './ProductDetails.css';

function ProductDetails(props) {

    const [qty, setQty] = useState(1);
    let dataObj = {
		"id" :  0,
		"productName" :  "",
		"category" : "",
		"description" :  "",
		"unitPrice"  :    0,
		"productImage" :  ""
};


    const [productObj, setProductObj] = useState(dataObj);
    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        getSelectedProductDetails();
    }, []);

    function getSelectedProductDetails() {
        let url = " http://localhost:3500/products/" + id;
        axios.get(url).then((resData) => {
            setProductObj(resData.data);
        });
    }


    function  addToCartButtonClick()
    {
        let userId = sessionStorage.getItem("USER_ID");
        if(userId == null || userId == undefined)
        {
            alert("Please Login before adding items to Cart");
            navigate("/Login");
            return;
        }

        let cartObj = {};
      
        cartObj.productName		= 	productObj.productName;			
        cartObj.unitPrice = productObj.unitPrice;
        cartObj.quantity  =  qty;
        cartObj.total       =   productObj.unitPrice * qty;			  			 
        cartObj.userId   =   sessionStorage.getItem("USER_ID");

        let url = "http://localhost:3500/cart";
        axios.post(url,  cartObj).then((resData)=>
        {
            navigate("/ShoppingCart");
        });
       
    }



    return (
        <div>
            <h3>Product Details</h3>
            <hr />

            <div className='detailsCard'>
                <img src={productObj.productImage} height={100} width="100" />
                <br />
                <span className="prdName">{productObj.productName}</span>  <br />
                 <span>Quantity :   &nbsp;&nbsp;
                    <button onClick={() => setQty(qty+1)}>+</button> 
                    &nbsp;&nbsp;  
                    {qty} 
                    &nbsp;&nbsp;
                    <button onClick={() => { if(qty>1) setQty(qty-1)}}>-</button> 
                </span> <br/>
                <span> Unit Price :  ₹ { productObj.unitPrice.toFixed(2)}</span>
                <br />
                <span> Product Description :    { productObj.description}</span>
                <br />
                <button  onClick={addToCartButtonClick}>Add To Cart</button>
            </div>

            <hr />
            <Link to="/AllProducts">Back to Products</Link>
        </div>
    );

}

export default ProductDetails;