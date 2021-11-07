const searchField = document.getElementById('searchField')
const filterSection = document.getElementById('filterdCards')
const showMoreBottun = document.getElementById('show-more-btn')
const collegeCardsSection = document.getElementById('allColleges')
const selectedUnervisty = document.getElementById('selectedCollege')
const hiddenCrds =[]
async function filterAsyncFun() {
let books = []
let collegeURL = []
const params = await new URLSearchParams(window.location.search)
    for (const param of params) {
        collegeURL.push(param)
         }
         
         const url = window.location.pathname.replaceAll('/', ' ');
         const match = url.match(/\S+/g)
        // console.log(match[1])
    const unenCodedData = await fetch('http://localhost:3000/booksData')
    const encodedData = await unenCodedData.json()

    // if the cards were more than 12 books the rest will be hidden

    for(let i=0; i<document.getElementsByClassName('cards').length;i++){
        if(i >=12){
        document.getElementsByClassName('cards')[i].style.display='none'
        hiddenCrds.push(document.getElementsByClassName('cards')[i])
        if(document.getElementsByClassName('cards').length <=i){
            
        } 
    } 
}

 showMoreBottun.onclick=()=> {
        // hiddenCrds[i].style.display='block'
        for(let i =0; i<hiddenCrds.length; i++){
            hiddenCrds[i].style='display: block'
            hiddenCrds[i].children[0].style =  "position: relative; left: 1em;  text-align: center;"
            hiddenCrds[i].children[1].style =  "position: relative; right: 3%; margin-top:1em"
            showMoreBottun.style.display = 'none'
        }
       } 



for(let i=0; i< Object.keys(encodedData['data']).length; i++){
 books.push(encodedData['data'][i]) 
 if(collegeURL.length !==0){
//filtering the universities
 if(collegeURL[0][1]==books[i]['University'] && match[1] == books[i]['college']){
     selectedUnervisty.innerHTML+=afterCLickFIlter(books[i])
     collegeCardsSection.style.display='none'
     filterSection.style.display='none'
     showMoreBottun.style.display = 'none'
} 
// after writing and clicking on search 
if(collegeURL[0][1].length!==0){
    console.log(books[i]['name'])
 if(collegeURL[0][1]==books[i]['name']){
    
    filterSection.innerHTML +=afterCLickFIlter(books[i])
    collegeCardsSection.style.display='none'
    showMoreBottun.style.display = 'none'
}
}
}
               
            }    
            //async filter  
               searchField.addEventListener('keyup', (searchValue)=>{
                const fieldValue =  searchValue.target.value
                // console.log(fieldValue)
                const filterdBooks = books.filter((bookNames) =>{
                    collegeCardsSection.style.display='none'
                    showMoreBottun.style.display = 'none'
                    // filterSection.innerHTML += cards(bookNames)
                   return bookNames['name'].includes(fieldValue)
                })
                
                 for(let i=0; i<=filterdBooks.length; i++){
                     filterSection.innerHTML += cards(filterdBooks[i])
                     
                  }
               
               
            })
           
            /*   searchField.addEventListener('keyup', (searchValue)=>{
                const fieldValue =  searchValue.target.value
                // console.log(fieldValue)
                const filterdBooks = books.filter((bookNames) =>{
                    collegeCardsSection.style.display='none'
                    // filterSection.innerHTML += cards(bookNames)
                   return bookNames['name'].includes(fieldValue)
                })
         
                 for(let i=0; i<=filterdBooks.length; i++){
                     filterSection.innerHTML += cards(filterdBooks[i])
                  }
                
               
            })*/
            
        
           
     


        function cards(filterdBooks){
            return`
            <div class='cards'>        
            <img src = " ../assets/imges/uploadedImages/${filterdBooks['imge']}">
            <div>
            <h6> ${filterdBooks['name']}</h6>
            <a href="/product/${filterdBooks['id']}"><button>Details</button></a>
            </div>
            </div> `
        }
        function afterCLickFIlter(books){
            return`
            <div class='cards'>        
            <img src = "../assets/imges/uploadedImages/${books['imge']}">
            <div>
            <h6> ${books['name']}</h6>
            <a href="/product/${books['id']}"><button>Details</button></a>
            </div>
            </div> `
        }
        
}
    filterAsyncFun()