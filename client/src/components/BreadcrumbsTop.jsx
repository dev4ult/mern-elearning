import { Breadcrumbs, Link, Chip } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavigateNext } from '@mui/icons-material';

function BreadcrumbsTop({ pageList = [{ name: '', link: '#' }], onPage = 'Dashboard', separator = <NavigateNext /> }) {
  const linkList = () => {
    return pageList.map((page) => (
      <Link key="link" underline="hover" color="black" component={RouterLink} to={page.link}>
        {page.name}
      </Link>
    ));
  };
  return (
    <Breadcrumbs separator={separator}>
      {linkList()}

      <Chip label={onPage} sx={{ fontWeight: '700', color: 'white', backgroundColor: 'black', fontSize: 16 }} />
    </Breadcrumbs>
  );
}

export default BreadcrumbsTop;
