import { yupResolver } from '@hookform/resolvers/yup';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { MenuItem, Select } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { registerAPI } from '../../api/user.api';
import { registerSchema } from './regsiterSchema';

function Register() {

    const theme = createTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(registerSchema) });


    const registerUser = (data) => {
        registerAPI(data)
        // console.log(data);
    };

    return (

        <>

            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign up
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(registerUser)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Username"
                                        autoFocus
                                        {...register("username")}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Email Address"
                                        autoComplete="email"
                                        {...register("email")}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Select
                                        label="Gender"
                                        {...register("gender")}
                                        fullWidth
                                    >
                                        <MenuItem value={'SINGLE'}>Single</MenuItem>
                                        <MenuItem value={'MARRIED'}>Married</MenuItem>
                                    </Select>
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        fullWidth
                                        label="Password"
                                        type="password"
                                        {...register("password")}
                                    />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign Up
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        Already have an account? Sign in
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>

            {/* <form action="" onSubmit={handleSubmit(registerUser)}>
               
                <p>{errors?.username?.message}</p>
                <input type="email" placeholder='Email' {...register("email")} />
                <select name="Gender" >
                    <option value={'SINGLE'}>{'SINGLE'}</option>
                    <option value={'MARRIED'}>{'MARRIED'}</option>
                </select>
                <input type="password" placeholder='Password' {...register("password")} />
                <input type="submit" value="Register" />
            </form> */}

        </>
    )
}

export default Register;
