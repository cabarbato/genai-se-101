export type EnviromentType = {
  BASE_URL: string;
};

const local: EnviromentType = {
  BASE_URL: "http://localhost:8088",
};

export default { local };
