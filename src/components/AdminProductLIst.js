import { useEffect, useState } from "react";
import axios from 'axios';
 
function AdminProductList() { 
    
    const [productsArray, setProductsArray ] = useState([]); 
    const [id, setId] = useState("");
    const [productName, setProductName] = useState("");
    const [category, setCategory] = useState("");
    const [quantity, setQuantity] = useState("");
    const [description, setDiscription] = useState("");
    const [unitPrice, setUnitprice] = useState("");
    const [productImage, setProductImage] = useState("");


    useEffect(() => 
    {
        fetchProducts();
    }, []);

    function fetchProducts()
    {     
        let url = " http://localhost:3500/products"; 
        axios.get(url).then( (resData) => 
        {
            setProductsArray(resData.data);
        });       
    };

    const addProduct = () => {
        const newProduct = {
            id,
            productName,
            category,
            quantity,
            description,
            unitPrice,
            productImage
        };

        axios.post("http://localhost:3500/products", newProduct)
            .then(() => {
                alert("New product added to the server");
                fetchProducts();
                clearFields();
            })
            .catch((error) => {
                console.error("Error adding product:", error);
            });
    };


    const deleteProduct = (productId) => {
        const confirmDelete = window.confirm("Do you want to delete this product?");
        if (!confirmDelete) return;

        axios.delete(`http://localhost:3500/products/${productId}`)
            .then(() => {
                alert("Product deleted from server");
                fetchProducts();
            })
            .catch((error) => {
                console.error("Error deleting product:", error);
            });
    };

    const selectProduct = (productId) => {
        const confirmSelect = window.confirm("Do you want to select this product?");
        if (!confirmSelect) return;

        axios.get(`http://localhost:3500/products/${productId}`)
            .then((res) => {
                const selectedProduct = res.data;
                setId(selectedProduct.id);
                setProductName(selectedProduct.productName);
                setCategory(selectedProduct.category);
                setQuantity(selectedProduct.quantity);
                setDiscription(selectedProduct.description);
                setUnitprice(selectedProduct.unitPrice);
                setProductImage(selectedProduct.productImage);
            })
            .catch((error) => {
                console.error("Error selecting product:", error);
            });
    };


    const updateProduct = () => {
        const updatedProduct = {
            id,
            productName,
            category,
            quantity,
            description,
            unitPrice,
            productImage
        };

        axios.put(`http://localhost:3500/products/${id}`, updatedProduct)
            .then(() => {
                alert("Product details updated in server");
                fetchProducts();
                clearFields();
            })
            .catch((error) => {
                console.error("Error updating product:", error);
            });
    };

    const clearFields = () => {
        setId("");
        setProductName("");
        setCategory("");
        setQuantity("");
        setDiscription("");
        setUnitprice("");
        setProductImage("");
    };


    const productList = productsArray.map((product, index) => (
        <tr key={index}>
            <td>{product.id}</td>
            <td>{product.productName}</td>
            <td>{product.category}</td>
            <td>{product.quantity}</td>
            <td>{product.description}</td>
            <td>{product.unitPrice}</td>
            <td><img src={product.productImage} alt="Product" width="100px" height="100px" /></td>
            <td>
                <button className="btn btn-primary" onClick={() => selectProduct(product.id)}>Select </button>
                <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}> Delete </button>
            </td>
        </tr>
    ));

    return (<>
           
            <div className="set">
                <label htmlFor="id">ProId:</label>
                <input type="text" id="id" value={id} onChange={(e) => setId(e.target.value)} /><br />


                <label htmlFor="productName">ProName:</label>
                <input type="text" id="productName" value={productName} onChange={(e) => setProductName(e.target.value)} /><br />
                
                
                <label htmlFor="price">Category:</label>
                <input type="text" id="price" value={category} onChange={(e) => setCategory(e.target.value)} /><br />
                
                
                <label htmlFor="quantity">ProductQuantity:</label>
                <input type="text" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} /><br />
                
                
                <label htmlFor="brand">Description:</label>
                <input type="text" id="brand" value={description} onChange={(e) => setDiscription(e.target.value)} /><br />
                
                
                <label htmlFor="color">Price:</label>
                <input type="text" id="color" value={unitPrice} onChange={(e) => setUnitprice(e.target.value)} /></div>
               
               
           
            <div style={{display:"flex", justifyContent:"space-evenly", marginTop:"50px"}} >
            <button className="btn btn-primary" onClick={fetchProducts}>Get Products</button>
            <button className="btn btn-primary" onClick={addProduct}>Add Product</button>
            <button className="btn btn-primary" onClick={updateProduct}>Update Product</button>
            </div>
           
            <table style={{width:"1513px",marginTop:"30px"}} >
                <thead style={{color:"red", background:"gray"}}>
                    <tr>
                        <th>ProId</th>
                        <th>ProName</th>
                        <th>Category </th>
                        <th>Quantity</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Product Image</th>
                        <th>Actions</th>
                    </tr>
                </thead >
                <tbody style={{color:"white", background:"black",fontFamily:"algerian"}}>
                    {productList}
                </tbody>
            </table>
            </>)
}

export default AdminProductList;
