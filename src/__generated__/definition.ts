// This is an auto-generated file, do not edit manually
import type { RuntimeCompositeDefinition } from '@composedb/types'
export const definition: RuntimeCompositeDefinition = {"models":{"Account":"kjzl6hvfrbw6c810wu6xu4u9ypypj7gezr0ezkknqq7h3hoetwgqv1w4velyppd","AccountAccess":"kjzl6hvfrbw6c7zsfvbmw4qg52581kx1abrbtldbgngbhswkqcfmmn2u9gfrrnx","Policy":"kjzl6hvfrbw6cac409odx0a5kzh67537lp4n2n1mutzbnuc7rug8kuhq9rzd0ym"},"objects":{"Account":{"descr":{"type":"string","required":false},"access":{"type":"list","required":false,"item":{"type":"string","required":false}},"profile":{"type":"string","required":false},"controller_did":{"type":"view","viewType":"documentAccount"}},"AccountAccess":{"user":{"type":"did","required":false},"descr":{"type":"string","required":false},"policy":{"type":"string","required":false},"controller_did":{"type":"view","viewType":"documentAccount"}},"Policy":{"descr":{"type":"string","required":true},"scope":{"type":"string","required":true},"access":{"type":"string","required":true},"effect":{"type":"string","required":false},"is_active":{"type":"boolean","required":false},"controller_did":{"type":"view","viewType":"documentAccount"}}},"accountData":{"account":{"type":"node","name":"Account"},"accountAccessList":{"type":"connection","name":"AccountAccess"},"policyList":{"type":"connection","name":"Policy"}}}