import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { findCourse } from '../features/course/courseSlice';

import { Box, Button, Typography as Text } from '@mui/material';
import { CircularProgress } from '@mui/material';

import Navbar from '../components/Navbar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import ProfileAvatar from '../components/ProfileAvatar';
import SearchInput from '../components/SearchInput';

import PublicCourseSrc from '../assets/publicCourse.png';
import PrivateCourseSrc from '../assets/privateCourse.png';

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
          <SearchInput onChange={handleSearch} placeholder="Search for courses..." link={`/courses/${searchCourse}`} value={searchCourse} />
          <ProfileAvatar />
        </Box>
      </Navbar>
      {isLoading ? (
        <CircularProgress sx={{ my: '24px' }} />
      ) : (
        <Box p="24px" border="2px solid black" borderRadius="12px" my="24px">
          <img src={courses.accessibility == 'Public' ? PublicCourseSrc : PrivateCourseSrc} alt="public course" style={{ width: '100%' }} />
          <Box mt="8px">
            <Text variant="lg" fontWeight="700">
              {courses.name}
            </Text>
            <Text fontWeight="600" variant="sm">
              {courses.owner}
            </Text>
          </Box>
          <Box my="16px">
            <Text>Description</Text>
            <Text textAlign="justify" fontFamily="Inter">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus delectus, commodi porro, ab enim recusandae facere dolorum rem maiores aliquam quas deleniti nam molestias laborum magnam? Doloremque maiores consectetur
              architecto quae, repellat perferendis provident dolores ipsa pariatur temporibus odit eos nostrum inventore officia. Cupiditate tenetur adipisci quo, dolore fuga impedit!
            </Text>
          </Box>
          <Button
            sx={{
              bgcolor: courses.accessibility == 'Public' ? '#37F2A4' : '#F9F143',
              boxShadow: 'none',
              ':hover': {
                bgcolor: courses.accessibility == 'Public' ? '#37F2A4' : '#F9F143',
                boxShadow: 'none',
              },
              color: 'black',
              fontWeight: '700',
              borderRadius: '100px',
            }}
            variant="contained"
          >
            Join {courses.accessibility == 'Public' ? 'for free' : 'with key'}
          </Button>
        </Box>
      )}
    </div>
  );
}

export default CourseDetail;
