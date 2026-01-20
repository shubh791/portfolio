import { useEffect, useState } from "react";

const sequences = [
  {
    command: "npm run dev",
    output: ["✔ Server Running", "✔ API Connected", "✔ Build Successful"]
  },
  {
    command: "git push origin main",
    output: ["Deploying...", "✔ Deployment Successful"]
  },
  {
    command: "npm run build",
    output: ["Optimizing Assets...", "✔ Production Ready"]
  }
];

function TerminalPreview() {

  const [seqIndex, setSeqIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const current = sequences[seqIndex];

  /* TYPING EFFECT */
  useEffect(() => {

    if (!isTyping) return;

    const fullText = current.command;

    if (typedText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setTypedText(fullText.slice(0, typedText.length + 1));
      }, 70);

      return () => clearTimeout(timeout);
    }

    setTimeout(() => {
      setIsTyping(false);
    }, 500);

  }, [typedText, isTyping]);

  /* OUTPUT LINES LOOP */
  useEffect(() => {

    if (isTyping) return;

    if (lineIndex < current.output.length) {
      const timer = setTimeout(() => {
        setLineIndex((prev) => prev + 1);
      }, 700);

      return () => clearTimeout(timer);
    }

    setTimeout(() => {
      setTypedText("");
      setLineIndex(0);
      setIsTyping(true);
      setSeqIndex((prev) => (prev + 1) % sequences.length);
    }, 1500);

  }, [isTyping, lineIndex]);

  return (
    <div
      className="
      w-[320px]
      md:w-[420px]
      lg:w-[460px]
      bg-black/60
      backdrop-blur-xl
      border
      border-white/10
      rounded-2xl
      p-5
      shadow-2xl
      font-mono
      text-sm
      hover:scale-[1.02]
      transition-all
      duration-300
      "
    >

      {/* TERMINAL HEADER */}
      <div className="flex gap-2 mb-4">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>

      {/* TERMINAL BODY */}
      <div className="space-y-2 text-left">

        {/* COMMAND LINE */}
        <div>
          <span className="text-[var(--accent)]">shubham@portfolio</span>
          <span className="text-white">:~$ </span>
          <span className="text-gray-300">{typedText}</span>

          {/* CURSOR */}
          {isTyping && (
            <span className="ml-1 animate-pulse text-[var(--accent)]">▌</span>
          )}
        </div>

        {/* OUTPUT */}
        {current.output.slice(0, lineIndex).map((line, i) => (
          <p key={i} className="text-green-400">
            {line}
          </p>
        ))}

      </div>

    </div>
  );
}

export default TerminalPreview;
