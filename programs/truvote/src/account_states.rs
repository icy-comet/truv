use anchor_lang::prelude::*;

#[constant]
pub const COUNTERS_SEED_PART: &[u8] = b"COUNTERS";

#[constant]
pub const VOTE_SEEDS_PART: &[u8] = b"VOTE";

#[constant]
pub const ELECTION_SEEDS_PART: &[u8] = b"ELECTION";

#[constant]
pub const CANDIDATE_SEEDS_PART: &[u8] = b"CANDIDATE";

#[account]
#[derive(InitSpace)]
pub struct Counters {
    pub candidate_id: u64,
    pub election_id: u64,
}

#[account]
#[derive(InitSpace)]
pub struct Election {
    pub election_id: u64,
    #[max_len(160)]
    pub election_title: String,
    pub election_start: u64,
    pub election_end: u64,
}

#[account]
#[derive(InitSpace)]
pub struct Candidate {
    pub candidate_id: u64,
    #[max_len(120)]
    pub candidate_name: String,
}

#[account]
#[derive(InitSpace)]
pub struct Vote {
    pub user: Pubkey,
    pub candidate: u64,
    pub election_id: u64,
}

#[error_code]
pub enum CustomErrors {
    #[msg("Invalid ID given")]
    InvalidId
}