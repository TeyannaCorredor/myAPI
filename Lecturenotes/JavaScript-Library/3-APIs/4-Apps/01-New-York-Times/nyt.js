const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'wjT1WlSo0jNXq2ztnrSMD6bjbFo9PkSX'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

// Hide nav buttons until search results are returned
// We'll want to manage pagination using variables so
// we can keep track of when nav buttons are used or not.
nextBtn.style.display = "none";
previousBtn.style.display = "none";
let pageNumber = 0;
console.log('PageNumber:', pageNumber);
let displayNav = false;
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);
// Go fetch the results. Build a URL that includes your API key (from above), the pageNumber (it's zero)
// at first, the search term (grab from the form) and then add on the start/end dates ONLY if they provide one.
//
// Use fetch to grab the response, send it to JSONifier and then send that to our displayResults function
function fetchResults(e) {
    e.preventDefault();
    console.log(e);
    console.log(searchTerm.value);
    url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
    console.log(url);
    // If a date is specified, append that to query.
    if(startDate.value !== '') {
        console.log(startDate.value);
        url += '&begin_date=' + startDate.value;
    };
    if(endDate.value !== '') {
        console.log(endDate.value);
        url += '&end_date=' + endDate.value;
    };
    console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(json => displayResults(json));
}
// If they click on nextPage, increment the counter and go fetch the results for that page
function nextPage(e) {
    pageNumber++;
    fetchResults(e);
    console.log("Page Number:", pageNumber);
}
// If they click on previousPage, increment the counter and go fetch the results for that page
function previousPage(e) {
    if (pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
    fetchResults(e);
    console.log("Page Number:", pageNumber);
};
// This section takes the JSON results and builds the HTML for the page.
function displayResults(json) {
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }
    console.log(json);
    let articles = json.response.docs;
    if (articles.length >= 10 && pageNumber == 0) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'none';
    } else if (articles.length >= 10) {
        nextBtn.style.display = 'block'; //shows the nav display if 10 items are in the array
        previousBtn.style.display = 'block';
    } else if (pageNumber > 0) {
        nextBtn.style.display = 'none';
        previousBtn.style.display ='block';
    } else {
        nextBtn.style.display = 'none'; //hides the nav display if less than 10 items are in the array
        previousBtn.style.display = 'none';
    };
    if (articles.length === 0) {
        console.log("Sorry. No Results.");
    } else {
        articles.forEach(a => {
            // This builds out the frame for our HTML to display each article
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let paragraph = document.createElement('p');
            let clearfix = document.createElement('div');
            console.log("Current:", a);
            // This section builds the link at the top of each article
            // url and headline come from the json response
            link.href = a.web_url;
            link.textContent = a.headline.main;
            paragraph.textContent = 'Keywords: ';
            // This section builds <p><span>keywords: blah blah blah</span><p>
            for (let j = 0; j < a.keywords.length; j++) {
                let span = document.createElement('span');
                span.textContent += a.keywords[j].value + ' ';
                paragraph.appendChild(span);
            }
            // Adds picture to display
            if(a.multimedia.length > 0) {
                img.src = 'http://www.nytimes.com/' + a.multimedia[0].url;
                img.alt = a.headline.main;
            }
            // No idea what this does.
            clearfix.setAttribute('class', 'clearfix');
            /*
            ** This is where we build the actual HTML using the different parts
               we have stored in variables. ***
            <section>
                <article>
                    <h2>
                        <a>This is our heading link.</a>
                    </h2>
                    <img src="blah"></img>
                    <p>Keywords</p>
                    *mystery clearfix*
                </article>
            </section>
            */
            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(paragraph);
            article.appendChild(clearfix);
            section.appendChild(article);
        });
    };
}; 






