import React, { useEffect, useState } from "react";
import StateBr from "./StateBr";
import "./BrazilMapStyle.css";
import RegionBr from "./RegionBr";
import styled from "styled-components";
import { Col, Row } from "reactstrap";
import { positionTooltipMap } from "./Model";
import { formatNumber } from "./helpers";

interface BrazilMapProps {
  type: "region" | "state";
  isSelected: string | null | any;
  onSelect?: (selection: string | null | any | [], e?: any) => void;
  info?: any;
  options?: any;
  profile?: string;
}

const BrazilMap: React.FC<BrazilMapProps> = ({ type, info, isSelected, onSelect, options, profile }) => {
  const [tooltipPosition, setTooltipPosition] = useState<{ x: number; y: number } | null>(null);
  const [showCards, setShowCards] = useState<boolean>(false);

  const handleMapClick = (regionName: string) => {
    const position = positionTooltipMap.find((pos) => pos.region === regionName);
    if (position) {
      setTooltipPosition({ x: position.axioX, y: position.axioY });
    }
  };

  useEffect(() => {
    if (options && options?.showCards != null) {
      setShowCards(options?.showCards);
    }
  }, [options]);

  if (type === "state") {
    return (
      <div className="brasil">
        <div className="map-area-transform">
          {tooltipPosition && isSelected && showCards ? (
            <div
              className="tooltip"
              style={{
                left: `${tooltipPosition.x}px`,
                top: `${tooltipPosition.y}px`,
              }}
            >
              <Item>
                <FlexDiv>
                  <Col style={{ maxWidth: "fit-content" }} className="bg-light align-items-center ">
                    <PlaceholderSVG />
                  </Col>
                  <Col style={{ maxWidth: "fit-content" }} className="bg-light align-items-left">
                    <Row className="">
                      <Title>{isSelected?.name}</Title>
                    </Row>
                    <Row className="">
                      <Description>
                        {/* {isSelected?.name} */}
                        {profile === "volunteer"
                          ? isSelected?.volunteers === 1
                            ? ` possui 1 voluntário ${
                                formatNumber(isSelected?.hours) === 1
                                  ? ` com 1 hora de atividade`
                                  : formatNumber(isSelected?.hours) === 0
                                  ? ` e ainda não há horas de atividades`
                                  : ` com ${formatNumber(isSelected?.hours)} horas de atividades`
                              }`
                            : isSelected?.volunteers === 0
                            ? ` ainda não tem voluntários `
                            : ` possui ${formatNumber(isSelected?.volunteers)} voluntários  ${
                                formatNumber(isSelected?.hours) === 1
                                  ? `com 1 hora de atividade`
                                  : formatNumber(isSelected?.hours) === 0
                                  ? `e ainda não há horas de atividades`
                                  : `com ${formatNumber(isSelected?.hours)} horas de atividades`
                              }`
                          : isSelected?.projects === 1
                          ? ` 1 projeto `
                          : isSelected?.projects === 0
                          ? ` ainda não tem projetos realizados `
                          : ` ${formatNumber(isSelected?.projects)} projetos`}
                        {profile !== "volunteer" && (
                          <>
                            e
                            {isSelected?.actions === 1
                              ? ` 1 aprovado`
                              : isSelected?.actions === 0
                              ? ` ainda não tem nenhuma aprovacão`
                              : ` ${formatNumber(isSelected?.actions)} aprovados`}
                          </>
                        )}
                      </Description>
                    </Row>
                  </Col>
                </FlexDiv>
              </Item>
            </div>
          ) : null}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="mapa-svg-estados-svg"
            width="600"
            height="600"
            viewBox="150 70 450 450"
          >
            <g id="mapa-svg-area">
              <StateBr
                state="AC"
                isSelected={isSelected?.sigla === "AC"}
                onClick={() => onSelect && onSelect(info.find((item: any) => item.sigla === "AC"))}
              />
              <StateBr
                state="AP"
                isSelected={isSelected?.sigla === "AP"}
                onClick={() => {
                  handleMapClick("AP");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "AP"));
                }}
              />
              <StateBr
                state="AM"
                isSelected={isSelected?.sigla === "AM"}
                onClick={() => {
                  handleMapClick("AM");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "AM"));
                }}
              />
              <StateBr
                state="BA"
                isSelected={isSelected?.sigla === "BA"}
                onClick={() => {
                  handleMapClick("BA");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "BA"));
                }}
              />
              <StateBr
                state="CE"
                isSelected={isSelected?.sigla === "CE"}
                onClick={() => {
                  handleMapClick("CE");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "CE"));
                }}
              />
              <StateBr
                state="ES"
                isSelected={isSelected?.sigla === "ES"}
                onClick={() => {
                  handleMapClick("ES");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "ES"));
                }}
              />
              <StateBr
                state="GO"
                isSelected={isSelected?.sigla === "GO"}
                onClick={() => {
                  handleMapClick("GO");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "GO"));
                }}
              />
              <StateBr
                state="MA"
                isSelected={isSelected?.sigla === "MA"}
                onClick={() => {
                  handleMapClick("MA");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "MA"));
                }}
              />
              <StateBr
                state="MT"
                isSelected={isSelected?.sigla === "MT"}
                onClick={() => {
                  handleMapClick("MT");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "MT"));
                }}
              />
              <StateBr
                state="MS"
                isSelected={isSelected?.sigla === "MS"}
                onClick={() => {
                  handleMapClick("MS");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "MS"));
                }}
              />
              <StateBr
                state="MG"
                isSelected={isSelected?.sigla === "MG"}
                onClick={() => {
                  handleMapClick("MG");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "MG"));
                }}
              />
              <StateBr
                state="PA"
                isSelected={isSelected?.sigla === "PA"}
                onClick={() => {
                  handleMapClick("PA");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "PA"));
                }}
              />
              <StateBr
                state="PB"
                isSelected={isSelected?.sigla === "PB"}
                onClick={() => {
                  handleMapClick("PB");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "PB"));
                }}
              />
              <StateBr
                state="PR"
                isSelected={isSelected?.sigla === "PR"}
                onClick={() => {
                  handleMapClick("PR");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "PR"));
                }}
              />
              <StateBr
                state="PE"
                isSelected={isSelected?.sigla === "PE"}
                onClick={() => {
                  handleMapClick("PE");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "PE"));
                }}
              />
              <StateBr
                state="AL"
                isSelected={isSelected?.sigla === "AL"}
                onClick={() => {
                  handleMapClick("AL");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "AL"));
                }}
              />
              <StateBr
                state="PI"
                isSelected={isSelected?.sigla === "PI"}
                onClick={() => {
                  handleMapClick("PI");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "PI"));
                }}
              />
              <StateBr
                state="RJ"
                isSelected={isSelected?.sigla === "RJ"}
                onClick={() => {
                  handleMapClick("RJ");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "RJ"));
                }}
              />
              <StateBr
                state="RN"
                isSelected={isSelected?.sigla === "RN"}
                onClick={() => {
                  handleMapClick("RN");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "RN"));
                }}
              />
              <StateBr
                state="RS"
                isSelected={isSelected?.sigla === "RS"}
                onClick={() => {
                  handleMapClick("RS");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "RS"));
                }}
              />
              <StateBr
                state="RO"
                isSelected={isSelected?.sigla === "RO"}
                onClick={() => {
                  handleMapClick("RO");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "RO"));
                }}
              />
              <StateBr
                state="RR"
                isSelected={isSelected?.sigla === "RR"}
                onClick={() => {
                  handleMapClick("RR");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "RR"));
                }}
              />
              <StateBr
                state="SC"
                isSelected={isSelected?.sigla === "SC"}
                onClick={() => {
                  handleMapClick("SC");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "SC"));
                }}
              />
              <StateBr
                state="SP"
                isSelected={isSelected?.sigla === "SP"}
                onClick={() => {
                  handleMapClick("SP");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "SP"));
                }}
              />
              <StateBr
                state="SE"
                isSelected={isSelected?.sigla === "SE"}
                onClick={() => {
                  handleMapClick("SE");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "SE"));
                }}
              />
              <StateBr
                state="TO"
                isSelected={isSelected?.sigla === "TO"}
                onClick={() => {
                  handleMapClick("TO");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "TO"));
                }}
              />
              <StateBr
                state="DF"
                isSelected={isSelected?.sigla === "DF"}
                onClick={() => {
                  handleMapClick("DF");
                  onSelect && onSelect(info.find((item: any) => item.sigla === "DF"));
                }}
              />
            </g>
          </svg>
        </div>
      </div>
    );
  } else if (type === "region") {
    return (
      <>
        <div className="brasil">
          <div className="map-area-transform">
            {tooltipPosition && isSelected && showCards && (
              <div
                className="tooltip"
                style={{
                  left: `${tooltipPosition?.x}px`,
                  top: `${tooltipPosition?.y}px`,
                }}
              >
                <Item>
                  <FlexDiv>
                    <Col style={{ maxWidth: "fit-content" }} className="bg-light align-items-center ">
                      <PlaceholderSVG />
                    </Col>
                    <Col style={{ maxWidth: "fit-content" }} className="bg-light align-items-left">
                      <Row className="">
                        <Title>{isSelected?.name}</Title>
                      </Row>
                      <Row className="">
                        <Description>
                          {" "}
                          {profile === "volunteer"
                            ? isSelected?.volunteers === 1
                              ? `possui 1 voluntário ${
                                  formatNumber(isSelected?.hours) === 1
                                    ? "com 1 hora de atividade"
                                    : formatNumber(isSelected?.hours) === 0
                                    ? "e ainda não há horas de atividades"
                                    : `com ${formatNumber(isSelected?.hours)} horas de atividades`
                                }`
                              : !isSelected?.volunteers
                              ? `ainda não tem voluntários`
                              : `possui ${isSelected?.volunteers} voluntários  ${
                                  formatNumber(isSelected?.hours) === 1
                                    ? "com 1 hora de atividade"
                                    : formatNumber(isSelected?.hours) === 0
                                    ? "e ainda não há horas de atividades"
                                    : `com ${formatNumber(isSelected?.hours)} horas de atividades`
                                }`
                            : `${
                                isSelected?.projects === 1
                                  ? `1 projeto`
                                  : isSelected?.projects === 0
                                  ? `ainda não tem projetos realizados`
                                  : `${formatNumber(isSelected?.projects)} projetos`
                              } e ${
                                isSelected?.actions === 1
                                  ? `1 aprovado`
                                  : isSelected?.actions === 0
                                  ? `ainda não tem nenhuma aprovacão`
                                  : `${formatNumber(isSelected?.actions)} aprovados`
                              }`}
                        </Description>
                      </Row>
                    </Col>
                  </FlexDiv>
                </Item>
              </div>
            )}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mapa-svg-estados-svg"
              width="600"
              height="600"
              viewBox="150 70 450 450"
            >
              <g className="map-area-transform" id="regions">
                <RegionBr
                  region="NORTE"
                  isSelected={isSelected?.sigla === "NORTE"}
                  onClick={() => {
                    handleMapClick("NORTE");
                    onSelect && onSelect(info.find((item: any) => item.sigla === "NORTE"));
                  }}
                />
                <RegionBr
                  region="SUL"
                  isSelected={isSelected?.sigla === "SUL"}
                  onClick={() => {
                    handleMapClick("SUL");
                    onSelect && onSelect(info.find((item: any) => item.sigla === "SUL"));
                  }}
                />
                <RegionBr
                  region="NORDESTE"
                  isSelected={isSelected?.sigla === "NORDESTE"}
                  onClick={() => {
                    handleMapClick("NORDESTE");
                    onSelect && onSelect(info.find((item: any) => item.sigla === "NORDESTE"));
                  }}
                />
                <RegionBr
                  region="CENTRO"
                  isSelected={isSelected?.sigla === "CENTRO"}
                  onClick={() => {
                    handleMapClick("CENTRO");
                    onSelect && onSelect(info.find((item: any) => item.sigla === "CENTRO"));
                  }}
                />
                <RegionBr
                  region="SUDESTE"
                  isSelected={isSelected?.sigla === "SUDESTE"}
                  onClick={() => {
                    handleMapClick("SUDESTE");
                    onSelect && onSelect(info.find((item: any) => item.sigla === "SUDESTE"));
                  }}
                />
              </g>
            </svg>
          </div>
        </div>
      </>
    );
  }

  return <></>;
};

export default BrazilMap;

const PlaceholderSVG = () => (
  <CicleImg>
    <CustoImg
      src="https://upload.wikimedia.org/wikipedia/commons/b/be/Mapa_do_Brasil_com_a_Bandeira_Nacional.png"
      alt="Transforma Brasil"
      loading="lazy"
    ></CustoImg>
  </CicleImg>
);

const CustoImg = styled.img`
  padding-right: 13px;
  padding-left: 1px;
  width: 52px;
  padding-top: 5px;
`;

const CicleImg = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: transparent;
  display: -webkit-box !important;
  padding: inherit;
  -webkit-box-align: center;
`;

const Item = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  width: 275px;
  height: 103px;
  border-radius: 4px;
  border: 1px solid #495eec;
  background: #fff;
  margin-top: 20px;
  margin-bottom: 20px;
  flex-shrink: 0;
  background: #fff;
  box-shadow: 2px 2px 4px 0px rgba(0, 0, 0, 0.25);
  overflow: hidden;
`;

const Title = styled.span`
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: nomal;
`;

const Description = styled.p`
  margin-top: 10px;
  color: #000;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  margin-bottom: 0px;
`;

const FlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
