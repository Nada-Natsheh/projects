// creating filter section using api for add book page
let selectUniversity = document.getElementById('selectUniversity')
let submitbtn = document.getElementById('submitbtn')
let faculityOptions = document.getElementById('Faculty')
let universityOptions = document.getElementsByClassName('universityOption')
const university = []
const faculitiesNames = []
// calling the API and  converting the data to json 
async function universityData(){
   const data = await fetch('https://raw.githubusercontent.com/Hipo/university-domains-list/master/world_universities_and_domains.json');
   const universityData = await data.json();
   

   // fetching the universities's names that we will use 
   for(let i = 5428; i<= 5455; i++){
      university.push(universityData[i]['name']);
      if(universityData[i]['alpha_two_code']!== 'JO'){
         alert('somthin is wrong with chosing university and colleges section, we are working on it.... ')
      } 
     
   } 
      // here I created a loop to store the data in filter section

   for(let i=0; i<university.length; i++){
      selectUniversity.innerHTML += selectUN(university[i])     
   }
   // here is the options that will be stored in the select field

   function selectUN(university){
      
         return`
      <option class = 'universityOption' value= ${university.replaceAll(' ', '-')}>${university}</option>`
   }
   
}
universityData()
// here I did the same thing but for the faculty

async function facultiesFun(){
   //const faculitiesNames = []
   const facultiesData = await fetch('http://localhost:3000/universityData');
   const facultiesArray = await facultiesData.json();
   const faculities = facultiesArray['data'];
   for(let i=0; i <faculities.length; i++){
      faculitiesNames.push(faculities[i]['college'])
   };
   for(let i = 0; i<faculitiesNames.length; i++){
      faculityOptions.innerHTML += selectfaculity(faculitiesNames[i])
    }
   
   function selectfaculity(faculitiesNames){
     
      return`
   <option class = 'FaculityOption'  value= ${faculitiesNames.replaceAll(' ', '-')}>${faculitiesNames}</option>`
}
}
facultiesFun()

// selectUniversity.onclick = function(){
//    faculityOptions.style.display = 'block'
//    }
//    faculityOptions.onclick = function(){
  
//       submitbtn.style.display = ' block'
//    }


