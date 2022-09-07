import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';

const Navbar = () => {
    return ( 
        <div className='flex flex-col w-screen h-fit p-4 justify-end' >
            <ConnectButton/>
        </div>
     );
}
 
export default Navbar;