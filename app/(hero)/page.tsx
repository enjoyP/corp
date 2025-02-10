import React from "react";

import homepage from "@/public/homepage.jpg";
import Hero from "@/components/hero";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Generated by create next app",
};

export default function Home() {
  return (
    <Hero imgUrl={homepage} altTxt="Hero" content='Welcome to our website'/>
  );
}
