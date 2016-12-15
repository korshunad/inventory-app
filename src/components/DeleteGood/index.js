import React from 'react'

import { Popconfirm, message, Button, Popcancel } from 'antd';

class DeleteGood extends React.Component {
    constructor(props) {
      super(props);
      this.agree=this.agree.bind(this);
      this.cancel=this.cancel.bind(this);
    }
    agree() {
       this.props.deleteGoodHandler({
       delGoodId: this.props.goodId   })
       message.success('Товар удален');
    }


    cancel() {
      message.error('Товар остался в базе');
    }
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
}

export default DeleteGood

