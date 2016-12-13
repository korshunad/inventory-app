import React from 'react'
import { Modal, Button, Input } from 'antd';

const AddCategory = React.createClass({
  getInitialState() {
    return {
      visible: false,
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.setState({
      ModalText: 'The modal dialog will be closed after two seconds',
      confirmLoading: true,
    });
    setTimeout(() => {
      this.setState({
        visible: false,
        confirmLoading: false,
      });
    }, 2000);
  },
  handleCancel() {
    console.log('Clicked cancel button');
    this.setState({
      visible: false,
    });
  },
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
          width="300"
        >
        <label>Название</label> <Input size="large"/>
        </Modal>
      </div>
    );
  },
});

export default AddCategory
