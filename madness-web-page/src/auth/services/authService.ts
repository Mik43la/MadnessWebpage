import axios from "axios";

export const authService = {
    async loginUser ( ) {
        const url = `http://localhost:1337/api/auth/local`;
        const iden= "admin"
        const pass = "Admin123456"
        const response = await axios.post(
            url,
            { data : {
                "identifier": iden,
                "password": pass
            } },
            {
                headers: {
                    "Content-Type": "application/json",
                   
                }
            }
        );
        return response.data;
    }
}
  