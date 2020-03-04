import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import CountdownTimer, { CountdownProps } from './CountdownTimer';
import {CandidatesProps} from './SortableComponent';
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

interface Combo extends CandidatesProps, CountdownProps {
    
}

const printPhase = (phase:number) => {
    if (phase === Phases.Nomination) {
        return "Currently Nominating Candidates to Vote On";
    } else if (phase === Phases.Voting) {
        return "Currently Voting: Order Items to Vote";
    } else if (phase === Phases.Results) {
        return "Voting Finished"
    }
};
 
const AppMenuBar = ({candidates, remaining, setRemaining, phase}:Combo) => {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color={remaining < 10 && remaining % 2 === 1 ? "inherit": "primary"} className={classes.appBar}>
        <Toolbar>
          {phase === Phases.Nomination ? 
            <AddItem candidates={candidates} phase={phase} />
            : ""
          }
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

export default AppMenuBar;