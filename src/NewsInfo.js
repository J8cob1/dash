// https://github.com/motdotla/dotenv
// Use above link as an example to hide the API Key

//NEWS-api example from:
//https://github.com/alemesa/news-api-react/blob/master/src/Display.js
//Used as reference


import React, { Component } from 'react';
import axios from 'axios';
import "./NewsInfo.css"


class NewsInfo extends Component {
  constructor() {
    super();
    // Set initial state
    this.state = {
      articles: []
    };
  }

    // Lifecycle method
    componentWillMount() {
      this.getArticles();
    }

  formatDate(date) {
    var time = new Date(date);
    var year = time.getFullYear();
    var day = time.getDate();
    var hour = time.getHours();
    var minute = time.getMinutes();
    var month = time.getMonth() + 1;
    var composedTime = day + '/' + month + '/' + year + ' | ' + hour + ':' + (minute < 10 ? '0' + minute : minute);
    return composedTime;
  }

  getArticles() {
    const apiKey = process.env.REACT_APP_NEWS_API_KEY;
    // Make HTTP reques with Axios
    axios
      .get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
      .then(res => {
        const articles = res.data.articles;
        // Set state with result
        console.log(articles);
        this.setState({ articles: articles });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    return (
    <div>
      <h4>NEWS</h4>
      <div className="cardsContainer">
        {this.state.articles.map((news, i) => {
          return (
            <div className="card" key={i}>
              <div className="news-content">
                  <a href={news.url} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                  {news.description}
                <div className="author">
                    By <i>{news.author ? news.author : this.props.default}</i>
                    {this.formatDate(news.publishedAt)}
                </div>
              </div>
              <div className="image">
                <img src={news.urlToImage} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
    );
  }
}

export default NewsInfo;