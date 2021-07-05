import { Button} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';

export default function Navigation() {
    return (
        <div>
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link as={Link} to="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/gallery">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                </Nav.Item>
            </Nav>

            {/* <Button variant="secondary" size="lg">Large button</Button> */}
        </div>
    )
}