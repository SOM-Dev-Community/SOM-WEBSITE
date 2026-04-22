"use client";

import { motion } from "framer-motion";
import { MissionBlock } from "./foundation/MissionBlock";
import { PurposeBlock } from "./foundation/PurposeBlock";
import { SectionIntro } from "./foundation/SectionIntro";
import { SectionWrapper } from "./foundation/SectionWrapper";
import { VisionBlock } from "./foundation/VisionBlock";

const missionPoints = [
  "Train ministers' children in the Word and in the values that sustain a life of ministry.",
  "Strengthen identity, character, and spiritual confidence for everyday life and service.",
  "Create spaces for fellowship, mentorship, and practical ministry expression across nations.",
  "Raise bold young ministers who will advance the Gospel with conviction and consistency.",
];

const missionDescription =
  "We exist to reach ministers' children everywhere with the realities of God's Word, equipping them through encounters, training, and service so they can live with conviction and take the Gospel further.";

const purposeDescription =
  "Our purpose is to help every minister's child understand that their story is not accidental. They were born into a divine context with a clear responsibility and a rich inheritance in Christ, so we build spaces where belonging, discipleship, and spiritual growth can mature into joyful participation in God's agenda.";

const visionDescription =
  "We see a global community of ministers' children standing strong in truth, united in purpose, and serving as trained soldiers for the expansion of the Gospel.";

const revealUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.25 },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const dividerMotion = {
  initial: { opacity: 0, scaleX: 0.9 },
  whileInView: { opacity: 1, scaleX: 1 },
  viewport: { once: true, amount: 0.9 },
  transition: { duration: 0.55, ease: "easeOut" },
};

export function MissionPurposeVisionSection() {
  return (
    <SectionWrapper>
      <motion.div {...revealUp}>
        <SectionIntro
          label="OUR FOUNDATION"
          title="Mission. Purpose. Vision."
          description="What drives us, defines us, and directs us."
        />
      </motion.div>

      <motion.div {...revealUp}>
        <MissionBlock
          title="Our Mission"
          description={missionDescription}
          points={missionPoints}
        />
      </motion.div>

      <motion.div
        {...dividerMotion}
        className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <motion.div {...revealUp}>
        <PurposeBlock
          title="Our Purpose"
          description={purposeDescription}
        />
      </motion.div>

      <motion.div
        {...dividerMotion}
        className="mx-auto h-px w-full max-w-4xl bg-gradient-to-r from-transparent via-slate-200 to-transparent"
      />

      <motion.div {...revealUp}>
        <VisionBlock
          title="Our Vision"
          description={visionDescription}
        />
      </motion.div>
    </SectionWrapper>
  );
}
