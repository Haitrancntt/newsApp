import { apiKey, urlTopHeadlines, urlEverything, urlSources } from '../constants'

export const fetchTopHeadlines = (country='us', category='technology', q='apple') => {
    return fetch(`${urlTopHeadlines}?country=${country}&category=${category}&q=${q}`, {
        method: 'GET',
        headers: {  
            'x-api-key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }).then(result => {
            return result.json()
        })
}

export const fetchNewsEverything = (q='bitcoin') => {
    fetch(`${urlEverything}?q=${q}`, {
        method: 'GET',
        headers: {  
            'x-api-key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
    }).then(result => {
       return result.json()
    }).then(data => {
        return data
    })
}

export const fetchSource = (category, country) => {
    return fetch(`${urlSources}?${country ? `country=${country}` : 'country'}&${category ? `category=${category}` : 'category'}`, {
        method: 'GET',
        headers: {  
            'x-api-key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
    }).then(result => {
       return result.json()
    })
}