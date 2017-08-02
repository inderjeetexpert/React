import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import theme from '../theme';

const muiTheme = getMuiTheme({
  tabs: {
    selectedTextColor: '#00BDFB',
  },
  inkBar: {
    height: 4,
    backgroundColor: '#00BDFB',
  },
});

const tabsStyles = {
  inkBarStyle: {
    height: 2,
  },
};

const tabStyles = {
  style: {
    color: 'black',
  },
};

export {
  tabsStyles,
  tabStyles,
};

export default muiTheme;
