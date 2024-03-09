import { Values } from "../../components";
import vector from "../../assets/Vector.svg";
import "./corevalues.scss";

export const CoreValues = () => {
  return (
    <div className="core-values">
      <Values
        icon={vector}
        title="Creativity"
        description="High-end digital experiences.
Created  the heart Manhattan,
we are a should human team driving force."
      />
    </div>
  );
};
