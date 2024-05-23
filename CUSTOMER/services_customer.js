const UL="https://663e15cce1913c4767967626.mockapi.io/Products";
 export const getListPhone = ()=> {
return axios ({
url:UL,
method:'GET', 
})
}
export const getDetailApi = (id) =>   {
    return axios({
      url: `https://663e15cce1913c4767967626.mockapi.io/Products/${id}`,
      method: 'GET',
    })
   }