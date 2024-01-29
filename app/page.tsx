"use client";

import {
  SyntheticEvent,
  useState,
} from "react";
import HTMLDropdown from "./_components/HTMLDropdown";
import ShadCnDropdown from "./_components/ShadCnDropdown";

export default function Home() {
  return (
    <main className="m-10">
      <h1 className="text-2xl font-extrabold">
        Dropdown Inputs
      </h1>
      <section className="m-4">
        <h3 className="underline text-lg">
          HTML Dropdown & Select
        </h3>
        <HTMLDropdown />
        <section className="mt-4">
          <h3 className="underline text-lg">
            ShadCn Dropdown & Select
          </h3>
          <div className="mt-4">
            <ShadCnDropdown />
          </div>
        </section>
      </section>
    </main>
  );
}
