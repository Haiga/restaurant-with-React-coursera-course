import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

function RenderCard({ item, isLoading, errMess }) {
    if (isLoading) {
        return <Loading></Loading>;
    }

    if (errMess) {
        return (<h4>{errMess}</h4>);
    }

    //
    //Carregando a imagem de um server remoto e local
    return (
        <Card>
            <CardImg src={baseUrl + item.image} alt={""} />
            <CardImg src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    return (
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m1">
                    <RenderCard item={props.dish} isLoading={props.dishesLoading} errMess={props.dishesErrMess}>
                    </RenderCard>
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.leader}>
                    </RenderCard>
                </div>
                <div className="col-12 col-md m1">
                    <RenderCard item={props.promotion} isLoading={props.promoLoading} errMess={props.promoErrMess} />
                </div>
            </div>
        </div>
    );
}

export default Home;