import { ConnectButton } from "@rainbow-me/rainbowkit";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useAccount } from "../lib/fancy/use-account";

const Home: NextPage = () => {
  const account = useAccount();
  return (
    <div className={"container mx-auto"}>
      <div className={"flex justify-between top-menu mt-4"}>
        <div className={"flex top-menu-menu"}>
          <div className={"font-bold"}>am5</div>
          <div className={"flex ml-4"}>
            <a className={"top-menu-menu-item"} href={"#"}>
              Favourites
            </a>
            <a className={"top-menu-menu-item"} href={"#"}>
              Users
            </a>
            <a className={"top-menu-menu-item"} href={"#"}>
              Policies
            </a>
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
