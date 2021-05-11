import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes'
import { Component } from 'react';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <Menu dishes={this.state.dishes} />
        <Footer/>
      </div>
    );
  }

}

export default App;
