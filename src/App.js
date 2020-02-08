import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "./index.css";
import "./css/banner.css";
import BannerView from './views/bannerView'
import PostsView from './views/allPostsView'
import FormPostView from './views/postFormView'

export default class App extends React.Component {

  render() {

    return (
      <div>
        <MDBContainer fluid>
          <MDBRow>
            <MDBCol md="12" className="col-custom-padding">
              <BannerView />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <MDBContainer>
          <MDBRow className="cust-row">
            <MDBCol md="5" className="col col-md-push-7">
              <div className="solli-case-section">
                <FormPostView />
              </div>
            </MDBCol>
            <MDBCol md="6" className="col col-md-pull-5 ml-auto">
              <div className="solli-case-section">
                <PostsView />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );

  }
}