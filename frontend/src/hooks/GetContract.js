import { useContract, useSigner } from 'wagmi'

function GetContract(address,abi) {
  const { data: signer, isError, isLoading } = useSigner()

  const contract = useContract({
    addressOrName: address,
    contractInterface: abi,
    signerOrProvider: signer,
  })

  return contract;
}

export default GetContract;