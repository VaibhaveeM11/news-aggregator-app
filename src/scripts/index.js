 // API KEY
const api ='680b52b3605346e096558d9b316f5ff0';
 let url='https://newsapi.org/v2/top-headlines?country=in&apiKey=680b52b3605346e096558d9b316f5ff0';

 document.querySelector('body').addEventListener('onload',newsLoader);


      //  User Story 1: -->
// When user opens the app, he should be able to view the top headlines fetched by the API -->
// Function to Display top News in India

document.getElementById('news-articles');

 function fetchNews(){

           fetch('url')

           .then((res)=>res.json())

           .then((data)=>{               
                    let output;
                    data.forEach(function (newsdata) {
                        output +=`
               <li class="article">

                        <a href="${newsdata.url}" class="article-link" target="-blank">

                          <img src="${newsdata.urlToimage}" alt="news" class="article-img" >

                          <h2 class="article-title">${newsdata.title}</h2>

                          <p class="article-description">${newsdata.description}</p> 

                          <span class="article-author">${newsdata.author ? newsdata.author:"anon"}</span>  

                          </a>
             </li>     `;
            });
            document.getElementById('news-articles').innerHTML=output;
           })
     }
// Function to Fetch data from API
// Condition 1: Fetch Top 20  Default NEWS
// Condition 2: Fetch NEWS based on searchvalue

  function fetchNew(SearchInput)
  {
      document.getElementById().innerHTML='<p class="load">New are Loading ...</p>';
       if (SearchInput='') {
                fetch('url')
                .then((res)=>res.json())
                .then((data)=>{
                  

                })
           
       } 
       else {
           
       }
  

  }
// Function To take value from user 
async function SearchInput(event)
{
   if(event.which=='13'|| event.keyCode=='13'||event.key=='enter')
   {
        fetchNews(event.target.value);
   }
}

function newsLoader()
{
    document.getElementById('search').addEventListener('keypress',SearchInput);
       console.log("new loader");
       fetchNews();
  }
//    Additional Feather 
    //    <!-- Dark mode & light mode -->
    
   let theme = document.getElementById('view-theme').addEventListener('change',changeTheme=(e)=>{
           (e.target.checked) ? document.body.style.backgroundColor='#232B2B':document.body.style.backgroundColor='#FAEBD7';
                });
     

// // Lite Mode/Dark Mode Toggle Function//
// document.querySelector("#toggle_action").addEventListener('change',toggle_func)

// function toggle_func(e){
//   if (e.target.checked)
//    {
//     document.documentElement.setAttribute('data-theme', 'lite');
//     document.querySelector(".toggletxt").innerHTML="Toggle to Dark Mode";
//     }
// else
//    {
//     document.documentElement.setAttribute('data-theme', 'dark');
//     document.querySelector(".toggletxt").innerHTML="Toggle to Lite Mode";
//    }   
// }

// //Api-Key//
// const apikey="339b58f0aa7c460fa259944a0681031f";
// var article_area=document.getElementById("news-articles");
// //Function to have formatted NEWS//
// function getNews(news){
//   let output="";
//   if(news.totalResults>0){
//     news.articles.forEach(ind=>{
//       output+= 
//         ` <section class="container">
//           <li class="article"><a class="article-link" href="${ind.url}" target="_blank">
//           <div class="img_area">
//           <img src="${ind.urlToImage}" class="article-img" alt="${ind.title}"></img>
//           </div>
//           <h2 class="article-title">${ind.title}</h2>
//           <p class="article-description">${ind.description || "Description not available"}</p> <br>
//           <span class="article-author">-${ind.author? ind.author: "Anon"}</span><br>
//           </a>
//           </li>
//           </section>
//         `;
//     });
//     article_area.innerHTML=output;
//   }
//   else
//   { 
//     article_area.innerHTML='<li class="not-found">No article was found based on the search.</li>';
//   }
// };
// // Function to retreive news using Fetch API with Await//
// async function retreive(searchValueText=""){

//     article_area.innerHTML='<p class="load">News are Loading...</p>';
    
//     if(searchValueText!=""){
//       url=`https://newsapi.org/v2/everything?q=${searchValueText}&apiKey=${apikey}`;
//     }
//     else
//     {
//       url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}`;
//     }
//     const response=await fetch(url);
//     const result=await response.json();
//     getNews(result);
// }
// //Get text value from Searchbar and pass to retreive function//
// async function searchvalue(e){  
//     if (event.which === 13 || event.keyCode === 13 || event.key === "Enter")
//      {
//       retreive(e.target.value);
//      }
// };
// //Attached Event listener for Searchbar to retreive text from Searchbar//
// function start(){
//   document.getElementById("search").addEventListener('keypress',searchvalue);
//   retreive();
// }
// //Initializing Function//
// (function(){
//   start();}
// )();




