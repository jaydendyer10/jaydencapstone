import logo from './logo.svg';
import './App.css'; 
import { Dropdown, DropdownButton, ButtonGroup, Button } from 'react-bootstrap'
import React from 'react';
import Navigation from '../src/Components/DollarInput';



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
      <Button>
        Add
      </Button>
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
