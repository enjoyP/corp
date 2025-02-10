import Hero from "@/components/hero";
import React from "react";

import performanceImg from "@/public/performance.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Performance",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <Hero imgUrl={performanceImg} altTxt="Hero" content='We serve high performance applications.'/>
  );
}