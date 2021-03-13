
import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'


export default class GifListContainer extends React.Component{

  state = {
    gifs: []
  }

  fetchImages = (e, query) => {
    e.preventDefault()
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => this.getFirst3(json) )
    .catch( console.log("Api Tweaking") )
  }

  getFirst3 = (json) => {
    let first3 = json.data.slice(0, 3).map((imgObj) => imgObj.images.original.url)
    this.setState({
      gifs: first3
    })
  }

  // componentDidMount(){
  //   this.fetchImages()
  // }

  render(){
    return(
      <div>
        < GifList gifs={this.state.gifs} />
        < GifSearch fetchImages={this.fetchImages}/>
      </div>
    )
  }

}