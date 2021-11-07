// creating the page after clicking on one of the galleries
const forSale = document.getElementById('forSale')
const forExchange = document.getElementById('forExchange')
const forDonation = document.getElementById('forDonation')
const paramsArry = []

async function galleryData(){
    // calling the api 
    const unenCodedData = await fetch('http://localhost:3000/booksData')
    const encodedData = await unenCodedData.json()
    // calling the query and restructuring them to return the same college of specific university
    const params = await new URLSearchParams(window.location.search)
    for (const param of params) {
        paramsArry.push(param)
         }
    const booksData =[]
    booksData.push(encodedData['data'])
    // here we sotered the name of the college that we selected to use it in the if statment 
    const url = window.location.pathname.replaceAll('/', ' ');
    const match = url.match(/\S+/g)
    // console.log(match)
    // booksData.filter(e => {
    //    for(let i=0; i<e.length; i++){
    //        console.log(e[i])
    //    }
    // });
    

   




    // returning the books that have the same "college" value in the databaes
    for(let i= 0; i<= Object.keys(booksData[0]).length; i++){
        //  if(collegeCardsSection.childElementCount >10){
        //      cardsLength.style.display = 'none'
        
                
        //      }
        // console.log(collegeCardsSection.childElementCount)
        
        // console.log(document.getElementById('allColleges').childElementCount)
        if(document.getElementById('allColleges').children.length  >=1){
            document.getElementById('filter-background').style.display='block'
            document.getElementById('alertIfThePageEmpty').style.display='none'
            
        }else{
            document.getElementById('filter-background').style.display='none'
            document.getElementById('alertIfThePageEmpty').style.display='block'
            
        }
        if(match[1] == booksData[0][i]['college']){
        collegeCardsSection.innerHTML+=books(booksData[0][i])
        
        // console.log(document.getElementById('allColleges').children.length)
        // const cardsLength = document.getElementById('allColleges').children.length;
        // const cardsLength = document.getElementById('allColleges').children.length;
        // if(document.getElementById('allColleges').childElementCount >= 10){
        //     document.getElementById('allColleges').childNodes.style.display='none' 
        // }
        
        } 
        if(match[1] == booksData[0][i]['college'] &&  booksData[0][i]['Sale'] =='Sale'){
                // console.log(booksData[0][i])
                forSale.innerHTML+=gallery(booksData[0][i])
                document.getElementById('forSaleIntro').innerHTML = ` Books for ${booksData[0][i]['Sale']} <i class="fas" style="font-size:25px"> &#xf518; </i>`
          
            } if(match[1] == booksData[0][i]['college'] && booksData[0][i]['exchange'] == 'exchange'){
               
                forExchange.innerHTML+=gallery(booksData[0][i])
                document.getElementById('forExchangeIntro').innerHTML = ` Books for ${booksData[0][i]['exchange']} <i class="fas" style="font-size:25px"> &#xf518; </i>`
            }if(match[1] == booksData[0][i]['college'] &&  booksData[0][i]['donation'] =='donation'){
                
                forDonation.innerHTML+=gallery(booksData[0][i])
                document.getElementById('forDonationIntro').innerHTML = ` Books for ${booksData[0][i]['donation']} <i class="fas" style="font-size:25px"> &#xf518; </i>`
             }
            //  if(paramsArry.length !==0){
                // returning the same college but of a specified university
            //     if(paramsArry[0][1]==booksData[0][i]['University'] && match[1] == booksData[0][i]['college']){
            //     selectedCollege.innerHTML+=books(booksData[0][i])
            //     collegeCardsSection.style.display='none'

              
            // }
       
        
            
            // if(cardsLength >=10){
            // cardsLength.style.display = 'none'
                
            // }
    
        // const cardsLength = document.getElementById('allColleges').children.length;
        
        // if(document.getElementById('allColleges').children.length >= 10){
        //     // document.getElementById('allColleges').style.display = 'none'
          
        //     document.getElementById('allColleges').style.display = 'none'
        // }
       
        
        // booksDetails.forEach(i => {
        //     console.log(i['name'])
        // })
        // }
    
    //     if(document.getElementsByClassName('cards').length >= 10){
    //             document.getElementsByClassName('cards').style.display = 'none'
    //     }
    // console.log(document.getElementsByClassName('cards').length ) 
    //search field filter
    //console.log(searchField)
   
  


    }

    // the code that  the returned cards will be storned in 


    function books(booksData){
        return`
        <div class='cards'>        
        <img id='cardsImage' src = " ../assets/imges/uploadedImages/${booksData['imge']}">
        <div>
        <h6> ${booksData['name']}</h6>
        <a href="/product/${booksData['id']}"><button>Details</button></a>
        </div>
        </div> `
    }
   
    function gallery(booksData){
        return`
       
        <div>
       
        <a href="/product/${booksData['id']}"><img src = " ../assets/imges/uploadedImages/${booksData['imge']}"></a>
        <p> ${booksData['name']}</p>
        </div> `
    }
    

    
}
galleryData()


