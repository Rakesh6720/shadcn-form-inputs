"use client";
import React, { useState } from "react";

function HTMLDropdown() {
  const [color, setColor] =
    useState<string>("");

  const onChangeHandler = (e: any) => {
    setColor(e.target.value);
  };

  return (
    <>
      <section className="mt-4">
        <label htmlFor="colors">
          Choose a Color:{" "}
        </label>
        <select
          name="colors"
          id="colors"
          onChange={(e) => {
            onChangeHandler(e);
          }}
        >
          <option value=""></option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="green">
            Green
          </option>
          <option value="yellow">
            Yellow
          </option>
        </select>
      </section>
      <section className="flex gap-x-2 mt-4 items-center">
        <h2>Chosen Color:</h2>
        <div
          style={{
            backgroundColor: color,
            width: "6rem",
            height: "2rem",
            borderRadius: "5px",
            border: "1px solid black",
          }}
        />
      </section>
    </>
  );
}

export default HTMLDropdown;
