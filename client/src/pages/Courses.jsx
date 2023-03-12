import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCourses, reset } from '../features/course/courseSlice';

import { Box, Stack, Grid, FormControl, Select, MenuItem } from '@mui/material';

import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import SearchInput from '../components/SearchInput';
import CardCourse from '../components/CourseCard';
import Category from '../components/Category';

function Courses() {
  const { courses, isLoading } = useSelector((state) => state.course);
  const dispatch = useDispatch();

  const [searchCourse, setSearchCourse] = useState('');

  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryData, setCategoryData] = useState([
    { key: 1, label: 'TIK', activated: false },
    { key: 3, label: 'TMD', activated: false },
    { key: 4, label: 'Admininstrasi Niaga', activated: false },
    { key: 5, label: 'Teknik Elektro', activated: false },
    { key: 6, label: 'Teknik Mesin', activated: false },
    { key: 7, label: 'TGP', activated: false },
  ]);

  useEffect(() => {
    dispatch(reset());

    console.log('reset');
    dispatch(getCourses());
  }, []);

  function removeCategory(selectedChip) {
    setCategoryData((prevCategoryData) =>
      prevCategoryData.map((category) => ({
        key: category.key,
        label: category.label,
        activated: category.key === selectedChip.key ? false : category.activated,
      }))
    );
  }

  function handleSearch(e) {
    setSearchCourse(e.target.value.toLowerCase());
  }

  const Categories = () => {
    return categoryData.map((category) => (category.activated ? <Category key={category.key} label={category.label} onDelete={removeCategory.bind(null, category)} /> : ''));
  };

  function handleCategory(e) {
    if (e.target.value) {
      setCategoryData((prevCategoryData) =>
        prevCategoryData.map((category) => ({
          key: category.key,
          label: category.label,
          activated: category.label === e.target.value ? true : category.activated,
        }))
      );
    }
  }

  if (isLoading) {
    return <div>loading</div>;
  }

  return (
    <div>
      <Navbar>
        <BreadcrumbsTop
          onPage="Courses"
          pageList={[
            { name: 'Home', link: '/' },
            { name: 'Dashboard', link: '/dashboard' },
          ]}
        />
        <Box display="flex" gap="16px" alignItems="center">
          <SearchInput onChange={handleSearch} placeholder="Search for courses..." value={searchCourse} />
          <ProfileAvatar />
        </Box>
      </Navbar>

      <Box py="24px">
        <Stack mb="16px" gap="12px">
          <Stack direction="row" alignItems="center" gap="8px">
            <FormControl size="small" sx={{ minWidth: '150px' }}>
              <Select labelId="new-category-select" value={selectedCategory} onChange={handleCategory} displayEmpty sx={{ borderRadius: '100px' }}>
                <MenuItem key={0} value="">
                  Choose Category
                </MenuItem>
                {categoryData.map((category) =>
                  !category.activated ? (
                    <MenuItem key={category.key} value={category.label}>
                      {category.label}
                    </MenuItem>
                  ) : (
                    ''
                  )
                )}
              </Select>
            </FormControl>
          </Stack>
          <Stack direction="row" gap="8px" flexWrap="wrap" width="fit-content">
            {Categories()}
          </Stack>
        </Stack>
        {isLoading ? (
          <h3>Fetching Data</h3>
        ) : (
          <Grid container spacing={2}>
            {courses.map((course) =>
              (categoryData.every((category) => category.activated == false) || categoryData.some((category) => category.activated == true && category.label == course.major)) &&
              (course.name.toLowerCase().match(searchCourse + '.*') || course.name.toLowerCase().match('/*.' + searchCourse)) ? (
                <Grid key={course._id} item>
                  <CardCourse data={course} />
                </Grid>
              ) : (
                ''
              )
            )}
          </Grid>
        )}
      </Box>
    </div>
  );
}

export default Courses;
