export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center h-[80vh] bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
      <h1 className="text-5xl font-bold">Hi, I’m Anupriya 👩‍💻</h1>
      <p className="mt-4 text-xl">Full-Stack Developer | Freelancer | Learner</p>
      <a
        href="#projects"
        className="mt-6 px-6 py-3 bg-white text-indigo-600 font-semibold rounded-lg shadow-md hover:bg-gray-200"
      >
        View My Work
      </a>
    </section>
  );
}
