import React from "react";

const ComingSoon = () => {
  return (
    <section
      className={"flex-center flex-col min-h-80 py-32 bg-gray-100 w-full px-10 gap-5"}
    >
      <h1 className={"h1Heading"}>Coming Soon!</h1>

      <p>
        We're working hard behind the scenes to bring you something amazing.
      </p>

      <p className={"flex gap-2 font-semibold group animate-pulse"}>
        {/* <Spinner className={'size-4.5'}/> */}
        Stay tuned—it's worth the wait!
      </p>

      <p>Please check back later </p>
    </section>
  );
};

export default ComingSoon;
