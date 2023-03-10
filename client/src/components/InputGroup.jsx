import { OutlinedInput, FormControl, Typography as Text } from '@mui/material';

function InputGroup(props) {
  const { type = 'text', className = {}, label, placeholder, fullWidth = false, required = false } = props;
  return (
    <FormControl sx={{ display: 'block', my: '16px', ...className }}>
      <Text variant="sm" mb="4px">
        {label}
      </Text>
      <OutlinedInput placeholder={placeholder} required={required} fullWidth={fullWidth} />
    </FormControl>
  );
}

export default InputGroup;
