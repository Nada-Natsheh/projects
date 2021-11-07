const addSubmitbtn = document.getElementById('submitbtn');
 const Sale =document.getElementById('Sale');
 const donation =document.getElementById('donation');
 const exchange = document.getElementById('exchange');
 const price = document.getElementById('price')
addSubmitbtn.onclick = function(){
   //  if(Sale.checked == false || donation.checked == false  || exchange.checked== false){
   //          Sale.required = true;
   //         }
}
Sale.onclick = function(){
   if(Sale.checked == true){
      donation.disabled = true
      price.style.display='block'
      price.required = true
   } else if(Sale.checked !== true){
      donation.disabled = false
      price.style.display='none'
      price.required = false
   }
   // console.log(Sale.value)
}
donation.onclick = function(){
    if(donation.checked == true){
       Sale.disabled = true
       Sale.required = false;
       exchange.disabled = true
    } else if(donation.checked !== true){
       Sale.disabled = false
       exchange.disabled = false
    }
 }
 exchange.onclick = function(){
    if(exchange.checked ==true){
      document.getElementById('booksinfo').style.display='block'
      document.getElementById('booksinfo').required = true;
      donation.disabled = true
      
      // Sale.disabled = true
    } else if(exchange.checked ==false){
      document.getElementById('booksinfo').style.display='none'
      document.getElementById('booksinfo').required = false;
      donation.disabled = false

      // Sale.disabled = false
    }
 }
// console.log(donation.value)
// Sale.onclick = function(){
//    if(Sale.checked == true){
//       donation.value = "none"
//       donation.disabled = true
//    } else if(donation.disabled = true){
//       donation.value = "none"
//       donation.disabled = true
//    }
//    console.log(donation.value)
//    // console.log(Sale.value)
// }
