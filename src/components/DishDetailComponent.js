import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class DishDetail extends Component {

    //constructor(props) {
    //    super(props);
    //}

    render() {
        const dish = this.props.dish;
        const comments = this.props.comments;
        if (dish != null) {
            const comments_dishes = comments.map((comment_dish) => {
                return (
                    <div key={comment_dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>{comment_dish.author} - {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment_dish.date)))}</CardTitle>
                                <CardText>{comment_dish.comment}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            });

            return (
                <>
                    <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{this.props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{this.props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={dish.image} alt={dish.name} />
                                <CardBody>
                                    <CardTitle>{dish.name}</CardTitle>
                                    <CardText>{dish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        {comments_dishes}
                    </div>
                </>
            );
        }
        return (<div></div>);
    }

}

export default DishDetail;