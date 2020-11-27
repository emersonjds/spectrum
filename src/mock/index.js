const newVacancies = [
  {
    id: 1,
    titleVacancy: "Professor",
    sector: "Escola",
    description: "Vaga para colegio particular na região da Aclimação.",
    district: "SP, Sao Paulo",
  },
  {
    id: 2,
    titleVacancy: "Flutter Dev",
    sector: "Desenvolvimento",
    description: "Desenvolvedor Flutter com xp em MobX",
    district: "SP, Sao Paulo",
  },
  {
    id: 3,
    titleVacancy: "Contador",
    sector: "Economia",
    description: "Conhecimentos em balanços e folha de pagamento",
    district: "SP, Sao Paulo",
  },
  {
    id: 4,
    titleVacancy: "An. de Licitações",
    sector: "Licitações",
    description:
      "Conhecimento em analise documental de licitações em Marketing",
    district: "SP, Sao Paulo",
  },
  {
    id: 5,
    titleVacancy: "Professor",
    sector: "Escola",
    description:
      "Cillum excepteur enim est consequat Esse Lorem sunt labore cillum nostrud.",
    district: "SP, Sao Paulo",
  },
];

const courseCards = [
  {
    id: 1,
    imgUrl: require("../assets/img/courses/computing.png"),
    price: "35,00",
    title: " Flutter",
    description: "Crie aplicativos em Flutter para ambas as plataformas",
  },
  {
    id: 2,
    imgUrl: require("../assets/img/courses/art.png"),
    price: "35,00",
    title: "Cartunismo",
    description: "Tecnicas avançadas para desenho",
  },
  {
    id: 3,
    imgUrl: require("../assets/img/courses/dev.png"),
    price: "35,00",
    title: "HTML, CSS e JS",
    description: "Aprenda as melhores tecnicas para Web",
  },
  {
    id: 4,
    imgUrl: require("../assets/img/office.png"),
    price: "35,00",
    title: "Office com Power BI",
    description: "Power Bi com pacote Office",
  },
  {
    id: 5,
    imgUrl: "https://img-a.udemycdn.com/course/480x270/567828_67d0.jpg",
    price: "50,00",
    title: "Curso Completo de Python",
    description: "Aprenda a usar pandas com ML",
  },
];

const candidates = [
  {
    id: 1,
    imgUrl: require("../assets/img/candidates/prof_1.png"),
    name: "Mariana Leiva",
    profession: "Desenvolvedora",
    description: "Formado em ADS pela USP",
    hyperfocus: "logica e programação",
  },
  {
    id: 2,
    imgUrl: require("../assets/img/candidates/prof_2.png"),
    name: "Rogerio Russo",
    profession: "Marketing",
    description: "Formado em Marketing pela ESPM",
    hyperfocus: "criatividade",
  },
  {
    id: 3,
    imgUrl: require("../assets/img/candidates/prof_3.png"),
    name: "Emerson Silva",
    profession: "Desenvolvedor",
    description: "Formado em ADS pela Xpto faculdade",
    hyperfocus: "logica e programação",
  },
  {
    id: 4,
    imgUrl: require("../assets/img/candidates/prof_4.png"),
    name: "Lucas Silva",
    profession: "Administração",
    description: "Formado em ADM pela PUC SP",
    hyperfocus: "leitura e analise estratégica",
  },
  {
    id: 6,
    imgUrl: require("../assets/img/candidates/prof_3.png"),
    name: "Claudia Souza",
    profession: "Desenvolvedora",
    description: "Formado em Ciencia da Computacao pela Mack",
    hyperfocus: "logica e programação",
  },
  {
    id: 5,
    imgUrl: require("../assets/img/candidates/prof_4.png"),
    name: "Juliana Oliveira",
    profession: "Economista",
    description: "Formado em Adm pela Puc Rio",
    hyperfocus: "Analise de dados matemáticos",
  },
];

const partners = [
  {
    id: 1,
    imgUrl: require("../assets/img/partners/pt_1.png"),
    name: "Eliane A.",
    profession: "Cozinheira",
    courses: "Cupcakes",
    descriptionCourse: "Criando cupcakes veganos para venda online",
  },
  {
    id: 2,
    imgUrl: require("../assets/img/partners/pt_2.png"),
    name: "Rogerio Cardoso",
    profession: "Marketing",
    courses: "Google ADS",
    descriptionCourse: "Aprimorando Dados com Google Ads",
  },
  {
    id: 3,
    imgUrl: require("../assets/img/partners/pt_3.png"),
    name: "Livia Oliveira",
    profession: "Administração",
    courses: "Excel para todos",
    descriptionCourse: "Excel from 0 to Hero",
  },
  {
    id: 4,
    imgUrl: require("../assets/img/partners/pt_4.png"),
    name: "Wellington Damazio",
    profession: "Direito",
    courses: "Defesa do Consumidor",
    descriptionCourse: "Entendendo o código de defesa do Consumidor",
  },
  {
    id: 5,
    imgUrl: require("../assets/img/partners/pt_5.png"),
    name: "Claudio Mattos",
    profession: "Desenvolvedor",
    courses: "React 360",
    descriptionCourse: "Aplicacoes React em 360 graus",
  },
  {
    id: 6,
    imgUrl: require("../assets/img/partners/pt_6.png"),
    name: "Mariane Dias",
    profession: "Midias Sociais",
    courses: "Facebook Editor",
    descriptionCourse: "Trabalhando com FB Editor para Instagram",
  },
];

module.exports = {
  newVacancies,
  courseCards,
  candidates,
  partners,
};
