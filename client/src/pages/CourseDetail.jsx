import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { findCourse } from '../features/course/courseSlice';
import { Box } from '@mui/material';

import Navbar from '../components/Navbar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import ProfileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';

function CourseDetail() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { courses, isLoading } = useSelector((state) => state.course);
  const [searchCourse, setSearchCourse] = useState('');

  function handleSearch(e) {
    setSearchCourse(e.target.value.toLowerCase());
  }

  useEffect(() => {
    dispatch(findCourse(id));
  }, []);

  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <Navbar>
        <BreadcrumbsTop
          onPage={courses.name}
          pageList={[
            { name: 'Home', link: '/' },
            { name: 'Dashboard', link: '/dashboard' },
            { name: 'Courses', link: '/courses', unrefresh: true },
          ]}
        />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput onChange={handleSearch} placeholder="Search for courses..." value={searchCourse} />
          <ProfileAvatar />
        </Box>
      </Navbar>
      <Box p="16px" border="2px solid black" borderRadius="12px" mt="16px">
        test
      </Box>
    </div>
  );
}

export default CourseDetail;
