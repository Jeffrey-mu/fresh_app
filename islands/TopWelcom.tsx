/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState } from "preact/hooks";
export default function TopWelcom() {
  const [showText, setShowText] = useState(true);
  function hiedTip() {
    setShowText(false)
  }
  return showText && <p class={tw`mt-6 mx-2 border p-10`}>
    Welcome to`fresh`.Try updating this message in the./islands/TopWelcom.tsx
    file, and refresh.
    <button onClick={hiedTip} title="close text" class={tw('text(red-900) float-right px-10')} >x</button>
  </p >

}
