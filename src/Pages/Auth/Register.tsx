
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import registerImage from '../../assets/left-register.png';

function Register() {
  const fieldSx = {
    '& .MuiOutlinedInput-root': {
      borderRadius: '10px',
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
    '& .MuiInputLabel-root.Mui-focused': {
      color: '#123B3A',
    },
  };

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
          alt="ServeFlow restaurant management"
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
              'linear-gradient(180deg, rgba(18,59,58,0.05) 15%, rgba(18,59,58,0.88) 100%)',
          }}
        />

        
      </Box>

      {/* Right Form Panel */}
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
        <Box sx={{ width: '100%', maxWidth: 650 }}>
          {/* Mobile Brand */}
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              color: '#123B3A',
              fontSize: '1.35rem',
              fontWeight: 800,
              mb: 3,
            }}
          >
            ServeFlow
            <Box component="span" sx={{ color: '#20B8A6', ml: 0.5 }}>
              POS
            </Box>
          </Typography>

          <Box sx={{ mb: 3 }}>
            <Typography
              sx={{
                fontSize: { xs: '1.8rem', sm: '2.1rem' },
                fontWeight: 800,
                color: '#123B3A',
                letterSpacing: '-1px',
                mb: 1,
              }}
            >
              Create your account
            </Typography>

            <Typography
              sx={{ color: '#64748B', fontSize: '0.94rem', lineHeight: 1.7 }}
            >
              Enter your details to get started with ServeFlow POS.
            </Typography>
          </Box>

          <Stack
            component="form"
            spacing={2}
            onSubmit={(event) => event.preventDefault()}
          >
            {/* Row 1 */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <TextField
                label="Restaurant name"
                name="restaurantName"
                placeholder="Enter restaurant name"
                autoComplete="organization"
                fullWidth
                required
                sx={fieldSx}
              />

              <TextField
                label="Full name"
                name="fullName"
                placeholder="Enter your name"
                autoComplete="name"
                fullWidth
                required
                sx={fieldSx}
              />
            </Stack>

            {/* Row 2 */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <TextField
                label="Email address"
                name="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                fullWidth
                required
                sx={fieldSx}
              />

              <Stack direction="row" spacing={1} sx={{ width: '100%' }}>
                <TextField
                  label="Code"
                  name="countryCode"
                  defaultValue="+91"
                  placeholder="+91"
                  sx={{ ...fieldSx, width: '34%' }}
                  required
                />

                <TextField
                  label="Mobile number"
                  name="mobile"
                  type="tel"
                  placeholder="Mobile number"
                  autoComplete="tel-national"
                  fullWidth
                  required
                  sx={fieldSx}
                />
              </Stack>
            </Stack>

            {/* Row 3 */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <TextField
                label="Country"
                name="country"
                placeholder="Enter country"
                autoComplete="country-name"
                fullWidth
                required
                sx={fieldSx}
              />

              <TextField
                label="City"
                name="city"
                placeholder="Enter city"
                autoComplete="address-level2"
                fullWidth
                required
                sx={fieldSx}
              />
            </Stack>

            {/* Row 4 */}
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
            >
              <TextField
                label="Password"
                name="password"
                type="password"
                placeholder="Create a password"
                autoComplete="new-password"
                fullWidth
                required
                sx={fieldSx}
              />

              <TextField
                label="Confirm password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm password"
                autoComplete="new-password"
                fullWidth
                required
                sx={fieldSx}
              />
            </Stack>

            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{
                mt: 0.5,
                minHeight: 50,
                borderRadius: '10px',
                backgroundColor: '#123B3A',
                color: '#FFFFFF',
                fontSize: '0.95rem',
                fontWeight: 700,
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
              Create account
            </Button>

            <Typography
              variant="body2"
              textAlign="center"
              sx={{ color: '#64748B', pt: 0.5 }}
            >
              Already have an account?{' '}
              <Link
                component={RouterLink}
                to="/auth/login"
                underline="hover"
                sx={{
                  color: '#123B3A',
                  fontWeight: 700,
                  '&:hover': { color: '#20B8A6' },
                }}
              >
                Sign in
              </Link>
            </Typography>
          </Stack>

          <Typography
            variant="caption"
            sx={{
              display: 'block',
              textAlign: 'center',
              color: '#94A3B8',
              mt: 3,
            }}
          >
            © {new Date().getFullYear()} ServeFlow POS. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default Register;
