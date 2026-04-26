export default function Features() {
  return (
    <section id="features" className="px-8 py-20 bg-white">
      <h2 className="text-center text-4xl font-bold text-gray-900">
        Why Choose Accredian?
      </h2>

      <p className="mt-4 text-center text-gray-600">
        Designed for enterprise learning and workforce growth.
      </p>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        
        <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600">
            Expert Mentors
          </h3>

          <p className="mt-4 text-gray-600">
            Learn directly from experienced industry professionals.
          </p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600">
            Live Learning
          </h3>

          <p className="mt-4 text-gray-600">
            Interactive sessions, workshops and practical training.
          </p>
        </div>

        <div className="rounded-2xl border p-8 shadow-sm hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600">
            Certifications
          </h3>

          <p className="mt-4 text-gray-600">
            Earn recognized certificates after completion.
          </p>
        </div>

      </div>
    </section>
  );
}
