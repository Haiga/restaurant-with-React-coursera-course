import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">
                            Something ...
                        </NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-reader">
                            <div className="col-12 col-sm-6">
                                <h1>Something ...</h1>
                                <p>
                                    Lorem ipsum fames donec bibendum odio suspendisse consectetur habitasse, netus varius convallis ornare ligula ad himenaeos cursus lorem, lobortis donec ornare eu leo congue dolor. sapien etiam inceptos mattis etiam justo imperdiet tincidunt nam torquent arcu sagittis diam
                                </p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        );
    }
}

export default Header;