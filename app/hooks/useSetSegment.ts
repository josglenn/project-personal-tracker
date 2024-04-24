"use client";

import { useState } from "react";

const useSetSegment = () => {
  const [segment, setSegment] = useState("");

  return {
    segment,
    setSegment,
  };
};

export default useSetSegment;
