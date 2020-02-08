import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import "../css/posts.css";
import axios from 'axios';

import PostsCategories from '../components/postForm/postFormCategories.js'

const API_ENDPOINT = 'http://178.62.198.162/api/posts';
const API_HEADERS = { token: 'pj11daaQRz7zUIH56B9Z' }

export default class PostFormView extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category_id: '',
      content: ''
    };
  }
  mySubmitHandler = (event) => {
    event.preventDefault();

    console.log(this.state);

    let title = this.state.title;
    let content = this.state.content;
    let category_id = this.state.category_id;

    axios({
      method: 'post',
      mode: 'no-cors',
      headers: API_HEADERS,
      url: API_ENDPOINT,
      data: {
        title: title,
        content: content,
        category_id: category_id
      }
    }).then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    });

    // fetch(API_ENDPOINT, {
    //   method: 'POST',
    //   mode: 'no-cors',
    //   headers: {
    //     'token': 'pj11daaQRz7zUIH56B9Z',
    //     'Accept' : 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify({
    //     title: title,
    //     content: content,
    //     category_id: category_id
    //   }),
    // }).then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // });

  }

  myChangeHandler = (event) => {
    this.setState({ [event.target.name]: [event.target.value] });
  }
  
  render() {

    const { title, content, category_id } = this.state

    return (
      <MDBContainer>
        <MDBRow>
          <MDBCol>

            <form className="" onSubmit={this.mySubmitHandler}>

              <div className="form-group">
                <label htmlFor="bericht-naam">Berichtnaam</label>
                <input
                  type="text"
                  placeholder="Geen titel"
                  className="form-control form-control-md"
                  name="title"
                  required="required"
                  value={title}
                  onChange={this.myChangeHandler}
                />
              </div>

              <div className="form-group-marg">
                <label className="bericht-cat" htmlFor="cat-sel">Categorie</label>
                <select
                  className="browser-default custom-select"
                  name="category_id"
                  value={category_id}
                  onChange={this.myChangeHandler}
                >
                  <option defaultValue>Geen categorie</option>
                  <PostsCategories />
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="bericht-text">
                  Bericht
            </label>
                <textarea
                  className="form-control"
                  name="content"
                  rows="14"
                  required="required"
                  value={content}
                  onChange={this.myChangeHandler}
                />
              </div>

              <MDBBtn type="submit" rounded color="deep-orange btn-custom-radius">Bericht aanmaken</MDBBtn>

            </form>

          </MDBCol>
        </MDBRow>
      </MDBContainer>

    );

  }
}


