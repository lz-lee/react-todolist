import React, {Component} from 'react'

export default class Todoform extends Component{
  addItem = (e) => {
    
    let {addItem} = this.props
    if (e.target.value) {
      if (e.keyCode === 13) {
        addItem(e.target.value)
        e.target.value = ''
      }
    }
  }
  render() {
    return (
      <div className="form-wrapper">
        <input type="text" className="form-input" placeholder="to do something" onKeyUp={this.addItem}/>
      </div>
    )
  }
}