// render data  lên màn hình 
const I="IPhone";
export const renderPhoneList=(arrphone) => {
let contentHTML="";
arrphone.forEach((itemPhone) => {
let contentTr=`<tr>
<td>${itemPhone.id}</td>
<td>${itemPhone.name}</td>
<td>${itemPhone.price}</td>
<td>
<img src="${itemPhone.img}" alt=""  width="70px"/>
</td>
<td>${itemPhone.desc}</td>
<td>${itemPhone.type}</td>
<td> <button onclick="deletePhone(${itemPhone.id})" class="btn btn-danger">Xóa</button>
     <button class="btn btn-success" onclick="getDetail(${itemPhone.id})"><a href="#myModal">Sửa</a></button> 
</td>
</tr>
`
contentHTML+=contentTr;  
});
document.querySelector('#table').innerHTML=contentHTML;
}
// Lấy data từ modal
export const getDataForm = () => {
let id=document.getElementById('id').value;   
let name=document.getElementById('tname').value;
let price=document.getElementById('tprice').value*1;
let screen=document.getElementById('tscreen').value;
let backCamera=document.getElementById('tbackCamera').value;
let frontCamera=document.getElementById('tfrontCamera').value;
let img=document.getElementById('timg').value;
let desc=document.getElementById('tdesc').value;
let type=document.getElementById('tstype').value;
let dataPhone = {
    id,
    name,
    price,
    screen,
    backCamera,
    frontCamera,
    img,
    desc,
    type,

}
return dataPhone;
}
// Show thông báo thao tác 
export const showMessage = (message) => {
    Swal.fire({
      title: message,
      text: '',
      icon: 'success',
    });
  };
  export const ShowMessage = (message) => {
    Swal.fire({
      icon: "error",
      title: "Not FOUND",
      text: message,
    });
  };
  export const resetForm = ()=> {
    let id=document.getElementById('id').value="";   
    let name=document.getElementById('tname').value="";
    let price=document.getElementById('tprice').value="";
    let screen=document.getElementById('tscreen').value="";
    let backCamera=document.getElementById('tbackCamera').value="";
    let frontCamera=document.getElementById('tfrontCamera').value="";
    let img=document.getElementById('timg').value="";
    let desc=document.getElementById('tdesc').value="";
    let type=document.getElementById('tstype').value="";
  }
export const getDataModal=() => {

}
export const showDataItem = (item) => {
  console.log("🎱 - showDataItem - item:", item);
 let {id,name,price,screen,backCamera,frontCamera,img,desc,type}=item
 document.getElementById('id').value=id;
 document.getElementById('tname').value=name;
 document.getElementById('tprice').value=price;
 document.getElementById('tscreen').value=screen;
 document.getElementById('tbackCamera').value=backCamera;
 document.getElementById('tfrontCamera').value=frontCamera;
 document.getElementById('timg').value=img;
 document.getElementById('tdesc').value=desc;
 document.getElementById('tstype').value=type=="IPhone" ? I:"SamSung";
}
// ShowButton
export const ShowButton = (type)=> {
  document.getElementById('them').style.display = type == 'create'?'inline':'none';
  document.getElementById('capnhat').style.display = type == 'update'?'inline':'none';
}