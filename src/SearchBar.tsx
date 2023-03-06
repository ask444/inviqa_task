import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Icon from '@mui/material/Icon';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const cardStyle = {
  padding: "10px"
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [search, setSearch] = useState(false);


  const handleSearch = () => {
    if (value.length < 3) {
      setError(true);
    } else {
      setError(false);
      onSearch(value);
    }
  };
  const cleanSearch = () => setSearch(true);



  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setValue(newValue);
    setSearch(true);

    // Check if the value is valid (in this case, it must be at least 3 characters long)
    if (newValue.length < 3) {
      setError(true);
    } else {
      setError(false);
    }
  }


  return (
    <div>
      <Card variant="outlined" style={cardStyle}>
        <Stack
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}

        >
          <TextField
            label="Search Text"
            value={value}
            onChange={handleChange}
            error={error}
            helperText={error ? "input must be at least 3 characters long" : ""}
            InputProps={{
              endAdornment:
                <Icon style={{display:search?'block':'none'}} onClick={() => {
                  setValue("");setSearch(false);
                }}>clear</Icon>,
            }}
          />
          <Button variant="contained" onClick={handleSearch}>Search</Button>
        </Stack>
      </Card>
    </div>
  );
};

export default SearchBar;
