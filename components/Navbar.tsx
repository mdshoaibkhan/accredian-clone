export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 shadow-md bg-white sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-blue-600">
        Accredian
      </h1>

      <div className="hidden gap-8 md:flex text-gray-700 font-medium">
        <a href="#features" className="hover:text-blue-600">
          Features
        </a>

        <a href="#trusted" className="hover:text-blue-600">
          Clients
        </a>

        <a href="#contact" className="hover:text-blue-600">
          Contact
        </a>
      </div>

      <button className="rounded-lg bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
        Login
      </button>
    </nav>
  );
}
