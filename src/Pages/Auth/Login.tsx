
import { useState } from 'react';
import {
  Box,
  Button,
  Link,
  Stack,
  TextField,
  Typography,
  InputAdornment,
  IconButton,
  Checkbox,
  FormControlLabel,
} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

import registerImage from '../../assets/left-register.png';

function Login() {
  const [showPassword, setShowPassword] = useState(false);

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
          alt="ServeFlow POS restaurant"
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
              'linear-gradient(180deg, rgba(18,59,58,0.12), rgba(18,59,58,0.88))',
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
              Run Your Restaurant
              <Box component="span" sx={{ color: '#70E1D1' }}>
                {' '}Smarter.
              </Box>
            </Typography>

            <Typography
              sx={{
                color: 'rgba(255,255,255,0.85)',
                lineHeight: 1.8,
                maxWidth: 390,
                mb: 4,
              }}
            >
              Manage orders, billing, menus and daily operations with
              one powerful restaurant management platform.
            </Typography>

            {[
              ['Order Management', 'Dine-in, takeaway and delivery'],
              ['Real-time Reports', 'Track your business performance'],
              ['Easy Operations', 'Manage menus, tables and more'],
            ].map(([title, description]) => (
              <Stack
                key={title}
                direction="row"
                spacing={2}
                alignItems="center"
                sx={{ mb: 2.5 }}
              >
                <Box
                  sx={{
                    width: 42,
                    height: 42,
                    flexShrink: 0,
                    display: 'grid',
                    placeItems: 'center',
                    borderRadius: '12px',
                    border: '1px solid rgba(32,184,166,0.4)',
                    backgroundColor: 'rgba(32,184,166,0.15)',
                    color: '#70E1D1',
                    fontSize: '1.1rem',
                  }}
                >
                  ✓
                </Box>

                <Box>
                  <Typography fontWeight={700}>{title}</Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: 'rgba(255,255,255,0.75)', mt: 0.4 }}
                  >
                    {description}
                  </Typography>
                </Box>
              </Stack>
            ))}
          </Box>

          <Typography
            variant="caption"
            sx={{ color: 'rgba(255,255,255,0.75)' }}
          >
            Built for smoother restaurant operations.
          </Typography>
        </Stack>
      </Box>

      {/* Right Login Form */}
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
        <Box sx={{ width: '100%', maxWidth: 470 }}>
          {/* Mobile Brand */}
          <Typography
            sx={{
              display: { xs: 'block', md: 'none' },
              color: '#123B3A',
              fontSize: '1.35rem',
              fontWeight: 800,
              mb: 4,
            }}
          >
            ServeFlow
            <Box component="span" sx={{ color: '#20B8A6', ml: 0.5 }}>
              POS
            </Box>
          </Typography>

          {/* Heading */}
          <Box sx={{ mb: 4 }}>
            <Typography
              sx={{
                fontSize: { xs: '2rem', sm: '2.4rem' },
                fontWeight: 800,
                color: '#123B3A',
                letterSpacing: '-1px',
                mb: 1,
              }}
            >
              Welcome back
            </Typography>

            <Typography
              sx={{
                color: '#64748B',
                fontSize: '0.95rem',
                lineHeight: 1.8,
              }}
            >
              Sign in to continue managing your restaurant.
            </Typography>
          </Box>

          <Stack
            component="form"
            spacing={2.5}
            onSubmit={(event) => event.preventDefault()}
          >
            {/* Restaurant ID */}
            <TextField
              label="Restaurant ID"
              name="restaurantId"
              placeholder="Enter your restaurant ID"
              autoComplete="username"
              fullWidth
              required
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <StorefrontOutlinedIcon sx={{ color: '#64748B' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Email */}
            <TextField
              label="Email address"
              name="email"
              type="email"
              placeholder="you@example.com"
              autoComplete="email"
              fullWidth
              required
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <EmailOutlinedIcon sx={{ color: '#64748B' }} />
                  </InputAdornment>
                ),
              }}
            />

            {/* Password */}
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              autoComplete="current-password"
              fullWidth
              required
              sx={fieldSx}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockOutlinedIcon sx={{ color: '#64748B' }} />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      onClick={() => setShowPassword((prev) => !prev)}
                      edge="end"
                    >
                      {showPassword
                        ? <VisibilityOffOutlinedIcon />
                        : <VisibilityOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            {/* Remember Me / Forgot Password */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              <FormControlLabel
                control={
                  <Checkbox
                    name="rememberMe"
                    sx={{
                      color: '#94A3B8',
                      '&.Mui-checked': { color: '#20B8A6' },
                    }}
                  />
                }
                label={
                  <Typography variant="body2" color="text.secondary">
                    Remember me
                  </Typography>
                }
              />

              <Link
                component={RouterLink}
                to="/auth/forgot-password"
                underline="hover"
                sx={{ color: '#168F83', fontWeight: 700, fontSize: '0.875rem' }}
              >
                Forgot password?
              </Link>
            </Box>

            {/* Login Button */}
            <Button
              type="submit"
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
                },
              }}
            >
              Login
            </Button>
          </Stack>

          {/* Signup Link */}
          <Typography
            variant="body2"
            textAlign="center"
            sx={{ color: '#64748B', mt: 3 }}
          >
            Don&apos;t have an account?{' '}
            <Link
              component={RouterLink}
              to="/auth/register"
              underline="hover"
              sx={{
                color: '#123B3A',
                fontWeight: 700,
                '&:hover': { color: '#20B8A6' },
              }}
            >
              Sign up
            </Link>
          </Typography>

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

export default Login;
