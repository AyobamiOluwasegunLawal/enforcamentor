import React from "react";

const SectionInfo = ({ sectionPTitle, sectionHead, sectionDesc, style }) => {
  return (
    <div className={`space-y-5`}>
      <p className="pTitle">{sectionPTitle}</p>

      <h1 className={`h1Heading ${style} `}>{sectionHead}</h1>

      <p className="pDesc">{sectionDesc}</p>
    </div>
  );
};

export default SectionInfo;
