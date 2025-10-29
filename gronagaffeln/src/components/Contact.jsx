import React from "react";

export function Contact() {
  return (
    <section className="bg-gray-100 py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Kontakta oss</h2>
        <p className="text-gray-600 mb-10">
          Har du frågor eller vill du samarbeta? Fyll i formuläret nedan så
          återkommer vi så snart som möjligt.
        </p>

        <form className="bg-white shadow-md rounded-2xl p-8 space-y-6 text-left">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Namn
            </label>
            <input
              type="text"
              placeholder="Ditt namn"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              E-post
            </label>
            <input
              type="email"
              placeholder="din@email.se"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-2">
              Meddelande
            </label>
            <textarea
              placeholder="Skriv ditt meddelande här..."
              rows="5"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-300 w-full sm:w-auto"
          >
            Skicka meddelande
          </button>
        </form>

        <div className="mt-10 text-gray-600">
          <p>📧 info@dinfirma.se</p>
          <p>📞 070-123 45 67</p>
        </div>
      </div>
    </section>
  );
}
