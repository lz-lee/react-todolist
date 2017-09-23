import React, {Component} from 'react'
import './item.css'
export default class ToDoItem extends Component{

  toggleItem = () => {
    let {item, toggleItem} = this.props
    toggleItem(item)
  }

  deleteItem = (e) => {
    let {item, deleteItem} = this.props
    
    deleteItem(item)
  }

  render() {
    let {item} = this.props
    return (
      <div className="item-wrapper">
        <div className="item-inner">
          <span className="item">
            <input className="check-todo"
                   onClick={this.toggleItem}
                   type="checkbox"/>
            <label className="text">{item.text}</label>
          </span>
        </div>
        <div className="delete" onClick={this.deleteItem}>
          x
        </div>
      </div>
    )
  }
}