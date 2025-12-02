import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { useTheme } from "next-themes";

const ParticlesBackground = () => {
  const { theme, setTheme } = useTheme();
  // change theme
  setTheme("dark");
  setTheme("light");

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: true },
        // background: { color: { value: "#0000" } }, //0f172a
        particles: {
          number: { value: 20 },
          color: {
            value: theme === "dark" ? "#ffffff" : "#000000",
          },

          links: {
            enable: true,
            color: "#ffffff",
            distance: 150,
            color: theme === "dark" ? "#ffffff" : "#000000",
          },
          //   color: { value: "#ffffff" },
          //   links: { enable: true, color: "#ffffff", distance: 150 },
          move: { enable: true, speed: 2 },
          size: { value: 3 },
          opacity: { value: 0.5 },
        },
      }}
    />
  );
};

export default ParticlesBackground;
