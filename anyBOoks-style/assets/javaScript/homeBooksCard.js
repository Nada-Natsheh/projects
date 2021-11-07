const booksCardSection = document.getElementById('cardParent')
const filterdCardsSection = document.getElementById('filterdCards')
const addBOok = document.getElementById('addBook')
const selectCollege = document.getElementById('selectCollege')
const booksData = [];
const paramsArry = [];
async function booksCard(){
   //calling the api
    const unenCodedData = await fetch('http://localhost:3000/booksData')
    const encodedData = await unenCodedData.json()
    booksData.push(encodedData['data'])
    const params = await new URLSearchParams(window.location.search)
   for (const param of params) {
  paramsArry.push(param)

}

    //creating divs
    for(let i = 1; i<= 13; i++){
      booksCardSection.innerHTML+= booksCardDiv(i)
   }
    function booksCardDiv(div){
      return`
      <div class = 'card' id="card-${div}">
      <p class='nameClass'></p>
      </div>
      
      `
   }
   //creating paragrphs
  

  
   
// Create book cards and book data loop and store book data in the div we created above  
    for(let i= 0; i<= Object.keys(booksData[0]).length; i++){
       if(booksData[0][i]['University']=='Yarmouk-University'){
         booksCardSection.children[0].innerHTML+= books(booksData[0][i])
         document.getElementById('card-1').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Amman-Arab-University-for-Higher-Studies'){
            booksCardSection.children[1].innerHTML+= books(booksData[0][i]) 
            document.getElementById('card-2').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Al-Hussein-Bin-Talal-University'){
            booksCardSection.children[2].innerHTML+= books(booksData[0][i])
            document.getElementById('card-3').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Al-Zaytoonah'){
            booksCardSection.children[3].innerHTML+= books(booksData[0][i])
            document.getElementById('card-4').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Arab-Open-University'){
            booksCardSection.children[4].innerHTML+= books(booksData[0][i])
            document.getElementById('card-5').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Applied-Science-University'){
            booksCardSection.children[5].innerHTML+= books(booksData[0][i])
            document.getElementById('card-6').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Al-Isra-University'){
            booksCardSection.children[6].innerHTML+= books(booksData[0][i])
            document.getElementById('card-7').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Jadara-University'){
            booksCardSection.children[7].innerHTML+= books(booksData[0][i])
            document.getElementById('card-8').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Philadelphia-University'){
            booksCardSection.children[8].innerHTML+= books(booksData[0][i])
            document.getElementById('card-9').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
         }else if(booksData[0][i]['University']=='Zarka-Private-University'){
            booksCardSection.children[9].innerHTML+= books(booksData[0][i])
            document.getElementById('card-10').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
 /*q */  }else if(booksData[0][i]['University']=='Al-al-Bayt-University'){
            booksCardSection.children[10].innerHTML+= books(booksData[0][i])
            document.getElementById('card-11').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
   /*q */  }else if(booksData[0][i]['University']=='Al-Zaytoonah-University'){
         booksCardSection.children[11].innerHTML+= books(booksData[0][i])
         document.getElementById('card-12').children[0].innerHTML= booksData[0][i]['University'].replaceAll('-',' ')
      /*q */  }if(paramsArry.length !==0){
            if(booksData[0][i]['University'] == paramsArry[0][1] && booksData[0][i]['college'] == paramsArry[1][1]){
          filterdCardsSection.innerHTML +=booksCardFilterFunction(booksData[0][i])
            booksCardSection.style.display ='none'
            document.getElementById('filter-background').style.display='none'
            document.getElementById('introduction').style.display='none'
            document.getElementById('bookAlbum').style.display='none'
            document.getElementById('choosbook').style.display='none'
            const avilibaleCrds = document.getElementsByClassName('filterdCards').length
            document.getElementById('selectedBook').innerHTML = `<p id='availableBooks'> there are ${avilibaleCrds} books available now in ${paramsArry[0][1]} university of  ${paramsArry[1][1]} college..........return to <a href="/">home</a> page</p>
            `.replaceAll('-', ' ')
            document.getElementById('selectedBook').innerHTML += `<p>choose what you want here.</p>    `
            
            
      }else if(paramsArry[0][1] == booksData[0][i]['name']){
         filterdCardsSection.innerHTML +=booksCardFilterFunction(booksData[0][i])
         document.getElementById('filter-background').style.display='none'
         document.getElementById('introduction').style.display='none'
         document.getElementById('bookAlbum').style.display='none'
         document.getElementById('choosbook').style.display='none'
         booksCardSection.style.display ='none'
         document.getElementById('selectedBook').innerHTML = `<p> here are all of ${paramsArry[0][1]} books that you are looking for</p>    `

         console.log(paramsArry[0][1])
      }
       
   }
   ///just  testing 
/*if(booksCardSection.children[i].hasChildNodes()){
   console.log(booksCardSection.children[i])
} */

}

      //create the html code in api
     function books(booksData){
         return`
        
         <div class= "university" id='${booksData['University']}'>
         <img src = "https://images.springer.com/sgw/books/medium/9781590594742.jpg">
         <div>
         <h6> ${booksData['name']}</h6>
         <p> ${booksData['description']}</p>
         <a href="/product/${booksData['id']}"><button>Details</button></a>
         </div>
         </div> `
     }
     function booksCardFilterFunction(booksData){
        return`
         
        <div class ="filterdCards">
        <img src = "https://images.springer.com/sgw/books/medium/9781590594742.jpg"> 
        <div>
        <h6> ${booksData['name']}</h6>
        <p> ${booksData['description']}</p>
        <a href="/product/${booksData['id']}"><button>Details</button></a>
        </div> `
     }
 
   // "${booksData['imge']}"

   }
   
booksCard()
// addBOok.onclick = function(){
//    if(!localStorage['email']){
//       addBOok.setAttribute('href' , '/signUp')
//    }
// }
//localStorage.clear(localStorage)
//console.log(localStorage)
