import logo from "./logo.svg";
import "./App.css";
import {
  Carousel,
  Dropdown,
  DropdownButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import React from "react";
import Navigation from "../src/Components/DollarInput";

function App() {
  return (
    <div className="App">
      <div className="page-grid-row">
        <div></div>
        <div className="page-grid-column">
          <div>Expense Tracker</div>
          <div>Add an Expense</div>
          <div className="expense-options">
            <div>
              <DropdownButton id="dropdown-item-button" title="Purchased with:">
                {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
                <Dropdown.Item as="button">Cash</Dropdown.Item>
                <Dropdown.Item as="button">Card</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton id="dropdown-item-button" title="Item">
                {/* <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText> */}
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton id="dropdown-item-button" title="Date Purchased">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
            </div>
            <div>
              <DropdownButton id="dropdown-item-button" title="Amount">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
              </DropdownButton>
              <Button>Add</Button>
              <Carousel>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                  />
                  <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>
                      Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Second slide&bg=282c34"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=Third slide&bg=20232a"
                    alt="Third slide"
                  />

                  <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                      Praesent commodo cursus magna, vel scelerisque nisl
                      consectetur.
                    </p>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      {/* <Navigation></Navigation> */}
    </div>
  );
}

export default App;
