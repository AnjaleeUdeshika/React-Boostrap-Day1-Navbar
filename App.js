import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import { Button } from 'react-bootstrap';
import { Container, Navbar, Nav, NavDropdown, Form,FormControl, Offcanvas } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
     
     {/*--------------------Nav-Bar1--------------------------*/}

     <h2>Responsive Behavior NavBar 1 - Dark Theme</h2>
        <Navbar className="Nav-Bar-Responsive-Behaviors" collapseOnSelect expand="lg" bg="dark" variant="dark">
        
          <Container>
            
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Navbar aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">  
              <Nav className="me-auto">
                  
                  <Nav.Link href="#features">Features</Nav.Link>
                    
                  <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                  >
                      <NavDropdown title="Link" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                          Something else here
                        </NavDropdown.Item>
                      </NavDropdown>
                </Nav>

                </Nav>

                
              </Navbar.Collapse>
              
              <Nav>
                
                <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-warning">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


  {/*----------------Nav-bar2----------------------------------------*/}

      <h2>Responsive Behavior NavBar 2 - Primary Color</h2>
        <Navbar className="Nav-Bar-Responsive-Behaviors" collapseOnSelect expand="lg" bg="primary" variant="dark">
       
          <Container>
            <Navbar.Brand href="#home">Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
          
                <Nav className="me-auto">
                
                <Nav.Link href="#features">Features</Nav.Link>
              
              </Nav>

              <Navbar aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                    <NavDropdown title="Link" id="navbarScrollingDropdown">
                      <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action5">
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              
              <Nav>
                
                <Form className="d-flex">
                    <FormControl
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

{/*-------------------------NavBar Canvas-------------------------*/}

        <h2>Navbar Offcanvas</h2>
        <Navbar className="Navbar-Canvas" bg="primary" variant="dark" expand={false}>
        <Container fluid>
          <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#action1">Features</Nav.Link>
                <Nav.Link href="#action2">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="offcanvasNavbarDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>

    </div>
  );
}

export default App;

