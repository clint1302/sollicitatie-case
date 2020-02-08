import React from "react";
import "../../css/posts.css";

const API_ENDPOINT = 'http://178.62.198.162/api/categories';
const API_HEADERS = { token: 'pj11daaQRz7zUIH56B9Z' }

export default class PostFormCategories extends React.Component {
  state = {
    categories: null
  }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     catPostId: '1'
  //   };
  // }
  
  // myChangeHandler = (event) => {
  //   let nam = event.target.name;
  //   let val = event.target.value;
  //   this.setState({ [nam]: val });
  // }

  componentDidMount() {
    fetch(API_ENDPOINT, { headers: API_HEADERS })
      .then(resp => resp.json())
      .then((categories) => {

        this.setState({ categories })

      })
      .catch(console.error)
  }

  get data() {
    const categoryId = [];
    const categoryName = [];

    for (const categoriesVal of Object.values(this.state.categories)) {
      categoryId.push(categoriesVal.id)
      categoryName.push(categoriesVal.name)
    }

    return {
      categoryId,
      categoryName
    };
  }

  render() {

    if (!this.state.categories)
      return (
        <option>... Loading ...</option>
      )

    return (
        this.state.categories.map((item, key) =>
          <option key={key} value={item.id}>{item.name}</option>
        )
    );

  }
}

