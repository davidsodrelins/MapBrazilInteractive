import React from "react";
import "./BrazilMapStyle.css";
import { getUfPath } from "./StateBr";

export interface RegionBrProps {
  region: string;
  isSelected: boolean;
  onClick: () => void;
}

const RegionTextTransforms: Record<string, string> = {
  NORTE: "matrix(1, 0, 0, 1, 300.844, 170.6)",
  SUL: "matrix(1, 0, 0, 1, 395.177, 438.933)",
  NORDESTE: "matrix(1, 0, 0, 1, 485.844, 230.933)",
  CENTRO: "matrix(1, 0, 0, 1, 340.5, 296.933)",
  SUDESTE: "matrix(1, 0, 0, 1, 457.844, 343.6)",
};

const getAttributes = (area: string): { path: string | undefined; color: string } => {
  switch (area.toLowerCase()) {
    case "norte":
      const norte = `${getUfPath("AC")} ${getUfPath("AP")} ${getUfPath("AM")} ${getUfPath("PA")} ${getUfPath(
        "ro"
      )} ${getUfPath("TO")} ${getUfPath("RR")}`;
      return { path: norte, color: "#42bb42" };
    case "sul":
      const sul = `${getUfPath("PR")} ${getUfPath("SC")} ${getUfPath("RS")}`;
      return { path: sul, color: "#7979ff" };
    case "nordeste":
      const nordeste = `${getUfPath("RN")} ${getUfPath("SE")} ${getUfPath("PI")} ${getUfPath("AL")} ${getUfPath(
        "ba"
      )} ${getUfPath("CE")} ${getUfPath("MA")} ${getUfPath("PB")} ${getUfPath("PE")}`;
      return { path: nordeste, color: "#e7a121" };
    case "centro":
      const centro_oeste = `${getUfPath("DF")} ${getUfPath("GO")} ${getUfPath("MT")} ${getUfPath("MS")}`;
      return { path: centro_oeste, color: "#90905c" };
    case "sudeste":
      const sudeste = `${getUfPath("ES")} ${getUfPath("SP")} ${getUfPath("MG")} ${getUfPath("RJ")}`;
      return { path: sudeste, color: "#a09696" };
    default:
      return { path: undefined, color: "" };
  }
};

const RegionBr: React.FC<RegionBrProps> = ({ region, isSelected, onClick }) => {
  return (
    <g
      className={`mapa-svg-regioes region-${region}-class ${isSelected ? "selected" : ""}`}
      id={`region-${region}`}
      style={{ fill: isSelected ? "#ff0000" : getAttributes(region).color }}
      onClick={onClick}
    >
      <path d={getAttributes(region).path} className={isSelected ? "selected" : ""} />
      <text transform={RegionTextTransforms[region]} className="abreviation-region">
        {region.toUpperCase()}
      </text>
    </g>
  );
};

export default RegionBr;
