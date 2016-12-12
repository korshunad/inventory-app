import React from 'react'
import styles from './_App.css'
import 'antd/dist/antd.css'; 
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
        <div>
          <div className={styles.logo}>My-app</div>
          <div className={styles.addingButtons}>
            <button className={styles.addGood}>Добавить товар</button>
            <button className={styles.addCategory}>Добавить категорию</button>
          </div>
          <div className={styles.categories}>
            <div className={styles.category}>Категория 1</div>
            <button className={styles.deteteCategory}>X</button>
          </div>
          <div className={styles.goods}>
            <GoodTable goods={GOODS["goods"]} />
           </div>
         </div>
        )
  }
}

class GoodTable extends React.Component {
  render() {
    const rows = [];
    this.props.goods.forEach(function(good) {
      const row=(
      <tr>
        <td>{good._id}</td>
        <td>{good.name}</td>
        <td>{good.purchasingPrice}</td>
        <td>{good.retailPrice}</td>
        <button className={styles.deleteGood}>Удалить</button>
        <button className={styles.updateGood}>Изменить</button>
      </tr>
)
      rows.push(row)
    });
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Название товара</th>
            <th>Цена/закуп</th>
            <th>Цена</th>
            <th></th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
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
