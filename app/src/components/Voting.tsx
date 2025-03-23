import ElectionTimer from "./TimerComponent";
import CandidateList from "./CandidateList";

const Voting_Component = () => {
  const electionEndingTime = Date.now() + 5 * 60 * 60 * 1000;

  return (
    <section className="flex flex-col h-screen text-[50px] font-bold py-10 px-10 bg-[#160a01] w-full ">
      <div className="h-64 flex-auto">
        <div className="flex justify-between px-10 pt-10">
          <div className="flex flex-col gap-10">
            <h1>
              <span className="text-[#d85c02]">Welcome</span>, Student !
            </h1>
            <div>
              <CandidateList />
            </div>
          </div>
          <div>
            <ElectionTimer electionEndingTime={electionEndingTime} />
          </div>
        </div>
      </div>
      <div className="w-64 flex-auto"></div>
    </section>
  );
};

export default Voting_Component;
