import { useEffect, useState } from "react";
import { useMagic } from "../magic/MagicProvider";
import { createEcdsaKernelAccountClient } from "@zerodev/presets/zerodev";
import { providerToSmartAccountSigner } from "permissionless";
import { sepolia } from "viem/chains";

export const useZeroDevKernel = () => {
  const { magic } = useMagic();
  const [kernelClient, setKernelClient] = useState<
    ReturnType<typeof createEcdsaKernelAccountClient> | undefined
  >(undefined);
  const [scaAddress, setScaAddress] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchAccount = async () => {
      const magicProvider = await magic?.wallet.getProvider();
      const smartAccountSigner = await providerToSmartAccountSigner(
        magicProvider
      );

      const client = await createEcdsaKernelAccountClient({
        chain: sepolia,
        projectId: "5af2c843-d36b-4db0-903d-0961aa8a65d3",
        signer: smartAccountSigner,
        paymaster: "SPONSOR", // defaults to "SPONSOR". Use "NONE" if no policy is required.
      });
      setKernelClient(client);

      setScaAddress(client.account.address);
    };

    fetchAccount();
  }, []);

  return {
    kernelClient,
    scaAddress,
  };
};
