// import { useCallback, useEffect, useState } from "react";
// import Divider from "@/components/ui/Divider";
// import { useMagic } from "../MagicProvider";
// import FormButton from "@/components/ui/FormButton";
// import FormInput from "@/components/ui/FormInput";
// import ErrorText from "@/components/ui/ErrorText";
// import Card from "@/components/ui/Card2";
// import CardHeader from "@/components/ui/CardHeader";
// import { getFaucetUrl, getNetworkToken } from "@/utils/network";
// import showToast from "@/utils/showToast";
// import Spacer from "@/components/ui/Spacer";
// import TransactionHistory from "@/components/ui/TransactionHistory";
// import Link from "../../../../public/link.svg";
// import { useZeroDevKernel } from "@/components/zeroDev/useZeroDevKernel";

// const SendTransaction = () => {
//   const { web3 } = useMagic();
//   const { kernelClient } = useZeroDevKernel();
//   const [toAddress, setToAddress] = useState("");
//   const [amount, setAmount] = useState("");
//   const [disabled, setDisabled] = useState(!toAddress || !amount);
//   const [hash, setHash] = useState("");
//   const [toAddressError, setToAddressError] = useState(false);
//   const [amountError, setAmountError] = useState(false);
//   const publicAddress = localStorage.getItem("user");

//   useEffect(() => {
//     setDisabled(!toAddress || !amount);
//     setAmountError(false);
//     setToAddressError(false);
//   }, [amount, toAddress]);

//   const sendTransaction = useCallback(async () => {
//     if (!web3?.utils.isAddress(toAddress)) {
//       return setToAddressError(true);
//     }
//     if (isNaN(Number(amount))) {
//       return setAmountError(true);
//     }
//     setDisabled(true);

//     try {
//       // const result = await kernelClient.sendTransaction({
//       //   to: toAddress as `0x${string}`,
//       //   data: "0x",
//       //   value: web3.utils.toWei(amount, "ether"),
//       // });

//       showToast({
//         message: `Transaction Successful. TX Hash: ${result}`,
//         type: "success",
//       });
//       setHash(result.hash);
//       setToAddress("");
//       setAmount("");
//     } catch (err) {
//       console.log(err);
//     }

//     setDisabled(false);
//   }, [web3, amount, publicAddress, toAddress]);

//   return (
//     <Card>
//       <CardHeader id="send-transaction">Send Transaction</CardHeader>
//       {getFaucetUrl() && (
//         <div>
//           <a href={getFaucetUrl()} target="_blank" rel="noreferrer">
//             <FormButton onClick={() => null} disabled={false}>
//               Get Test {getNetworkToken()}
//               <img src={Link} alt="link-icon" className="ml-[3px]" />
//             </FormButton>
//           </a>
//           <Divider />
//         </div>
//       )}

//       <FormInput
//         value={toAddress}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//           setToAddress(e.target.value)
//         }
//         placeholder="Receiving Address"
//       />
//       {toAddressError ? <ErrorText>Invalid address</ErrorText> : null}
//       <FormInput
//         value={amount}
//         onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//           setAmount(e.target.value)
//         }
//         placeholder={`Amount (${getNetworkToken()})`}
//       />
//       {amountError ? (
//         <ErrorText className="error">Invalid amount</ErrorText>
//       ) : null}
//       <FormButton
//         onClick={sendTransaction}
//         disabled={!toAddress || !amount || disabled}
//       >
//         Send Transaction
//       </FormButton>

//       {hash ? (
//         <>
//           <Spacer size={20} />
//           <TransactionHistory />
//         </>
//       ) : null}
//     </Card>
//   );
// };

// export default SendTransaction;
