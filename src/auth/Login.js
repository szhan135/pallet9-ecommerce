import React from 'react';
import UsernameIcon from "@material-ui/icons/Person";
import PasswordIcon from "@material-ui/icons/VpnKey"
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import LoginIcon from '@material-ui/icons/FilterHdr';
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import {withStyles} from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import './Login.scss';
import {useDispatch} from "react-redux";
import {login} from "../actions/auth.action";
import Snackbar from "@material-ui/core/Snackbar";

const styles = {
    root: {
        marginTop: '25px',
        '& .MuiInput-underline:before': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:before:hover': {
            borderBottomColor: 'white'
        },
        '& .MuiInput-underline:hover:not(.MuiInput-disabled):before': {
            borderBottomColor: 'white'
        },
        '& .MuiFormLabel-root': {
            color: 'white'
        }
    },
    input: {
        color: 'white'
    },
    button: {
        '&.MuiButtonBase-root': {
            margin: '50px 0 25px'
        }
    }
};

const Login = (props) => {
    const {classes} = props;
    const [user, setUser] = React.useState({
        username: '',
        password: ''
    });
    const [open, setOpen] = React.useState({
        status: false,
        msg: ''
    });
    const dispatch = useDispatch();
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(
            user,
            (msg) => {
                setOpen({status: true, msg});
                setTimeout(() => {
                    props.history.goBack();
                }, 2000)
            },
            (msg) => setOpen({status: false, msg})
        ));
    };

    return (
        <Paper className="Login" elevation={10}>
            <div className="overlay"/>
            <form className="login-form" onSubmit={handleSubmit}>
                <div className="login-icon"><LoginIcon /></div>
                <TextField
                    name="username"
                    className={classes.root}
                    label="Username"
                    value={user.username}
                    onChange={handleChange}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <UsernameIcon />
                            </InputAdornment>
                        ),
                    }}
                />
                <TextField
                    name="password"
                    className={classes.root}
                    label="Password"
                    type="password"
                    value={user.password}
                    onChange={handleChange}
                    InputProps={{
                        className: classes.input,
                        startAdornment: (
                            <InputAdornment position="start">
                                <PasswordIcon />
                            </InputAdornment>
                        )
                    }}
                />
                <Fab
                    variant="extended"
                    size="medium"
                    color="secondary"
                    aria-label="Login"
                    className={classes.button}
                    type="submit"
                    disabled={user.username === '' || user.password === ''}
                >
                    Sign In
                    <ArrowForwardIcon />
                </Fab>
                <Snackbar
                    className={open.status ? 'success' : 'failure'}
                    open={!!open.msg}
                    onClose={() => setOpen({status: open.status, msg: ''})}
                    autoHideDuration={5000}
                    message={<span>{open.msg}</span>}
                />
            </form>
        </Paper>
    );
};
export default withStyles(styles)(Login);
