// import React, {useState, useEffect} from 'react'
// import classes from './Results.module.css'
// import LayOut from '../../Components/LayOut/LayOut'
// import { useParams } from 'react-router-dom'
// import axios from'axios'
// import { productUrl } from '../../Api/endePoints'
// import ProductCard from '../../Components/Product/ProductCard'

// function Results() {
//   const [results, setResults] = useState([]);
//   const {categoryName} = useParams()
//   useEffect(()=>{
// axios.get(`${productUrl}/products/category/${categoryName}`)
//   .then ((res) =>{
//     setResults(res.data)
//   }).catch((err)=>{
//     console.log(err);
//   })
//   }, [categoryName])
  
//   return (
//     <LayOut>
//       <section>
// 	 <h1 style={{padding:"30px"}}>Results</h1>
//    <p style={{padding: "30px"}}>{categoryName}</p>
//    <hr/>
//    <div className={classes.products_container}>
//     {results?.map((product) => (
//       <ProductCard
//       key={product.id}

//       product={product}
//       />
//     ))}
//     </div>
//     </section>
//   </LayOut>
//   )
// }

// export default Results

import react, { useEffect, useState } from "react";
import styles from "./Results.module.css";
import LayOut from "../../Components/LayOut/LayOut";
import { useParams } from "react-router-dom";
import axios from "axios";
import { productUrl } from "../../Api/endePoints";
import ProductCard from "../../Components/Product/ProductCard"
import Loader from "../../Components/Loader/Loader";

function Results() {
  const [results, setResults] = useState([]);
  const [isLoading,setIsLoading] = useState(true)
  const { categoryName } = useParams();
  useEffect(() => {
    setIsLoading(true)
    axios
      .get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false)
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false)
      });
  }, [categoryName]);
  return (
    <LayOut>
      <section>
        <h1 style={{ padding: "30px" }}>Results</h1>
        <p style={{ padding: "30px" }}>Category / {categoryName}</p>
        <hr />
        {isLoading ? (
          <Loader />
        ) : (
          <div className={styles.products_Container}>
            {results?.map((product) => (
              <ProductCard key={product.id}
                product={product} 
                renderDesc={false}
                renderAdd ={true}
                />
            ))}
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Results;