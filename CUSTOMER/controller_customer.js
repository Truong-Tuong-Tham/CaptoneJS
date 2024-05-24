

export const renderPhoneList=(arrphone) => {
    let contentHTML="";
    arrphone.forEach((itemPhone) => {
    
    let  giaDepTien =itemPhone.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    let contentTr=`
    <div class="card" style="width: 17rem">
  <img  src="${itemPhone.img}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${itemPhone.name}</h5>
    <p class="card-text">${itemPhone.desc}</p>
    <div><h5>Giá: ${ giaDepTien}</h5></div>
    
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
let donvi=0;
item.forEach((items) => {
let gia = items.soLuong*items.price;
donvi+=items.soLuong;
let content= `
<tr>
<td>${items.name}</td>
<td class="card" style="width:5rem;"><img  src="${items.img}" alt="" /></td>
<td id="giatien">${items.price}</td>
<td><div class="counter">
<button class="btn-decrement" onclick="decrement(${items.id})">-</button>
<div class="value" id="counterValue">${items.soLuong}</div>
<button class="btn-increment" onclick="increment(${items.id})">+</button>
</div></td>
<td><button onclick="deletei(${items.id})" class="btn btn-danger">Xóa</button></td>
</tr>
`
total+=gia;
arritem+=content;

})
 let tongtien=total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
document.getElementById('donvi').innerHTML=donvi;
document.getElementById('body').innerHTML=arritem;
document.getElementById('total').innerHTML=tongtien;
}
export const showMessage = (message) => {
  Swal.fire({
    title: message,
    text: '',
    icon: "error",
  });
};