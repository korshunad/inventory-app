import React from 'react'
import AddGood from 'components/AddGood'
import AddCategory from 'components/AddCategory'
import GoodTable from 'components/GoodTable'
import DeleteCategory from 'components/DeleteCategory'
import styles from './_App.css'
import { Row, Col } from 'antd';
import {Button} from 'antd'
import { connect } from 'react-redux'
import { getGoods, getCategories, addGood, addCategory, setCategory, changeGood, deleteGood, deleteCategory} from 'redux/modules/api'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={isModalOpen: false }
  };

  componentDidMount() {
    this.props.dispatch(getGoods());
    this.props.dispatch(getCategories());
  }

  componentWillReceiveProps(nextProps) {
    this.forceUpdate();
  }

  addGoodHandler(params) {
    this.props.dispatch(addGood({
      newGoodName: params.newGoodName, 
      newPurchased: params.newPurchased, 
      newRetail: params.newRetail,
      newCatId: params.newCatId
    }))
  }

  addCatHandler(params) {
    this.props.dispatch(addCategory({
      newCatName: params.newCatName
    }))
  }

  updGoodHandler(params) {
    this.props.dispatch(changeGood({
      updGoodName: params.updGoodName,
      updPurchasingPrice: params.updPurchasingPrice,
      updRetailPrice: params.updRetailPrice,
      updCatId: params.updCatId,
      updGoodId: params.updGoodId
    }))
  }
  
  deleteGoodHandler(params) {
    this.props.dispatch(deleteGood({
      delGoodId: params.delGoodId
    }))
  }

  deleteCatHandler(params) {
   const self = this
   this.props.dispatch(deleteCategory({
      delCatId: params
    }))
    setTimeout(function() {
      self.props.dispatch(getGoods())
    }, 1000)
  }

  handleCategoryClick(id) {
    if (id === this.props.currentCategoryId) {
      this.props.dispatch(setCategory({
        categoryId: null
      }))
    } else {
      this.props.dispatch(setCategory({
        categoryId: id
      }))
    }
  }
  
  render() {
    const self=this
    const truncate = function(string) {
      if (string.length > 15)
        return string.substring(0,15)+'...';
      else
        return string;
    }
    const categories = [];
    this.props.categories.forEach(function(cat) {
      const category = (
          <div styles={{margin:60}} key={cat._id}>
            <DeleteCategory className={styles.deleteCategory} 
              cats={self.props.categories}
              deleteCatHandler={self.deleteCatHandler.bind(self, cat._id)} />
            <div className={styles.category} 
            onClick={self.handleCategoryClick.bind(self, cat._id)} >
              {truncate(cat.name)}
            </div>
          </div>)
      
      categories.push(category);
    });

    categories.push(
            <div className={styles.category} 
              onClick={this.handleCategoryClick.bind(this, "none")} >
              Без категории</div>)
   return (
        <div>
         <div className={styles.app}>
          <Row type="flex" justify="right" align="top" >
            <Col span={5}>
              <div className={styles.logo}>My-app</div>
            </Col>
            <Col span={8}>
              <AddGood cats={this.props.categories} 
                 addGoodHandler={this.addGoodHandler.bind(this)} />
              <AddCategory cats={this.props.categories} 
                 addCatHandler={this.addCatHandler.bind(this)}/>
            </Col>
          </Row>
          <div className={styles.data}> 
            <Row type="flex" justify="right" align="top"> 
              <Col span={5}>
                <div className={styles.categories}>
                  {categories}
                </div>
              </Col>
              <Col span={12}>
                <GoodTable 
                  currentCategoryId={this.props.currentCategoryId} 
                  goods={this.props.goods} cats={this.props.categories}
                  updGoodHandler={this.updGoodHandler.bind(this)}
                  deleteGoodHandler={this.deleteGoodHandler.bind(this)} />
              </Col>
            </Row>
           </div>
          </div>
         </div>
        )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    goods: state.api.goods,
    categories: state.api.categories,
    currentCategoryId: state.api.currentCategoryId
  };
};
export default connect(mapStateToProps)(App);

