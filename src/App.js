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
    dailyPhoto: {},
  }

  componentDidMount () {
    const newPhotos = JSON.parse(localStorage.getItem('newPhotos'))
    const trendPhotos = JSON.parse(localStorage.getItem('trendPhotos'))
    const dailyPhoto = JSON.parse(localStorage.getItem('dailyPhoto'))
    const dataTime = localStorage.getItem('dataTime')
    const currentTime = Date.now()
    const dataAge = (currentTime - dataTime) / (1000 * 60)  
    
    if (!newPhotos || !trendPhotos || !dailyPhoto) {  
        this.getStateData()
    } else { 
      if ( dataAge > 60) {
        this.getStateData()  
      } else {
        this.setState({newPhotos, trendPhotos, dailyPhoto })
      }   
    }
  }

  getStateData = () => {
    API.getAll()
    .then( newPhotos => {
      if (!newPhotos.errors) {
        localStorage.setItem('newPhotos', JSON.stringify(newPhotos))
        this.setState({ newPhotos })
      }    
    })

    API.getCuratedPhotos()
      .then( trendPhotos => {
        if (!trendPhotos.errors) {
          localStorage.setItem('trendPhotos', JSON.stringify(trendPhotos))
          this.setState({ trendPhotos })
        }    
    }) 
    
    API.getARandomPhoto()
      .then(dailyPhoto => {
        if (!dailyPhoto.errors) {
          localStorage.setItem('dailyPhoto', JSON.stringify(dailyPhoto))
          this.setState({ dailyPhoto })
        }  
    })
    
    localStorage.setItem('dataTime', Date.now() )
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
    const { newPhotos, searchResult, query, trendPhotos, activeTab, dailyPhoto } = this.state

    return (
      <div className="App">
        <Route exact path='/' render={({ history }) => (
          <Homepage
            onActiveTab={this.handleActiveTab} 
            dailyPhoto={dailyPhoto}
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
