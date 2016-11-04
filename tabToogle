import React from 'react'
import { render } from 'react-dom'
import service from '../../common/service'
import utils from '../../common/utils'
import styles from '../css/tabToogle.css'


export default  React.createClass({
    getInitialState(){
        return{
            currentIndex :0,
        }
    },
    check_tittle_index(index){
        return index === this.state.currentIndex ? styles.tit_active : styles.tab_tittle;
    },
    check_item_index(index){
        return index === this.state.currentIndex ? styles.tab_item + styles.show : styles.tab_item;
    },
    render(){
        let _this=this;
        return(
            <div>
                {/*动态生成Tab导航*/}
                <div className={styles.Tab_tittle_wrap}>
                    { React.Children.map( this.props.children , (element,index) => {
                        let width = {width: (100/this.props.children.length) + '%'};
                        return(
                            /*箭头函数没有自己的this，这里的this继承自外围作用域，即组件本身*/
                            <div onClick={ () => { this.setState({currentIndex : index});} }
                                 style={width}
                                 className={ this.check_tittle_index(index) }>{ element.props.name }</div>
                        );
                    }) }
                </div>
                {/*Tab内容区域*/}
                <div className={styles.Tab_item_wrap}>
                    {React.Children.map(this.props.children,(element,index)=>{
                        return(
                            <div className={ this.check_item_index(index) }>{ element }</div>
                        );
                    })}
                </div>
            </div>
        );
    }
});
