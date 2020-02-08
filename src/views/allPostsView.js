import React from "react";
import { MDBBtn } from 'mdbreact';
import "../css/posts.css";

import AllPosts from '../components/posts/allPosts.js'

export default class AllPostsView extends React.Component {

  render() {
    return (
      <div className="allposts-block">

        <div className="allposts-sec">

          <AllPosts />

        </div >

        <MDBBtn rounded color="deep-orange btn-custom-radius">Meer laden</MDBBtn>

      </div>
    );

  }
}

