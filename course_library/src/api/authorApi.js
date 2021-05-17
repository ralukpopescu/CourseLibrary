import * as apiUtils from "./apiUtils";
const url  = apiUtils.api_url +"/authors/";

export function getAuthors() {
    //return fetch('https://api.github.com/users')
    return fetch(url)
        .then(apiUtils.handleResponse)
        .catch(apiUtils.handleError);
}

export function saveAuthor(author){
    return fetch(url + (author.id || ""), {
        method: author.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
        headers: { "content-type": "application/json" },
        body: JSON.stringify(author)
      }).then(apiUtils.handleResponse)
        .catch(apiUtils.handleError);
}

export function deleteAuthor(authorId){
    return fetch(url + authorId,{ 
        method: "DELETE"
    }).then(apiUtils.handleResponse)
    .catch(apiUtils.handleError);
}
