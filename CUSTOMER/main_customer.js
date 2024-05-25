import { 
  ShowMessage,
  getArrayFromLocalStorage, 
  renderPhoneList, 
  saveArrayToLocalStorage, 
  showDataItem, 
  showMessage 
} from "./controller_customer.js";
import { 
  getDetailApi, 
  getListPhone 
} from "./services_customer.js";

// Fetch and render list of phones
export const fetchListPhoneC = () => {
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

const LPhone = getArrayFromLocalStorage('cart');
showDataItem(LPhone);

var arrCart = LPhone || [];  
const themPhone = (id) => {
  getDetailApi(id)
    .then((res) => {
      let detailPhone = res.data;
      let phoneIndex = arrCart.find((item) => item.id === detailPhone.id);
      if (!phoneIndex) {
        arrCart.push({ ...detailPhone, soLuong: 1 });
      } else {
        phoneIndex.soLuong += 1;
      }
      console.log("🎱 - arrCart:", arrCart);
      showDataItem(arrCart);
      saveArrayToLocalStorage('cart', arrCart);
    })
    .catch((err) => { 
      console.log("err", err);
    });
}

window.themPhone = themPhone;

// Function to delete 
const deletei = (id) => {
  getDetailApi(id)
    .then((res) => {
      let dataPhone = res.data;
      let phoneIndex = arrCart.findIndex((item) => item.id === dataPhone.id);
      if (phoneIndex !== -1) {
        arrCart.splice(phoneIndex, 1);
      }
      showDataItem(arrCart);
      saveArrayToLocalStorage('cart', arrCart);
    })
    .catch((err) => { 
      console.log("err", err);
    });
}

window.deletei = deletei;

// Function to filter phones by type
const findtype = () => {
  console.log("yess");
  getListPhone()
    .then((res) => {
      console.log('res: ', res);
      let listPhone = res.data;
      let typeFind = document.getElementById('find').value;
      if (typeFind === "ALL") {
        renderPhoneList(listPhone);
      } else {
        let phoneType = listPhone.filter((item) => item.type === typeFind);
        renderPhoneList(phoneType);
      }
    })
    .catch((err) => {
      console.log('err: ', err);
    });
};

window.findtype = findtype;

// Function to increment the quantity of a phone in the cart
const increment = (id) => {
  getDetailApi(id)
    .then((res) => {
      let detailPhone = res.data;
      let phoneIndex = arrCart.find((item) => item.id === detailPhone.id);
      if (phoneIndex && phoneIndex.soLuong >= 1) {
        phoneIndex.soLuong += 1;
        saveArrayToLocalStorage('cart', arrCart);
        showDataItem(arrCart);
      }
    })
    .catch((err) => { 
      console.log("err", err);
    });
}

window.increment = increment;

// Function to decrement the quantity of a phone in the cart
const decrement = (id) => {
  getDetailApi(id)
    .then((res) => {
      let detailPhone = res.data;
      let phoneIndex = arrCart.find((item) => item.id === detailPhone.id);
      if (phoneIndex) {
        if (phoneIndex.soLuong > 1) {
          phoneIndex.soLuong -= 1;
        } else {
          showMessage("Số lượng nhỏ nhất rồi");
        }
        saveArrayToLocalStorage('cart', arrCart);
        showDataItem(arrCart);
      }
    })
    .catch((err) => { 
      console.log("err", err);
    });
}

window.decrement = decrement;

const thanhtoan = () => {
  arrCart = []; 
  showDataItem(arrCart); 
  ShowMessage('Thanh toán thành công ') 
  saveArrayToLocalStorage('cart', arrCart);  
}

window.thanhtoan = thanhtoan;
