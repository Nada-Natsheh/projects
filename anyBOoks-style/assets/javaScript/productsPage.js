//craeting the page after clicking on details bottun
const productsPage =document.getElementById('productsPage')
const price = document.getElementById('price');
let num= 0;
// calling the API and  converting the data to json
async function booksCard(){
     const unenCodedData = await fetch('http://localhost:3000/booksData')
     const encodedData = await unenCodedData.json()
     const booksData =[]
     booksData.push(encodedData['data'])
     const id =[]
    // fetching the product's id
     const url = window.location.pathname;
     const match = url.match(/\d+/)
     id.push(match[0])
     //looping and return the card that has the same id that we stord
     for(let i= 0; i<= Object.keys(booksData[0]).length; i++){
        if(id== booksData[0][i]['id']){
            console.log(booksData[0][i]['imge'])
            productsPage.innerHTML = productsPageFun(booksData[0][i])
            if(price !== 'null'){
                document.getElementById('price').innerHTML = `<span>price : </span>${booksData[0][i]['price']} JO`
                document.getElementById('price').style.display='block'
            }
             if(/\d/.test(document.getElementById('price').innerHTML)==false){
                document.getElementById('price').style.display='none'
                document.getElementById('or').style.display='none'
            }
            // const match = priceapar.match(/\d+/)
            // if(match[0]!==booksData[0][i]['price']){
            //     console.log('hi')
            // }
        //    console.log(/\d/.test(priceapar))
        
        if(booksData[0][i]['booksInfo'] == null || booksData[0][i]['booksInfo'].length ==0){
            document.getElementById('booksInfo').style.display='none'
            document.getElementById('or').style.display='none'

        }if(booksData[0][i]['donation'] =='donation'){
            document.getElementById('donation').style.display='block'
        }
    document.getElementById('show').onclick =()=>{
        document.getElementById('phoneNumber').style.display='block'
        document.getElementById('show').style.display='none'
        num++
        // console.log(num)
    }
    }
    }
    // ../assets/imges/uploadedImages/${booksData['imge']}
    // html code of the card
    function productsPageFun(booksData){
        return`
        <div id='productCOntainer'>
        <img id='bookImage' src = " ../assets/imges/uploadedImages/${booksData['imge']}">
        <div id = 'products-info'>
        <p id='price' style="display: none;"></p>
        <span id='or'>OR</span>
        <p id='booksInfo'><span>I want to exchange it with :</span> ${booksData['booksInfo']}</p>
        <p id='donation' style="display: none;">This book is for donation </p>
        <p> <span>Email :</span> ${booksData['email']}</p>
        <button id=show> show number </button>
        <p style="display: none;" id='phoneNumber'><span>Phone number :</span>  ${booksData['phone']} </p>
        <a href="mailto:${booksData['email']}?subject= exchanging books, someone requesting your ${booksData['name']} book"><button>request</button></a>
        </div>
        </div>  `
    }
}
booksCard()
