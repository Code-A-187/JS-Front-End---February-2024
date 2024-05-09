function extractText() {
   const collectListItems = document.getElementById('items');
   const textAreaElement = document.getElementById('result');
   textAreaElement.value = collectListItems.textContent;
}   