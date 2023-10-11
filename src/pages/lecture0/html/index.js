import { Layout, LectureLayout } from "@/components/";
import React from "react";

const HTML = () => {
  return (
    <div>
      <h1>HTML</h1>
      <div>
        <h2>What is HTML ?</h2>
        <p>
          <b>HTML (HyperText Markup Language)</b> is the most basic building
          block of the Web. It defines the meaning and structure of web
          content."Hypertext" refers to links that connect web pages to one
          another, either within a single website or between websites. Links are
          a fundamental aspect of the Web. By uploading content to the Internet
          and linking it to pages created by other people, you become an active
          participant in the World Wide Web.
        </p>
      </div>
      <div>
        <h2 class="highlight">Tags</h2>
        <p class="content">
          An HTML tag is a piece of markup language used to indicate the
          beginning and end of an HTML element in an HTML document.
        </p>
        <code>
          <h1 class="highlight">&lt;h1&gt;Heading&lt;/h1&gt;</h1>
          <h3>&lt;div&gt;&lt;/div&gt;</h3>
          <h3>&lt;main&gt;&lt;/main&gt;</h3>
          <h3>&lt;footer&gt;&lt;/footer&gt;</h3>
          <h3>&lt;header&gt;&lt;/header&gt;</h3>
        </code>
      </div>
      <div>
        <h2 class="highlight">Attributes</h2>
        <p class="content">
          An HTML attribute is a special word that provides additional
          information about an HTML element. HTML attributes are always
          specified in the start tag of the element
        </p>
        <code>
          <h1>
            &lt;h1 <b>class="active"</b>&gt;Heading&lt;/h1&gt;
          </h1>
        </code>
      </div>
      <div>
        <h2 class="highlight">DOM</h2>
        <p class="content">
          DOM stands for Document Object Model. It is an interface that connects
          web pages to scripts or programming languages by representing the
          structure of a document, such as HTML, in memory. The DOM represents a
          document with a logical tree, where each branch ends in a node, and
          each node contains objects
        </p>
        <pre>
          <code>
            &lt;html lang="en"&gt; &lt;head&gt; &lt;meta charset="UTF-8" /&gt;
            &lt;meta http-equiv="X-UA-Compatible" content="IE=edge" /&gt;
            &lt;meta name="viewport" content="width=`, initial-scale=1.0" /&gt;
            &lt;title Documen&lt;&gt;/title&gt; &lt;/head&gt;
            &lt;body&gt;&lt;/body&gt; &lt;/html&gt;
          </code>
        </pre>
      </div>
      <div>
        <h2 class="highlight">Text Basics</h2>
        <p class="content">
          There are six section heading elements, h1, h2, h3, h4, h5, and h6,
          with h1 being most important and <h6> the least. </h6>
        </p>
        <code>
          <h3>
            &lt;h1 <b>class="active"</b>&gt;Heading&lt;/h1&gt;
          </h3>
        </code>
      </div>
      <div>
        <h2 class="highlight">Link</h2>
        <p class="content">
          The "a" anchor tag, along with the href attribute, create a hyperlink.
          Links are the backbone of the internet.
        </p>
        <code>
          <h3>
            &lt;a <b>href="https://github.com/youngsterjaidev"</b>
            &gt;GitHub&lt;/h1&gt;
          </h3>
        </code>
      </div>
      <div>
        <h2 class="highlight">Forms</h2>
        <p class="content">
          With forms, you can enable users to interact with your website or
          application, validate the information entered, and submit the data to
          a server. HTML attributes can enable requiring the user to select form
          controls or enter a value.
        </p>
        <code>
          <h3>
            &lt;input <b>type="text"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="email"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="password"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="tel"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="number"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="date-time"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="radio"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="checkbox"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>
            &lt;input <b>type="file" accept="image/*"</b>&gt;&lt;/input&gt;
          </h3>
          <h3>&lt;label&gt;&lt;/label&gt;</h3>
          <h3>&lt;fieldset&gt;&lt;/fieldset&gt;</h3>
          <h3>&lt;legend&gt;&lt;/legend&gt;</h3>
          <h3>&lt;textarea id="" cols="30" rows="10"&gt;&lt;/textareagt;</h3>
        </code>
      </div>
      <div>
        <h2 class="highlight">Image</h2>
        <p class="content">
          Decorative images, such as background gradients on buttons or
          background images on sections of content or the full page, are
          presentational and should be applied with CSS
        </p>
        <code>
          <h3>
            &lt;img <b>src="https://github.com/youngsterjaidev"</b>
            &gt;img&lt;/img&gt;
          </h3>
        </code>
      </div>
    </div>
  );
};

HTML.getLayout = (page) => {
  return (
    <Layout>
      <LectureLayout>{page}</LectureLayout>
    </Layout>
  );
};

console.log(HTML.getLayout);

export default HTML;
