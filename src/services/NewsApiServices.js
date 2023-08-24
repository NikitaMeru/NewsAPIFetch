const API_KEY='587823e799664593b36b9ae91a22d66b';
const BASE_URL='https://newsapi.org/v2';
export async function getTopHeadlines(){

    try{

      const response= await fetch(`${BASE_URL}/top-headlines?country=in&apiKey=${API_KEY}`)
       const data=await response.json(); 
       return data;
    } catch(error){
        console.log(error);
    }
}

export async function getAllNews(topic){

     try{

      const response= await fetch(`${BASE_URL}/everything?q=${topic}&apiKey=${API_KEY}`)
       const data=await response.json(); 
       return data;
    } catch(error){
        console.log(error);
    }
}