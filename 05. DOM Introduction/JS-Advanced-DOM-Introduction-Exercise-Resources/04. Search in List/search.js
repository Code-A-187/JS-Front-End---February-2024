function search() {
   const townListElement = document.getElementById('towns');
   const searchText = document.getElementById('searchText').value;
   const resultElement = document.querySelector('#result');

   let matchCount = 0;

   const townElements = Array.from(townListElement.children)

   for (const townElement of townElements) {
      if (townElement.textContent.toLowerCase().includes(searchText.toLowerCase())) {
         townElement.style.textDecoration = 'underline';
         townElement.style.fontWeight = 'bold';
         
         matchCount++;
      }
   }

   resultElement.textContent =`${matchCount} matches found`;
}
