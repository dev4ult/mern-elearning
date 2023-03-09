import { OutlinedInput, FormControl, InputLabel } from '@mui/material';

function InputGroup(props) {
  const { type = 'text', className = {}, label, placeholder, fullWidth = false, required = false } = props;
  return (
    <FormControl sx={{ display: 'block', my: '16px', ...className }}>
      <InputLabel>{label}</InputLabel>
      <OutlinedInput placeholder={placeholder} required={required} fullWidth={fullWidth} />
    </FormControl>
  );
}

export default InputGroup;
