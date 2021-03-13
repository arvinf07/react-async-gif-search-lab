import React from 'react'

export default class GifList extends React.Component{

  renderList = () => {
    if (this.props.gifs.length > 0){
      return(
        <div>
          <li> <img alt='gifys' href={this.props.gifs[0]} /> </li>
          <li> <img alt='gifys' href={this.props.gifs[1]} /> </li>
          <li> <img alt='gifys' href={this.props.gifs[2]} /> </li>
        </div>
      )
    }
  }

  render(){
    return(
      <div>
        <ul>
          {this.renderList()}
        </ul>
      </div>
    )
  }
  
}