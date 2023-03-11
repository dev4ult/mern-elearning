import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Modal, Box, Card, CardActionArea, Chip, CardActions, CardContent, Typography as Text, Badge } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.light',
  borderRadius: '8px',
  p: 4,
};

const chipAttribute = {
  size: 'small',
  sx: {
    fontWeight: '700',
  },
};

const cardStyle = {
  backgroundColor: 'background.light',
  border: '1.5px solid black',
  '& .majorChip': {
    border: '2px solid black',
  },
  '&:hover': {
    backgroundColor: 'black',
    color: 'white',
    '& .ownerChip': {
      backgroundColor: 'white',
      transition: '0ms',
    },
    '& .majorChip': {
      border: '2px solid white',
    },
  },
};

function CourseCard({ data }) {
  const [open, setOpen] = useState(false);
  const { _id, name, owner, accessibility, major } = data;

  return (
    <>
      <Badge color={accessibility.toLowerCase()} badgeContent="">
        <Card variant="outlined" sx={cardStyle}>
          <CardActionArea sx={{ p: '8px' }} component={RouterLink} to={`/course?id=${_id}`}>
            <CardActions sx={{ gap: '16px', justifyContent: 'space-between' }}>
              <Chip className="ownerChip" label={owner} {...chipAttribute} />
              <Chip className="majorChip" color="primary" label={major} {...chipAttribute} />
            </CardActions>
            <CardContent>
              <Text variant="md" fontWeight="700">
                {name}
              </Text>
              <Text variant="sm">Open to see detail</Text>
            </CardContent>
          </CardActionArea>
        </Card>
      </Badge>
      <Modal open={open} onClose={setOpen.bind(null, false)}>
        <Box sx={style}>
          <Text>{name}</Text>
        </Box>
      </Modal>
    </>
  );
}

export default CourseCard;
