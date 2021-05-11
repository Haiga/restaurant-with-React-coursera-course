import Home from './components/HomeComponent'
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes'
import { Component } from 'react';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }

  render() {
    const HomePage = () => {
      return (<Home />);
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
