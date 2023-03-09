import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Avatar, Menu, MenuItem, Typography as Text } from '@mui/material';

function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  function openAvatar(e) {
    setAnchorEl(e.currentTarget);
  }

  function closeAvatar(e) {
    setAnchorEl(null);
  }

  return (
    <div>
      <Avatar sx={{ bgcolor: 'black', width: 32, height: 32, cursor: 'pointer' }} component="button" onClick={openAvatar}>
        <Text variant="sm" fontWeight="600">
          N
        </Text>
      </Avatar>
      <Menu anchorEl={anchorEl} open={open} onClose={closeAvatar}>
        <MenuItem onClick={closeAvatar} component={RouterLink} to="/profile">
          Profile
        </MenuItem>
        <MenuItem onClick={closeAvatar} component={RouterLink} to="/login">
          Logout
        </MenuItem>
      </Menu>
    </div>
  );
}

export default ProfileAvatar;
