// creating college Gallery section in the home page 
const collegeGallegySection = document.getElementById('selectCollege')
async function collegeGallegy(){
    //calling the api
     const facultiesData = await fetch('http://localhost:3000/universityData');
     const facultiesArray = await facultiesData.json();
     const faculities = facultiesArray['data'];
     for(let i =0; i<faculities.length; i++){
        collegeGallegySection.innerHTML+= collegeGallegySectionValues(faculities[i])
     }
    //  vraeting the html and store it in the function to use them in the home page 
 function collegeGallegySectionValues(faculities){
     return`
     <div>
    <div class='collegePic'>
     <a href = 'college/${faculities['college'].replaceAll(' ', '-')}'> <img class='college-img' src = '../assets/imges/college-${faculities['college']}.jpg'></a>
    </div>
    <div>
    <p class='the-name'>${faculities['college']}</p>
    </div>
     
     `
 }
 
}
collegeGallegy()