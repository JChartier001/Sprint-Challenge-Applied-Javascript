// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
// const entryPoint = document.querySelector('.cards-container');
const entryPoint = document.querySelector('.cards-container');
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    
    response.data.articles.bootstrap.forEach((item) =>{
        const newCard = cardCreator(item);
        entryPoint.appendChild(newCard);
        console.log(newCard);
    })    

    response.data.articles.javascript.forEach((item) =>{
        const newCard = cardCreator(item);       
        entryPoint.appendChild(newCard);
        
    })    

    response.data.articles.technology.forEach((item) =>{
        const newCard = cardCreator(item);       
        entryPoint.appendChild(newCard);
        
    })    

    response.data.articles.jquery.forEach((item) =>{
        const newCard = cardCreator(item);       
        entryPoint.appendChild(newCard);
        
    })    

    response.data.articles.node.forEach((item) =>{
        const newCard = cardCreator(item);       
        entryPoint.appendChild(newCard);
        
    })    
});
    
       
function cardCreator(item) {
    //creating elements
    const topCard = document.createElement('div');
    const headlineElem = document.createElement('div');
    const authorInfo = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const name = document.createElement('span');

    
    topCard.classList.add("card");
    headlineElem.classList.add('headline');
    imageContainer.classList.add('img-container');
    authorInfo.classList.add('author');


    console.log(topCard);
    console.log(headlineElem);
    console.log(authorInfo);
    console.log(image);

    headlineElem.textContent = item.headline;
    image.src = item.authorPhoto;    
    name.textContent = "By: " + item.authorName;

    console.log(image);
    console.log(headlineElem);
    console.log(name);

    topCard.appendChild(headlineElem);
    topCard.appendChild(authorInfo);
    authorInfo.appendChild(imageContainer);
    imageContainer.appendChild(image);
    authorInfo.appendChild(name);

    return topCard;
   
};