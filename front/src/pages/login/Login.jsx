import { yupResolver } from '@hookform/resolvers/yup';
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { loginAPI } from '../../api/user.api';
import PasswordTextField from '../../components/passport/PasswordTextField';
import { Notify } from '../../components/Notification';
import { loginSchema } from './loginSchema';
import { toast } from 'react-toastify';

function Login() {

    const theme = createTheme();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(loginSchema) });


    const login = (data) => {
         loginAPI(data)
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
                            <LoginOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign In
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit(login)} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

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
                                    <PasswordTextField name={"password"} registerFn={register} />
                                </Grid>

                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
        </>
    )
}

export default Login;
