import TSParticles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadSlim } from "@tsparticles/slim";
import { RecursivePartial } from "@tsparticles/engine";

import particles from "../particles.json";

export function Particles() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return null;
  }

  return (
    <TSParticles id="tsparticles" options={particles as RecursivePartial<any>} />
  );
}
