import * as anchor from "@coral-xyz/anchor";
import { Program } from "@coral-xyz/anchor";
import BN from 'bn.js';
import { Truvote } from "../target/types/truvote";
import {Keypair, LAMPORTS_PER_SOL, Connection} from "@solana/web3.js";
import { countReset } from "console";

describe("Voting App", () => {
  let provider: anchor.AnchorProvider;
  let program: Program<Truvote>;
  let connection: Connection;

  beforeAll(async () => {
    provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);
    program = anchor.workspace.Truvote as Program<Truvote>;
    connection = provider.connection;
  })

  test("Initialise Counters", async () => {
    const txn = await program.methods.initialiseCounters().accounts({admin: "8h16fJw3gMapHkJLvGWmiaVntGLhbaixxSaBBbPRH5Xh"}).rpc();
    console.log(txn)
  })

  test("Initialise Candidate", async () => {
    const txn = await program.methods.initialiseCandidate(
      new BN(1, 10),
      "abcd").accounts({admin: "8h16fJw3gMapHkJLvGWmiaVntGLhbaixxSaBBbPRH5Xh"}).signers([provider.wallet.payer]).rpc();
    console.log(txn);
  })

  test("Initialise Election", async () => {
    try {
    const txn = await program.methods.initialiseElection(
      new BN(1, 10),
      "xyz",
      new BN(1742705765, 10),
      new BN(1745364365, 10)).accounts({admin: "8h16fJw3gMapHkJLvGWmiaVntGLhbaixxSaBBbPRH5Xh"}).rpc();
    console.log(txn);
    } catch (e) {
      console.log(e)
      throw new Error(e);
    }
  })

  test("Initialise Vote", async () => {
    const txn = await program.methods.initialiseVote(
      new BN(1,10),
      new BN(1,10)).accounts({user: "8h16fJw3gMapHkJLvGWmiaVntGLhbaixxSaBBbPRH5Xh"}).rpc();
    console.log(txn);
  })
})