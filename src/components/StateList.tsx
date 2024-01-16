import { LocalData } from "./Model";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { formatNumber, smoothScrollTo } from "./helpers";
import { GoChevronDown } from "react-icons/go";

type StateListProps = {
  info: LocalData[];
  stateSelect: (selection: string | null | any | []) => void;
  isSelected: LocalData;
  profile?: string;
};

const StateList: React.FC<StateListProps> = ({ info, stateSelect, isSelected, profile }) => {
  const [expandedState, setExpandedState] = useState<string | any | null>(null);
  const [clickTitle, setClickTitle] = useState<boolean>(false);
  const expandedItemRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleListClick = (state: LocalData | null) => {
    setClickTitle(true);
    if (state && expandedState === state.name) {
      setExpandedState(null);
      if (stateSelect) {
        stateSelect(null);
      }
    } else if (state) {
      setExpandedState(state.name);
      if (stateSelect) {
        stateSelect(state);
      }
    }
  };

  useEffect(() => {
    setExpandedState(isSelected?.name);

    setTimeout(() => {
      if (!clickTitle && expandedItemRef.current && containerRef.current) {
        const container = containerRef.current;
        const itemHeight = expandedItemRef.current.offsetHeight;
        const containerHeight = container.offsetHeight;
        const scrollToPosition = expandedItemRef.current.offsetTop - containerHeight / 2 + itemHeight / 2 - 40;

        smoothScrollTo(container, scrollToPosition, 500);
      }
    }, 0);

    setClickTitle(false);
  }, [clickTitle, isSelected]);

  return (
    <ListContainer ref={containerRef}>
      {info.map((state) => (
        <StateItem key={state.name} ref={state?.name === expandedState ? expandedItemRef : null}>
          <StateTitle
            onClick={() => {
              handleListClick(state);
            }}
          >
            <PlaceholderSVG />
            <TitleCustom>{state.name}</TitleCustom>
            <RotatedIcon  isExpanded={state.name === expandedState} />
          </StateTitle>
          {state.name === expandedState && (
            <Description>
              {state.name !== "Total" ? (
                <>
                  {state.name} possui{" "}
                  {profile === "volunteer"
                    ? state?.volunteers === 1
                      ? "1 voluntário"
                      : state?.volunteers === 0
                      ? "ainda não tem voluntários"
                      : `${formatNumber(state?.volunteers)} voluntários`
                    : `${
                        state.projects === 1
                          ? "1 projeto"
                          : state.projects === 0
                          ? "ainda não tem projetos realizados"
                          : `${state.projects} projetos`
                      } e ${
                        state.actions === 1
                          ? "1 aprovado"
                          : state.actions === 0
                          ? "ainda não tem nenhuma aprovacão"
                          : `${state.actions} aprovados`
                      }`}
                  {profile === "volunteer" &&
                    (state?.hours === 0
                      ? " e ainda não há horas de atividades."
                      : ` e ${formatNumber(state?.hours)} ${state?.hours === 1 ? "hora" : "horas"} de atividades.`)}
                </>
              ) : (
                <>
                  {profile === "volunteer"
                    ? state?.volunteers === 1
                      ? "1 voluntário"
                      : state?.volunteers === 0
                      ? "ainda não tem voluntários"
                      : `${formatNumber(state?.volunteers)} voluntários`
                    : `${
                        state.projects === 1
                          ? "Total de 1 projeto e "
                          : state.projects === 0
                          ? "Ainda não tem projetos realizados e "
                          : `Total de ${formatNumber(state.projects)} projetos e `
                      } ${
                        state.actions === 1
                          ? "1 aprovado."
                          : state.actions === 0
                          ? "ainda não tem nenhuma aprovacão."
                          : `${state.actions} aprovados.`
                      }`}
                  {profile === "volunteer" &&
                    (state?.hours === 0
                      ? " e ainda não há horas de atividades."
                      : ` e ${formatNumber(state?.hours)} ${state?.hours === 1 ? "hora" : "horas"} de atividades.`)}
                </>
              )}
            </Description>
          )}
        </StateItem>
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

const StateItem = styled.div`
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

const StateTitle = styled.span`
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

export default StateList;
