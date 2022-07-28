import knex, { Knex } from 'knex'
import { ComposeClient } from '@composedb/client'
import { getClients } from '../../lib/graphql';
import { gql } from '@apollo/client'
import { definition } from '../../lib/__generated__/definition'
import { StreamID } from '@ceramicnetwork/streamid'


export const compose = new ComposeClient({ ceramic: 'http://127.0.0.1:7007', definition })
const filename = `~/.ceramic/indexing.sqlite`

/*
"Account":"kjzl6hvfrbw6c810wu6xu4u9ypypj7gezr0ezkknqq7h3hoetwgqv1w4velyppd"
"AccountAccess":"kjzl6hvfrbw6c7zsfvbmw4qg52581kx1abrbtldbgngbhswkqcfmmn2u9gfrrnx"
"Policy":"kjzl6hvfrbw6cac409odx0a5kzh67537lp4n2n1mutzbnuc7rug8kuhq9rzd0ym"

ORG
"Controller DID: "614bfc7769ba7c6b33fac6780fa2c9a0f2f8ba8a826fec535c97651d5ecd5f1f"
 */

const CREATE_ACCOUNT_ACCESS_MUTATION = gql`
    mutation CreateAccountAccess($input: CreateAccountAccessInput!) {
        createAccount(input: $input) {
            document {
                descr
                controller_did
                profile
                access
            }
        }
    }
`

export default async function createAccountAccess(req: any, res: any) {

    const {apolloClient} = await getClients()
    const createMessageResult = await apolloClient.mutate({
        mutation: CREATE_ACCOUNT_ACCESS_MUTATION,
        variables: {
            input: {
                content: {
                    descr: 'Test Account User',
                    controller_did: '614bfc7769ba7c6b33fac6780fa2c9a0f2f8ba8a826fec535c97651d5ecd5f1f',
                    profile: undefined,
                    access: []
                }
            }
        }
    })

    console.log(createMessageResult)

    /*const createTaskResult = await apolloClient.mutate({
        mutation: CREATE_TASK_MUTATION,
        variables: {
            input: {
                content: {
                    content: createMessageResult.data.createIntegrationMessage.document.id,
                    assignee: 'StephH#4028',
                    completed: false,
                }
            }
        }
    })*/

    return res.status(200).json(true);

}

export async function queryAccountAccess() {

    const dbConnection = knex({
        client: 'sqlite3',
        useNullAsDefault: true,
        connection: {
            filename: filename,
        },
    })

    /*
        await dbConnection.raw('DELETE FROM kjzl6hvfrbw6c7zsfvbmw4qg52581kx1abrbtldbgngbhswkqcfmmn2u9gfrrnx;')
        await dbConnection.raw(
            'INSERT INTO kjzl6hvfrbw6c7zsfvbmw4qg52581kx1abrbtldbgngbhswkqcfmmn2u9gfrrnx ()'
        )
        */

}