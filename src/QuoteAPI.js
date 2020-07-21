//rest api usage from:
//https://gomakethings.com/how-to-use-the-fetch-method-to-make-multiple-api-calls-with-vanilla-javascript/

function getQuotePriv() {
    console.log("called getquote()");

    return fetch('http://quotes.rest/qod.json?category=inspire')
        .then(function (res) {
            return res.json();
        });
}

async function getQuote() {
    var result = await getQuotePriv();
    console.log(result.contents.quotes[0].author);
    console.log(result.contents.quotes[0].quote);
    var quote = result.contents.quotes[0].quote;
    var author = result.contents.quotes[0].author;

    return [quote, author];
}

export {getQuote};