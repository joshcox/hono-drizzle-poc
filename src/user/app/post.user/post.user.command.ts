type Params = {
  name: string;
}

type User = {
  name: string;
};

export default (params: Params): User => {
  return {
    name: params.name,
  }
};
