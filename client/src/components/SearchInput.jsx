import { FormControl, OutlinedInput, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';
import { Link as RouterLink } from 'react-router-dom';

function SearchInput({ placeholder, onChange, value, link }) {
  return (
    <FormControl size="small">
      <OutlinedInput
        id="search-course-input"
        type="text"
        sx={{ borderRadius: '100px' }}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        endAdornment={
          <IconButton
            size="small"
            sx={{
              ':hover': {
                backgroundColor: 'unset',
              },
            }}
            href={link}
          >
            <SearchIcon sx={{ color: 'black' }} />
          </IconButton>
        }
      />
    </FormControl>
  );
}

export default SearchInput;
