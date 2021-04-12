// This function loads pokemon data from the Pokemon API
import { get } from 'axios';



    // Feel free to download this HTML and edit it, to use another Pokemon ID
  
    //const quotes = [];
  
    //const url = `https://simpsons-quotes-api.herokuapp.com/quotes`;
  
    axios.get(`https://simpsons-quotes-api.herokuapp.com/quotes`)
  
      .then(({data})=>{
        console.log(data[0]);
        const quote = data[0];
  
      

       
  
        const simpson = `
  
          <p><strong>${simpson.quote}</strong></p>
          <p><strong>${simpson.character}</strong></p> 
          <img src="${simpson.image}" />
          <p><strong>${simpson.characterDirection}</strong></p>
        `;
  
       const myDiv= document.querySelector('#simpson');
        myDiv.innerHTML = simpson;
      });
  
  
  

  