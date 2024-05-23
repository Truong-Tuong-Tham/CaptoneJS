export const renderPhoneList=(arrphone) => {
    let contentHTML="";
    arrphone.forEach((itemPhone) => {
    let contentTr=`
    <div class="card" style="width: 17rem">
  <img src="${itemPhone.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${itemPhone.name}</h5>
    <p class="card-text">${itemPhone.desc}</p>
    <div><h5>Giá:${itemPhone.price}<sup>đ</sup></h5></div>
    
    </div>
<button onclick="themPhone(${itemPhone.id})">Thêm vào giỏ hàng</button>
 </div>
  
  
</div>
    `
    contentHTML+=contentTr;  
    });
    document.querySelector('#showPhone').innerHTML=contentHTML;
    }
    export const showDataItem = (item) => {
let arritem="";
let total=0;
item.forEach((items) => {
let gia = items.soLuong*items.price;
let content= `
<tr>
<td>${items.name}</td>
<td class="card" style="width:5rem;"><img  src="${items.img}" alt="" /></td>
<td>${items.price}</td>
<td><input onclick="tinhtien(${items.soLuong},${items.price})" style="width:30px;outline:none" type="number" type="button" id ="soL"value="${items.soLuong}" min="1" /></td>
<td><button onclick="deletei(${items.id})" class="btn btn-danger">Xóa</button></td>
</tr>
`
total+=gia;
arritem+=content;
})
document.getElementById('body').innerHTML=arritem;
document.getElementById('total').innerHTML=total;
}