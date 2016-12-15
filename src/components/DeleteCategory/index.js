import React from 'react'
import { Modal, Button } from 'antd';

class DeleteCategory extends React.Component{
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.props.deleteCatHandler()
    this.setState({
      visible: false,
    });
  }
  handleCancel(e) {
    this.setState({
      visible: false,
    });
  }
  render() {
    return (
      <div style={{width: 100, display: "inline"}}>
        <Button type="ghost" 
          style={{margin:5}} 
          onClick={this.showModal}>X</Button>
        <Modal title="Хотите удалить категорию?" 
          visible={this.state.visible}
          onOk={this.handleOk} 
          onCancel={this.handleCancel} 
          okText="Да" cancelText="Нет"
        >
          <p>Все товары в этой категории будут помечены "Без категории"</p>
        </Modal>
      </div>
    );
  }
};

export default DeleteCategory
