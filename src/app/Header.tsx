import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <Image src="/favicon.ico" alt="t-sender Logo" width={32} height={32} />
        <span className="text-xl font-semibold">t-sender</span>
      </div>

      <div className="flex items-center space-x-4">
        <Link
          href="https://github.com/curlyzik/t-sender"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-600 transition" />
        </Link>
        <ConnectButton
          label="Connect wallet"
          accountStatus="address"
          chainStatus="icon"
          showBalance
        />
      </div>
    </header>
  );
};

export default Header;
