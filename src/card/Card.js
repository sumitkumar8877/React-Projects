import React from 'react'
import './Card.css';



function Card(props) {

  return (
     <><div className='main1'>
     <div className='main2'>
     <div className='main3'>
        <img className='image' src={props.kay1.productPic}></img>
        <h1>{props.kay1.productName}</h1>
        <p>{props.kay1.productDescription}</p>
        <h3>{props.kay1.Price}</h3>
        <button className='btn' onClick={props.alertFunction}>Add to Carts</button>
        </div>
        </div>
        </div>
     </>
  )
}

export default Card