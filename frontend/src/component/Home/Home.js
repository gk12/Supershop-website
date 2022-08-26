import React, { Fragment, useEffect } from 'react'
import {CgMouse} from "react-icons/cg";
import "./Home.css";
import Product from "./Product.js";
import Metadata from '../layout/Metadata';
import { getProduct } from '../../actions/productAction';
import {useSelector,useDispatch} from "react-redux";

//product details export to product.js
const product={
  name:"White Shirt",
  images:[{url:"https://i.ibb.co/DRST11n/1.webp"}],
  price:"$20",
  _id:"nothing",
};
const Home = () => {
  const dispatch=useDispatch();
  const {loading,error,products,productsCount}=useSelector(
    (state)=>state.products
  );

  useEffect(()=>{
    dispatch(getProduct());
  },[dispatch]);
  
  return (
    <Fragment>
      {/* PROJECT KA TITLE UPER DIKHEGA */}
      <Metadata title="SUPERSHOP"/> 
        <div className='banner'>
            <p>WELCOME TO SUPERSHOP</p>
            <h1>Find Amazing Products</h1>

            <a href='#container'>
                <button>
                    Scroll <CgMouse/>
                </button>
            </a>
        </div>

        <h2 className='homeHeading'>Featured Products</h2>

        <div className='container ' id="container">
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>
          <Product product={product}/>

        </div>
    </Fragment>
  );
};

export default Home;