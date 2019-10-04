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
const entryPoint = document.querySelector('.cards-container');

axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response =>{
    console.log(response.data.articles.bootstrap);
    response.data.articles.bootstrap.forEach(async (article) => {
          cardCreator(article);
        
    });
    
        
        // .then(response => {
        //     //going through response "array"
        //     response.data.forEach(async (githubUser) => {
        //         //setting userResponse to get usernames.  "await" sets interval.
        //         const userResponse = await axios.get(githubUser.url);
        //         console.log(userResponse)
        //        createCard(userResponse.data);
        //     })

    });
// });

function cardCreator(response) {
    //creating elements
    const card = document.createElement('div');
    const headlineElem = document.createElement('div');
    const author = document.createElement('div');
    const imgcontainer = document.createElement('div');
    const imgElem = document.createElement('img');
    const authorsNameElem = document.createElement('span');

    
//adding classes
    card.classList.add('card');
    headlineElem.classList.add('headline');
    author.classList.add('author');
    imgcontainer.classList.add('img-container');

    //adding text
    headlineElem.textContent = headline;
    console.log(headlineElem);
    imgElem.src = authorPhoto;
    // console.log(imgElem);
    authorsNameElem.textContent = authorName;


    //appending
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgcontainer);
    imgcontainer.appendChild(img);
    card.appendChild(authorsName);


    entryPoint.appendChild(card);
};// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>