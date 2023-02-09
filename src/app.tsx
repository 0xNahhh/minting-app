import { useState } from 'react'
import { ConnectButton } from '@rainbow-me/rainbowkit'

// hooks
import useContractMethods from './hooks/useContractMethods'

// styles
import {
  Layout,
  ConnectButtonWrapper,
  ImageContainer,
  Image,
  MintingButton,
} from './app.styles'

function App() {
  const [amount, setAmount] = useState(1)
  const contractMethods = useContractMethods()

  return (
    <Layout>
      <ConnectButtonWrapper>
        <ConnectButton />
      </ConnectButtonWrapper> 

      <ImageContainer>
        <Image src='src/assets/loreum_logo.jpg' />
      </ImageContainer>

      <MintingButton onClick={() => contractMethods.mint({ amount })} disabled={contractMethods.signerLoading}>
        {contractMethods.signerLoading ? 'Connect Wallet' : 'Mint'}
      </MintingButton>
    </Layout>
  )
}

export default App
