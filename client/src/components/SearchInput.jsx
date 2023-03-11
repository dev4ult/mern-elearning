import { FormControl, OutlinedInput, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function SearchInput({ placeholder, onChange, value }) {
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
          >
            <SearchIcon sx={{ color: 'black' }} />
          </IconButton>
        }
      />
    </FormControl>
  );
}

export default SearchInput;
