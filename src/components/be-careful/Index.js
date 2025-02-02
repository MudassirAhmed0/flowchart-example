"use client";
import useAnimations from "@/hooks/useAnimations";
import dynamic from "next/dynamic";
import SummaryMap from "./summarymap/SummaryMap";
const Scammer = dynamic(() =>
  import("@/components/be-careful/scammer/Scammer")
);

const BeCareful = ({ en, data, global, quizData }) => {
  useAnimations();
  return (
    <>
      <Scammer
        en={en}
        title={data?.animation_title}
        desc={data?.animation_desc}
        timelineData={{
          step1message: data?.animation_step_1_message,
          step1: data?.animation_step_1,
          step2: data?.animation_step_2,
          step3: data?.animation_step_3,
          step4: data?.animation_step_4,
          step5: data?.animation_step_5,
          step6: data?.animation_step_6,
          step7: data?.animation_step_7,
          step8: data?.animation_step_8,
          step9: data?.animation_step_9,
          step10: data?.animation_step_10,
          step11: data?.animation_step_11,
        }}
      />
      <div dir="ltr" className="ltr" style={{ direction: "ltr" }}>
        <SummaryMap
          title={"Phosphate Executive Summary"}
          desc={`   We have set new records in both production and sales volumes in
            2023, driving revenues that would be the highest in 15 years in real
            terms – a testament to both strategic and operational excellence. We
            are now committing to the production of a further 1.5 million tons
            of phosphate by 2026, bringing the total to 7.5 million tons from
            the current 6 million tons installed capacity. This will serve to
            reinforce its status among the worlds’ top 3 exporters of
            phosphate-based fertilizers – currently, we cater to 20% of global
            phosphate trade.`}
          map={"phosphate"}
        />
      </div>
    </>
  );
};

export default BeCareful;
