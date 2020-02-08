import React from "react";
import Moment from 'react-moment';
import Truncate from 'react-truncate';

import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import "../../css/posts.css";

const API_POSTS_ENDPOINT = 'http://178.62.198.162/api/posts';
const API_HEADERS = { token: 'pj11daaQRz7zUIH56B9Z' }

export default class AllPosts extends React.Component {
  state = {
    posts: null,
    categories: null
  }

  componentDidMount() {
    fetch(API_POSTS_ENDPOINT, { headers: API_HEADERS })
      .then(resp => resp.json())
      .then((posts) => {

        this.setState({ posts })

        console.log(posts)

      })
      .catch(console.error)

  }

  getCat(catId) {

    if (catId === "1") {
      return ("Tech");
    }
    else if (catId === "2") {
      return ("News");
    }
    else if (catId === "3") {
      return ("Sports");
    }
    else if (catId === "4"){
      return ("Lokaal");
    }
    else{
      return("");
    }

  }

  render() {

    if (!this.state.posts) return (<div className="text-center m-4">... Loading ...</div>)

    return (
      <MDBRow>

        {this.state.posts.slice(0, 11).sort((a, b) => new Date(b.created_at) - new Date(a.created_at)).map((item, key) =>

          <MDBCol sm="6" key={key}>
            <MDBCard className="allposts-item-card" id={item.id}>
              <div className="apost-img-sec">
                <MDBCardImage className="img-fluid" src={item.img_url} zoom />
                <div className="apost-img-content">
                  <span className="apost-img-text apost-img-cont-date">
                    <Moment format="DD-MM-YYYY">{item.created_at}</Moment>
                  </span>
                  <span className="apost-img-text apost-img-cont-cat">
                    {
                      this.getCat(item.category_id)
                    }
                  </span>


                </div>
              </div>
              <MDBCardBody>
                <MDBCardTitle>{item.title}</MDBCardTitle>
                <MDBCardText>
                  <Truncate lines={4} ellipsis={<span></span>}>
                    {item.content}
                  </Truncate>
                </MDBCardText>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

        )}

      </MDBRow >

    );

  }
}

