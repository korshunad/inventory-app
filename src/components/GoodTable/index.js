import React from 'react'
import styles from './_GoodTable.css'
import ChangeGood from 'components/ChangeGood'
import DeleteGood from 'components/DeleteGood'
import {Button} from 'antd'

class GoodTable extends React.Component {
  render() {
    self=this;
    const rows = [];
    this.props.goods.filter(function(el) {
      if (self.props.currentCategoryId) {
        if (self.props.currentCategoryId === el.categoryId) {
          return true
        } else if (!el.hasOwnProperty('categoryId') || el.categoryId === null) {
          return true;
        } else {
          return false
        }
      } else { 
        return true
      }
    }).forEach(function(good) {
      const row=(
      <tr key={good._id}>
        <td>{good._id}</td>
        <td>{good.name}</td>
        <td>{good.purchasingPrice}</td>
        <td>{good.retailPrice}</td>
       <td><DeleteGood 
              goodId={good._id}
              deleteGoodHandler={self.props.deleteGoodHandler}
            /></td>
        <td key={"change "+good._id}>
          <ChangeGood 
            goodName={good.name}
            goodId={good._id}
            goodCatId={good.categoryId}
            goodPurchased={good.purchasingPrice}
            goodRetail={good.retailPrice}
            cats={self.props.cats}
            updGoodHandler={self.props.updGoodHandler}
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
