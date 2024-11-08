import React from "react";

import Address from "./Address";
import Email from "./Email";
import Messengers from "./messengers/Messengers";
import Phones from "./phones/Phones";

export default function ContactsList() {
  return (
    <ul className="flex flex-col gap-6">
      <Email />
      <Address />
      <Phones />
      <Messengers />
    </ul>
  );
}
