import React from "react";
import Hero from "@/components/hero";

import reliabilityImg from "@/public/reliability.jpg";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reliability",
  description: "Generated by create next app",
};

export default function Page() {
  return (
    <Hero imgUrl={reliabilityImg} altTxt="Hero" content='Super high reliability hosting.'/>
  );
}