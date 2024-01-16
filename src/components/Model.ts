export interface ODSbyProjectData {
  reference: string;
  description: string;
  color: string;
  projectsPercent: string;
  projectsPercentFull: string;
  totalProjects: string;
}

export interface ODSbyActionData {
  reference: string;
  description: string;
  totalVolunteers: string;
  hoursVolunteers: string;
  totalProjects: string;
  totalActions: string;
  volunteersTotalHours: string;
  percentActions: string;
}

export interface ODSbyVolunteersData {
  reference: string;
  description: string;
  color: string;
  volunteersPercent: string;
  volunteersPercentFull: string;
  totalVolunteers: string;
}
export interface VolunteerometerData {
  params: VolunteerometerDataParams;
}

export interface VolunteerometerDataParams {
  volunteers: VolunteerData;
}

interface MonthData {
  name: string;
  value: number;
  percent: string;
  hours: string;
}

export interface VolunteerData {
  active: number;
  percent: number;
  hours: {
    total: number;
    percent: number;
    calc: number;
  };
  total_by_chronology: {
    current_year: number;
    year: number;
    months: Array<{
      name: string;
      value: number;
      percent: string;
      hours: string;
    }>;
    months_percentual: {
      [key: string]: number;
    };
  };
  months: MonthData[];
}

export interface RankingProjectsData {
  projectName: string;
  numVolunteers: string;
  actions: number;
  hours: number;
  project_data: {
    locations: {
      city: string;
      state: string;
    };
    contacts: {
      email: string;
      phone: string;
    };
  };
}

export interface RankingVolunteersData {
  _id: string;
  actions: {
    hours: number;
    day: string;
  }[];
  days: string[];
  total_hours: number;
  name: string;
  email: string;
  state: string;
  city: string;
  contact: string[];
  actions_count: number;
}

export interface RegionData {
  notDefined: number;
  norte: number;
  nordeste: number;
  centro: number;
  sudeste: number;
  sul: number;
}

export interface RegionsAllData {
  norte: number;
  nordeste: number;
  centro: number;
  sudeste: number;
  sul: number;
}

export interface VolunteermeterData {
  months: {
    January: number;
    February: number;
    March: number;
    April: number;
    May: number;
    June: number;
    July: number;
  };
  months_percentual: {
    January: number;
    February: number;
    March: number;
    April: number;
    May: number;
    June: number;
    July: number;
  };
}

export interface CardDashboardWidgetData {
  actions: {
    total: number;
    percent: number;
    active: number;
    active_percent: number;
  };
  donations: {
    received: number;
    percent: number;
  };
  projects: {
    total: number;
    percent: number;
    regions: RegionData;
  };
  users: {
    new: number;
    percent: number;
  };
}

//Data details

export interface RegionProjectData {
  uf: string; // Nome do estado
  region: string; // Nome da região
  actions_count: number; // Quantidade de projetos
  projects_count: number; // Quantidade de aprovados
}

export interface RegionVolunteerData {
  uf: string; // Nome do estado
  region: string; // Nome da região
  volunteers_count: number; // Quantidade de voluntários
  hours_count: number; // Quantidade de horas de atividades de voluntários naquele estado
}

export type LocalData = {
  name?: string;
  sigla?: string;
  projects?: number;
  actions?: number;
  axioX?: number;
  axioY?: number;
  volunteers?: number;
  hours?: number;
};

export const positionTooltipMap: {
  region: string;
  axioX: number;
  axioY: number;
}[] = [
  {
    region: "NORTE",
    axioX: 202,
    axioY: -7,
  },
  {
    region: "NORDESTE",
    axioX: 447,
    axioY: 73,
  },
  {
    region: "SUL",
    axioX: 328,
    axioY: 352,
  },
  {
    region: "CENTRO",
    axioX: 254,
    axioY: 161,
  },
  {
    region: "SUDESTE",
    axioX: 410,
    axioY: 225,
  },
  {
    region: "AC",
    axioX: 74,
    axioY: 85,
  },
  {
    region: "AP",
    axioX: 329,
    axioY: -81,
  },
  {
    region: "AM",
    axioX: 152,
    axioY: 4,
  },
  {
    region: "BA",
    axioX: 471,
    axioY: 120,
  },
  {
    region: "CE",
    axioX: 503,
    axioY: 17,
  },
  {
    region: "ES",
    axioX: 497,
    axioY: 235,
  },
  {
    region: "GO",
    axioX: 349,
    axioY: 184,
  },
  {
    region: "MA",
    axioX: 420,
    axioY: 11,
  },
  {
    region: "MT",
    axioX: 267,
    axioY: 128,
  },
  {
    region: "MS",
    axioX: 282,
    axioY: 236,
  },
  {
    region: "MG",
    axioX: 438,
    axioY: 211,
  },
  {
    region: "PA",
    axioX: 310,
    axioY: 16,
  },
  {
    region: "PB",
    axioX: 556,
    axioY: 47,
  },
  {
    region: "PR",
    axioX: 327,
    axioY: 303,
  },
  {
    region: "PE",
    axioX: 527,
    axioY: 65,
  },
  {
    region: "AL",
    axioX: 557,
    axioY: 80,
  },
  {
    region: "PI",
    axioX: 462,
    axioY: 54,
  },
  {
    region: "RJ",
    axioX: 465,
    axioY: 271,
  },
  {
    region: "RN",
    axioX: 553,
    axioY: 23,
  },
  {
    region: "RS",
    axioX: 306,
    axioY: 379,
  },
  {
    region: "RO",
    axioX: 166,
    axioY: 102,
  },
  {
    region: "RR",
    axioX: 192,
    axioY: -92,
  },
  {
    region: "SC",
    axioX: 355,
    axioY: 347,
  },
  {
    region: "SP",
    axioX: 374,
    axioY: 266,
  },
  {
    region: "SE",
    axioX: 533,
    axioY: 99,
  },
  {
    region: "TO",
    axioX: 378,
    axioY: 94,
  },
  {
    region: "DF",
    axioX: 387,
    axioY: 168,
  },
];
