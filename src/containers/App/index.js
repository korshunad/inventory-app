import React from 'react'
import styles from './_App.css'
import { Modal, Button, Form, Row, Col, Input, Icon } from 'antd';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={};
  }
  render() {
    return (
        <div>
          <ModalComp />
          <div className={styles.logo}>My-app</div>

          <div className={styles.addingButtons}>
            <Button type="primary">Добавить товар</Button>
            <Button type="primary">Добавить категорию</Button>
          </div>
          <div className={styles.categories}>
            <div className={styles.category}>Категория 1</div>
            <Button className={styles.deteteCategory}> X </Button>
          </div>
          <div className={styles.goods}>
            <GoodTable goods={GOODS["goods"]} />
           </div>
         </div>
        )
  }
}


const ModalComp = React.createClass({
  getInitialState() {
    return { visible: false };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    console.log('Clicked OK');
    this.setState({
      visible: false,
    });
  },
  handleCancel(e) {
    console.log(e);
    this.setState({
      visible: false,
    });
  },
  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>Open a modal dialog</Button>
        <Modal title="Basic Modal" visible={this.state.visible}
          onOk={this.handleOk} onCancel={this.handleCancel} okText="OK" cancelText="whatevr"
        >
<Input />
<p>helloworlishee</p>
          <p>some contents...</p>
         <Button type="primary">hello</Button>
        </Modal>
      </div>
    );
  },
});



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
        <Button className={styles.deleteGood}>Удалить</Button>
        <Button type="ghost" className={styles.updateGood}>Изменить</Button>
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
