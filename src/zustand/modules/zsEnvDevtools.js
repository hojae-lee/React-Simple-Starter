import { devtools } from "zustand/middleware";

const zsEnvDevtools = (store) => {
  const prod = import.meta.env.PROD;
  const useStore = prod ? store : devtools(store);

  return useStore;
};

export default zsEnvDevtools;
