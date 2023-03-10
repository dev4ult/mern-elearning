import { Card, CardActionArea, Chip, CardActions, CardContent, Typography as Text } from '@mui/material';

function CardCourse({ creator, title }) {
  return (
    <Card variant="outlined" sx={{ backgroundColor: 'background.light', border: '1.5px solid black', transition: '300ms ease', ':hover': { backgroundColor: '#37F2A4', border: '1.5px solid #37F2A4', transition: '300ms ease' } }}>
      <CardActionArea sx={{ p: '8px' }}>
        <CardActions>
          <Chip label={creator} size="small" sx={{ fontWeight: '700' }} />
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
