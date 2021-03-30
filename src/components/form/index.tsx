import React from 'react';

import {
    makeStyles,
    createStyles,
    Grid,
    Paper,
    Divider,
    Typography,
    TextField,
    Button
} from '@material-ui/core'

const useStyles = makeStyles(() =>
    createStyles({
        paper: {
            marginTop: "10vh",
            padding: 0
        },
        title: {
            fontSize: 30,
            flexGrow: 1
        },
        form: {
            width: ""
        },
        field: {
            marginLeft: "5vh",
            marginRight: "5vh"
        }
    }),
);

const Form: React.FC = () => {

    const classes = useStyles();

    return(
        <Grid container justify={"center"} alignItems={"center"}>
            <Grid item xs={6}>
                <Paper elevation={0} variant={"outlined"} className={classes.paper}>
                    <Grid
                        container
                        justify={"center"}
                        alignItems={"center"}
                        direction={"column"}
                    >
                        <Grid container justify={"center"} alignItems={"center"}>
                        <Grid item xs={6}>
                        <Grid item style={{ margin: 12 }} />
                        <Typography
                            align="center"
                            className={classes.title}
                        >
                            支出フォーム
                        </Typography>
                        <Grid item style={{ margin: 15 }} />
                        <TextField
                            label="日付"
                            variant="outlined"
                            fullWidth
                        />
                        <Grid item style={{ margin: 15 }} />
                        <TextField
                            label="項目名"
                            variant="outlined"
                            fullWidth
                        />
                        <Grid item style={{ margin: 15 }} />
                        <TextField
                            label="支出額"
                            variant="outlined"
                            fullWidth
                        />
                        <Grid item style={{ margin: 20 }} />
                        </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid item style={{ margin: 10 }} />
                    <Grid container justify={"center"} alignItems={"center"}>
                        <Button
                            variant="contained"
                            color="primary"
                            disableElevation
                        >
                            <span style={{color: "white", fontWeight: "bold"}}>
                                支出を入力する
                            </span>
                        </Button>
                    </Grid>
                    <Grid item style={{ margin: 10 }} />                   
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Form;