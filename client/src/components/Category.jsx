import { Chip } from '@mui/material';

function Category({ label, onDelete }) {
  return (
    <Chip
      label={label}
      sx={{
        backgroundColor: 'black',
        color: 'white',
        fontWeight: '600',
        '& .MuiChip-deleteIcon': {
          color: 'white',
          ':hover': {
            color: 'white',
          },
        },
      }}
      onDelete={onDelete}
    />
  );
}

export default Category;
