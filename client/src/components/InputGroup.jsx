import { Box, OutlinedInput, Typography as Text } from '@mui/material';

function InputGroup(props) {
  const { type = 'text', className = {}, title, placeholder, fullWidth = false, required = false } = props;
  return (
    <Box sx={className} marginY="16px">
      <Text variant="sm" marginBottom="8px">
        {title}
      </Text>
      <OutlinedInput type={type} placeholder={placeholder} fullWidth={fullWidth} required={required} sx={{ borderRadius: '8px' }} />
    </Box>
  );
}

export default InputGroup;
