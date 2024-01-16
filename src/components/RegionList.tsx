import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { formatNumber } from "./helpers";
import { LocalData } from "./Model";
import { GoChevronDown } from "react-icons/go";


type RegionListProps = {
  info: LocalData[];
  regionSelect: (selection: string | null | any | []) => void;
  isSelected: LocalData;
  profile?: string;
};

const RegionList: React.FC<RegionListProps> = ({ info, regionSelect, isSelected, profile }) => {
  const [expandedRegion, setExpandedRegion] = useState<string | any | null>(null);

  const handleListClick = (region: LocalData | null) => {
    if (region && expandedRegion === region.name) {
      setExpandedRegion(null);
      if (regionSelect) {
        regionSelect(null);
      }
    } else if (region) {
      setExpandedRegion(region.name);
      if (regionSelect) {
        regionSelect(region);
      }
    }
  };

  useEffect(() => {
    setExpandedRegion(isSelected?.name);
  }, [isSelected]);

  return (
    <ListContainer>
      {info.map((region) => (
        <RegionItem key={region.name?.replace(" ", "")}>
          <RegionTitle>
            <PlaceholderSVG />
            <TitleCustom
              onClick={() => {
                handleListClick(region);
              }}
            >
              {region.name}
            </TitleCustom>
            <RotatedIcon isExpanded={region.name === expandedRegion} />
          </RegionTitle>
          {region.name === expandedRegion && (
            <Description>
              {region.name !== "Total" ? (
                <>
                  {region.name}{" "}
                  {profile === "volunteer"
                    ? region?.volunteers === 1
                      ? "possui 1 voluntário"
                      : region?.volunteers === 0
                      ? "ainda não tem voluntários"
                      : `possui ${formatNumber(region?.volunteers)} voluntários`
                    : `${
                        region.projects === 1
                          ? "possui 1 projeto"
                          : region.projects === 0
                          ? "ainda não tem projetos realizados"
                          : `${formatNumber(region.projects)} projetos`
                      } e ${
                        region.actions === 1
                          ? "1 aprovado"
                          : region.actions === 0
                          ? "ainda não tem nenhuma aprovacão"
                          : `${region.actions} aprovados`
                      }`}
                  {profile === "volunteer" &&
                    (region?.hours === 0
                      ? " e ainda não há horas de atividades"
                      : ` e ${formatNumber(region?.hours)} ${region?.hours === 1 ? "hora" : "horas"} de atividades`)}
                </>
              ) : (
                <>
                  {profile === "volunteer"
                    ? region?.volunteers === 1
                      ? "1 voluntário"
                      : region?.volunteers === 0
                      ? "ainda não tem voluntários"
                      : `${formatNumber(region?.volunteers)} voluntários`
                    : `${
                        region.projects === 1
                          ? "Total de 1 projeto e "
                          : region.projects === 0
                          ? "Ainda não tem projetos realizados e "
                          : `Total de ${formatNumber(region.projects)} projetos e `
                      } ${
                        region.actions === 1
                          ? "1 aprovado."
                          : region.actions === 0
                          ? "ainda não tem nenhuma aprovacão."
                          : `${formatNumber(region.actions)} aprovados.`
                      }`}
                  {profile === "volunteer" &&
                    (region?.hours === 0
                      ? " e ainda não há horas de atividades."
                      : ` e ${formatNumber(region?.hours)} ${region?.hours === 1 ? "hora" : "horas"} de atividades.`)}
                </>
              )}
            </Description>
          )}
        </RegionItem>
      ))}
    </ListContainer>
  );
};

const PlaceholderSVG = () => (
  <CustoImg
    src="https://upload.wikimedia.org/wikipedia/commons/b/be/Mapa_do_Brasil_com_a_Bandeira_Nacional.png"
    alt="Transforma Brasil"
    loading="lazy"
  ></CustoImg>
);

const RotatedIcon = styled(GoChevronDown)<{ isExpanded: boolean }>`
  transform: ${(props) => (props.isExpanded ? "rotate(180deg)" : "rotate(0deg)")};
  transition: transform 0.3s ease-in-out;
`;

const CustoImg = styled.img`
  width: 18px;
`;

const Description = styled.p`
  width: 75%;
  margin-left: 33px;
  margin-top: 10px;
  color: #47507b;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  margin-bottom: 0px;
`;
const TitleCustom = styled.span`
  display: flex;
  flex: 1;
  color: #274264;
  justify-content: space-between; // Distribui o espaço entre os elementos internos
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  margin-left: 15px;
`;

const ListContainer = styled.div`
  width: 346px;
  flex-shrink: 0;
  border-radius: 8px;
  border: 2px solid #495eec;
  background: #6d7ef0;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 600px;
  height: fit-content;
  padding: 0px 15px;


  /* Custom scrollbar styles */
  &::-webkit-scrollbar {
    width: 8px; /* width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background-color: #9fa8da; /* color of the track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: #495eec; /* color of the scroll thumb */
    border-radius: 4px; /* radius of the scroll thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #354db5; /* color of the scroll thumb on hover */
  }
`;

const RegionItem = styled.div`
  padding: 20px;
  width: 296px;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-shrink: 0;
  border-radius: 8px;
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const RegionTitle = styled.span`
  display: flex;
  align-items: center;
  flex-shrink: 0;
  color: #274264;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;

  svg {
    margin-right: 10px;
  }
`;

export default RegionList;
