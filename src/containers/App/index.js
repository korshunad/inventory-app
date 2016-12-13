import React from 'react'
import AddGood from 'components/AddGood'
import AddCategory from 'components/AddCategory'
import GoodTable from 'components/GoodTable'
import styles from './_App.css'
import {Button} from 'antd'



class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={isModalOpen: false }
  };


  render() {
    const categories = [];
    CATEGORIES["categories"].forEach(function(cat) {
      const category = (
          <div>
            <Button  className={styles.deleteCategory}>X</Button>
            <div className={styles.category}>{cat.name}</div>
          </div>)
      
      categories.push(category);
    });
console.log(categories);
   return (
        <div>
        <div className={styles.whole}>
          <div className={styles.header}>
          <div className={styles.logo}>My-app</div>

          <div className={styles.addingButtons}>
            <AddGood />
            <AddCategory />
          </div>
          </div>
          <div className={styles.data}>
          <div className={styles.categories}>
            {categories}
          </div>
          <div className={styles.goods}>
            <GoodTable goods={GOODS["goods"]} />
           </div>
          </div>
          </div>
         </div>
        )
  }
}

const GOODS={
  "goods": [
    {
      "_id": "3",
      "categoryId": "584d516154c6f51bbc6eee1c",
      "name": "Товар 1",
"cuid": "ciwmdchxt0000tv4w9eoicinn",
      "purchasingPrice": 2000,
      "retailPrice": 2500,
      "__v": 0
    },
    {
      "_id": "4",
      "categoryId": "584d516154c6f51bbc6eee1c",
      "name": "Товар 2",
"cuid": "ciwmdchxt0001tv4w9eoicinn",
      "purchasingPrice": 2200,
      "retailPrice": 2700,
      "__v": 0
    },
    {
      "_id": "5",
      "categoryId": "584d516154c6f51bbc6eee1c",
      "name": "Товар 3",
"cuid": "ciwmdchxt0003tv4w9eoicinn",
      "purchasingPrice": 2200,
      "retailPrice": 2700,
      "__v": 0
    },
    {
      "_id": "6",
      "categoryId": "584d516154c6f51bbc6eee1c",
      "name": "Товар 4",
"cuid": "ciwmdchxt0004tv4w9eoicinn",
      "purchasingPrice": 2200,
      "retailPrice": 2700,
      "__v": 0
    }
  ]
}

const CATEGORIES={
    "categories": [
    {
      "_id": "584eeea1a7c7d8268800771e",
      "name": "Категория 1",
      "__v": 0
    },
    {
      "_id": "584eeea2a7c7d8268800771f",
      "name": "Категория 2",
      "__v": 0
    },
    {
      "_id": "584eeea2a7c7d82688007720",
      "name": "Категория 3",
      "__v": 0
    },
    {
      "_id": "584eeea1a7c7d8268800771e",
      "name": "Категория 1",
      "__v": 0
    }
  ]
}

export default App
