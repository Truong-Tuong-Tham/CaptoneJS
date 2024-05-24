import { renderPhoneList, showDataItem, showMessage } from "./controller_customer.js";
import { getDetailApi, getListPhone } from "./services_customer.js";

 export const fetchListPhoneC = ()=> {
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

    fetchListPhoneC();
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
      const findtype = () => {
        console.log("yess");
        getListPhone()
    .then((res) => {
        console.log('res: ', res);
        let listPhone = res.data;
        let typeFind=document.getElementById('find').value;
        if(typeFind=="ALL"){
        renderPhoneList(listPhone);
        }
        else{let phoneType = listPhone.filter((item)=>item.type == typeFind);
          renderPhoneList(phoneType);}
      })
      .catch((err) => {
        console.log('err: ', err);
      });
        
        };
        window.findtype=findtype;
        // tăng giảm số lượng 
        let counterValue = 0;
        function increment(id) {
          getDetailApi(id)
        .then ((res)=>{
          let detailPhone =res.data;
          let phoneIndex = arrCart.find((item)=>item.id == detailPhone.id);
       if(phoneIndex.soLuong>=1) {
        phoneIndex.soLuong+=1;
       }
        console.log("🎱 - arrCart:", arrCart)
        showDataItem(arrCart);
        
        })
        .catch((err)=>{ console.log("err",err)})
        }
        window.increment=increment;
        function decrement(id) {
          getDetailApi(id)
          .then ((res)=>{
            let detailPhone =res.data;
            let phoneIndex = arrCart.find((item)=>item.id == detailPhone.id);
         if(phoneIndex.soLuong<=1) {
          showMessage("Số lượng nhỏ nhất rồi ")
         }
         else {
          phoneIndex.soLuong-=1;
         }
          console.log("🎱 - arrCart:", arrCart)
          showDataItem(arrCart);
          
          })
          .catch((err)=>{ console.log("err",err)})
        }
        window.decrement=decrement;
