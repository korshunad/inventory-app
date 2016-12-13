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
            <Button  className={styles.deleteCategory}>X</Button>
            <div className={styles.category}>Категория 1</div>
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
export default App
