use anchor_lang::prelude::*;
mod account_states;
mod transaction_accounts;
pub use account_states::*;
pub use transaction_accounts::*;

declare_id!("8MRQoE2dysjdPs4Ro9UyA94DUEaQ38X7f97ZJtKxEYaB");

#[program]
pub mod truvote {
    use super::*;

    pub fn initialise_candidate(ctx: Context<InitialiseCandidate>, candidate_id: u64, name: String) -> Result<()> {
        let candidate_data = &mut ctx.accounts.candidate;
        let counters = &mut ctx.accounts.counters;
        if candidate_id != counters.candidate_id+1 {
            return err!(CustomErrors::InvalidId);
        }
        counters.candidate_id += 1;
        candidate_data.candidate_id = counters.candidate_id;
        candidate_data.candidate_name = name;
        Ok(())
    }

    pub fn initialise_election(ctx: Context<InitialiseElection>, election_id: u64, title: String, start: u64, end: u64) -> Result<()> {
        let election_data = &mut ctx.accounts.election;
        let counters = &mut ctx.accounts.counters;

        if election_id != counters.election_id + 1 {
            return err!(CustomErrors::InvalidId);
        }
        counters.election_id += 1;
        election_data.election_id = counters.election_id;

        election_data.election_title = title;
        election_data.election_start = start;
        election_data.election_end = end;
        Ok(())
    }

    pub fn initialise_vote(ctx: Context<InitialiseVote>, election_id: u64, candidate_id: u64) -> Result<()> {
        let vote_data = &mut ctx.accounts.vote;
        let user_data = &ctx.accounts.user;
        vote_data.user = user_data.key();
        vote_data.election_id = election_id;
        vote_data.candidate = candidate_id;
        Ok(())
    }

    pub fn initialise_counters(ctx: Context<InitialiseCounters>) -> Result<()> {
        let counters: &mut _ = &mut ctx.accounts.counters;
        counters.candidate_id = 0;
        counters.election_id = 0;
        Ok(())
    }
}