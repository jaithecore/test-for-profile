import React, { useEffect } from "react";
import path from "path";
import fs from "fs";
import Link from "next/link";
import { LiaAngleLeftSolid, LiaAngleRightSolid } from "react-icons/lia";
import styles from "@/styles/components/controls.module.css";

export default () => {
  const fetchFilesList = async () => {
    try {
      // const files = await fs.readdir("/src/");
      // console.log(files);
    } catch (e) {
      console.log("Error Occured while fetching the files list !");
    }
  };

  useEffect(() => {
    fetchFilesList();
  }, []);

  return (
    <div className={styles.div}>
      <Link href="/" className={styles.a}>
        <LiaAngleLeftSolid />
      </Link>
      <Link href="/about" className={styles.a}>
        <LiaAngleRightSolid />
      </Link>
    </div>
  );
};
