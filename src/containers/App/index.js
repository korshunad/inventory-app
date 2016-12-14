import React from 'react'
import AddGood from 'components/AddGood'
import AddCategory from 'components/AddCategory'
import GoodTable from 'components/GoodTable'
import styles from './_App.css'
import {Button} from 'antd'
import { connect } from 'react-redux'
import { getGoods, getCategories, addGood, setCategory, changeGood } from 'redux/modules/api'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={isModalOpen: false }
  };

  componentDidMount() {
    this.props.dispatch(getGoods());
    this.props.dispatch(getCategories());
    console.log(this.props.categories);
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
    console.log("hello from add good")
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
  handleCategoryClick(id) {
    console.log("clecked category id is "+id)
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
    const categories = [];
    this.props.categories.forEach(function(cat) {
      const category = (
          <div key={cat._id}>
            <Button  className={styles.deleteCategory}>X</Button>
            <div className={styles.category} 
            onClick={self.handleCategoryClick.bind(self, cat._id)} >
              {cat.name}
            </div>
          </div>)
      
      categories.push(category);
    });
    categories.push(
            <div className={styles.category} 
              onClick={this.handleCategoryClick.bind(this, "none")} >
              Без категории</div>)
    console.log(categories);
   return (
        <div>
        <div className={styles.whole}>
          <div className={styles.header}>
          <div className={styles.logo}>My-app</div>

          <div className={styles.addingButtons}>
            <AddGood cats={this.props.categories} 
              addGoodHandler={this.addGoodHandler.bind(this)} />
            <AddCategory />
          </div>
          </div>
          <div className={styles.data}>
          <div className={styles.categories}>
            {categories}
          </div>
          <div className={styles.goods}>
            <GoodTable currentCategoryId={this.props.currentCategoryId} 
            goods={this.props.goods} cats={this.props.categories}
            updGoodHandler={this.updGoodHandler.bind(this)}
            />
           </div>
          </div>
          </div>
         </div>
        )
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log(state);
  return {
    goods: state.api.goods,
    categories: state.api.categories,
    currentCategoryId: state.api.currentCategoryId
  };
};
export default connect(mapStateToProps)(App);

