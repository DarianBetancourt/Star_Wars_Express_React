import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

const Api = {

    getCharacters : async () => {
        try {
            const response = await axios.get(`${baseUrl}/personagens`);
            if (response.status === 200) {
                return response.data;
            }else{
                const message = "error"
                console.log("response whit status:"+response.status)
                return message
            }
        } catch (error) {
            console.log(error);
        }
    },
    createCharacter : async (request) => {
        try {
            const response = await axios.post(`${baseUrl}/personagens`,request,{
                headers: {"Content-type": "multipart/form-data"}
            });
            return response
        } catch (error) {
            console.log(error);
        }
    },
    //editCharacter :,
    //deleteCharacter :,

}

export default Api
