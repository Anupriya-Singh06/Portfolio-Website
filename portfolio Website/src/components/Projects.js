export default function Projects() {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-6">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        <div className="p-6 bg-white rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">💰 Income Tax & GST Estimator</h3>
          <p className="mt-2 text-gray-600">
            A full-stack web app that helps Indian freelancers calculate their tax & GST liabilities.
          </p>
          <a href="https://github.com/anupriya-singh/income-tax-gst-estimator" 
             target="_blank" rel="noopener noreferrer"
             className="text-indigo-600 font-semibold mt-3 inline-block">
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
