import React, { Component } from "react";
import Wrapper from "../components/Wrapper";
import API from "../utils/API";
import { List, ListItem } from "../components/List";
import Jumbotron from "../components/Jumbotron";
import Nav from "../components/Nav";


class Saved extends Component {
    state = {
        books: [],
        search: ""
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {

        API.getBooks()
            .then(res =>
                this.setState({
                    books: res.data
                })
            )
            .catch(err => console.log(err))
    };

    deleteBook = id => {
        API.deleteBook(id)
            .then(res => this.loadBooks())
            .catch(err => console.log(err));
    };

    render() {
        return (
            <Wrapper>
                <Nav />
                <Jumbotron>
                    <h3>Saved Books</h3>
                </Jumbotron>
                {this.state.books.length ? (
                    <List>
                        {this.state.books.map(book => (
                            <ListItem image={book.image} link={book.link} title={book.title} description={book.description} author={book.author} buttonName="Delete" class="delete-btn btn card-btn" clickEvent={() => this.deleteBook(book._id)} />
                        ))}
                    </List>
                ) : (
                        <h3>No Results!</h3>
                    )}
            </Wrapper>
        )
    }
}

export default Saved;