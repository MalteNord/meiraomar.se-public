"use client";

import { NextStudio } from "next-sanity/studio";
import { useEffect, useState } from "react";
import config from "../../../sanity.config";
import StudioLoading from "./StudioLoading";

export default function StudioClient() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show loading screen while studio initializes
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <StudioLoading />;
  }

  return <NextStudio config={config} />;
}
