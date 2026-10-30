
import {
    Box,
    Button,
    Link,
    Stack,
    TextField,
    Typography,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import VerifiedUserOutlinedIcon from '@mui/icons-material/VerifiedUserOutlined';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import registerImage from '../../assets/left-register.png';

function Otp() {
    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                backgroundColor: '#F4F7F6',
                p: { xs: 0, md: 2.5 },
                boxSizing: 'border-box',
            }}
        >
            {/* Left Image Panel */}
            <Box
                sx={{
                    width: '42%',
                    minHeight: { md: 'calc(100vh - 40px)' },
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: { md: '20px' },
                    display: { xs: 'none', md: 'flex' },
                    backgroundColor: '#123B3A',
                }}
            >
                <Box
                    component="img"
                    src={registerImage}
                    alt="ServeFlow restaurant"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />

                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background:
                            'linear-gradient(180deg, rgba(18,59,58,0.12), rgba(18,59,58,0.90))',
                    }}
                />

                <Stack
                    sx={{
                        position: 'relative',
                        zIndex: 1,
                        width: '100%',
                        p: { md: 4, lg: 5 },
                        color: '#FFFFFF',
                        justifyContent: 'space-between',
                    }}
                >
                    <Typography variant="h5" fontWeight={800}>
                        ServeFlow
                        <Box component="span" sx={{ color: '#20B8A6', ml: 0.7 }}>
                            POS
                        </Box>
                    </Typography>

                    <Box sx={{ my: 'auto', py: 5 }}>
                        <Box
                            sx={{
                                width: 42,
                                height: 4,
                                borderRadius: 5,
                                backgroundColor: '#20B8A6',
                                mb: 3,
                            }}
                        />

                        <Typography
                            sx={{
                                fontSize: { md: '2rem', lg: '2.6rem' },
                                lineHeight: 1.15,
                                fontWeight: 800,
                                letterSpacing: '-1px',
                                mb: 2,
                            }}
                        >
                            Your business.
                            <br />
                            Your account.
                            <br />
                            <Box component="span" sx={{ color: '#70E1D1' }}>
                                Securely connected.
                            </Box>
                        </Typography>

                        <Typography
                            sx={{
                                color: 'rgba(255,255,255,0.85)',
                                lineHeight: 1.8,
                                maxWidth: 390,
                            }}
                        >
                            A smarter way to manage your restaurant operations,
                            all in one place.
                        </Typography>
                    </Box>

                    <Typography
                        variant="caption"
                        sx={{ color: 'rgba(255,255,255,0.75)' }}
                    >
                        Built for smoother restaurant operations.
                    </Typography>
                </Stack>
            </Box>

            {/* Right OTP Design */}
            <Box
                sx={{
                    flex: 1,
                    minWidth: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    px: { xs: 2.5, sm: 4, md: 3, lg: 5 },
                    py: { xs: 4, md: 3 },
                }}
            >
                <Box sx={{ width: '100%', maxWidth: 460 }}>
                    {/* Mobile Brand */}
                    <Typography
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            color: '#123B3A',
                            fontSize: '1.35rem',
                            fontWeight: 800,
                            mb: 5,
                        }}
                    >
                        ServeFlow
                        <Box component="span" sx={{ color: '#20B8A6', ml: 0.5 }}>
                            POS
                        </Box>
                    </Typography>

                    {/* OTP Icon */}
                    <Box
                        sx={{
                            width: 68,
                            height: 68,
                            display: 'grid',
                            placeItems: 'center',
                            borderRadius: '20px',
                            backgroundColor: 'rgba(32,184,166,0.12)',
                            border: '1px solid rgba(32,184,166,0.22)',
                            color: '#123B3A',
                            mb: 3,
                        }}
                    >
                        <VerifiedUserOutlinedIcon sx={{ fontSize: 34 }} />
                    </Box>

                    {/* Heading */}
                    <Typography
                        sx={{
                            fontSize: { xs: '2rem', sm: '2.4rem' },
                            fontWeight: 800,
                            color: '#123B3A',
                            letterSpacing: '-1px',
                            mb: 1.5,
                        }}
                    >
                        Verify your email
                    </Typography>

                    <Typography
                        sx={{
                            color: '#64748B',
                            fontSize: '0.95rem',
                            lineHeight: 1.8,
                            mb: 1,
                        }}
                    >
                        We&apos;ve sent a verification code to your registered email
                        address. Enter the code below to continue.
                    </Typography>

                    <Typography
                        sx={{
                            color: '#123B3A',
                            fontSize: '0.9rem',
                            fontWeight: 600,
                            mb: 4,
                        }}
                    >
                        Enter your 6-digit verification code
                    </Typography>

                    {/* Six OTP Boxes - Design Only */}
                  
<Stack direction="row" spacing={{ xs: 1, sm: 1.5 }} sx={{ mb: 3.5 }}>
  {Array.from({ length: 6 }).map((_, index) => (
    <TextField
      key={index}
      placeholder="0"
      inputProps={{
        maxLength: 1,
        inputMode: 'numeric',
        'aria-label': `OTP digit ${index + 1}`,
      }}
      sx={{
        flex: 1,
        minWidth: 0,
        '& .MuiOutlinedInput-root': {
          height: { xs: 52, sm: 62 },
          borderRadius: '12px',
          backgroundColor: '#FFFFFF',
          '& fieldset': {
            borderColor: '#DCE7E4',
          },
          '&:hover fieldset': {
            borderColor: '#20B8A6',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#20B8A6',
            borderWidth: '1.5px',
          },
        },
        '& input': {
          textAlign: 'center',
          padding: 0,
          fontSize: '1.35rem',
          fontWeight: 700,
          color: '#123B3A',
        },
        '& input::placeholder': {
          color: '#CBD5E1',
          opacity: 1,
        },
      }}
    />
  ))}
</Stack>


                    {/* Verify Button */}
                    <Button
                        variant="contained"
                        fullWidth
                        sx={{
                            minHeight: 52,
                            borderRadius: '10px',
                            backgroundColor: '#123B3A',
                            color: '#FFFFFF',
                            fontWeight: 700,
                            fontSize: '1rem',
                            textTransform: 'none',
                            boxShadow: '0 5px 14px rgba(18,59,58,0.12)',
                            transition: 'all 0.2s ease',
                            '&:hover': {
                                backgroundColor: '#20B8A6',
                                color: '#123B3A',
                                boxShadow: '0 7px 18px rgba(32,184,166,0.2)',
                                transform: 'translateY(-1px)',
                            },
                        }}
                    >
                        Verify OTP
                    </Button>

                    {/* Resend Section */}
                    <Typography
                        variant="body2"
                        textAlign="center"
                        sx={{ color: '#64748B', mt: 3 }}
                    >
                        Didn&apos;t receive the code?{' '}
                        <Link
                            component="button"
                            type="button"
                            underline="hover"
                            sx={{
                                color: '#168F83',
                                fontWeight: 700,
                                verticalAlign: 'baseline',
                            }}
                        >
                            Resend OTP
                        </Link>
                    </Typography>

                    {/* Back to Login */}
                    <Link
                        component={RouterLink}
                        to="/auth/login"
                        underline="hover"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1,
                            color: '#123B3A',
                            fontWeight: 700,
                            mt: 4,
                        }}
                    >
                        <ArrowBackRoundedIcon fontSize="small" />
                        Back to login
                    </Link>

                    {/* Footer */}
                    <Typography
                        variant="caption"
                        sx={{
                            display: 'block',
                            textAlign: 'center',
                            color: '#94A3B8',
                            mt: 5,
                        }}
                    >
                        © {new Date().getFullYear()} ServeFlow POS. All rights reserved.
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Otp;
