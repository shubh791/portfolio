function TechOrbit() {
  return (
    <div className="orbit-wrapper relative w-[320px] h-[320px]">

      {/* ROTATING GROUP */}
      <div className="orbit-spin absolute inset-0">

        {/* MAIN ORBIT RING */}
        <div className="absolute inset-0 rounded-full border-4 border-[var(--accent)] glow-ring" />

        {/* ICON BADGES */}

        <div className="orbit-icon angle-0">
          <img src="/icons/react.svg" className="react-icon" />
        </div>

        <div className="orbit-icon angle-90">
          <img src="/icons/node.svg" className="node-icon" />
        </div>

        <div className="orbit-icon angle-180">
          <img src="/icons/postgres.svg" className="postgres-icon" />
        </div>

        <div className="orbit-icon angle-270">
          <img src="/icons/express.svg" className="express-icon" />
        </div>

      </div>

      {/* CENTER CORE WITH DOUBLE RING */}
      <div className="orbit-core-wrapper">

        {/* INNER MINI RING */}
        <div className="orbit-mini-ring"></div>

        {/* CORE */}
        <div className="orbit-center">
          <span style={{ lineHeight: "1.1" }}>
            FULL<br />STACK
          </span>
        </div>

      </div>

    </div>
  );
}

export default TechOrbit;
