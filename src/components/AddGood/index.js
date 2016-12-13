import React from 'react'
import { Input, Modal, Button } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3d menu item</Menu.Item>
  </Menu>
);

const AddGood = React.createClass({
  getInitialState() {
    return {
      ModalText: 'Content of the modal dialog',
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
        <Button type="primary" size="large"onClick={this.showModal}>Добавить товар</Button>
        <Modal title="Добавить товар"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="Добавить"
          cancelText="Отмена"
          width="300"
        >
        <div>
          <Dropdown overlay={menu} trigger={['click']} type="ghost">
            <a className="ant-dropdown-link" href="#">
              Категория <Icon type="down" />
            </a>
          </Dropdown>
        </div>
        <br />
         <label>Название</label><Input size="large"/>
          <br />
         <label>Закупочная стоимость</label><Input size="large" />
          <br />
         <label>Розничная цена</label><Input size="large"/>
        </Modal>
      </div>
    );
  },
});

export default AddGood
