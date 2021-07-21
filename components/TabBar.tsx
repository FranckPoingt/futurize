import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
}

const TabPanel = (props: TabPanelProps) => {
    const { children, value, index, ...other } = props;
    
    return (
      <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
    )
}

function a11yProps(index: any) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}


const TabBar = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };
    
    return (
        <div>
          <AppBar position="static" color="default">
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"

              aria-label="full width tabs"
            >
              <Tab label="About" {...a11yProps(0)} />
              <Tab label="Milestone 1" {...a11yProps(1)} />
              <Tab label="Milestone 2" {...a11yProps(2)} />
              <Tab label="Milestone 3" {...a11yProps(3)} />
            </Tabs>
          </AppBar>

          <SwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={value} index={0} dir={theme.direction}>
              <h2>The Orca Association</h2>
              <p>The association  operated worldwide</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor fuga ipsa ducimus deserunt. Praesentium consectetur cumque nulla nihil, pariatur dignissimos fugit. Repudiandae omnis a, tempora harum soluta ullam perspiciatis adipisci.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae delectus labore harum reiciendis iste provident, quibusdam quos commodi sit aperiam cum esse dolorum temporibus, nisi optio consequuntur doloribus vel fugiat!
              </p>
            </TabPanel>
            <TabPanel value={value} index={1} dir={theme.direction}>
            <h2>Personal protective equipment (PPE) purchase (US $5,000.00)</h2>
            </TabPanel>
            <TabPanel value={value} index={2} dir={theme.direction}>
            <h2>Advertise our actions in the medias (US $6,000.00)</h2>
            </TabPanel>
            <TabPanel value={value} index={3} dir={theme.direction}>
            <h2>Buy a boat (US $10,000.00)</h2>
            </TabPanel>
          </SwipeableViews>
        </div>
    )
}

export default TabBar
