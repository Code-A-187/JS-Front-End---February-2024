function create(words) {
   const mainDiv = document.getElementById("content");
   
   // recieve array of strings
      for (const word of words) {
         // create div and paragraph and put in it for each string
         const newDiv = document.createElement('div');
         const newP = document.createElement('p');
         const newContent = document.createTextNode(word);
         newP.appendChild(newContent);
         newP.style.display = 'none';
         
         
         newDiv.appendChild(newP)
         
         newDiv.addEventListener('click', () => {
            newP.style.display = 'block';
         });

         // append the divs to the div 'content'
         mainDiv.appendChild(newDiv);
      }
   
}