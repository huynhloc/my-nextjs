export type CallBack = (error?: unknown, data?: unknown) => void;

export type Pokemon = {
  abilities: unknown[];
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
};
