import React from 'react';
import {
    AppBar,
    Toolbar,
    makeStyles,
    createStyles,
    Grid,
    Typography
} from '@material-ui/core';

const useStyles = makeStyles(() =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        header: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            height: 73
        },
        header_content: {
            paddingTop: 5
        },
        title: {
            fontFamily: 'Impact',
            fontWeight: 'bold',
            fontSize: 40,
            flexGrow: 1,
            color: 'white'
        }
    }),
);

const Header: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.header}>
                    <Grid container className={classes.header_content}>
                        <Grid item xs={3} container justify={"center"} alignItems={"center"}>
                            <Typography
                                align="center"
                                className={classes.title}
                            >
                                <span style={{color: "cyan"}}>
                                    R    
                                </span>
                                eact&nbsp;
                                <span style={{color: "cyan"}}>
                                    K
                                </span>
                                akebo
                            </Typography>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
