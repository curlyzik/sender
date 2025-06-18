"use client";

import React, { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import SenderForm from "./SenderForm";

const Homepage = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { isConnected } = useAccount();

  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <div>
      {isMounted && (
        <>
          {isConnected && <SenderForm />}
          {!isConnected && (
            <div className="place-content-center grid h-[calc(100vh-100px)]">
              <ConnectButton
                label="Connect wallet"
                accountStatus="address"
                chainStatus="icon"
                showBalance
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Homepage;
