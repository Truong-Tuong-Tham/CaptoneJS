import { renderPhoneList, showDataItem } from "./controller_customer.js";
import { getDetailApi, getListPhone } from "./services_customer.js";

const fetchListPhone = ()=> {
    getListPhone()
    .then((res) => {
        console.log('res: ', res);
        let listPhone = res.data;
        renderPhoneList(listPhone);
      })
      .catch((err) => {
        console.log('err: ', err);
      });
    }
    fetchListPhone();
     const arrCart=[];
   
    const themPhone = (id) => {
        getDetailApi(id)
        .then ((res)=>{
          let detailPhone =res.data;
          let phoneIndex = arrCart.find((item)=>item.id == detailPhone.id);
        if(!phoneIndex){
          arrCart.push({...detailPhone,soLuong:1})
        }
        else{
        phoneIndex.soLuong+=1;
        }
        console.log("🎱 - arrCart:", arrCart)
        showDataItem(arrCart);
        
        })
        .catch((err)=>{ console.log("err",err)})
      }
      window.themPhone=themPhone;
      // const tinhtien =(totall,price)=> {
      // let tienMoi = document.getElementById('soL').value;
      // let tienCu=document.getElementById('total').value
      // if (tienMoi<totall){
      // tienCu=tienCu-((totall-tienMoi)*price);
      // }else {
      //   tienCu=tienCu+((tienMoi-totall)*price);
      // }
      // document.getElementById('soL').innerHTML=tienCu;
      // }
      // window.tinhtien=tinhtien;
    
      const  deletei = (id) => {
        getDetailApi(id)
        .then ((res)=>{
          let dataPhone =res.data;
          let phoneIndex =arrCart.findIndex((item)=>item.id == dataPhone.id);
if (phoneIndex!== -1) {
   
    arrCart.splice(phoneIndex, 1);
}
        showDataItem(arrCart);
        
        })
        .catch((err)=>{ console.log("err",err)})
      }
      window.deletei=deletei;