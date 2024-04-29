import { Link } from "react-router-dom";

function  NavBar(){
    return( 
    <>

<div class="container" >  

<nav   class="fixed-top navbar navbar-expand-sm bg-primary navbar-dark">

  
  <a class="navbar-brand" href="/">		
		<i style={{fontSize:"40px"}} class="bi bi-house-heart"></i>    
  </a>
  
  
  <button 	class="navbar-toggler" type="button" 
					data-bs-toggle="collapse" 
					data-bs-target="#div1">
    <span class="navbar-toggler-icon"></span>
  </button>
    
   
  <div class="collapse navbar-collapse" id="div1">
  
    <ul class="navbar-nav">
      <li class="nav-item">     
        <Link class="nav-link" to="/Admin" className="btn btn-warning">Admin</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/AllProducts" className="btn btn-success">Products</Link>
      </li>
      <li class="nav-item">      
        <Link class="nav-link" to="/ShoppingCart" className="btn btn-info">Cart</Link>
      </li>

    
    <li class="nav-item dropdown">
      <a 	class="nav-link dropdown-toggle" href="#" id="navbardrop" 
			data-bs-toggle="dropdown" className="btn btn-danger">
       Categories
      </a>
      <div class="dropdown-menu">       
        <Link class="dropdown-item" to="/ProductByCategory/Mobile" className="text-info">Mobile</Link><br></br>
        <Link class="dropdown-item" to="/ProductByCategory/Airpodes" className="text-info">Airpodes</Link><br></br>
        <Link class="dropdown-item" to="/ProductByCategory/BluethootEarphones" className="text-info">BluethootEarphones</Link><br></br>
        <Link class="dropdown-item" to="/ProductByCategory/Headphone" className="text-info">Headphone</Link><br></br>
         
      </div>   
	</li>
	
	</ul>
  </div>  
  
</nav> 

</div>        
    </>);
  };


 export default NavBar; 