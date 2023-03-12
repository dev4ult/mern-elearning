import { TextField, FormControl } from '@mui/material';

function InputGroup(props) {
  const { type = 'text', label, placeholder, fullWidth = false, required = false } = props;
  return (
    <FormControl sx={{ my: '16px', display: 'block' }}>
      <TextField label={label} type={type} placeholder={placeholder} required={required} fullWidth={fullWidth} />
    </FormControl>
  );
}

export default InputGroup;
