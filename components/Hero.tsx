export default function Hero() {
  return (
    <section className="grid items-center gap-10 px-8 py-20 md:grid-cols-2">
      <div>
        <h1 className="text-5xl font-bold leading-tight text-gray-900">
          Build Future-Ready Teams With{" "}
          <span className="text-blue-600">Accredian</span>
        </h1>

        <p className="mt-6 text-lg text-gray-600">
          Enterprise learning programs for modern organizations.
        </p>

        <button className="mt-8 rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700">
          Request Demo
        </button>
      </div>

      <div className="rounded-2xl bg-blue-50 p-10 text-center shadow-md">
        <h2 className="text-3xl font-bold text-blue-700">10,000+</h2>
        <p className="mt-3 text-gray-600">Professionals Upskilled</p>
      </div>
    </section>
  );
}