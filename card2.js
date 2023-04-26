import React from 'react';
import './card2.css';



 const Card2 = ({Price, productDescription, productName, productPic,productId}) => {
   const handleSeeMoreClick = () => {
      alert(productId);
    };
  

  return (
     <><div className='main1'>
     <div className='main2'>
     <div className='main3'>
        <img className='image' src={productPic}></img>
        <h1>{productName}</h1>
        <p>{productDescription}</p>
        <h3>{Price}</h3>
        <button className='btn' onClick={handleSeeMoreClick}>Add to Carts</button>
        </div>
        </div>
        </div>
     </>
  );
};

export default Card2