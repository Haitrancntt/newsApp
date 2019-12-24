import { apiKey, urlTopHeadlines, urlEverything, urlSources } from '../constants'

export const fetchTopHeadlines = (country='us', category='technology', q='apple') => {
    fetch(`${urlTopHeadlines}?country=${country}&category=${category}&q=${q}`, {
        method: 'GET',
        headers: {  
            'x-api-key': apiKey,
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/json'
          }
        }).then(result => {
            return result.json()
        }).then(data => {
            localStorage.setItem('articles', JSON.stringify(data.articles));
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

export const fetchSource = (country, category, language) => {
    fetch(`${urlSources}?country=${country}&category=${category}&language=${language}`, {
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