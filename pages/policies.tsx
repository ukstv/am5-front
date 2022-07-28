import { NextPage } from "next";
import { Container } from "../lib/components/container";
import { useProvider, useAccount, useClient, useSignMessage } from "wagmi";
import { EthereumAuthProvider } from "@ceramicnetwork/blockchain-utils-linking";
import { Ed25519Provider } from "key-did-provider-ed25519";
import { DIDSession } from "did-session";
import * as cacao from "ceramic-cacao";
import { signMessage } from "@wagmi/core";
import * as uint8arrays from 'uint8arrays'
import { useEffect, useState } from "react";
import {
  BehaviorSubject,
  firstValueFrom,
  lastValueFrom,
  Subject,
  tap,
} from "rxjs";
import { CacaoBlock } from "ceramic-cacao";

const f = new Subject<string>();
function useSigner() {
  const s = useSignMessage();

  useEffect(() => {
    if (s.data || s.error) {
      if (s.data) {
        f.next(s.data);
      }
      if (s.error) {
        f.error(s.error);
      }
    }
  }, [s.data, s.error]);

  return (message: string): Promise<string> => {
    s.signMessage({ message: message });
    return firstValueFrom(f);
  };
}

const PoliciesPage: NextPage = () => {
  const provider = useProvider();
  const account = useAccount();
  const client = useClient();
  const s = useSigner();

  const handleAddPolicy = async () => {
    const address = account.address;
    if (!address) return;
    const siwe = new cacao.SiweMessage({
      domain: "iam.example",
      address: address,
      uri: "did:pkh:foo",
      chainId: "1",
      version: "1",
      issuedAt: new Date().toISOString().replace(/\..+/, "Z"),
      resources: ["http://roadmap.ceramic.network/roadmap"],
    });
    const signature = await s(siwe.signMessage());
    const signed = new cacao.SiweMessage(
      Object.assign({}, siwe, { signature })
    );
    const cacaoInstance = cacao.Cacao.fromSiweMessage(signed);
    const block = await cacao.CacaoBlock.fromCacao(cacaoInstance);
    console.log("block", block);
    console.log('base64', uint8arrays.toString(block.bytes, 'base64'))
    // f.subscribe((d) => {
    //   console.log("d.1", new Date(), d);
    // });
    // f.subscribe(next => {
    //   console.log('n', next)
    // })
    // console.log('pr', provider)
    // console.log('pr.2', client.provider)
    // const ethProvider0 = provider.providerConfigs[1].provider
    // globalThis.provider0 = ethProvider0
    // globalThis.provider = provider
    // const ethProvider = {
    //   request: (input: any) => {
    //     const {method, params} = input
    //     if (method === 'personal_sign') {
    //       console.log('m.0', method, params)
    //       throw new Error(`nope`)
    //     }
    //     return ethProvider0.send(method, params)
    //   }
    // }
    // const authProvider = new EthereumAuthProvider(ethProvider, address)
    // const session = await DIDSession.authorize(authProvider, {
    //   resources: ["resoruces"]
    // })
    // console.log('s', session)
  };

  return (
    <Container>
      Policies List
      <div>
        <button onClick={handleAddPolicy}>Add policy</button>
      </div>
    </Container>
  );
};

export default PoliciesPage;
