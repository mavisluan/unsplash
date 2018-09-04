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
      if (dataAge > 60) {
        this.getStateData()  
      } else {
        this.setState({newPhotos, trendPhotos, dailyPhoto })
        console.log('using local data')
      }   
    }
    console.log('dataAge', dataAge)
    console.log(newPhotos)
    console.log(trendPhotos)
  }

/*   
    const oldTime = localState.time
    const currentTime = Date.now()
    const dataAge = Math.round((currentTime - oldTime)/ (1000* 60))
*/
  // getSnapshotBeforeUpdate = () => {
  //   localStorage.setItem('localState', JSON.stringify(this.state))
  //   return JSON.parse(localStorage.getItem('localState'))
  // }
  
  // componentDidUpdate = ( props, state, snapshot) => {
  //   console.log('localState', snapshot)
  // }

  getStateData = () => {
    API.getAll()
    .then( newPhotos => {
      localStorage.setItem('newPhotos', JSON.stringify(newPhotos))
      this.setState({ newPhotos })
    })

    API.getCuratedPhotos()
      .then( trendPhotos => {
        localStorage.setItem('trendPhotos', JSON.stringify(trendPhotos))
        this.setState({ trendPhotos })
      })
    
    API.getARandomPhoto()
      .then(dailyPhoto => {
        localStorage.setItem('dailyPhoto', JSON.stringify(dailyPhoto))
        this.setState({ dailyPhoto })
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
