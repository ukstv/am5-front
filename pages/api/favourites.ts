import { gql } from '@apollo/client'
import { getClients } from '../../lib/graphql';

const ALL_FAVOURITES_QUERY = gql`
    query {
        accountAccessIndex(last: 100) {
            edges {
                node {
                    id
                }
            }
        }
    }
`
export default async function allFavourites(req: any, res: any) {
    const {apolloClient} = await getClients()

    const allFavouritesResults = await apolloClient.query({
        query: ALL_FAVOURITES_QUERY,
        fetchPolicy: 'network-only'
    })

    const favs = allFavouritesResults.data.accountIndex?.edges || {}
    console.log("favs:", favs)
    return res.status(200).json(favs);
}