import { useRef } from 'react'
import { ethers, ContractReceipt, Signer } from 'ethers'
import { useSigner } from 'wagmi'
import { z } from 'zod'
import loreumNftAbi from '../abis/loreum-nft.json'

const loreumNftAddress = '0x0000000000000000'

const useContractMethods = () => {
  const signer = useRef<null | Signer>(null)
  useSigner({ onSuccess: (data) => { signer.current = data } })

  type Log = ContractReceipt['logs'][number]
  const getEventArguments = (txReceipt: ContractReceipt) => {
    if (!signer.current) throw Error('No signer.current found')
    const { logs } = txReceipt
    const loreumNftContract = new ethers.Contract(loreumNftAddress, loreumNftAbi, signer.current)
    const [{ args: eventArguments }] = logs
      .filter((log: Log) => log.address === loreumNftAddress)
      .map((log: Log) => loreumNftContract.interface.parseLog(log))
    
    return eventArguments
  }

  const mintInput = z.object({ amount: z.number().positive() })
  type MintInput = z.infer<typeof mintInput>
  const mint = async (input: MintInput) => {
    if (!signer.current) throw Error('No signer.current found')
    const { amount } = mintInput.parse(input)
    const LoreumNftContract = new ethers.Contract(loreumNftAddress, loreumNftAbi, signer.current)
    const tx = await LoreumNftContract.publicMint(amount)

    return tx.wait()
  } 

  return {
    signerLoading: !signer.current,
    getEventArguments,
    mint
  }
}

export default useContractMethods
