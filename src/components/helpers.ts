import { RegionProjectData, RegionVolunteerData } from "./Model";


export const states: { [key: string]: string } = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

export const getStateNameByUF = (name: string) => {
  return states[name?.toUpperCase()] || name?.toUpperCase();
};

export const getUFByStateName = (stateName: string): string | undefined => {
  const uf = Object.keys(states).find((key) => states[key] === stateName);
  return uf;
};

export const transformDataMapRegions = (dataMap: RegionProjectData[]) => {
  const regionMap: { [key: string]: { projects: number; actions: number } } = {
    "Centro-Oeste": { projects: 0, actions: 0 },
    Sul: { projects: 0, actions: 0 },
    Norte: { projects: 0, actions: 0 },
    Nordeste: { projects: 0, actions: 0 },
    Sudeste: { projects: 0, actions: 0 },
  };

  const stateData: any[] = [];

  dataMap.forEach((data) => {
    if (regionMap[data.region]) {
      regionMap[data.region].projects += data.projects_count;
      regionMap[data.region].actions += data.actions_count;
    }

    const stateName = data.uf;
    const existingState = stateData.find((s) => s.name === stateName);

    if (existingState) {
      existingState.projects += data.projects_count;
      existingState.actions += data.actions_count;
    } else {
      stateData.push({
        name: stateName,
        sigla: getUFByStateName(data.uf),
        projects: data.projects_count,
        actions: data.actions_count,
      });
    }
  });

  const regionData = Object.entries(regionMap).map(([key, value]) => {
    const regionName = `Região ${key.replace("-", " ")}`;
    const regionSigla = key?.split("-")[0].toUpperCase();
    return {
      name: regionName,
      sigla: regionSigla,
      projects: value.projects,
      actions: value.actions,
    };
  });
  return { regionData, stateData };
};

export const transformDataMapVolunteers = (dataMap: RegionVolunteerData[]) => {
  const regionMap: { [key: string]: { volunteers: number; hours: number } } = {
    "Centro-Oeste": { volunteers: 0, hours: 0 },
    Sul: { volunteers: 0, hours: 0 },
    Norte: { volunteers: 0, hours: 0 },
    Nordeste: { volunteers: 0, hours: 0 },
    Sudeste: { volunteers: 0, hours: 0 },
  };

  const stateData: any[] = [];

  dataMap.forEach((data) => {
    if (regionMap[data.region]) {
      regionMap[data.region].volunteers += data.volunteers_count;
      regionMap[data.region].hours += data.hours_count;
    }

    const stateName = data.uf;
    const existingState = stateData.find((s) => s.name === stateName);

    if (existingState) {
      existingState.volunteers += data.volunteers_count;
      existingState.hours += data.hours_count;
    } else {
      stateData.push({
        name: stateName,
        sigla: getUFByStateName(data.uf),
        volunteers: data.volunteers_count,
        hours: data.hours_count,
      });
    }
  });

  const regionData = Object.entries(regionMap).map(([key, value]) => {
    const regionName = `Região ${key.replace("-", " ")}`;
    const regionSigla = key?.split("-")[0].toUpperCase();
    return {
      name: regionName,
      sigla: regionSigla,
      volunteers: value.volunteers,
      hours: value.hours,
    };
  });

  return { regionData, stateData };
};

export function formatNumber(number: any) {
  return number.toLocaleString("pt-BR");
}

export const smoothScrollTo = (element: HTMLDivElement, target: number, duration: number) => {
  let start: number | null = null;
  const initialScrollTop = element.scrollTop;

  const step = (timestamp: number) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const currentScroll = easeInOutQuad(progress, initialScrollTop, target - initialScrollTop, duration);
    element.scrollTop = currentScroll;
    if (progress < duration) requestAnimationFrame(step);
  };

  requestAnimationFrame(step);
};

const easeInOutQuad = (t: number, b: number, c: number, d: number) => {
  t /= d / 2;
  if (t < 1) return (c / 2) * t * t + b;
  t--;
  return (-c / 2) * (t * (t - 2) - 1) + b;
};