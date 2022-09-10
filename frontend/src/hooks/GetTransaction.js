import { useWaitForTransaction } from 'wagmi'

function GetTransaction(address) {
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: `${address}`,
  })

  if (isLoading) return <div>Processing…</div>
  if (isError) return <div>Transaction error</div>
  return <div>Transaction: {JSON.stringify(data)}</div>
}

export default GetTransaction;