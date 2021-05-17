import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import DishDetail from './DishDetailComponent';
import { Link } from 'react-router-dom';
import { Loading } from './LoadingComponent';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const menu = this.props.dishes.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card>
            <Link to={`/menu/${dish.id}`}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });

    if (this.props.dishes.isLoading) {
      return (
        <div className="container">
          <div className="row">
            <Loading></Loading>
          </div>
        </div>
      );
    }
    if (this.props.dishes.errMess) {
      return (
        <div className="container">
          <div className="row">
            <h4>{this.props.dishes.errMess}</h4>
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          {menu}
        </div>

      </div>
    );
  }
}
//{this.renderDish(this.state.selectedDish)}
export default Menu;