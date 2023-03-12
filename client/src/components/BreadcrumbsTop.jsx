import { Breadcrumbs, Link, Chip, Typography as Text } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { NavigateNext } from '@mui/icons-material';

function BreadcrumbsTop({ pageList = [{ name: '', link: '#', unrefresh: true }], onPage = 'Dashboard', separator = <NavigateNext /> }) {
  const linkList = () => {
    return pageList.map((page) => {
      const link = page.unrefresh ? { href: page.link } : { component: RouterLink, to: page.link };
      return (
        <Link key={page.name} underline="hover" color="black" {...link}>
          <Text variant="sm">{page.name}</Text>
        </Link>
      );
    });
  };
  return (
    <Breadcrumbs separator={separator}>
      {linkList()}
      <Chip label={onPage} size="small" sx={{ fontWeight: '500', color: 'white', backgroundColor: 'black' }} />
    </Breadcrumbs>
  );
}

export default BreadcrumbsTop;
