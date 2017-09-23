import React, {Component} from 'react'
import './box.css'
import Todoform from '../todoform'
import ToDoList from '../todolist'
import Footer from '../footer'
export default class ToDoBox extends Component{
  constructor(props) {
    super(props)
    this.state = {
      list: []
    }
  }
  addItem = (text) => {
    this.setState({
      list: [...this.state.list, {
        id: Date.now(),
        text: text,
        status: false
      }]
    })
  }
  deleteItem = (item) => {
    let index = this.state.list.findIndex(s => s.id === item.id)
    let list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }

  toggleItem = (item) => {
    console.log(this.state.list)
    let list = this.state.list.slice()
    list.find(s => s.id ===item.id).status = !item.status
    this.setState({
      list: list
    })
  }
  componentWillMount() {
    
  }
  getnerateId = () => {
    return Math.floor(Math.random * 100) + 1
  }
  render() {
    let {list} = this.state

    let total = list.length
    let done = list.filter(item => item.status).length

    return (
      <div className="todo-wrapper">
        <div className="title">react to do list</div>
        <Todoform addItem={this.addItem}/>
        <ToDoList list={list} deleteItem={this.deleteItem} toggleItem={this.toggleItem}/>
        <Footer done={done} total={total}/>
      </div>
    )
  }
}