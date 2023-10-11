import React from "react";

let data = [
  {
    title: "Number",
    description:
      "Number: used for all number values (integer and floating point) except for very big integers.",
    code: "let num = 7",
  },
  {
    title: "string",
    description: "BigInt: used for arbitrarily large integers.",
    code: "let str = 'abc'",
  },
  {
    title: "Boolean",
    description:
      "Boolean: true and false — usually used for conditional logic.",
    code: "let bool = false",
  },
  {
    title: "Symbol",
    description:
      "Symbol: used for creating unique identifiers that won't collide.",
    code: "let num = 7",
  },
  {
    title: "Object",
    description:
      "Number: used for all number values (integer and floating point) except for very big integers.",
    code: "let num = 7",
  },
  {
    title: "Null",
    description: "Null: indicating a deliberate non-value.",
    code: "let num = 7",
  },
  {
    title: "Undefined",
    description:
      "Undefined: indicating that a variable has not been assigned a value.",
    code: "let num = 7",
  },
  {
    title: "BigInt",
    description: "BigInt: used for arbitrarily large integers.",
    code: "let num = 7",
  },
];

const Article = ({ title, description, code }) => {
  console.log(title, description, code);
  return (
    <article>
      <h3>{title || ""}</h3>
      <p>{description}</p>
      <pre>
        <code>{code}</code>
      </pre>
    </article>
  );
};

const DataType = () => {
  return (
    <div>
      <div>
        <h1>Data Types</h1>
        <h3>There are 8 Data types in JavaScript</h3>
        <ul>
          <li>Number</li>
          <li>String</li>
          <li>Boolean</li>
          <li>Symbol</li>
          <li>Object</li>
          <li>Null</li>
          <li>Undefined</li>
          <li>BigInt</li>
        </ul>
      </div>

      <section>
        {data.map((el, i) => (
          <Article key={i} {...el} />
        ))}
      </section>
    </div>
  );
};

export default DataType;
