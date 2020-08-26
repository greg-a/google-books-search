import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";


class Search extends Component {
    state = {
        books: []
    };

    componentDidMount() {
        this.searchBook("Harry Potter");
    };

    searchBook = search => {
        API.googleBooks(search)
        .then(res => {
            console.log(res);
            this.setState({
            books: res.data
        })
    })
        .catch(err => console.log(err))
    };

    render() {
        return (
        <div>
            hello
        </div>
        )}
}

export default Search;

