import axios from 'axios';
const query = 'movies'
const from = '20160101';
const end = '20170101';
const BASEURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=f79ecf63571246a091897915d7441ade&fq=news_desk:('${query}')&begin_date=${from}&end_date=${end}`


export default {
  search: function() {
    return axios.get(BASEURL);
  },
  test: function(){
    return axios.get('/test')
  }
};

