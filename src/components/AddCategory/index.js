import React from 'react'
import { Modal, Button, Input } from 'antd';

class AddCategory extends React.Component{
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
    this.handleCatNameChange=this.handleCatNameChange.bind(this);
  }

  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.props.addCatHandler({
      newCatName: this.state.newCatName
    })
    this.setState({
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 500);
  }
  handleCancel() {
    this.setState({
      visible: false,
    });
  }
  handleCatNameChange(e) {
    this.setState({newCatName: e.target.value})
  }
  render() {
    return (
      <div style={{width:60, display: "inline", padding: 10}}>
        <Button type="primary" size="large"onClick={this.showModal}>Добавить категорию</Button>
        <Modal title="Добавить категорию"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="Добавить"
          cancelText="Отмена"
          width="300px"
        >
        <label>Название</label> 
        <Input onChange={this.handleCatNameChange} size="large"/>
        </Modal>
      </div>
    );
  }
};

export default AddCategory
