import React, { useState } from "react";
import {
  Popover,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Button,
} from "@mui/material";


function SearchWithFilterInput() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [filters, setFilters] = useState({
    option1: false,
    option2: false,
    option3: false,
  });

  const handleFilterClose = () => {
    setAnchorEl(null);
  };

  const handleFilterChange = (event) => {
    setFilters({
      ...filters,
      [event.target.name]: event.target.checked,
    });
  };

  const isFilterOpen = Boolean(anchorEl);

  return (

      <Popover
        open={isFilterOpen}
        anchorEl={anchorEl}
        onClose={handleFilterClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="p-4">
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.option1}
                  onChange={handleFilterChange}
                  name="option1"
                />
              }
              label="Filter Option 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.option2}
                  onChange={handleFilterChange}
                  name="option2"
                />
              }
              label="Filter Option 2"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.option3}
                  onChange={handleFilterChange}
                  name="option3"
                />
              }
              label="Filter Option 3"
            />
          </FormGroup>
          <Button
            variant="contained"
            color="primary"
            onClick={handleFilterClose}
            className="mt-2"
          >
            Apply Filters
          </Button>
        </div>
      </Popover>
  );
}

export default SearchWithFilterInput;
