
 var siteName = document.getElementById("siteName");
 var siteUrl = document.getElementById("urlName");

 var bookMarkContainer ;
     //bookMarkContainer = JSON.parse(localStorage.getItem("myBookMarker"));

if(localStorage.getItem("myBookMarker") == null ){

    bookMarkContainer = [];
}else{

    bookMarkContainer = JSON.parse (localStorage.getItem("myBookMarker"));
    displayBookMark();
}

function addBookMark()
{
    

    var bookMarkContent =
    {
        name:siteName.value,
        url:siteUrl.value,
    };

    bookMarkContainer.push(bookMarkContent);
    localStorage.setItem("myBookMarker", JSON.stringify(bookMarkContainer));
    clearBookMark(); 
    displayBookMark();
    //console.log(bookMarkContainer);

}

function clearBookMark()
{
    siteName.value = "";
    siteUrl.value  = "";
}

function displayBookMark()
{
    var content = "";

    for(i = 0; i < bookMarkContainer.length ; i++)
    {
       content += 
       `<div class="row p-3">
         <div class= col-md-4>
           <h4>`+bookMarkContainer[i].name+`</h4>
        </div> 
        <div class= col-md-4>
           <a class="btn btn-info" href= "`+bookMarkContainer[i].url+`">Visit</a>
           <button onclick ="removeBookMark(`+i+`)" class="btn btn-tst btn-danger">Delete</button>
         </div>
         </div>`;
       
    }

     document.getElementById("bookMarkResult").innerHTML = content;
}


 function removeBookMark(removedItem){

    bookMarkContainer.splice(removedItem,1);
    localStorage.setItem("myBookMarker", JSON.stringify(bookMarkContainer));
    displayBookMark();
 }