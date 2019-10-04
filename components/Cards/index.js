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

const cards = document.querySelector('.cards-container');

function createCard(data) {
    const card = document.createElement('div');
    const title = document.createElement('div');
    const author = document.createElement('div');
    const imageContainer = document.createElement('div');
    const image = document.createElement('img');
    const byLine = document.createElement('span');

    card.classList.add('card');
    title.classList.add('headline');
    author.classList.add('author');
    imageContainer.classList.add('img-container');
    
    card.appendChild(title);
    card.appendChild(author);
    author.appendChild(imageContainer);
    imageContainer.appendChild(image);
    author.appendChild(byLine);

    title.textContent = data.headline;
    image.src = data.authorPhoto;
    byLine.textContent = data.authorName;

    return card;


}

axios
    .get('https://lambda-times-backend.herokuapp.com/articles')
    .then(results => {
        console.log(results);
        results.data.articles.javascript.forEach(newArticle => {
            cards.appendChild(createCard(newArticle));
        });    
        results.data.articles.bootstrap.forEach(newArticle => {
            cards.appendChild(createCard(newArticle));
        });
        results.data.articles.technology.forEach(newArticle => {
            cards.appendChild(createCard(newArticle));
        });
        results.data.articles.jquery.forEach(newArticle => {
            cards.appendChild(createCard(newArticle));
        });
        results.data.articles.node.forEach(newArticle => {
            cards.appendChild(createCard(newArticle));
        });
    });