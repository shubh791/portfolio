import { useState } from "react";
import PaletteIcon from "@mui/icons-material/Palette";

/* THEMES */
const themes = {
  dark: {
    name: "Dark Blue",
    accent: "#3b82f6",
    bg: "#020617",
    text: "#e5e7eb",
    icon: "🌙",
  },
  neon: {
    name: "Neon Purple",
    accent: "#a855f7",
    bg: "#0b0218",
    text: "#f3e8ff",
    icon: "⚡",
  },
  aqua: {
    name: "Aqua",
    accent: "#22d3ee",
    bg: "#00161d",
    text: "#ecfeff",
    icon: "💧",
  },
  amber: {
    name: "Amber",
    accent: "#f59e0b",
    bg: "#120800",
    text: "#fff7ed",
    icon: "🔥",
  },
  emerald: {
    name: "Emerald",
    accent: "#10b981",
    bg: "#00140f",
    text: "#ecfdf5",
    icon: "🌿",
  },
  rose: {
    name: "Rose",
    accent: "#f43f5e",
    bg: "#1a0206",
    text: "#ffe4e6",
    icon: "🌸",
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
      {/* OPEN BUTTON */}
      <button
        onClick={() => setOpen(true)}
        className="
          fixed right-6 top-[45vh]
          flex items-center gap-2
          px-4 py-2 rounded-xl
          bg-[var(--accent)]
          text-black text-sm font-semibold
          shadow-lg hover:scale-105 transition
          z-50
        "
      >
        <PaletteIcon fontSize="small" />
        Theme
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 flex items-center justify-center">

          <div className="
            bg-[#070b14]
            border border-white/10
            rounded-2xl
            p-8
            max-w-md w-full
            shadow-2xl
          ">

            <h2 className="text-xl font-semibold mb-6 text-center">
              Choose Theme
            </h2>

            {/* THEME OPTIONS */}
            <div className="grid grid-cols-2 gap-4 mb-6">

              {Object.values(themes).map((theme) => (
                <button
                  key={theme.name}
                  onClick={() => setSelected(theme)}
                  className={`
                    flex items-center gap-3 p-3 rounded-xl
                    border transition
                    ${
                      selected === theme
                        ? "border-[var(--accent)]"
                        : "border-white/10"
                    }
                  `}
                >
                  <span
                    className="w-6 h-6 rounded-full"
                    style={{ background: theme.accent }}
                  />

                  <span className="text-sm flex items-center gap-1">
                    {theme.icon} {theme.name}
                  </span>
                </button>
              ))}

            </div>

            {/* ACTION BUTTONS */}
            <div className="flex gap-4">

              <button
                onClick={() => {
                  setSelected(null);
                  setOpen(false);
                }}
                className="
                  flex-1 py-2 rounded-lg
                  border border-white/20
                  hover:border-red-400 transition
                "
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  if (selected) applyTheme(selected);
                  setOpen(false);
                }}
                className="
                  flex-1 py-2 rounded-lg
                  bg-[var(--accent)]
                  text-black font-semibold
                  hover:scale-105 transition
                "
              >
                Apply
              </button>

            </div>

          </div>

        </div>
      )}
    </>
  );
}

export default ThemeSwitcher;