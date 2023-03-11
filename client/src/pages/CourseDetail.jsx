import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { findCourse } from '../features/course/courseSlice';
import { Box } from '@mui/material';

import Navbar from '../components/Navbar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import ProfileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';

function CourseDetail() {
  const dispatch = useDispatch();
  const { courses, isLoading } = useSelector((state) => state.course);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchCourse, setSearchCourse] = useState('');

  function handleSearch(e) {
    setSearchCourse(e.target.value.toLowerCase());
  }

  useEffect(() => {
    const courseId = searchParams.get('id');
    dispatch(findCourse(courseId));
  }, []);
  return (
    <div>
      <Navbar>
        <BreadcrumbsTop
          onPage="Test"
          pageList={[
            {
              name: 'Home',
              link: '/',
            },
            { name: 'Dashboard', link: '/dashboard' },
            { name: 'Courses', link: '/courses' },
          ]}
        />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput onChange={handleSearch} placeholder="Search for courses..." value={searchCourse} />
          <ProfileAvatar />
        </Box>
      </Navbar>
    </div>
  );
}

export default CourseDetail;
