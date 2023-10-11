import React from "react";
import { Layout, LectureLayout } from "@/components";

const Lecture1 = () => {
  return <h1>Lecture 1</h1>;
};

Lecture1.getLayout = (page) => {
  return (
    <Layout>
      <LectureLayout>{page}</LectureLayout>
    </Layout>
  );
};

export default Lecture1;
