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
    time: ''
  }

  componentDidMount () {
    const localState = JSON.parse(localStorage.getItem('localState'))
    if (!localState) {
      this.getStateData()
    } else {
      const oldTime = localState.time
      const currentTime = Date.now()
      const dataAge = Math.round((currentTime - oldTime)/ (1000* 60))
      if (dataAge >= 1) {
        this.getStateData()
      } else {
        this.setState({
          ...this.state,
          ...localState
        })
      }
      console.log('using local data', localState)
      console.log('dataAge', dataAge)
    }
  }

/*   
    const oldTime = localState.time
    const currentTime = Date.now()
    const dataAge = Math.round((currentTime - oldTime)/ (1000* 60))
*/
  getSnapshotBeforeUpdate = () => {
    localStorage.setItem('localState', JSON.stringify(this.state))
    return JSON.parse(localStorage.getItem('localState'))
  }
  
  componentDidUpdate = ( props, state, snapshot) => {
    console.log('snapshot', snapshot)
  }
  
  // updateDailyPhoto = () => {
  //   const localPhoto = JSON.parse(localStorage.getItem('dailyPhoto'))

  //   if (!localPhoto) {
  //     API.getARandomPhoto()
  //     .then(dailyPhoto => {
  //       localStorage.setItem('dailyPhoto', JSON.stringify(dailyPhoto))
  //       this.setState({ dailyPhoto, time: Date.now() })
  //     })
  //   } else {
  //     this.setState({ dailyPhoto: localPhoto})
  //     console.log('using local data', localPhoto)
  //   } 
  // }

  getStateData = () => {
    API.getAll()
    .then( newPhotos => this.setState({ newPhotos }))

    API.getCuratedPhotos()
      .then( trendPhotos => this.setState({ trendPhotos }))
    
    API.getARandomPhoto()
      .then(dailyPhoto => this.setState({ dailyPhoto }))   

    this.setState({ time: Date.now()})
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
    console.log('state', this.state)
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
