import { NextPage } from "next";
import { Container } from "../lib/components/container";
import { useEffect, useState } from "react";

const DebugPage: NextPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        createAccess().catch(err => console.log(err))
    }, [])

    let createAccess = async () => {
        setLoading(true)
        const res = await fetch("/api/account-access")
        setData(await res.json());
        setLoading(false);
    };

    console.log("data:", data)
    return <Container>Create AccountAccess</Container>;
};

export default DebugPage;
