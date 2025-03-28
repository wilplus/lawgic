import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { CheckCircle, ShieldCheck, Sparkles } from "lucide-react";

export default function LawgicLandingPage() {
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen bg-white text-gray-900 p-6 md:p-12">
      <header className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Legal Clarity for AI Entrepreneurs</h1>
        <p className="text-lg md:text-xl text-gray-600 mb-6">
          Lawgic makes GDPR and legal knowledge simple, accessible, and actionable.
        </p>
        <div className="flex justify-center gap-2">
          <input
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-xl border border-gray-300 w-64"
          />
          <Button className="rounded-xl px-6">Get Early Access</Button>
        </div>
      </header>

      <section className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 mb-16">
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <ShieldCheck className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">GDPR Simplified</h3>
            <p className="text-gray-600">Clear, easy-to-follow guidance tailored for startups and creators.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <Sparkles className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">AI-Powered Answers</h3>
            <p className="text-gray-600">Ask any legal question, get real-time help from our AI trained on GDPR and more.</p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <CheckCircle className="w-8 h-8 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Built for Entrepreneurs</h3>
            <p className="text-gray-600">You build, we translate the legal maze for you—so you can launch with confidence.</p>
          </CardContent>
        </Card>
      </section>

      <footer className="text-center text-gray-500 text-sm">
        © 2025 Lawgic AI. All rights reserved.
      </footer>
    </div>
  );
}
