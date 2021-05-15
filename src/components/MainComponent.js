import Home from './HomeComponent'
import Contact from './ContactComponent';
import Menu from './MenuComponent';
import { Component } from 'react';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import { Switch, Route, Redirect, BrowserRouter, withRouter } from 'react-router-dom';
import DishDetail from './DishDetailComponent';
import About from './AboutComponent';
import { connect } from 'react-redux';
import { ConfigureStore } from '../redux/configureStore';


const store = ConfigureStore();

const mapStateToProps = state => {
    return {
        dishes: state.dishes,
        comments: state.comments,
        leaders: state.leaders,
        promotions: state.promotions,
    }
}


class Main extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const HomePage = () => {
            return (<Home dish={this.props.dishes.filter((dish) => dish.featured)[0]}
                promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
                leader={this.props.leaders.filter((leader) => leader.featured)[0]}
            />);
        }

        const DishWithId = ({ match }) => {
            return (
                <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                    comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                >
                </DishDetail>
            );
        }
        return (
            <>
                <Header />
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
                    <Route path="/menu/:dishId" component={DishWithId} />
                    <Route exact path="/contactus" component={Contact} />
                    <Route exact path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
                    <Redirect to="/home" />
                </Switch>
                <Footer />
            </>
        );
    }

}

export default withRouter(connect(mapStateToProps)(Main));