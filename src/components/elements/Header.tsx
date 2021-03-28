import React from 'react';

import {useHistory} from 'react-router-dom';
import {Path} from '@/router/routes';

import {
    AppBar,
    Toolbar,
    makeStyles,
    createStyles,
    Grid,
    Typography,
    Button
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
        },
        navigate: {
            fontFamily: 'Impact',
            fontSize: 30,
            flexGrow: 1
        }
    }),
);

const Header: React.FC = () => {

    const classes = useStyles();
    const history = useHistory();

    /**
     * 入力画面へ遷移する関数
     * @return void
     */
    const transitionForm = () => {
        history.push(Path.form);
    }

    /**
     * 履歴画面へ遷移する関数
     * @return void
     */
    const transitionList = () => {
        history.push(Path.list);
    }

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
                        <Grid item xs={1} />
                        <Grid item xs={3} container justify={"center"} alignItems={"center"}>
                            <Grid item xs={1} />
                            <Grid item xs={5}>
                                <Button style={{color: 'white'}} onClick={transitionForm}>
                                    <Typography className={classes.navigate}>
                                        form
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button style={{color: 'white'}} onClick={transitionList}>
                                    <Typography className={classes.navigate}>
                                        list
                                    </Typography>
                                </Button>
                            </Grid>
                            <Grid item xs={1} />
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
