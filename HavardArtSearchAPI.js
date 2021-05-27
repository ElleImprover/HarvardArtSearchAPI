const body= document.querySelector("body");
const btnSubmit = document.querySelector('#btnSubmit');

body.addEventListener('load',(evt)=>{
//Add code to get first page of images
//do a get all images from the gallery
//add each image result to the results div through a foreach loop
});

btnSubmit.addEventListener('click',(evt)=>{
//Add code for when user submits a inquiry

});

function CreateImageResult( imageUrl){
const imageDiv =document.createElement("div");
//const fig= document.createElement("Figure");
//fig.AppendChild(img);
//fig.figCaption.innerHTML="";
const img= document.createElement("img");
img.src=imageUrl;
const imgTxt=document.createElement("p");
imageDiv.className="imageDiv";
imageDiv.appendChild(img);


}

//https://github.com/harvardartmuseums/api-docs/blob/master/sections/image.md
//baseimageurl

function BuildRequest(txtSearch){

    var url="https://api.harvardartmuseums.org/"
    var resourcetype="image"+"?"
    var apiKey="47a72bb9-7c5d-426d-9152-f4e94ffa376d";
    var filterArray;
 
    var requestString=""; 
    //https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=YOUR_API_KEY

}


