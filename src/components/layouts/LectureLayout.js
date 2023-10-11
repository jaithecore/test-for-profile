import React from "react";
import Controls from "../Controls";

export default ({ children }) => {
  return (
    <section>
      {children}
      <Controls />
    </section>
  );
};
