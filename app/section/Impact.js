import React from "react";
import Section from "../components/Section";
import SectionInfo from "../components/SectionInfo";

const Impact = () => {
  return (
    <div className="bg-gray-100 py-20 px-10">
      <Section>
        <div>
          <div>
            <SectionInfo
              sectionPTitle={"Where Quality meets Impact"}
              sectionHead={"Our Commitment"}
              style={"h2Heading"}
            />

            <div className={"space-y-5 mb-8"}>
              <p className={"overflow-hidden text-gray-400 max-w-xl"}>
                While many regions face a shortage of skilled tech
                professionals, Africa—particularly West Africa—boasts a rapidly
                growing pool of talented and driven individuals who often lack
                access to meaningful opportunities.
              </p>

              <p className={"overflow-hidden text-gray-400 max-w-xl"}>
                At Enforca Technologies, our vision is to bridge this gap. Over
                the next five years, we aim to create world-class career
                opportunities for over 1,000 highly motivated youths, equipping
                them with practical experience and international standards of
                excellence. Our focus on quality, innovation, and impact ensures
                that the talent we nurture is not only globally competitive but
                also shaping the future of technology.
              </p>
            </div>

            <p className={"text-primary mb-10 font-bold"}>
              Learning how we are making this happen
            </p>
          </div>

          <div></div>
        </div>
      </Section>
    </div>
  );
};

export default Impact;
