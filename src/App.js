import React, { Component } from 'react';
import './styles/App.css'
import { Route } from 'react-router-dom'
import Homepage from './Homepage'
import SearchPage from './SearchPage'
import * as API from './API'


class App extends Component {
  state = {
    searchResult: [],
    newPhotos: [],
    trendPhotos: [],
    query:'',
    activeTab: 'edit',
  }

  componentDidMount () {
    API.getAll()
      .then( data => this.setState({ newPhotos: data }))

    API.getCuratedPhotos()
      .then( data => this.setState({ trendPhotos: data}))
  }

  handleKeyPress = (e ) => {
    if (e.key === 'Enter') {
      this.handleSearchResult(e.target.value)
      this.setState({ query: e.target.value })
      e.target.value=''
    }
  }

  handleSearchResult = (query) => (
    API.searchPhotos(query)
      .then( data => this.setState({ searchResult: data }))
  )
  
  handleActiveTab = (tab) => (
    this.setState({ activeTab: tab })
  )

  render() {
    const { newPhotos, searchResult, query, trendPhotos, activeTab } = this.state

    return (
      <div className="App">
        <Route exact path='/' render={({ history }) => (
          <Homepage
            onActiveTab={this.handleActiveTab} 
            photos={activeTab==='edit' ? newPhotos : trendPhotos} 
            onKeyPress={(e) => {
              this.handleKeyPress(e)
              if (e.key === 'Enter') {
                history.push('/search/photos')
              } 
            }}/>
        )}/> 
        <Route path='/search/photos' render={() => (
          <SearchPage 
            photos={searchResult}
            onKeyPress={ this.handleKeyPress}
            title={query} />
        )}/>
      </div>
    )
  }
}

export default App;
