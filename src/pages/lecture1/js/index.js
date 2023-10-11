import React from "react";
import Link from "next/link";
import styles from "@/styles/lecture.module.css";

const js = () => {
  return (
    <div>
      <ul className={styles.ul}>
        <li>
          <Link href="/lecture1/js/function">Functions</Link>
        </li>
        <li>
          <Link href="/lecture1/js/variables">Variables</Link>
        </li>
        <li>
          <Link href="/lecture1/js/data_types">Data Types</Link>
        </li>
      </ul>
    </div>
  );
};

export default js;
