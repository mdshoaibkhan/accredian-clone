export default function Trusted() {
  return (
    <section id="trusted" className="bg-gray-50 px-8 py-20">
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Trusted By Leading Companies
      </h2>

      <p className="mt-4 text-center text-gray-600">
        Helping top organizations build skilled teams.
      </p>

      <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        <div className="rounded-xl bg-white p-6 text-center shadow-md font-semibold">
          Google
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-md font-semibold">
          Amazon
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-md font-semibold">
          Infosys
        </div>

        <div className="rounded-xl bg-white p-6 text-center shadow-md font-semibold">
          TCS
        </div>
      </div>
    </section>
  );
}
