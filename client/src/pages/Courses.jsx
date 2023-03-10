import { useState } from 'react';

import { Box, Stack, Grid, Typography as Text, IconButton, FormControl, InputLabel, Select, MenuItem } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';

import Navbar from '../components/Navbar';
import ProfileAvatar from '../components/ProfileAvatar';
import BreadcrumbsTop from '../components/BreadcrumbsTop';
import SearchInput from '../components/SearchInput';
import CardCourse from '../components/CardCourse';
import Category from '../components/Category';

function Courses() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [categoryData, setCategoryData] = useState([
    { key: 0, label: 'Public', activated: false },
    { key: 1, label: 'Private', activated: false },
    { key: 3, label: 'TIK', activated: false },
    { key: 4, label: 'Admininstrasi Niaga', activated: false },
    { key: 5, label: 'Teknik Elektro', activated: false },
    { key: 6, label: 'Teknik Mesin', activated: false },
    { key: 7, label: 'TGP', activated: false },
  ]);

  function removeCategory(selectedChip) {
    setCategoryData((prevCategoryData) =>
      prevCategoryData.map((category) => ({
        key: category.key,
        label: category.label,
        activated: category.key === selectedChip.key ? false : category.activated,
      }))
    );
  }

  const Categories = () => {
    return categoryData.map((category) => (category.activated ? <Category key={category.key} label={category.label} onDelete={removeCategory.bind(null, category)} /> : ''));
  };

  function handleCategory(e) {
    setSelectedCategory(e.target.value);
  }

  function addCategory() {
    if (selectedCategory) {
      setCategoryData((prevCategoryData) =>
        prevCategoryData.map((category) => ({
          key: category.key,
          label: category.label,
          activated: category.label === selectedCategory ? true : category.activated,
        }))
      );
    }
    setSelectedCategory('');
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
          <SearchInput label="Search" placeholder="Search for courses..." />
          <ProfileAvatar />
        </Box>
      </Navbar>
      <Box py="24px">
        <Stack mb="16px" gap="12px">
          <Stack direction="row" alignItems="center" gap="8px">
            <FormControl size="small" sx={{ minWidth: '150px' }}>
              <InputLabel id="new-category-select">Add Category</InputLabel>
              <Select labelId="new-category-select" value={selectedCategory} onChange={handleCategory} label="Add Category" sx={{ borderRadius: '100px' }}>
                {categoryData.map((category) => (!category.activated ? <MenuItem value={category.label}>{category.label}</MenuItem> : ''))}
              </Select>
            </FormControl>
            <IconButton
              size="small"
              sx={{
                color: 'white',
                backgroundColor: 'black',
                ':hover': {
                  backgroundColor: 'black',
                },
              }}
              onClick={addCategory}
            >
              <Add fontSize="inherit" />
            </IconButton>
          </Stack>
          <Stack direction="row" gap="8px" width="fit-content">
            {Categories()}
          </Stack>
        </Stack>
        <Grid container spacing={2}>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
          <Grid item>
            <CardCourse title="Machine Learning" creator="Nibras Alyassar" />
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default Courses;
