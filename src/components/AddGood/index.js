import React from 'react'
import { Input, Modal, Button, Select } from 'antd';
const Option = Select.Option;

class AddGood extends React.Component{
  constructor(props) {
    super(props);
    this.state = { visible: false };
    this.showModal=this.showModal.bind(this);
    this.handleOk=this.handleOk.bind(this);
    this.handleCancel=this.handleCancel.bind(this);
    this.handleNameChange=this.handleNameChange.bind(this);
    this.handlePurchaseChange=this.handlePurchaseChange.bind(this);
    this.handleRetailChange=this.handleRetailChange.bind(this);
    this.handleCategoryChoice=this.handleCategoryChoice.bind(this);
  }
  showModal() {
    this.setState({
      visible: true,
    });
  }
  handleOk() {
    this.props.addGoodHandler({
      newGoodName: this.state.newGoodName,
      newPurchased: this.state.newPurchased,
      newRetail: this.state.newRetail,
      newCatId: this.state.newCatId
    });
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
  handleNameChange(e) {
    this.setState({newGoodName: e.target.value});
  }
  handlePurchaseChange(e) {
    this.setState({newPurchased: e.target.value});
  }
  handleRetailChange(e) {
    this.setState({newRetail: e.target.value});
  }
  handleCategoryChoice(value) {
    this.setState({newCatId: value});
  }
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
        <Button type="primary" size="large"onClick={this.showModal}>Добавить товар</Button>
        <Modal title="Добавить товар"
          visible={this.state.visible}
          onOk={this.handleOk}
          confirmLoading={this.state.confirmLoading}
          onCancel={this.handleCancel}
          okText="Добавить"
          cancelText="Отмена"
          width="300px"
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
  }
};

export default AddGood
