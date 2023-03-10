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
  const [categoryData, setCategoryData] = useState([
    { key: 0, label: 'Pengantar TIK' },
    { key: 1, label: 'Machine Learning' },
  ]);

  function deleteCategory(selectedChip) {
    setCategoryData((chips) => chips.filter((chip) => chip.key !== selectedChip.key));
  }

  const Categories = () => {
    return categoryData.map((category) => <Category key={category.key} label={category.label} onDelete={deleteCategory.bind(null, category)} />);
  };

  function addCategory() {}

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
              <InputLabel id="new-category-select">New Category</InputLabel>
              <Select labelId="new-category-select" onChange={addCategory} label="New Category" sx={{ borderRadius: '100px' }}>
                <MenuItem value="Pengantar TIK">Pengantar TIK</MenuItem>
                <MenuItem value="Machine Learning">Machine Learning</MenuItem>
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
