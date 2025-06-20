"use client";
import React from "react";

import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { anvil, zksync, base, mainnet, sepolia } from "wagmi/chains";

export const rainbowKitConfig = getDefaultConfig({
  appName: "sender",
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID,
  chains: [zksync, base, mainnet, sepolia, anvil],
  ssr: false,
});
