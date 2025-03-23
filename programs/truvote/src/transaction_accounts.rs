use anchor_lang::prelude::*;
use crate::account_states::*;

const ANCHOR_ACC_DISCRIMINATOR_SIZE: usize = 8;

#[derive(Accounts)]
#[instruction(election_id: u64)]
pub struct InitialiseElection<'info>{
    #[account(mut)]
    pub admin: Signer<'info>,

    #[account(
        init,
        payer = admin,
        space = ANCHOR_ACC_DISCRIMINATOR_SIZE + Election::INIT_SPACE,
        seeds = [&election_id.to_le_bytes(), ELECTION_SEEDS_PART],
        bump,
    )]
    pub election: Account<'info, Election>,

    #[account(mut, seeds = [COUNTERS_SEED_PART], bump)]
    pub counters: Account<'info, Counters>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct InitialiseCounters<'info> {
    #[account(mut)]
    pub admin: Signer<'info>,

    #[account(
        init,
        payer = admin,
        seeds = [COUNTERS_SEED_PART], bump,
        space = ANCHOR_ACC_DISCRIMINATOR_SIZE+Counters::INIT_SPACE
    )]
    pub counters: Account<'info, Counters>,

    pub system_program: Program<'info, System>
}

#[derive(Accounts)]
#[instruction(candidate_id: u64)]
pub struct InitialiseCandidate<'info> {
    #[account(mut)]
    pub admin: Signer<'info>,

    #[account(
        init,
        payer = admin,
        seeds = [&candidate_id.to_le_bytes(), CANDIDATE_SEEDS_PART],
        bump,
        space = ANCHOR_ACC_DISCRIMINATOR_SIZE + Candidate::INIT_SPACE,
    )]
    pub candidate: Account<'info, Candidate>,

    #[account(
        mut,
        seeds = [COUNTERS_SEED_PART],
        bump
    )]
    pub counters: Account<'info, Counters>,

    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
#[instruction(election_id: u64, candidate_id: u64)]
pub struct InitialiseVote<'info> {
    #[account(mut)]
    pub user: Signer<'info>,

    #[account(
        init,
        payer = user,
        seeds = [VOTE_SEEDS_PART],
        bump,
        space = ANCHOR_ACC_DISCRIMINATOR_SIZE+Vote::INIT_SPACE
    )]
    pub vote: Account<'info, Vote>,

    pub system_program: Program<'info, System>
}