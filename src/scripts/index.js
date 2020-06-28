
// my Api key
const apikey='680b52b3605346e096558d9b316f5ff0';
// news
const searchTopic=document.querySelector('.search-container');
const newsArea =document.getElementById('news-articles');
const input = document.getElementById('search');
//https://newsapi.org/v2/everything?q=${searchTopic}&apiKey=${apikey}
searchTopic.addEventListener('submit',fetchNew);
// Function to fetch news from NEWs api
 function fetchNew(e)
{ 
   e.preventDefault();
   let searchTopic=input.value;

   const url=`https://cors-proxy.htmldriven.com/?url=http://newsapi.org/v2/everything?q=bitcoin&from=2020-05-28&sortBy=publishedAt&apiKey=680b52b3605346e096558d9b316f5ff0
   `;

   console.log(searchTopic);  

  fetch(url)    
  .then((response)=>{ 
      console.log('json');
    return response.json();
 })
  .then((data)=>
  {
    console.log(data)
  });
   
}


 // const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=[${api}]`;

// function SearchValue( key='enter'|| )
// {

// }