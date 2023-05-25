import React, { Component } from 'react';
import Card from './Card';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
// import LoadingBar from 'react-top-loading-bar'

export class News extends Component {

    static defaultProps = {
        country: 'in',
        category: 'general',
        pageSize: 10
    }

    static propTypes = {
        country: PropTypes.string,
        category: PropTypes.string,
        pageSize: PropTypes.number
    }

    cap1stLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
        }
        document.title = `${this.cap1stLetter(this.props.category)} - Tech Patrika`
    }
    updateNews = async () => {
            this.props.setProgress(0);
            const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`;
            this.props.setProgress(10);
            this.setState({ loading: true });
            this.props.setProgress(30);
            let data = await fetch(url);
            this.props.setProgress(50);
            let parsedData = await data.json();
            this.props.setProgress(80);
            console.log(parsedData);
            this.setState({
                articles: parsedData.articles,
                totalResults: parsedData.totalResults,
                loading: false
            });
            this.props.setProgress(100);
    }

    async componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = async() =>{
        this.setState.page=({page:this.state.page + 1});
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.props.page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json();
            console.log(parsedData);
            this.setState({
                articles: this.state.articles.concat(parsedData.articles),
                totalResults: parsedData.totalResults,
                loading: false
            })

    };

    // handlePrevClick = async () => {
    //     this.setState({ page: (this.state.page - 1) });
    //     this.updateNews();

    // }

    // handleNextClick = async () => {
    //     if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {
    //         let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    //         this.setState({ loading: true })
    //         let data = await fetch(url);
    //         let parsedData = await data.json()
    //         this.setState({ articles: parsedData.articles, title: parsedData.title, imageUrl: parsedData.imageUrl, url: parsedData.url, description: parsedData.description, page: this.state.page + 1, loading: false })
    //     }
    // }


    render() {
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '40px' }} >Tech Patrika - Top Headlines from {this.cap1stLetter(this.props.category)} Category</h1>
                {/* {this.state.loading && <Spinner />} */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner/>}
                >
                    <div className="container">
                    <div className="row">
                        { this.state.articles && this.state.articles.map((element) => {
                            return <div className="col md-4" key={element.url}>
                                <Card title={element.title} description={element.description ? element.description.slice(0, 90) : ""} imageUrl={!element.urlToImage ? "https://media.istockphoto.com/photos/news-on-tags-picture-id478769470?k=6&m=478769470&s=170667a&w=0&h=6wkMsUSBV03kHiCs4DhcGgOazOzsX309_aY9hS0albU=" : element.urlToImage} newsUrl={element.url} author={element.author} publishedAt={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                    </div>
                    

                </InfiniteScroll>
                
            </div>
        )
    }
}

export default News
