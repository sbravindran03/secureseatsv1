import React, { useState , useEffect } from 'react';
import Web3 from 'web3';
import Category from './city';

const FrameComponent = () => {
  const [isWalletConnected, setWalletConnected] = useState(false);
  const [web3, setWeb3] = useState(null);

  useEffect(() => {
    // Check if Web3 is already injected
    if (typeof window.ethereum !== 'undefined') {
      const newWeb3 = new Web3(window.ethereum);

      setWeb3(newWeb3);

      window.ethereum.on('accountsChanged', (accounts) => {
        if (accounts.length > 0) {
          setWalletConnected(true);
        } else {
          setWalletConnected(false);
        }
      });
    }
  }, []);

  const connectWallet = async () => {
    try {
      // Check if MetaMask is installed
      if (window.ethereum) {
        // Request account access and open MetaMask popup
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected accounts:', accounts);
  
        // Once connected, set the state to true
        setWalletConnected(true);
      } else {
        console.error('MetaMask not installed.');
      }
    } catch (error) {
      // Handle errors
      console.error('Error connecting wallet:', error);
    }
 
  };
  return (
    <div className="w-[1534px] bg-black flex flex-row items-end justify-between pt-0 pb-px pr-px pl-1 box-border max-w-full gap-[20px] z-[1] text-left text-smi-9 text-white font-inter mq1050:flex-wrap absolute top-0">
      <div className="h-[27.9px] w-[109.5px] relative hidden" />
      <div className="flex flex-col items-start justify-start pt-0 px-0 pb-0.5 shrink-0">
        <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_32px] mq450:gap-[0px_32px]">
          <div className="flex flex-row items-center justify-start">
            <div className="flex flex-col items-start justify-start pt-2 px-0 pb-0.5">
              <div className="relative leading-[19.42px] capitalize font-semibold z-[1]">
                <p className="m-3 ">SECURE</p>
                <p className="m-3 ">SEATS</p>
              </div>
            </div>
            <div className="relative text-12xl-3 leading-[46.92px] capitalize font-semibold text-black z-[1] mq450:text-lgi mq450:leading-[28px] mq1050:text-6xl mq1050:leading-[38px]">
              🎫
            </div>
          </div>
          <button className="cursor-pointer pt-1.5 pb-2 pr-2.5 pl-[13px] bg-[transparent] rounded-[99.59px] flex flex-row items-end justify-start gap-[0px_7px] border-[1px] border-solid border-gray-300 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-200 relative top-4">
           z
          </button>
        </div>
      </div>
      <div className="w-[529px] bg-black flex flex-row items-start justify-start py-[11px] px-0 box-border gap-[0px_30px] max-w-full shrink-0 mq450:flex-wrap">
        <button className="cursor-pointer py-[9px] pr-[7px] pl-3 bg-[transparent] h-[38px] rounded-[99.59px] box-border flex flex-row items-center justify-center border-[1px] border-solid border-gray-300 hover:bg-gainsboro-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-gainsboro-200">
          <div className="relative text-smi-9 leading-[19.42px] font-semibold font-inter text-white text-left">
            List your event
          </div>
        </button>
        <div className="flex-1 flex flex-row items-start justify-center gap-[0px_15px] min-w-[248px] max-w-full shrink-0 mq450:flex-wrap">
          <div className="flex-1 flex flex-col items-start justify-start py-0 pr-[5px] pl-0 box-border min-w-[85px]">
            <button className="cursor-pointer py-[7px] pr-3.5 pl-3 bg-black rounded-[99.59px] flex flex-row items-start justify-start gap-[0px_5px] border-[1px] border-solid border-deepskyblue">
            
            <Category/>
              <div className="flex flex-col items-start justify-start pt-[9px] pb-0 pr-px pl-0">
                <img
                  className="w-3 h-[7px] relative overflow-hidden shrink-0"
                  alt=""
                  src="/svg.svg"
                />
              </div>
            </button>
          </div>
          <img
            className="h-[37.8px] w-[39.8px] relative rounded-[99.59px] min-h-[38px]"
            loading="lazy"
            alt=""
            src="/link.svg"
          />
              <div className="flex-[0.9339] flex flex-col items-start justify-start py-0 pr-[13px] pl-0 box-border min-w-[82px] mq450:flex-1">
            <button
              onClick={connectWallet}
              className={`cursor-pointer pt-[9px] pb-2 pr-[5px] pl-2 bg-[transparent] self-stretch h-[38px] rounded-[99.59px] box-border flex flex-row items-center justify-center border-[1px] border-solid ${
                isWalletConnected ? 'border-green-500' : 'border-deepskyblue'
              } hover:bg-steelblue-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-steelblue-100`}
            >
              <div className="relative text-smi-9 leading-[19.42px] font-semibold font-inter text-white text-left" onClick={connectWallet}>
                {isWalletConnected ? 'Connected' : 'Connect Wallet'}
              </div>
            </button>
          </div>
         
        </div>
      </div>
    </div>
  );
};
export async function getStaticPaths() {
  // Fetch dynamic data and return an array of paths
  // Example: return { paths: [{ params: { slug: 'example' } }], fallback: false };
}

export async function getStaticProps({ params }) {
  // Fetch data for the specific path
  // Example: const data = fetchData(params.slug);
  // return { props: { data } };
}

export default FrameComponent;
