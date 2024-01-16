import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Service from "./Service ";
import { LocalData, RegionProjectData } from "./Model";
import BrazilMap from "./BrazilMap";
import { transformDataMapRegions } from "./helpers";
import RegionList from "./RegionList";
import StateList from "./StateList";
import ButtonSwitch from "./ButtonSwitch";

const pageTitle = "Mapa interativo do Brasil";

const ViewMap = () => {
  const [fetchState, setFetchState] = useState({ loading: false, error: false });
  const [viewMode, setViewMode] = useState("card");
  const [localMode, setLocalMode] = useState("states");
  const [selectedRegion, setSelectedRegion] = useState<string | null | any>(null);
  const [regionData, setLocalData] = useState<LocalData[]>([]);
  const [statesData, setStatesData] = useState<LocalData[]>([]);

  const handleRegionClick = (regionInfo: any) => {
    if (selectedRegion && selectedRegion?.name === regionInfo?.name) {
      setSelectedRegion(null);
    } else {
      setSelectedRegion(regionInfo);
    }
  };

  const fetchData = () => {
    setFetchState({ loading: true, error: false });
    Service.getDetailsRegionProjects()
      .then((response: RegionProjectData[]) => {
        if (response) {
          const transformedData = transformDataMapRegions(response);
          const newLocalData = [...transformedData.regionData];
          const newStatesData = [...transformedData.stateData];

          const totalsRegions = newLocalData.reduce(
            (acc: any, region: any) => {
              acc.totalProjects += region.projects;
              acc.totalActions += region.actions;
              return acc;
            },
            { totalProjects: 0, totalActions: 0 }
          );

          const totalsStates = newStatesData.reduce(
            (acc: any, region: any) => {
              acc.totalProjects += region.projects;
              acc.totalActions += region.actions;
              return acc;
            },
            { totalProjects: 0, totalActions: 0 }
          );

          newLocalData.push({
            name: "Total",
            sigla: "TOTAL",
            projects: totalsRegions.totalProjects,
            actions: totalsRegions.totalActions,
          });

          newStatesData.push({
            name: "Total",
            sigla: "TOTAL",
            projects: totalsStates.totalProjects,
            actions: totalsStates.totalActions,
          });

          setLocalData(newLocalData);
          setStatesData(newStatesData);
        }
      })

      .catch((error) => {
        console.error("Houve um erro ao buscar os dados por regiões", error);
        setFetchState({ loading: false, error: true });
      })
      .finally(() => {
        setFetchState({ loading: false, error: false });
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div>
        <FlexDiv>
          <Title>{pageTitle}</Title>
          {!fetchState.loading && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#fff",
              }}
            >
              <ButtonSwitch
                leftLabel="Card"
                rightLabel="Lista"
                title="Escolha como verá o com as informações, clicando no mapa você verá mais detalhes."
                onLeftClick={() => setViewMode("card")}
                onRightClick={() => setViewMode("list")}
              />
              <ButtonSwitch
                leftLabel="Estados"
                rightLabel="Regiões"
                title="Escolha se quer ver as informações por regiões ou pelos estados do Brasil, clicando no mapa você verá mais detalhes."
                onLeftClick={() => setLocalMode("states")}
                onRightClick={() => setLocalMode("regions")}
              />
            </div>
          )}
        </FlexDiv>

        
        {fetchState.loading ? (
          <ContainerTable>
            <h2>Carregando...</h2>
          </ContainerTable>
        ) : fetchState.error ? (
          <p>Erro ao retornar dados</p>
        ) : statesData.length === 0 ? (
          <CenteredDiv>
            <h2>
              Não há registros.
            </h2>
          </CenteredDiv>
        ) : (
          <ContainerTable>
            {viewMode === "card" && localMode === "regions" && (
              <CenteredDiv>
                <BrazilMap
                  options={{ showCards: true }}
                  type={"region"}
                  info={regionData}
                  isSelected={selectedRegion}
                  onSelect={handleRegionClick}
                />
              </CenteredDiv>
            )}

            {viewMode === "list" && localMode === "regions" && (
              <ContainerMap>
                <BrazilMap type={"region"} info={regionData} isSelected={selectedRegion} onSelect={handleRegionClick} />
                <RegionList info={regionData} isSelected={selectedRegion} regionSelect={handleRegionClick} />
              </ContainerMap>
            )}

            {viewMode === "card" && localMode === "states" && (
              <CenteredDiv>
                <BrazilMap
                  options={{ showCards: true }}
                  type={"state"}
                  info={statesData}
                  isSelected={selectedRegion}
                  onSelect={handleRegionClick}
                />
              </CenteredDiv>
            )}

            {viewMode === "list" && localMode === "states" && (
              <ContainerMap>
                <BrazilMap type={"state"} info={statesData} isSelected={selectedRegion} onSelect={handleRegionClick} />
                <StateList info={statesData} isSelected={selectedRegion} stateSelect={handleRegionClick} />
              </ContainerMap>
            )}
          </ContainerTable>
        )}
      </div>
    </>
  );
};

const CenteredDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ContainerTable = styled.div`
  height: 100vh;
  width: 100%;
`;

const FlexDiv = styled.div`
  margin-bottom: 50px;
  align-items: center;
`;

const ContainerMap = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.span`
  font-family: "Rubik";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 22px;
  letter-spacing: 0.01em;
  color: #274264;
`;



export default ViewMap;
