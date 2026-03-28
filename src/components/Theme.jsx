import { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";
import { motion, AnimatePresence } from "framer-motion";

const themes = {
  indigo: {
    name: "Indigo",
    accent: "#818cf8",
    bg: "#040411",
    text: "#e2e8f0",
    icon: "✦",
    gradient: "from-indigo-500 to-cyan-500",
  },
  violet: {
    name: "Violet",
    accent: "#a78bfa",
    bg: "#0b0218",
    text: "#f3e8ff",
    icon: "⚡",
    gradient: "from-violet-500 to-purple-400",
  },
  aqua: {
    name: "Aqua",
    accent: "#22d3ee",
    bg: "#00101a",
    text: "#ecfeff",
    icon: "◈",
    gradient: "from-cyan-400 to-sky-500",
  },
  emerald: {
    name: "Emerald",
    accent: "#10b981",
    bg: "#00120e",
    text: "#ecfdf5",
    icon: "◉",
    gradient: "from-emerald-400 to-teal-500",
  },
  rose: {
    name: "Rose",
    accent: "#f43f5e",
    bg: "#130208",
    text: "#ffe4e6",
    icon: "◆",
    gradient: "from-rose-500 to-pink-400",
  },
  amber: {
    name: "Amber",
    accent: "#f59e0b",
    bg: "#100900",
    text: "#fff7ed",
    icon: "◇",
    gradient: "from-amber-400 to-orange-500",
  },
};

function ThemeSwitcher() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--text", theme.text);
    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;
  };

  return (
    <>
      {/* TRIGGER BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-5 top-[45vh] flex items-center gap-2 px-3 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-[var(--accent)] text-xs font-semibold shadow-lg hover:scale-105 hover:border-[var(--accent)]/40 hover:bg-white/[0.07] transition-all duration-300 z-50 backdrop-blur-md"
        title="Change Theme"
      >
        <PaletteIcon fontSize="small" />
        <span className="hidden sm:inline tracking-wide">Theme</span>
      </button>

      {/* MODAL */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#08081a] border border-white/10 rounded-2xl p-7 max-w-sm w-full shadow-2xl"
            >
              <h2 className="text-lg font-semibold mb-1 text-center">
                Choose Theme
              </h2>
              <p className="text-xs text-slate-500 text-center mb-6">
                Select your preferred color palette
              </p>

              {/* THEME GRID */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {Object.values(themes).map((theme) => (
                  <button
                    key={theme.name}
                    onClick={() => setSelected(theme)}
                    className={`flex items-center gap-3 p-3 rounded-xl border transition-all duration-200 text-left ${
                      selected?.name === theme.name
                        ? "border-[var(--accent)] bg-white/[0.04]"
                        : "border-white/[0.06] hover:border-white/20 hover:bg-white/[0.03]"
                    }`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full bg-gradient-to-br ${theme.gradient} flex-shrink-0`}
                    />
                    <span className="text-sm text-slate-300 font-medium">
                      {theme.icon} {theme.name}
                    </span>
                  </button>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="flex gap-3">
                <button
                  onClick={() => { setSelected(null); setOpen(false); }}
                  className="flex-1 py-2.5 rounded-xl border border-white/10 text-sm text-slate-400 hover:border-white/20 hover:text-white transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={() => { if (selected) applyTheme(selected); setOpen(false); }}
                  className="flex-1 py-2.5 rounded-xl btn-glow text-sm font-semibold"
                >
                  Apply
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default ThemeSwitcher;
