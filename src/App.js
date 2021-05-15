import './App.css';
import { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import Main from './components/MainComponent'

const store = ConfigureStore();

class App extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main></Main>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }

}

export default App;
