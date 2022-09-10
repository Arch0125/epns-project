import { useWaitForTransaction } from 'wagmi'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GetTransaction(address) {
  const { data, isError, isLoading } = useWaitForTransaction({
    hash: `${address}`,
  })

  const notify = () => toast("Wow so easy!");

    if(isLoading) notify();
}

export default GetTransaction;