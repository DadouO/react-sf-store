import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

const SimpleTabs = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Produits" {...a11yProps(0)}>
            <Link to="/"></Link>
          </Tab> 
          <Tab label="Catégories" {...a11yProps(1)}>
            <Link to="/categories"></Link>
          </Tab>
          <Tab label="Auteur" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
      <Link to="/"></Link>
        Produits
      </TabPanel>
      <TabPanel value={value} index={1}>
        Catégories
      </TabPanel>
      <TabPanel value={value} index={2}>
        Auteur
      </TabPanel>
    </div>
    </BrowserRouter>
  );
}

export default SimpleTabs;

{/* <BrowserRouter>
<div className="App">
  <Route
    path="/"
    render={({ location }) => (
      <Fragment>
        <Tabs value={location.pathname}>
          <Tab label="Item One" value="/" component={Link} to="/" />
          <Tab label="Item Two" value="/tab2" component={Link} to="/tab2" />
          <Tab
            value="/tab3"
            label="Item Three"
            component={Link}
            to="/tab3"
          />
        </Tabs>
        <Switch>
          <Route path="/tab2" render={() => <div>Tab 2</div>} />
          <Route path="/tab3" render={() => <div>Tab 3</div>} />
          <Route path="/" render={() => <div>Tab 1</div>} />
        </Switch>
      </Fragment>
    )}
  />
</div>
</BrowserRouter> */}

// return (
//   <div className={classes.root}>
//     <AppBar position="static">
//       <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
//         <Tab label="Produits" {...a11yProps(0)}>
//         </Tab> 
//         <Tab label="Catégories" {...a11yProps(1)}>
//         </Tab>
//         <Tab label="Auteur" {...a11yProps(2)} />
//       </Tabs>
//     </AppBar>
//     <TabPanel value={value} index={0}>
//       Produits
//     </TabPanel>
//     <TabPanel value={value} index={1}>
//       Catégories
//     </TabPanel>
//     <TabPanel value={value} index={2}>
//       Auteur
//     </TabPanel>
//   </div>
// );