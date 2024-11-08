import React from "react";
import Email from "./Email";
import Address from "./Address";
import Phones from "./Phones";
import Messengers from "./Messengers";

export default function ContactsList() {
  return (
    <ul className="">
      <Email />
      <Address />
      <Phones />
      <Messengers />
    </ul>
  );
}
