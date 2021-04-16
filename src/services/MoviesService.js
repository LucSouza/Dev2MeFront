import { http } from "@/services/config.js";

export default {
  
  listar: () => {
      return http.get("?movieType=ALL");
  },
  pegarFilme: (id) => {
    return http.get(id);
},
};
