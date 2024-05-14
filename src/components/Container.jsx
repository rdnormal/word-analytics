import { useState } from "react";
import Stats from "./Stats";
import Textarea from "./Textarea";
import { FACEBOOK_MAX_CHARS, INSTAGRAM_MAX_CHARS } from "../lib/const";

export default function Container() {
  const [text, setText] = useState("");

  const stats = {
    numberOfChars: text.length,
    numberOfWords: text.split(/\s/).filter((word) => word !== "").length,
    insCharsLeft: INSTAGRAM_MAX_CHARS - text.length,
    fbCharsLeft: FACEBOOK_MAX_CHARS - text.length,
  };

  return (
    <main className="container">
      <Textarea text={text} setText={setText} />
      <Stats stats={stats} />
    </main>
  );
}
