/**
 * returns a filtered array of movies
 * @param {Array}
 * @param {String}  
 * @returns {Array} 
 */

 export function filterFilmsByDirector(list, searchDirector){
    return list.filter(item => item.director === searchDirector);
}

/**
 
 * @param {Array} 
 * @param {Array} 
 * @returns {Array}
 */

export function getListOf(list, prop){
    return [...new Set(list.map((film) => film[prop] || ""))];
}