import React from "react";
import logo from "./logo.svg";
import "./style/style.scss";

import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

function App() {
  return (
    <div className="container-fluid">
      <div className="row ">
        <Navbar fixed="top" bg="light" expand="lg">
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        {/*  <Navbar
          style={{ marginTop: "56px" }}
          fixed="top"
          bg="light"
          expand="xl"
        >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar> */}
        {/*   <nav
          style={{ marginTop: "59px" }}
          className="navbar navbar-expand navbar-light bg-light fixed-top  d-block d-lg-none  col-12"
        >
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="#">
                Category1 <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category2
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category3
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Category4
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category5
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category6
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="#">
                Category7
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Category8
              </a>
            </li>
          </ul>
        </nav> */}
        <div className="col-2 d-none d-lg-block bg-light">
          <nav
            style={{ top: "70px" }}
            className="navbar-light bg-light sticky-top "
          >
            <ul className="navbar-nav px-3 col">
              <li className="nav-item active">
                <a className="nav-link" href="#">
                  Category1 <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category2
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category3
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Category4
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category5
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category6
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  Category7
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Category8
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-lg-10 col-12">
          <div className="col mt-5 pt-5">
            <div className=" input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">
                  @
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </div>

            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Recipient's username"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <span className="input-group-text" id="basic-addon2">
                  @example.com
                </span>
              </div>
            </div>

            <label for="basic-url">Your vanity URL</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">
                  https://example.com/users/
                </span>
              </div>
              <input
                type="text"
                className="form-control"
                id="basic-url"
                aria-describedby="basic-addon3"
              />
            </div>

            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">$</span>
              </div>
              <input
                type="text"
                className="form-control"
                aria-label="Amount (to the nearest dollar)"
              />
              <div className="input-group-append">
                <span className="input-group-text">.00</span>
              </div>
            </div>

            <div className="input-group">
              <div className="input-group-prepend">
                <span className="input-group-text">With textarea</span>
              </div>
              <textarea
                className="form-control"
                aria-label="With textarea"
              ></textarea>
            </div>
          </div>
          <form className="col">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputEmail4">Email</label>

                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>

              <div className="form-group col-md-6">
                <label for="inputPassword4">Password</label>

                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="form-group">
              <label for="inputAddress">Address</label>

              <input
                type="text"
                className="form-control"
                id="inputAddress"
                placeholder="1234 Main St"
              />
            </div>

            <div className="form-group">
              <label for="inputAddress2">Address 2</label>
              <input
                type="text"
                className="form-control"
                id="inputAddress2"
                placeholder="Apartment, studio, or floor"
              />
            </div>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label for="inputCity">City</label>
                <input type="text" className="form-control" id="inputCity" />
              </div>
              <div className="form-group col-md-4">
                <label for="inputState">State</label>
                <select id="inputState" className="form-control">
                  <option selected>Choose...</option>
                  <option>...</option>
                </select>
              </div>
              <div className="form-group col-md-2">
                <label for="inputZip">Zip</label>
                <input type="text" className="form-control" id="inputZip" />
              </div>
            </div>
            <div className="form-group">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" for="gridCheck">
                  Check me out
                </label>
              </div>
            </div>

            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </form>
          <div className="card-deck col mt-5">
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
            <div className="card">
              <img className="card-img-top" src={logo} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div className="card-footer">
                <small className="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
