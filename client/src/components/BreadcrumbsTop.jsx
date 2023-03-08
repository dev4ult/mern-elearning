import { Breadcrumbs, Link, Typography as Text } from '@mui/material';
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
      <Text color="white" bgcolor="black" p="4px 12px" borderRadius="100px">
        {onPage}
      </Text>
    </Breadcrumbs>
  );
}

export default BreadcrumbsTop;
