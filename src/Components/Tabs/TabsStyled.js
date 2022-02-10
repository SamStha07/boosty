import {
  createTheme,
  makeStyles,
  Tab,
  Tabs,
  withStyles,
} from '@material-ui/core';

export const a11yProps = (index) => {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
};

export const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && <div className='tabPanel__content'>{children}</div>}
    </div>
  );
};

export const themes = createTheme({
  breakpoints: {
    values: {
      xs: 500,
      sm: 1000,
      md: 1210,
      lg: 1320,
      xl: 1920,
    },
  },
});

export const StyledTabs = withStyles({
  indicator: {
    display: 'none',
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

export const StyledTab = withStyles((theme) => ({
  root: {
    minWidth: '320px',
    textTransform: 'none',
    fontSize: '20px',
    color: '#464d91',
    '&$selected': {
      backgroundColor: '#d3e0ff',
      borderRadius: '66px',
      padding: '20px 0',
      color: 'var(--primaryBlueColor)',
    },
    [theme.breakpoints.down('lg')]: {
      minWidth: '290px',
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '18px',
      minWidth: '250px',
    },
    [theme.breakpoints.down('xs')]: {
      fontSize: '15px',
      minWidth: '200px',
    },
  },
  selected: {},
}))((props) => <Tab disableRipple {...props} />);

export const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    fontFamily: 'sans serif',
  },
  appbar: {
    backgroundColor: '#f4f5f8',
    color: 'black',
    border: 'none',
    boxShadow: 'none',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
}));
