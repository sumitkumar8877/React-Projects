
// import './App.css';
// import Card from './card/Card';

// function App() {


//   const productDetails1 = {
//     productId: "1",
//     productPic: "https://www.kindpng.com/picc/m/44-440309_nike-shoes-png-transparent-background-nike-shoes-png.png",
//     productName: "Shoes",
//     productDescription: "Trendy Sports Running Running Shoes For Men  (Blue, Orange)",
//     Price: "5000.00",
//   }
//   const productDetails2 = {
//     productId: "2",
//     productPic: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
//     productName: "T-shirt",
//     productDescription: "Trendy Sports T-shirt For Men  (Blue, Orange)",
//     Price: "2500",
//   }
//   const productDetails3 = {
//     productId: "3",
//     productPic: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
//     productName: "Jeans",
//     productDescription: "Women Slim Mid Rise Blue Jeans",
//     Price: "5000"

//   }
//   const productDetails4 = {
//     productId: "4",
//     productPic: "https://images.pexels.com/photos/280250/pexels-photo-280250.jpeg?cs=srgb&dl=pexels-pixabay-280250.jpg&fm=jpg",
//     productName: "Watch",
//     productDescription: "Stainless stell silver black",
//     Price: "13000"
//   }
//   const productDetails5 = {
//     productId: "5",
//     productPic: "https://www.apple.com/newsroom/images/product/iphone/lifestyle/Apple-iPhone-14-iPhone-14-Plus-yellow-2up-230307_inline.jpg.large.jpg",
//     productName: "Phone",
//     productDescription: "Apple 18pro MAX 5G (Power Black, 4364 GB)  (12 GB RAM)",
//     Price: "1510000"

//   }

//   function EventListner(){
    
//      alert("Product is "+productDetails1.productId +" which is Shoes of brand Adidas has of rupees 4000 is added in the cart , please proceed to pay !!! ")
//   }

//   return (
//     <div className="App">
//       <Card
//         kay1={productDetails1}
//         alertFunction  = {EventListner}
//         />
//       <Card
//         kay1={productDetails2}
//         alertFunction  = {EventListner} />
//       <Card
//         kay1={productDetails3}
//         alertFunction  = {EventListner} />
//       <Card
//         kay1={productDetails4}
//         alertFunction  = {EventListner} />
//       <Card
//         kay1={productDetails5} 
//         alertFunction  = {EventListner}
//         />
//     </div>
//   );
// }

// export default App;













import './App.css';
import Card2 from './card2/card2';

function App() {


  const productDetails =[ 
    {
    productId: "1",
    productPic: "https://www.kindpng.com/picc/m/44-440309_nike-shoes-png-transparent-background-nike-shoes-png.png",
    productName: "Shoes",
    productDescription: "Trendy Sports Running Running Shoes For Men  (Blue, Orange)",
    Price: "5000.00",
  },
  {
    productId: "2",
    productPic: "https://images.unsplash.com/photo-1622470953794-aa9c70b0fb9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHQlMjBzaGlydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    productName: "T-shirt",
    productDescription: "Trendy Sports T-shirt For Men  (Blue, Orange)",
    Price: "2500",
  },
   {
    productId: "3",
    productPic: "https://images.unsplash.com/photo-1475178626620-a4d074967452?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8amVhbnN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    productName: "Jeans",
    productDescription: "Women Slim Mid Rise Blue Jeans",
    Price: "5000"

  }]


  return (
    
    <div className="App">
    {productDetails.map((user, index) => (
      <Card2
      kay1={index}
      productId={user.productId}
      productPic={user.productPic}
      productName={user.productName}
      productDescription={user.productDescription}
      Price={user.Price}

      
        />))}
</div>
  );
}

export default App;
