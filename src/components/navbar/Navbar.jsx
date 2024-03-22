import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../navbar/Navbar.css";
import { Carousel } from "react-responsive-carousel";

const Navbar1 = () => {
  const [data, setData] = useState("");
  const [results, setResults] = useState([]);

  const fetchData = (value) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${data}&api_key=614f55bfb49c082ed51d3c44d09c0258`
    )
      .then((res) => res.json())
      .then((result) => {
        const filteredResults = result.results.filter((movie) =>
          movie.title.toLowerCase().includes(value)
        );
        setResults(filteredResults);
      })
      .catch((error) => console.error("Error fetching data:", error));
  };

  const handleChange = (value) => {
    setData(value);
    fetchData(value);
  };

  return (
    <div className="navbar">
      <Navbar expand="lg" className="Nav bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              src="./assets/movieLogo.jpeg"
              style={{
                height: "90px",
                width: "90px",
                border: "none",
                borderRadius: "50%",
                backgroundImage: "none",
              }}
              alt=""
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/movies">Movies</Nav.Link>
              <NavDropdown title="Pages" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">Contact</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">About</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#" disabled>
                Login
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                value={data}
                onChange={(e) => handleChange(e.target.value)}
              />
              <Carousel>
              <div className="result-list">
                {results.map((movie) => (
                  <div key={movie.id}>{movie.title}</div>
                ))}
              </div>
              </Carousel>
              <Button variant="outline-success" onClick={fetchData}>Search</Button>
            </Form>
            <div className="user">
              <i className="fa fa-user"></i>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbar1;
