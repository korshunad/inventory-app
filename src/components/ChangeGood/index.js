import React from 'react'
import { Input, Modal, Button, Select } from 'antd';

const Option = Select.Option;

class ChangeGood extends React.Component{
  constructor(props) {
    super(props);
    this.state = { visible: false }
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
    this.props.updGoodHandler({
      updGoodName: this.state.updGoodName, 
      updPurchasingPrice: this.state.updPurchasingPrice, 
      updRetailPrice: this.state.updRetailPrice,  
      updCatId: this.state.updCatId,
      updGoodId: this.props.goodId
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
  handleNameChange(e) {
    this.setState({updGoodName: e.target.value});
  }
  handlePurchaseChange(e) {
    this.setState({updPurchasingPrice: e.target.value});
  }
  handleRetailChange(e) {
    this.setState({updRetailPrice: e.target.value});
  }
  handleCategoryChoice(value) {
    this.setState({updCatId: value});
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.categoryId != this.props.categoryId) {
      console.log(nextProps.categoryId+"from componentwillreceiveprops")
    }
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
    let givenCat=this.props.goodCatId;
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
          width="300px"
        >
        <div>
           <Select 
              defaultValue={givenCat}
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
  }
};

export default ChangeGood
