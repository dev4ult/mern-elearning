import { Breadcrumbs, Link, Chip, Typography as Text } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavigateNext } from '@mui/icons-material';

function BreadcrumbsTop({ pageList = [{ name: '', link: '#' }], onPage = 'Dashboard', separator = <NavigateNext /> }) {
  const linkList = () => {
    return pageList.map((page) => (
      <Link key="link" underline="hover" color="black" component={RouterLink} to={page.link}>
        <Text variant="sm">{page.name}</Text>
      </Link>
    ));
  };
  return (
    <Breadcrumbs separator={separator}>
      {linkList()}
      <Chip label={onPage} size="small" sx={{ fontWeight: '500', color: 'white', backgroundColor: 'black' }} />
    </Breadcrumbs>
  );
}

export default BreadcrumbsTop;
