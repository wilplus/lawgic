<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Lawgic AI</title>
  <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
  <script>
    function handleSubmit() {
      const email = document.getElementById('emailInput').value;
      alert(`Thank you! We'll be in touch at ${email}`);
    }
  </script>
</head>
<body class="bg-white text-gray-900">
  <div class="min-h-screen p-6 md:p-12">
    <header class="max-w-4xl mx-auto text-center py-12">
      <h1 class="text-4xl md:text-6xl font-bold mb-4">Legal Clarity for AI Entrepreneurs</h1>
      <p class="text-lg md:text-xl text-gray-600 mb-6">
        Lawgic makes GDPR and legal knowledge simple, accessible, and actionable.
      </p>
      <div class="flex justify-center gap-2">
        <input
          type="email"
          id="emailInput"
          placeholder="Your email"
          class="px-4 py-2 rounded-xl border border-gray-300 w-64"
        />
        <button onclick="handleSubmit()" class="bg-blue-600 text-white px-6 py-2 rounded-xl">Get Early Access</button>
      </div>
    </header>

    <section class="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
      <div class="rounded-2xl shadow-md p-6">
        <div class="mb-4 text-blue-600 text-2xl">🛡️</div>
        <h3 class="text-xl font-semibold mb-2">GDPR Simplified</h3>
        <p class="text-gray-600">Clear, easy-to-follow guidance tailored for startups and creators.</p>
      </div>
      <div class="rounded-2xl shadow-md p-6">
        <div class="mb-4 text-purple-600 text-2xl">✨</div>
        <h3 class="text-xl font-semibold mb-2">AI-Powered Answers</h3>
        <p class="text-gray-600">Ask any legal question, get real-time help from our AI trained on GDPR and more.</p>
      </div>
      <div class="rounded-2xl shadow-md p-6">
        <div class="mb-4 text-green-600 text-2xl">✅</div>
        <h3 class="text-xl font-semibold mb-2">Built for Entrepreneurs</h3>
        <p class="text-gray-600">You build, we translate the legal maze for you—so you can launch with confidence.</p>
      </div>
    </section>

    <footer class="text-center text-gray-500 text-sm">
      © 2025 Lawgic AI. All rights reserved.
    </footer>
  </div>
</body>
</html>
