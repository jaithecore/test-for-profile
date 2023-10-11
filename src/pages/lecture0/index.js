import Head from "next/head";
import React from "react";
import { Layout, LectureLayout } from "@/components";

const Lecture0 = () => {
  return (
    <>
      <Head></Head>
      <div>
        <h1>Lecture 0</h1>
        <h1>Front End Development</h1>
        <div>Jai Dev</div>
      </div>
    </>
  );
};

Lecture0.getLayout = (page) => {
  return (
    <Layout>
      <LectureLayout>{page}</LectureLayout>
    </Layout>
  );
};

export default Lecture0;
