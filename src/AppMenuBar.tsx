import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import Fab from '@material-ui/core/Fab';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import Avatar from '@material-ui/core/Avatar';
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';

import CountdownTimer, { CountdownProps } from './CountdownTimer';
import {ItemsProps} from './SortableComponent';
import AddItem from './AddItem';
import {Phases} from './App';
import AppMenu from './AppMenu';

const useStyles = makeStyles(theme => ({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    paper: {
      paddingBottom: 50,
    },
    list: {
      marginBottom: theme.spacing(2),
    },
    subheader: {
      backgroundColor: theme.palette.background.paper,
    },
    appBar: {
      top: 'auto',
      bottom: 0,
    },
    grow: {
      flexGrow: 1,
    },
    fabButton: {
      position: 'absolute',
      zIndex: 1,
      top: -70,
      //left: 0,
      right: 20,
      //margin: '0 auto',
    },
  }));  

interface Combo extends ItemsProps, CountdownProps {
    
}

const printPhase = (phase:number) => {
    if (phase === Phases.AddingItems) {
        return "Currently Adding Items to Vote On";
    } else if (phase === Phases.Voting) {
        return "Currently Voting: Order Items to Vote";
    } else if (phase === Phases.Results) {
        return "Voting Finished"
    }
};
 
const AppMenuBar = ({items, setItems, remaining, setRemaining, phase}:Combo) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color={remaining < 10 && remaining % 2 === 1 ? "inherit": "primary"} className={classes.appBar}>
        <Toolbar>
        <AddItem items={items} setItems={setItems} phase={phase} hidden={phase !== Phases.AddingItems } />
        <div className={classes.grow} >
            <CountdownTimer remaining={remaining} setRemaining={setRemaining} /> 
            {printPhase(phase)}
        </div>
        {/* <IconButton color="inherit">
            <SearchIcon />
        </IconButton>
        <IconButton edge="end" color="inherit">
            <MoreIcon />
        </IconButton> */}
        {/* <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
        </IconButton> */}
        <AppMenu />
        </Toolbar>
        </AppBar>
    );
}
AppMenuBar.propTypes = {
    items: PropTypes.number,
    setItems: PropTypes.func
};


export default AppMenuBar;