import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

function ContactCTA() {

  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const resetForm = () => {
    setStep(1);
    setName("");
    setEmail("");
    setSuccess(false);
    setError("");
    setLoading(false);
  };

  // ---------- NAME ENTER ----------
  const handleNameEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();

      if (name.trim().length > 1) {
        setStep(2);
      }
    }
  };

  // ---------- EMAIL ENTER + SEND ----------
  const handleEmailEnter = async (e) => {
    if (e.key !== "Enter") return;

    e.preventDefault();

    if (!email.trim()) return;

    setLoading(true);
    setError("");

    try {

      await emailjs.send(
        "service_pahxr4t",
        "template_4dc0j2s",
        {
          name: name,
          email: email,
          time: new Date().toLocaleString(),
        },
        "JS_tbNVj5ms5_yXMw"
      );

      setSuccess(true);
      setLoading(false);

      // AUTO RESET AFTER SUCCESS
      setTimeout(() => {
        resetForm();
      }, 2200);

    } catch (err) {

      console.error(err);

      setError("Email Failed ❌ Try Again");
      setLoading(false);

      // AUTO RESET AFTER ERROR
      setTimeout(() => {
        resetForm();
      }, 2200);
    }
  };

  return (

    // ✅ THIS ID IS REQUIRED FOR HEADER SCROLL
    <section
      id="contact"
      className="relative py-24 flex justify-center"
    >

      <div className="w-full max-w-xl text-center">

        <h2 className="text-3xl font-bold mb-3">
          Hey 👋 Let's <span className="text-[var(--accent)]">Connect</span>
        </h2>

        <p className="opacity-70 mb-10">
          Enter your details and I'll reach you soon
        </p>

        <div className="relative">

          {/* NAME INPUT */}
          <AnimatePresence>
            {step === 1 && !success && (
              <motion.input
                key="name"
                autoFocus
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleNameEnter}
                placeholder="Enter your name"
                className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 outline-none text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              />
            )}
          </AnimatePresence>

          {/* EMAIL INPUT */}
          <AnimatePresence>
            {step === 2 && !success && (
              <motion.input
                key="email"
                autoFocus
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={handleEmailEnter}
                placeholder="Enter your email"
                className="w-full px-5 py-4 rounded-xl bg-black/50 border border-white/10 outline-none text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
              />
            )}
          </AnimatePresence>

          {/* LOADING */}
          {loading && (
            <p className="mt-4 text-sm text-[var(--accent)] animate-pulse">
              Sending...
            </p>
          )}

          {/* ERROR */}
          {error && (
            <p className="mt-4 text-red-500 text-sm">
              {error}
            </p>
          )}

          {/* SUCCESS */}
          <AnimatePresence>
            {success && (
              <motion.div
                className="mt-6 flex flex-col items-center"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
              >

                <div className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center text-3xl text-white">
                  ✓
                </div>

                <p className="mt-4 text-green-400 font-medium">
                  Message Sent Successfully 🚀
                </p>

              </motion.div>
            )}
          </AnimatePresence>

        </div>

      </div>

    </section>
  );
}

export default ContactCTA;
