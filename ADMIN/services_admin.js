 const UL="https://663e15cce1913c4767967626.mockapi.io/Products";
 export const getListPhone = ()=> {
return axios ({
url:UL,
method:'GET', 
})
}
export const createPhoneAPI = (phonedata) => {
    return axios ({
        url:UL,
        method:'POST', 
        data:phonedata,
        })
}
export const deletePhoneApi = (id) => {
    return axios ({
        url:`https://663e15cce1913c4767967626.mockapi.io/Products/${id}`,
        method:'DELETE', 
        });

}
export const getDetailApi = (id) =>   {
    return axios({
      url: `https://663e15cce1913c4767967626.mockapi.io/Products/${id}`,
      method: 'GET',
    })
   }
export const updateAPI = (dataForm) => {
return axios ({
    url:`https://663e15cce1913c4767967626.mockapi.io/Products/${dataForm.id}`,
    method:'PUT',
    data:dataForm,
    });   
}
