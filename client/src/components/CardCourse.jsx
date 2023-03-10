import { Card, CardActionArea, Chip, CardActions, CardContent, Typography as Text } from '@mui/material';

function CardCourse({ creator, title }) {
  return (
    <Card
      variant="outlined"
      sx={{
        backgroundColor: 'background.light',
        border: '1.5px solid black',
        '&:hover': {
          backgroundColor: 'black',
          color: 'white',
          '& .creatorChip': {
            backgroundColor: 'white',
            transition: '0ms',
          },
        },
      }}
    >
      <CardActionArea sx={{ p: '8px' }}>
        <CardActions>
          <Chip
            className="creatorChip"
            label={creator}
            size="small"
            sx={{
              fontWeight: '700',
            }}
          />
        </CardActions>
        <CardContent>
          <Text variant="md" fontWeight="700">
            {title}
          </Text>
          <Text variant="sm">Open to see detail</Text>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default CardCourse;
