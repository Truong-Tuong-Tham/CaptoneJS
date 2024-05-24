import { getDataForm, renderPhoneList, resetForm, showDataItem, showMessage } from "./controller_admin.js";
import { createPhoneAPI, deletePhoneApi, getDetailApi, getListPhone, updateAPI } from "./services_admin.js";
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

const createPhone = () => {
let dataPhone=getDataForm();
createPhoneAPI(dataPhone)
.then((res) => {
 console.log("🎱- res:", res)
showMessage("Thêm thành công");
fetchListPhone();
resetForm();
})
.catch((err) => {
    console.log('err: ', err);
  });

}
window.themPhone=createPhone;

const deletePhone=(id) => {
deletePhoneApi(id)
.then((res) => {
  console.log("🎱 - .then - res:", res)
  showMessage("Xóa thành công");
  fetchListPhone();
})
.catch((err)=>{
  console.log("err",err)
})
}
window.deletePhone=deletePhone;

const getDetail = (id) => {

  getDetailApi(id)
  .then ((res)=>{
    let detailPhone=res.data;
    showDataItem(detailPhone)
    console.log("res",res)
  })
  .catch((err)=>{  console.log("err",err)})
}
window.getDetail=getDetail;





const updatePhone = () => {
let phone=getDataForm();
updateAPI(phone)
.then((res) => {
  showMessage("Chỉnh sửa thành công")
  fetchListPhone()
  resetForm()
  console.log("🎱 - .then - res:", res)
})
.catch((err)=>{
  console.log("err",err)
})
}
window.updatePhone=updatePhone;

