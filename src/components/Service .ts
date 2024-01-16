import {
  RegionProjectData,
} from "./Model";


const mock:RegionProjectData[] = [
  {
      "uf": "Acre",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 35
  },
  {
      "uf": "Amapá",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 15
  },
  {
      "uf": "Amazonas",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 42
  },
  {
      "uf": "Pará",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 21
  },
  {
      "uf": "Rondônia",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 17
  },
  {
      "uf": "Roraima",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 24
  },
  {
      "uf": "Tocantins",
      "region": "Norte",
      "actions_count": 0,
      "projects_count": 26
  },
  {
      "uf": "Alagoas",
      "region": "Nordeste",
      "actions_count": 0,
      "projects_count": 96
  },
  {
      "uf": "Bahia",
      "region": "Nordeste",
      "actions_count": 6,
      "projects_count": 538
  },
  {
      "uf": "Ceará",
      "region": "Nordeste",
      "actions_count": 2,
      "projects_count": 159
  },
  {
      "uf": "Maranhão",
      "region": "Nordeste",
      "actions_count": 1,
      "projects_count": 48
  },
  {
      "uf": "Paraíba",
      "region": "Nordeste",
      "actions_count": 0,
      "projects_count": 43
  },
  {
      "uf": "Pernambuco",
      "region": "Nordeste",
      "actions_count": 21,
      "projects_count": 1109
  },
  {
      "uf": "Piauí",
      "region": "Nordeste",
      "actions_count": 1,
      "projects_count": 48
  },
  {
      "uf": "Rio Grande do Norte",
      "region": "Nordeste",
      "actions_count": 7,
      "projects_count": 664
  },
  {
      "uf": "Sergipe",
      "region": "Nordeste",
      "actions_count": 0,
      "projects_count": 46
  },
  {
      "uf": "Distrito Federal",
      "region": "Centro-Oeste",
      "actions_count": 0,
      "projects_count": 57
  },
  {
      "uf": "Goiás",
      "region": "Centro-Oeste",
      "actions_count": 7,
      "projects_count": 83
  },
  {
      "uf": "Mato Grosso",
      "region": "Centro-Oeste",
      "actions_count": 0,
      "projects_count": 8
  },
  {
      "uf": "Mato Grosso do Sul",
      "region": "Centro-Oeste",
      "actions_count": 0,
      "projects_count": 44
  },
  {
      "uf": "Espírito Santo",
      "region": "Sudeste",
      "actions_count": 1,
      "projects_count": 76
  },
  {
      "uf": "Minas Gerais",
      "region": "Sudeste",
      "actions_count": 2,
      "projects_count": 236
  },
  {
      "uf": "Rio de Janeiro",
      "region": "Sudeste",
      "actions_count": 5,
      "projects_count": 183
  },
  {
      "uf": "São Paulo",
      "region": "Sudeste",
      "actions_count": 14,
      "projects_count": 537
  },
  {
      "uf": "Paraná",
      "region": "Sul",
      "actions_count": 0,
      "projects_count": 90
  },
  {
      "uf": "Rio Grande do Sul",
      "region": "Sul",
      "actions_count": 1,
      "projects_count": 60
  },
  {
      "uf": "Santa Catarina",
      "region": "Sul",
      "actions_count": 0,
      "projects_count": 62
  }
]


class Service {
  static async getDetailsRegionProjects(): Promise<RegionProjectData[]> {
    try {
      //  const response = await http.get("/statistics/details/regions");

      // if (response.status === 200 && response.data) {
      //   return response.data;
      // } else {
      //   throw new Error("Detalhes de Regiões Ativas - Projetos - Erro na solicitação para a API");
      // }
      return mock;
    } catch (error) {
      console.error("Detalhes de Regiões Ativas - Projetos - Error no Serviço de Dashboard", error);
      return [];
    }
  }
}

export default Service;
