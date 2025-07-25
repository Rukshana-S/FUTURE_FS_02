function Navbar({ setCategory }) {
  return (
    <nav className="bg-black text-white p-4 flex justify-center gap-6 text-lg font-semibold">
      <button onClick={() => setCategory("boys")} className="hover:text-yellow-300">
        Boys
      </button>
      <button onClick={() => setCategory("girls")} className="hover:text-pink-300">
        Girls
      </button>
    </nav>
  );
}

export default Navbar;
