import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import {
  TabPanel,
  StyledTabs,
  StyledTab,
  useStyles,
  themes,
  a11yProps,
} from './TabsStyled';
import TabPanelContent from './TabPanelContent/TabPanelContent';
import monitorImage from '../../assests/icons/services/monitor.svg';
import brushImage from '../../assests/icons/services/brush.svg';
import folderImage from '../../assests/icons/services/folder.svg';
import tvImage from '../../assests/icons/services/tv.svg';

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <MuiThemeProvider theme={themes}>
      <div className={classes.root}>
        <AppBar className={classes.appbar} position='static'>
          <StyledTabs
            variant='scrollable'
            // centered
            value={value}
            onChange={handleChange}
            aria-label='scrollable force tabs example'
          >
            <StyledTab label='Team extension' {...a11yProps(0)} />
            <StyledTab label='Project-based' {...a11yProps(1)} />
            <StyledTab label='Time & Materials' {...a11yProps(2)} />
            <StyledTab label='Customized Partnership' {...a11yProps(3)} />
          </StyledTabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <TabPanelContent
            title='Team extension (Outstaffing)'
            desc='A fully dedicated remote team or person. Since the team might be working in places like New York or Kiev, we take care of the logistics. You just pay for labor.'
            recommendedFor='Companies who want to have just one contact point for the duration of the project.'
            icon={monitorImage}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <TabPanelContent
            title='Project-based (fixed price)'
            desc='A fully dedicated remote team or person. Since the team might be working in places like New York or Kiev, we take care of the logistics. You just pay for labor.'
            recommendedFor='Classic model that guarantees the delivery of a predefined set of functionalities within a specific time frame.'
            icon={tvImage}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <TabPanelContent
            title='Time & Materials'
            desc='The client just pays only for development & design or consulting time'
            recommendedFor='Consultation purposes and/or to build an extension of your own teams to meet deadlines. For short term projects without clear definitions.'
            icon={folderImage}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <TabPanelContent
            title='Customized Partnership'
            desc='We are happy to explore other ways to be the right business partner for you. Book a consultation now! We are committed to giving you our best.'
            recommendedFor='Companies who have reached their break-even point, raised Round B+ or have a significant organic growth rate.'
            icon={brushImage}
          />
        </TabPanel>
      </div>
    </MuiThemeProvider>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
