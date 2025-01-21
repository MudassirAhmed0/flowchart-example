"use client";
import useAnimations from "@/hooks/useAnimations";
import dynamic from "next/dynamic";
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
    </>
  );
};

export default BeCareful;
