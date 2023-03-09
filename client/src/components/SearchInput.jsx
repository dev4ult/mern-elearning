import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { Search as SearchIcon } from '@mui/icons-material';

function SearchInput({ label, placeholder }) {
  return (
    <FormControl size="small">
      <InputLabel htmlFor="search-course-input">{label}</InputLabel>
      <OutlinedInput
        id="search-course-input"
        type="text"
        sx={{ borderRadius: '100px' }}
        placeholder={placeholder}
        endAdornment={
          <InputAdornment>
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
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchInput;
