import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import FacilitiesComponent from './FacilitiesComponent';
import VAS from './VAS';
import DepartmentsComponent from './DepartmentsComponent';
import DoctorComponent from './DoctorComponent';
import Procedures from './Procedures';
function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function NavTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example"
      textColor="secondary"
      indicatorColor="secondary"
      >
        <LinkTab label="Facilities" href="/VAS" style={{marginLeft:'107px'}}/>
        <LinkTab label="Departments" href="/VAS" />
        <LinkTab label="Doc Details" href="/VAS" />
        <LinkTab label="Procedures" href="/VAS" />
        <LinkTab label="VAS" href="./VAS" />

      </Tabs>
    </Box>
  </Box>
  );
}


  