
import React from 'react';
import '../../index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {IconButton} from "@mui/material";
import {TextField,InputAdornment,Popover,FormGroup,FormControlLabel,Checkbox,Button} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterListIcon from "@mui/icons-material/FilterList";
import { useState } from 'react';
import SearchWithFilterInput from '../SearchFilter';

const Header  = ({ change, filters, setFilters }) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleFilterClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
        const handleFilterClose = () => {
          setAnchorEl(null);
        };
      
        const handleFilterChange = (event) => { 
            const { name, checked } = event.target;
            setFilters((prev) => ({ ...prev, [name]: checked }));
        };
      
        const isFilterOpen = Boolean(anchorEl);
      
      

        return (
            <div className="header container-fluid bg-light">
                <div className="row py-3 flex items-center mb-3 shadow">
                    <div className="col-6 flex">
                        <div className="input-group rounded-full">
                            <TextField
                                type="text"
                                variant="outlined"
                                className="p-1 pl-3 form-control rounded-full"
                                placeholder="Search"
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>),
                                    endAdornment:(
                                        <InputAdornment>
                                            <IconButton onClick={handleFilterClick}><FilterListIcon /></IconButton>
                                      </InputAdornment>
                                    )}}
                                    onChange={change}/>

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
              label="Author"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={filters.option2}
                  onChange={handleFilterChange}
                  name="option2"
                />
              }
              label="Source"
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
      
      <span className="input-group-text border-0 bg-transparent rounded-full"></span>
                        </div>
                    </div>
                    <div className="col-6 flex justify-end items-center gap-3">
                        <div className="rounded-full overflow-hidden">
                            <img
                                src="https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-859.jpg?w=740&t=st=1694269159~exp=1694269759~hmac=c8c65095b670091331a550b674305943e6a42c710a45b7356ecfe851d77b916b"
                                alt="Profile"
                                className="w-[30px] h-[30px] object-cover"
                            />
                        </div>
                        <div className="ml-2 bell-icon">
                        <FontAwesomeIcon icon={faBell} />
                        </div>
                    </div>
                </div>
            </div>
        );
    };
export default Header;
