import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBRow } from 'mdbreact';
import "../../css/posts.css";

const API_ENDPOINT = 'http://178.62.198.162/api/posts';
const API_HEADERS = { token: 'pj11daaQRz7zUIH56B9Z' }

export default class AllPosts extends React.Component {
  state = {
    posts: null
  }

  componentDidMount() {
    fetch(API_ENDPOINT, { headers: API_HEADERS })
      .then(resp => resp.json())
      .then((posts) => {

        this.setState({ posts })

        console.log(posts)

      })
      .catch(console.error)
  }

  // get data() {
  //   const labels = [];
  //   const semesterData = [];
  //   const studData = [];

  //   for (const LabelsHboi of Object.keys(this.state.hboiStudent)) {
  //     labels.push(LabelsHboi)
  //   }
  //   for (const outcome of Object.values(this.state.vermogens)) {
  //     labels.push(outcome.description)
  //     semesterData.push(outcome.score)
  //   }


  //   for (const studHboi of Object.values(this.state.hboiStudent)) {
  //     studData.push(studHboi)
  //   }

  //   return {

  //   };
  // }

  render() {

    if (!this.state.posts) return (<h3>...Loading...</h3>)

    return (
      <MDBRow>

        <MDBCol sm="6">
          <MDBCard className="allposts-item-card">
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
          </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard className="allposts-item-card">
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
          </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard className="allposts-item-card">
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
          </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol sm="6">
          <MDBCard className="allposts-item-card">
            <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg" waves />
            <MDBCardBody>
              <MDBCardTitle>Card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make
                up the bulk of the card&apos;s content.
          </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>


      </MDBRow >

    );

  }
}

