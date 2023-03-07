import { Breadcrumbs, Link, Typography as Text } from '@mui/material';
import { NavigateNext } from '@mui/icons-material';

function BreadcrumbsTop({ pageList = [{ name: '', link: '#' }], onPage = 'Dashboard', separator = <NavigateNext /> }) {
  function pageList() {
    pageList.forEach((page) => {
      <Link underline="hover" color="inherit" href={page.link}>
        {page.name}
      </Link>;
    });
  }

  return (
    <Breadcrumbs separator={separator}>
      {pageList}
      <Text color="primary.dark">{onPage}</Text>
    </Breadcrumbs>
  );
}

export default BreadcrumbsTop;
