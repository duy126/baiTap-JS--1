// bài toán tính tiền lương nhân viên
function tinhLuong(){
    // các dữ liệu ban đầu
    var luong1Ngay = +document.getElementById("tienLuong1Ngay").value;
    var soNgayLam = +document.getElementById("soNgayLam").value;
    // xử lý dữ liệu người dùng nhập vào
    var tienLuongNhanVien = soNgayLam*luong1Ngay;
    // đẩy giá trị ra ngoài
    document.getElementById("result__bai1").innerText = `tiền lương nhân viên là : ${tienLuongNhanVien} đồng`

}



// bài toán tính giá trị trung bìnhs
function tinhTrungBinh(){
    // dữ liệu người dùng nhập vào
    var soThuNhat = +document.getElementById("soThu1").value;
    var soThuHai = +document.getElementById("soThu2").value;
    var soThuBa = +document.getElementById("soThu3").value;
    var soThuBon = +document.getElementById("soThu4").value;
    var soThuNam = +document.getElementById("soThu5").value;
    // quá trình xử lý dữ liệu
    var soTrungBinh = (soThuNhat + soThuHai + soThuBa + soThuBon + soThuNam)/5;
    // xuất dữ liệu ra ngoài màn hình
    document.getElementById("result__bai2").innerText = `số cần tìm là : ${soTrungBinh}`
}



// bài toán quy đổi tiền
function quyDoiTien(){
    // các giá trị ban đầu 
    const tyGia = 23500;
    // dữ liệu người dùng nhập vào
    var soTienUSD = +document.getElementById("tienUSD").value;
    // quá trình xử lý dữ liệu
    var soTienVND = soTienUSD*tyGia;
    // xuất ra màn hình
    document.getElementById("result__bai3").innerText = `số tiền là : ${soTienVND} đồng`

}




// bài toán tính diện tích, chu vi hình chữ nhật

// quá trình xử lý dữ liệu
var dienTich = chieuDai*chieuRong;
var chuVi = (chieuDai + chieuRong)*2;
// xuất dữ liệu ra màn hình
function tinhChuViDienTich(){
    // dữ liệu người nhập vào
    var chieuDai = +document.getElementById("chieuDai").value;
    var chieuRong = +document.getElementById("chieuRong").value;
    // quá trình xử lý dữ liệu
    var dienTich = chieuDai*chieuRong;
    var chuVi = (chieuDai + chieuRong)*2;
    // xuất giá trị ra màn hình
    document.getElementById("result__bai4").innerText  = ` diện tích là: ${dienTich} và chu vi là : ${chuVi}`

}




// bài toán tính tổng 2 ký đố
// dữ liệu người dùng nhập vào

// quá trình xử lý dữ liệu



// xuất dữ liệu ra màn hình
function tong2KiSo(){
    var so2ChuSo = document.getElementById("so2ChuSo").value;
    var soHangChuc = (so2ChuSo - (so2ChuSo%10))/10;
    var soHangDonVi = so2ChuSo%10;
    var tong2KiSo = soHangChuc + soHangDonVi;
    if(so2ChuSo > 99 || so2ChuSo < 10){
        document.getElementById("result__bai5").innerText = "số bạn nhập là không hợp lệ";
    }
    if(9<so2ChuSo && so2ChuSo <100)
    {document.getElementById("result__bai5").innerText = `Kết quả là: ${tong2KiSo}`;}
    

}




