import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useAccount } from "../lib/fancy/use-account";
import Link from "next/link";

const Home: NextPage = () => {
  const account = useAccount();
  return (
    <div className={"container mx-auto"}>
      <div className={"flex justify-between top-menu mt-4"}>
        <div className={"flex top-menu-menu"}>
          <div className={"font-bold"}>am5</div>
          <div className={"flex ml-4"}>
            <Link href={"/favourites"} passHref={true}>
              <a className={"top-menu-menu-item"}>Favourites</a>
            </Link>
            <Link href={"/users"} passHref={true}>
              <a className={"top-menu-menu-item"}>Users</a>
            </Link>
            <Link href={"/policies"} passHref={true}>
              <a className={"top-menu-menu-item"}>Policies</a>
            </Link>
          </div>
        </div>
        <div>
          <ConnectButton />
        </div>
      </div>
      <div>foo</div>
    </div>
  );
};

export default Home;
