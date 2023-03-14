import { TextField, FormControl, Typography as Text } from '@mui/material';

function InputGroup(props) {
  const { type = 'text', label, labelTop = false, multiline = false, rows = 4, variant = 'outlined', value, placeholder, fullWidth = false, required = false } = props;
  return (
    <FormControl sx={{ display: 'block' }}>
      <Text mb="4px" variant="sm">
        {labelTop ? label : ''}
      </Text>
      <TextField label={labelTop ? '' : label} multiline={multiline} variant={variant} value={value} type={type} placeholder={placeholder} rows={rows} required={required} fullWidth={fullWidth} />
    </FormControl>
  );
}

export default InputGroup;
