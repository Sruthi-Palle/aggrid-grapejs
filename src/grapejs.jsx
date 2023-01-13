import "grapesjs-preset-webpage";
import { GrapesjsReact } from "grapesjs-react";

export const Primary = () => {
  return (
    <GrapesjsReact
      id="grapesjs-react"
      plugins={["gjs-preset-webpage", "gjs-blocks-basic"]}
    />
  );
};
