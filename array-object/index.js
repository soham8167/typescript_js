const productList = [
  {
    id: 101,
    name: "Wireless Bluetooth Headphones",
    desc: "Over-ear headphones with 40-hour battery life and active noise cancellation.",
    price: 99.99,
    category: "Electronics",
    review: [
      {
        userId: 501,
        rating: 5,
        comment: "Amazing sound quality and comfortable.",
      },
      {
        userId: 502,
        rating: 4,
        comment: "Great battery life, slightly heavy.",
      },
    ],
    userDetails: {
      username: "TechGuru",
      location: "New York",
    },
  },
  {
    id: 102,
    name: "Organic Green Tea (50 bags)",
    desc: "Finest quality whole leaf organic green tea bags.",
    price: 15.5,
    category: "Grocery",
    review: [
      {
        userId: 503,
        rating: 5,
        comment: "Best green tea I've ever had.",
      },
      {
        userId: 501,
        rating: 5,
        comment: "Fresh and flavorful.",
      },
    ],
    userDetails: {
      username: "TeaMaster",
      location: "London",
    },
  },
  {
    id: 103,
    name: "Ergonomic Office Chair",
    desc: "Adjustable mesh back chair for maximum comfort during long working hours.",
    price: 250.0,
    category: "Furniture",
    review: [
      {
        userId: 504,
        rating: 3,
        comment: "Difficult to assemble, but comfortable.",
      },
    ],
    userDetails: { username: "OfficePro", location: "New York" },
  },
  {
    id: 104,
    name: "4K LED Monitor 27-inch",
    desc: "Ultra-HD monitor with HDR support and thin bezels.",
    price: 349.99,
    category: "Electronics",
    review: [
      { userId: 505, rating: 4, comment: "Excellent display for the price." },
    ],
    userDetails: { username: "TechGuru", location: "New York" },
  },
];



//1 all product

// productList.forEach((v)=>{
//     console.log(v);
    
// })



//2 Print products category-wise.

// let catagoryWise={}
// productList.forEach((v)=>{
//     if(!catagoryWise[v.category]){
//         catagoryWise[v.category]=[]
//     }
//             catagoryWise[v.category].push(v)
    
    
// })
// console.log(catagoryWise);




//3 Find the total price of all products.

// let totalPrice = productList.reduce((acc,curr)=>{
//    return acc+curr.price;
// },0)
// console.log(totalPrice);




//4 Update product name using product ID

// function updateProductName (id,newName){
    
// }

// (updateProductName(103,"abc"));



//5 Search a product by name.

// function searchProduct(n){
// return productList.filter((v)=>{
//    return  v.name.includes(n)
// })
// }
// console.log(searchProduct("Ergonomic Office Chair"));


//6 Sort products by price.

// let sortProductPrice = productList.sort((a,b)=>{
//    return  a.price-b.price
// })
// console.log(sortProductPrice);



//7   Find how many products each user has.


 function getuserProduct(productList){
    const userProduct = productList.reduce((acc,curr)=>{
        if(!acc[curr.userDetails.username]){
            acc[curr.userDetails.username]=1;
        }else{
            acc[curr.userDetails.us]+=1
        }
        return acc
    },{})
    console.log(userProduct);
    
 }

getuserProduct(productList)



//8 Find all reviews given by a particular user.

