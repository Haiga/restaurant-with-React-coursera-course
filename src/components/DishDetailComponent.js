import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const dish = this.props.dish;
        if (dish != null) {
            const comments_dishes = dish.comments.map((comment_dish) => {
                return (
                    <div key={comment_dish.id} className="col-12 col-md-5 m-1">
                        <Card>
                            <CardBody>
                                <CardTitle>{comment_dish.author} - {comment_dish.date}</CardTitle>
                                <CardText>{comment_dish.comment}</CardText>
                            </CardBody>
                        </Card>
                    </div>
                );
            });

            return (
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
            );
        }
        return (<div></div>);
    }

}

export default DishDetail;