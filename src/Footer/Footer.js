import './Footer.css'
function Footer() {
    return ( <div className='footer'>
        <div className='wraper-footer'>
        <div className='footer-left'>
            <h1>Thông tin liên hệ</h1>
            <p>Công ty cổ phần sách điện tử BookView</p>
            <p>Số 100 đường Trần Duy Hưng, phường Trung Hòa, Quận Cầu Giấy, Thành phố Hà Nội, Việt Nam</p>
            <p>ĐKKD số 0108796796 do SHKĐT TP Hà Nội cấp ngày 24/06/2020 | <br/> Chịu trách nhiệm nội dung: Ông Đinh Quang Hoàng</p>
            <p>Email:bookview@gmail.com | Tel:0912651324</p>
        </div>
        <div className='footer-right'>
            <div className='qrcode'>
                <img className='img-qr' src='https://www.shiftboard.com/wp-content/uploads/2016/08/shiftboard-qr-code.png' alt='QRcode'/>
                <div>
                    <p>Hệ điều hành: IOS</p>
                    <p>Phiên bản ứng dụng: 3.9</p>
                    <p>Ngày đăng:08/12/2020</p>
                </div>
            </div>
            <div className='qrcode'>
            <img className='img-qr' src='https://www.shiftboard.com/wp-content/uploads/2016/08/shiftboard-qr-code.png' alt='QRcode'/>
                <div>
                    <p>Hệ điều hành: Android</p>
                    <p>Phiên bản ứng dụng: 3.9</p>
                    <p>Ngày đăng:08/12/2020</p>
                </div>
            </div>
        </div>
        </div>
    </div> );
}

export default Footer;