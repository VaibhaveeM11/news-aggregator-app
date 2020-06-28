
// my Api key

const apikey='680b52b3605346e096558d9b316f5ff0';

// const fetchhere =document.querySelector('#news-articles');
const searchTopic=document.querySelector('.search-container');
const newsArea =document.getElementById('news-articles');
const input = document.getElementById('search');

searchTopic.addEventListener('submit',fetchNew);
async function fetchNew(e)
{ 
   e.preventDefault();
   let searchTopic=input.value;

   const url=`https://cors-escape.herokuapp.com/https://newsapi.org/v2/everything?q=${searchTopic}&apiKey=${apikey} `;

   console.log(searchTopic);
  //fetching news
  fetch(url,{mode:"no-cors"})
  .then(res=>res.json())
  .then(data=>console.log(data));
    // const url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=[${api}]`;

// function SearchValue( key='enter'|| )
// {

// }
}