const themes = {
  dark: {
    name: "Dark Blue",
    accent: "#3b82f6",
    bg: "#020617",
    text: "#e5e7eb",
  },

  neon: {
    name: "Neon Purple",
    accent: "#a855f7",
    bg: "#0b0218",
    text: "#f3e8ff",
  },

  aqua: {
    name: "Aqua",
    accent: "#22d3ee",
    bg: "#00161d",
    text: "#ecfeff",
  },

  amber: {
    name: "Amber",
    accent: "#f59e0b",
    bg: "#120800",
    text: "#fff7ed",
  },
};

function ThemeSwitcher() {

  const applyTheme = (theme) => {
    document.documentElement.style.setProperty("--accent", theme.accent);
    document.documentElement.style.setProperty("--text", theme.text);

    document.body.style.background = theme.bg;
    document.body.style.color = theme.text;
  };

  return (
    <div
      className="
        sticky
        top-[40vh]
        mr-3
        md:mr-6
        z-[50]
        theme-box
      "
    >

      <p className="theme-title">THEMES</p>

      <div className="theme-buttons">

        <button
          className="theme-dot bg-blue-500"
          onClick={() => applyTheme(themes.dark)}
        />

        <button
          className="theme-dot bg-purple-500"
          onClick={() => applyTheme(themes.neon)}
        />

        <button
          className="theme-dot bg-cyan-400"
          onClick={() => applyTheme(themes.aqua)}
        />

        <button
          className="theme-dot bg-yellow-500"
          onClick={() => applyTheme(themes.amber)}
        />

      </div>

    </div>
  );
}

export default ThemeSwitcher;
