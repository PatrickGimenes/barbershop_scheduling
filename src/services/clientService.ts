import api from "../api";

export interface Cliente {
  id?: number;
  nome: string;
  telefone: string;
}

// Criar cliente
export const createCliente = async (cliente: Cliente) => {
  const { data } = await api.post("/clientes", cliente);
  return data;
};

// Buscar clientes
export const getClientes = async (): Promise<Cliente[]> => {
  const { data } = await api.get("/clientes");
  return data;
};
