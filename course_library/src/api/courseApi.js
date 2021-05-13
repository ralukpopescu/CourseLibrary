import * as apiUtils from "./apiUtils";
const baseUrl  = apiUtils.api_url +"/authors/";

export function getCoursesForAuthor(authorId) {
    const url=baseUrl +authorId+"/courses";
    return fetch(url)
        .then(apiUtils.handleResponse)
        .catch(apiUtils.handleError);
}
