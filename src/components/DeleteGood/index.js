import React from 'react'

import { Popconfirm, message, Button, Popcancel } from 'antd';

const DeleteGood = React.createClass( {

    agree() {
       this.props.deleteGoodHandler({
       delGoodId: this.props.goodId   })
       message.success('Товар удален');
    },

    cancel() {
      message.error('Товар остался в базе');
    },
    render() {
      return (
  <Popconfirm title={"Точно удалить товар id"+this.props.goodId+"?"} 
    onConfirm={this.agree} 
    onCancel={this.cancel} 
    okText="Да" cancelText="Нет">
    <Button size = "large">< a href="#">Удалить</a></Button>
  </Popconfirm>
        
      )
    }
})

export default DeleteGood

