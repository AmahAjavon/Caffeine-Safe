import React from 'react';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import {withStyles} from "@material-ui/core/styles/index";
import Button from '@material-ui/core/Button';
import classNames from 'classnames';
import checkLevel from '../../utils/safeLevelCheck';



const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        overflow: 'hidden',
        backgroundColor: theme.palette.background.paper,
    },
    gridList: {
        width: 600,
        height: 600,
    },
    icon: {
        color: '#ffffff',
    },
    subHeader: {
        color: '#3F250B',
    },
    titleBar: {
        backgroundColor:'#3F250B',
        opacity:0.8,
    },
    column: {
        flex: 1,
        padding: 30
    },
    withoutLabel: {
        marginTop: theme.spacing.unit * 3,
    },
    textField: {
        flexBasis: 200,
    },
    bootstrapRoot: {
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        marginLeft:5,
        padding: '6px 12px',
        border: '1px solid',
        backgroundColor: '#007bff',
        borderColor: '#007bff',
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
            backgroundColor: '#0069d9',
            borderColor: '#0062cc',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#0062cc',
            borderColor: '#005cbf',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
        },
    },
});

class Item extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            frequency: 0,
            results: null
        };
        this.handleFieldChange = this.handleFieldChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.resetFrequency = this.resetFrequency.bind(this)
    }

    handleFieldChange(e) {
        this.setState({ frequency: e.target.value });
    };

    handleSubmit () {
        const {item} = this.props
        const {frequency} = this.state
        if (frequency && Number(frequency) > 0) {
            let res = checkLevel(item.amount, frequency)
            this.setState({
                results: res
            })
        } else
        this.setState({
            results: null,
            frequency: 0
        })
    }

    resetFrequency () {
        this.setState({
            results: null,
            frequency: 0
        })
    }

    render() {
        const {classes, item} = this.props;
        const {frequency, results} = this.state;
        return(
            <div className={classes.root}>
                <div className={classes.column}>
                <img src={item.img} alt={item.title} style={{width:600, height:600}} />
                <GridListTileBar className={classes.titleBar}
                     title={item.title}
                />
                </div>
                <div className={classes.column}>
                    <FormControl
                        className={classNames(classes.margin, classes.withoutLabel, classes.textField)}
                        aria-describedby="weight-helper-text"
                    >
                        <Input
                            type="number"
                            id="adornment-weight"
                            value={frequency}
                            onChange={this.handleFieldChange}
                            endAdornment={<InputAdornment position="end">Times</InputAdornment>}
                            inputProps={{
                                'aria-label': 'Weight',
                            }}
                        />
                        <FormHelperText id="weight-helper-text">Amount Of Times Consumed</FormHelperText>
                    </FormControl>
                    <Button
                        variant="contained"
                        color="primary"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                        onClick={this.handleSubmit}
                    >
                        Check
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        disableRipple
                        className={classNames(classes.margin, classes.bootstrapRoot)}
                        onClick={this.resetFrequency}
                    >
                        Reset
                    </Button>
                    {results && <div style={{marginTop:30, fontWeight:200, fontSize:20, color:'#007bff'}}>
                        {results}
                    </div>}
                </div>
            </div>
        )
    }
}

export default withStyles(styles)(Item);
