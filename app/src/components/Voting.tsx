import ElectionTimer from "./TimerComponent";
import CandidateList from "./CandidateList";

const Voting_Component = () => {
  const electionEndingTime = Date.now() + 5 * 60 * 60 * 1000;

  return (
    <section className="flex flex-col h-screen text-[50px] font-bold py-10 px-10 bg-[#160a01] w-full ">
      <div className="h-64 flex-auto">
        <div className="flex justify-between px-10 pt-10">
          <div className="flex flex-col gap-10">
            <h1 className="">
              <span className="text-[#d85c02]">Welcome</span>, Student !
            </h1>
            <div className="">
              <CandidateList />
            </div>
          </div>
          <div>
            {/* <h3 className="text-[38px] font-medium">Election Ends in</h3> */}
            <ElectionTimer electionEndingTime={electionEndingTime} />
          </div>
        </div>
      </div>
      <div className="w-64 flex-auto"></div>
    </section>
  );
};

export default Voting_Component;
