import React from 'react'
import { Input, Modal, Button, Select } from 'antd';
const Option = Select.Option;

const AddGood = React.createClass({
  getInitialState() {
    return {
      ModalText: 'Content of the modal dialog',
      visible: false
    };
  },
  showModal() {
    this.setState({
      visible: true,
    });
  },
  handleOk() {
    this.props.addGoodHandler({
      newGoodName: this.state.newGoodName,
      newPurchased: this.state.newPurchased,
      newRetail: this.state.newRetail,
      newCatId: this.state.newCatId
    });
    console.log('this is goodName '+JSON.stringify(this.state.newGoodName))
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
  handleNameChange(e) {
    this.setState({newGoodName: e.target.value});
  },
  handlePurchaseChange(e) {
    this.setState({newPurchased: e.target.value});
  },
  handleRetailChange(e) {
    this.setState({newRetail: e.target.value});
  },
  handleCategoryChoice(value) {
    this.setState({newCatId: value});
    console.log(`selected ${value}`);
  },
  render() {
    console.log('cats'+JSON.stringify(this.props.cats))
    const options = [];
    this.props.cats.forEach(function(category) {
      const option = (
        <Option key={category._id}>
          {category.name}
        </Option>)
    options.push(option);
    });
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
           <Select defaultValue="Категория"  
             style={{ width: 270 }}
             size="large" 
             onChange={this.handleCategoryChoice}
           >
              {options}
           </Select>
        </div>
        <br />
         <label>Название</label>
         <Input onChange={this.handleNameChange} size="large"/>
          <br />
         <label>Закупочная стоимость</label>
         <Input onChange={this.handlePurchaseChange} size="large" />
          <br />
         <label>Розничная цена</label>
         <Input onChange={this.handleRetailChange} size="large"/>
        </Modal>
      </div>
    );
  },
});

export default AddGood
