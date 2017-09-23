import React, {Component} from 'react'
import ToDoItem from '../todoitem'

export default class ToDoList extends Component{
  render() {
    let {list, deleteItem, toggleItem} = this.props
    let item = list.map((item) => {
      return(
        <ToDoItem item = {item}
                  key={item.id}
                  toggleItem={toggleItem}
                  deleteItem={deleteItem}/>
      )
    })
    return (
      <div className="list-wrapper">
        <div className="list">
          {item}
        </div>
      </div>
    )
  }
}