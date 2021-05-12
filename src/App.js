import Home from './components/HomeComponent'
import Contact from './components/ContactComponent'
import Menu from './components/MenuComponent';
import './App.css';
import { DISHES } from './shared/dishes';
import { COMMENTS } from './shared/comments';
import { PROMOTIONS } from './shared/promotions';
import { LEADERS } from './shared/leaders';
import { Component } from 'react';
import Header from './components/HeaderComponent'
import Footer from './components/FooterComponent'
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS
    };
  }

  render() {
    const HomePage = () => {
      return (<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
      promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
      leader={this.state.leaders.filter((leader) => leader.featured)[0]}
      />);
    }
    return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }

}

export default App;
