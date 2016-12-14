import React from 'react'
import { Input, Modal, Button, Select } from 'antd';

const Option = Select.Option;


const ChangeGood = React.createClass({
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
    console.log("watching upd and handle ok"+JSON.stringify(this.props))
    this.props.updGoodHandler({
      updGoodName: this.state.updGoodName, 
      updPurchasingPrice: this.state.updPurchasingPrice, 
      updRetailPrice: this.state.updRetailPrice,  
      updCatId: this.state.updCatId,
      updGoodId: this.props.goodId
    })
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
    this.setState({updGoodName: e.target.value});
  },
  handlePurchaseChange(e) {
    this.setState({updPurchasingPrice: e.target.value});
  },
  handleRetailChange(e) {
    this.setState({updRetailPrice: e.target.value});
  },
  handleCategoryChoice(value) {
    this.setState({updCatId: value});
    console.log(`selected ${value}`);
  },
  render() {
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
        <Button type="primary" size="large"onClick={this.showModal}>Изменить товар</Button>
        <Modal title="Изменить товар"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="Изменить"
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
         <Input 
            defaultValue={this.props.goodName} 
            onChange={this.handleNameChange}
            size="large"/>
          <br />
         <label>Закупочная стоимость</label>
         <Input 
            defaultValue={this.props.goodPurchased} 
            onChange={this.handlePurchaseChange}
            size="large" />
          <br />
         <label>Розничная цена</label>
         <Input 
            defaultValue={this.props.goodRetail} 
            onChange={this.handleRetailChange}
            size="large"/>
        </Modal>
      </div>
    );
  },
});

export default ChangeGood
