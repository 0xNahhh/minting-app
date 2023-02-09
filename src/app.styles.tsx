import { styled } from './style'

export const Layout = styled('div', {
  minHeight: '100vh',
  overflowY: 'visible',
  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '3rem',
  backgroundColor: '$blue-grey-700',
})

export const ConnectButtonWrapper = styled('div', {
  position: 'absolute',
  top: '1rem',
  right: '1rem',
})

export const ImageContainer = styled('div', {
  height: '400px',
  width: '400px',
})

export const Image = styled('img', {
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  borderRadius: '25px',
})

export const MintingButton = styled('button', {
  alignSelf: 'center',
  padding: '1rem 2rem',
  color: '$white',
  backgroundColor: '$blue-400',
  borderRadius: '15px',
  border: 'none',
  outline: 'none',
  fontWeight: 500,
  fontSize: '1.2em',
  cursor: 'pointer',
  transition: 'background-color 0.1s ease-in-out',

  '&:hover': {
    backgroundColor: '$blue-500',
  },
  '&:active': {
    backgroundColor: '$blue-600',
  },
  '&:disabled': {
    backgroundColor: '$blue-grey-500',
    cursor: 'not-allowed',
  }
})
