import { NextPage } from "next";
import { Container } from "../lib/components/container";
import { useEffect, useState } from "react";

const FavouritesPage: NextPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        loadFavourites().catch(err => console.log(err))
    }, [])

    let loadFavourites = async () => {
        setLoading(true)
        const res = await fetch("/api/favourites")
        setData(await res.json());
        setLoading(false);
    };

    console.log("data:", data)
  return <Container>Favourites List</Container>;
};

export default FavouritesPage;
