// Import dependencies.
import React from 'react';

// Import components.
import Header from './../../components/header';
import ItemsList from './../../components/itemsList';
import Item from './../../components/item'

// Import scene styles.
import MainSceneStyles from './styles.scss';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import {getCaffeineList, getSingleCaffeineItem, clearSingleCaffeineItem} from "../../actions/action.caffeine";
import {goToNextTab} from "../../actions/action.tab";
import {connect} from "react-redux";

function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
    },
    tabsIndicator: {
        backgroundColor: '#3F250B',
    },
    tabRoot: {
        textTransform: 'initial',
        minWidth: 72,
        fontWeight: theme.typography.fontWeightRegular,
        marginRight: theme.spacing.unit * 4,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
            color: '#ffffff',
            opacity: 1,
        },
        '&$tabSelected': {
            color: '#3F250B',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            color: '#40a9ff',
        },
    },
    tabSelected: {},
    typography: {
        padding: theme.spacing.unit * 3,
    },
    mainTitle: {
        textAlign:'center',
        padding: 20,
        fontSize:18,
        fontWeight:'bold',
        color: '#3F250B',
    }
});


class MainScene extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.tab,
            itemsList: [],
            item:{}
        };
        this.handleItemSelected = this.handleItemSelected.bind(this)
        this.handleReStart = this.handleReStart.bind(this)
    }

    componentDidMount(){
        this.props.getCaffeineList()
    }

    handleItemSelected (item) {
        if (item) {
            this.props.getSingleCaffeineItem(item)
        }
        this.props.goToNextTab(1)
    }

    handleReStart () {
        this.props.goToNextTab(0)
        this.props.clearSingleCaffeineItem()
    }

  render(){
      const {classes, itemsList, item, tab} = this.props;
    return(
      <div>
        <Header></Header>

              <div className={classes.root}>
                      <Tabs
                          value={tab}
                          classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                      >
                          <Tab value={0} onClick={this.handleReStart} disableRipple label="Select Item" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                          <Tab value={1} disableRipple label="Amount Consumed" classes={{ root: classes.tabRoot, selected: classes.tabSelected }} />
                      </Tabs>
                  {tab === 0 && <TabContainer>
                      <div className={classes.mainTitle}>Please select your favorite caffeine drink</div>
                      <ItemsList itemsList={itemsList} handleItemSelected={this.handleItemSelected} />
                  </TabContainer>}
                  {tab === 1 && <TabContainer>
                      <div className={classes.mainTitle}>{`Please enter the amount of ${item.title} you have consumed`}</div>
                      <Item item={item} />
                  </TabContainer>}
              </div>
          </div>

    );
  }
}

MainScene.propTypes = {
    classes: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired,
    tab: PropTypes.number.isRequired,
};

// Map states from reducers to props
const mapStateToProps = (state, ownProps) => {
    return {
        itemsList: state.caffeineReducer.itemsList,
        item: state.caffeineReducer.item,
        tab: state.tabReducer.tab,
    };
}

// Binding action functions with redux's
// dispatch to this components props.
const mapDispatchToProps = (dispatch) => {
    return {
        getCaffeineList: () => {
            dispatch(getCaffeineList());
        },
        getSingleCaffeineItem: (item) => {
            dispatch(getSingleCaffeineItem(item))
        },
        clearSingleCaffeineItem: () => {
            dispatch(clearSingleCaffeineItem())
        },
        goToNextTab: (tab) => {
            dispatch(goToNextTab(tab))
        }
    }
}

// Export scene.
export default withStyles(styles)(connect(
    mapStateToProps,
    mapDispatchToProps,
)(MainScene));
