//const window= document.querySelector("window");
const btnSubmit = document.querySelector('#btnSubmit');
const srchRsltsDiv= document.querySelector("#searchResults");
const allImagesURL="https://api.harvardartmuseums.org/image?&apikey=47a72bb9-7c5d-426d-9152-f4e94ffa376d";

window.addEventListener('load',(evt)=>{
//Add code to get first page of images
//do a get all images from the gallery
//add each image result to the results div through a foreach loop

getResponse(allImagesURL, (data) =>
{
  var recs = data.records;
  recs.forEach(element => {
      var imageURL= element.baseimageurl;
      var caption="";
      if(element.description != null || element.description != "")
     { caption=element.description;}
      var imgDiv= CreateImageResult(imageURL, caption);
      srchRsltsDiv.appendChild(imgDiv);
});
    //data.records[].baseimageurl
//img.src=data.image;
//img.style.display="inline-block"
});

});

btnSubmit.addEventListener('click',(evt)=>{
//Add code for when user submits a inquiry
});

//ED- Append this to div searchResults
function CreateImageResult( imageUrl, caption){
const imageDiv =document.createElement("div");
//const fig= document.createElement("Figure");
//fig.AppendChild(img);
//fig.figCaption.id="caption";
//fig.figCaption.innerHTML="";
const img= document.createElement("img");
img.id="img";
img.src=imageUrl;
//img.style.display="inline-block";
const imgTxt=document.createElement("p");
imgTxt.innerHTML=caption;
imageDiv.className="imageDiv";
imageDiv.appendChild(img);
imageDiv.appendChild(imgTxt);
return imageDiv;
}

function getResponseOnly(url)
 {  
   fetch(url)
           .then((response) =>      {
             return response.json(); })
 }
function getResponse(url,method)
 {  
   fetch(url)
           .then((response) =>
            {
            return response.json();
            })
        .then(method);
 }
//https://github.com/harvardartmuseums/api-docs/blob/master/sections/image.md
//baseimageurl

function BuildRequest(txtSearch){

    var url="https://api.harvardartmuseums.org/"
    var resourcetype="image"+"?"
    var apiKey="47a72bb9-7c5d-426d-9152-f4e94ffa376d";
    var filterArray;
 
    var requestString=""; 

    return requestString
}
    /*
    https://api.harvardartmuseums.org/RESOURCE_TYPE?apikey=YOUR_API_KEY
    Sample of correct query
    'https://api.harvardartmuseums.org/object?title=cat&apikey=47a72bb9-7c5d-426d-9152-f4e94ffa376d'
    Sample of get all images query:
    https://api.harvardartmuseums.org/image?&apikey=47a72bb9-7c5d-426d-9152-f4e94ffa376d

    Need to get this field:
    records[x].baseimageurl:

*/



