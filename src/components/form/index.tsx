import React from 'react';

import {
    makeStyles,
    createStyles,
    Grid,
    Paper
} from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        form: {
            marginTop: "25vh",
            padding: 0
        }
    }),
);

const Form: React.FC = () => {

    const classes = useStyles();

    return(
        <Grid container justify={"center"} alignItems={"center"}>
            <Grid item xs={10}>
                <Paper elevation={0} variant={"outlined"} className={classes.form}>
                    
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Form;