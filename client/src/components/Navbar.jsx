import { Box } from '@mui/material';

function Navbar({ display = 'flex', gap = '8px', justifyType = 'space-between', alignType = 'center', children }) {
  return (
    <Box display={display} justifyContent={justifyType} alignItems={alignType} gap={gap} sx={{ py: '8px' }}>
      {children}
    </Box>
  );
}

export default Navbar;
