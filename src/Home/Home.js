import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import {Link} from'react-router-dom'
import'./Home.css'

function Home() {
    return ( <div className="wrapper">
        <Header/> 
        <div className="container">
            <div className="info_book">
                <div className="info_left">
                    <p className="tittle">Thông tin sách</p>
                    <img className="img_book" src="https://www.netabooks.vn/Data/Sites/1/Product/49313/triet-ly-va-chinh-sach-giao-duc.jpg" alt="img_book"/>
                </div>
                <div className="info_right">
                    <p className="name_book">Triết lí và chính sách giáo dục</p>
                    <ul className="info">
                        <li>Tác giả: Christopher Winch và John Gingell</li>
                        <li>Dịch giả: Nguyễn Thị Hạ Ni</li>
                        <li>Số trang: 248 trang</li>
                        <li>Nhà xuất bản: Dân trí</li>
                        <li>Ngày cập nhật:</li>
                        <li>Định dạng: HTML</li>
                    </ul>

                    <div className="social">
                        <img className="logo-social" src="https://www.logolynx.com/images/logolynx/29/299cb082dcf1eef305ca1c7515385b14.png" alt="Facebook"/>
                        <img className="logo-social" src="https://th.bing.com/th/id/R.5682eb3371f668b013e728ef0a7c3e96?rik=14jsLIcT1jIO4g&pid=Img" alt="Insta"/>
                        <img className="logo-social" src="https://th.bing.com/th/id/R.fd48dca3a3d60a01ff5097cf5ed3da7c?rik=UTQlxf7uo9mzHA&pid=Img " alt='twiter'/>
                        <img className="logo-social" src="https://th.bing.com/th/id/R.f135bbf24530c891d40c8c1625f8cd9d?rik=VodAJUJHnIG1xQ&pid=ImgRaw&r=0" alt="gmail"/>
                    </div>
                    <Link to={`/reading`}><div className="read">ĐỌC SÁCH</div></Link>
                </div>
            </div>
            <div className="introduce-book">
                <h1>GIỚI THIỆU SÁCH</h1>
                <p>Cuốn sách cố gắng cung cấp cho độc giả một bức tranh đa diện, đa sắc và có chiều sâu về một trong những chủ đề “khó nhằn” nhưng lại cốt tủy nhất của khoa học giáo dục, đó là: Triết lý giáo dục và mối quan hệ của nó với chính sách giáo dục. Mười chương của cuốn sách lần lượt khám phá những chiều cạnh đa dạng tạo nên hoặc gây ảnh hưởng tới thứ chúng ta định danh là “triết lý giáo dục”.Độc giả rất khó tìm ra được một phát biểu đơn nhất về triết lý giáo dục trong cuốn sách này bởi chính các tác giả đã khẳng định rằng, không tồn tại một kiểu triết lý giáo dục chung duy nhất áp dụng cho mọi nền giáo dục ở nhiều xã hội khác nhau, trong các thời điểm khác nhau. Hai tác giả Winch và Gingell bắt đầu với việc tiếp cận từ mục tiêu của giáo dục, chương trình giáo dục, thực tiễn dạy và học cho tới hàng loạt vấn đề thu hút sự quan tâm của công chúng như kiểm tra đánh giá, thành tích, giáo dục công dân, hướng nghiệp, yếu tố chính trị và kinh tế thị trường trong giáo dục. Những khía cạnh này cung cấp cho chúng ta nền tảng để hiểu thế nào là triết lý giáo dục, nó được cấu thành từ những bộ phận nào và vận hành ra sao, và nó đã tác động như thế nào tới việc hoạch định chính sách giáo dục của một quốc gia hay một cộng đồng xã hội. Mỗi thành tố ngoài được phân tích, mổ xẻ, so sánh, liên hệ giữa các hệ thống xã hội khác nhau, còn được đặt trong tương quan với các quan niệm đã có từ quá khứ, từ đó giúp độc giả có cái nhìn sâu sắc. Ngoài ra, mỗi chương sách có một phần Câu hỏi thảo luận mang tính chất gợi mở những suy tưởng sâu hơn cùng với một Danh mục tài liệu đọc thêm bổ trợ cho công tác nghiên cứu khoa học giáo dục. Một công trình rất đáng giá đối với những người hoạch định chính sách giáo dục, các nhà sư phạm và nghiên cứu giáo dục cùng đông đảo giáo viên, giảng viên đang nỗ lực xác lập một triết lý giáo dục.</p>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Home;