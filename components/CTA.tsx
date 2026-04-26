"use client";

import { useState } from "react";

export default function CTA() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email }),
    });

    const data = await res.json();

    setMessage(data.message);
    setName("");
    setEmail("");
  };

  return (
    <section className="bg-blue-600 px-8 py-20 text-center text-white">
      <h2 className="text-4xl font-bold">
        Ready to Upskill Your Team?
      </h2>

      <p className="mt-4 text-blue-100">
        Request a callback from our experts.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mx-auto mt-8 max-w-md space-y-4"
      >
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg p-3 text-black"
          required
        />

        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg p-3 text-black"
          required
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-white py-3 font-semibold text-blue-600"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4">{message}</p>}
    </section>
  );
}
