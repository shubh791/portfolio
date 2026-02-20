import { useState } from "react";
import emailjs from "emailjs-com";
import { motion, AnimatePresence } from "framer-motion";

function ContactCTA() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendMail = async () => {
    setLoading(true);

    try {
      await emailjs.send(
        "service_pahxr4t",
        "template_4dc0j2s",
        { name, email },
        "JS_tbNVj5ms5_yXMw"
      );

      setSuccess(true);
      setLoading(false);

      setTimeout(() => {
        setStep(1);
        setName("");
        setEmail("");
        setSuccess(false);
      }, 2500);

    } catch {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-40 px-6 text-center overflow-hidden"
    >

      {/* Animated Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--accent)]/20 via-purple-500/10 to-cyan-500/20 blur-[140px]" />

      <div className="relative z-10 max-w-3xl mx-auto">

        {/* BIG BRAND STATEMENT */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Let’s Create{" "}
          <span className="text-[var(--accent)]">
            Impact Together
          </span>
        </motion.h2>

        <p className="text-gray-400 mb-12 text-lg">
          Building scalable digital products, modern web experiences,
          and innovative solutions.
        </p>

        {/* FORM */}
        <AnimatePresence>

          {step === 1 && !success && (
            <motion.input
              key="name"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setStep(2)}
              className="
                w-full max-w-lg mx-auto block
                px-6 py-4 rounded-full
                bg-white/5 border border-white/10
                text-center backdrop-blur-xl
                focus:border-[var(--accent)]
                outline-none transition
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            />
          )}

          {step === 2 && !success && (
            <motion.input
              key="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMail()}
              className="
                w-full max-w-lg mx-auto block
                px-6 py-4 rounded-full
                bg-white/5 border border-white/10
                text-center backdrop-blur-xl
                focus:border-[var(--accent)]
                outline-none transition
              "
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
            />
          )}

        </AnimatePresence>

        {loading && (
          <p className="mt-6 text-[var(--accent)] animate-pulse">
            Sending…
          </p>
        )}

        {success && (
          <motion.p
            className="mt-6 text-green-400 font-medium"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
          >
            Message Sent 🚀
          </motion.p>
        )}

      </div>
    </section>
  );
}

export default ContactCTA;