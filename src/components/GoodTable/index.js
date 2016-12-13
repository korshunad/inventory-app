import React from 'react'
import styles from './_GoodTable.css'
import ChangeGood from 'components/ChangeGood'

import {Button} from 'antd'

class GoodTable extends React.Component {
  render() {
    const rows = [];
    this.props.goods.forEach(function(good) {
      const row=(
      <tr key={good._id}>
        <td>{good._id}</td>
        <td>{good.name}</td>
        <td>{good.purchasingPrice}</td>
        <td>{good.retailPrice}</td>
        <td><Button  size="large" className={styles.deleteGood}>Удалить</Button></td>
       <td key={"change "+good._id}>
          <ChangeGood 
            goodName={good.name}
            goodId={good._id}
            goodPurchased={good.purchasingPrice}
            goodRetail={good.retailPrice}
          />
      </td>
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




export default GoodTable
