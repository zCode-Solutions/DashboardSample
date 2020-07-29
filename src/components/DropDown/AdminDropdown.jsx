import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';

function AdminDropdown() {
  return (
    <DropdownButton title={'Profile'}>
      <MenuItem eventKey="1">
        <a href="#">Link 1</a>
      </MenuItem>
      <MenuItem eventKey="2">
        <a href="#">Link 2</a>
      </MenuItem>
      <MenuItem eventKey="3">
        <a href="#">Link 3</a>
      </MenuItem>
      {/* <MenuItem eventKey="3" active>
          Active Item
        </MenuItem> */}
    </DropdownButton>
  );
}

export default AdminDropdown;
