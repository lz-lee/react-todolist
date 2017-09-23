import React, {Component} from 'react'

export default class Footer extends Component{
  render() {
    let {done, total} = this.props
    return (
      <div className="footer">
        {done} 已完成 ／ 共 {total} 个
      </div>
    )
  }
}