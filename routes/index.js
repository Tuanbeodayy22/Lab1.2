const express = require('express');
const router = express.Router();

const news = [
    {
        id: 1,
        title: "Tin tức công nghệ mới nhất",
        summary: "Công ty A vừa ra mắt sản phẩm công nghệ đột phá...",
        content: "Tính năng chăm sóc sức khỏe trên Huawei Watch D2",
        image: "https://i1-sohoa.vnecdn.net/2024/11/07/hinh1-1730886964-3293-1730973592.jpg?w=0&h=0&q=100&dpr=2&fit=crop&s=NHJVcTKvS-8miu-eYJcMrA"
    },
    {
        id: 2,
        title: "Mẹo sức khỏe cho mùa đông",
        summary: "CẨM NANG CHĂM SÓC SỨC KHỎE",
        content: "Theo các chuyên gia y tế, cơ thể mỗi chúng ta cũng là một cỗ máy, nếu muốn hoạt động tốt cần được kiểm tra, bảo dưỡng thường xuyên nếu muốn hoạt động tốt. Vì vậy, chúng ta nên kiểm tra sức khỏe toàn diện ít nhất mỗi lần một năm để hiểu cơ thể mình đang cần gì.\n" +
            "\n" +
            "Sự khác biệt mà các Gói khám sức khỏe tổng quát tại Vinmec mang lại là khả năng phát hiện sớm và kịp thời các bệnh đang gia tăng và được coi là nguyên nhân hàng đầu gây tử vong ở Việt Nam hiện nay như: Đột quỵ, ung thư, bệnh lý hô hấp, đái tháo đường; các bệnh lý hay gặp như tăng huyết áp, rốỉ loạn mỡ máu...). Với trẻ nhỏ là khả năng đánh giá toàn diện sức khỏe và tìm ra các bệnh lý trong giai đoạn tiềm ẩn có thể ảnh hưởng tới cuộc sống sau này.\n" +
            "\n" +
            "Với phương châm “Phòng bệnh hơn chữa bệnh”, Hệ thống các bệnh viện Đa khoa Quốc tế Vinmec xây dựng các gói kiểm tra sức khỏe tổng quát phù hợp với từng độ tuổi (trong đó có cả trẻ em), giới và nhu cầu riêng của khách hàng. Để giúp quý khách đọc và hiểu rõ ý nghĩa của những con số, thông tin y học được ghi trong bản báo cáo y tế, phản ánh tình trạng của quý khách sau khi thăm khám và cung cấp những tư vấn điều chỉnh chế độ dinh dưỡng và lối sống để ngăn ngừa bệnh tiến triển, cải thiện triệu chứng, nâng cao chất lượng cuộc sống, Vinmec thân gửi tới quý khách hàng cuốn “ Cẩm nang chăm sóc sức khỏe ”. Bản cứng đã được gửi kèm Báo cáo y tế tới khách hàng đã sử dụng dịch vụ khám sức khỏe tổng quát tại Hệ thống các Bệnh viện Đa khoa Quốc tế Vinmec, bản mềm có thể tham khảo ngay trên website Vinmec.com. Với hai phần: \" Ý nghĩa các chỉ số ” và “ Sống khỏe với dinh dưỡng và lối sống lành mạnh ” , Vinmec mong rằng cẩm nang này sẽ mang lại những lời khuyên thiết thực để chăm sóc sức khỏe, duy trì sự cân bằng thể chất và tinh thần.\n" +
            "\n" +
            "Mong rằng quý khách sẽ tiếp tục cùng Vinmec duy trì lịch khám sức khỏe hàng năm để có thể đẩy lùi bệnh tật và sở hữu một sức khỏe như mong muốn.\n" +
            "\n" +
            "Trân trọng,\n" +
            "\n" +
            "Hệ thống y tế Vinmec",
        image: "https://www.vinmec.com/static/uploads/large_Ung_Buu_W1_063_5_71020db7f2.jpg"
    },
    // ... Thêm các tin tức khác
];

router.get('/', (req, res) => {
    res.render('index', { title: 'Trang chủ' });
});

router.get('/category', (req, res) => {
    const categories = [
        { id: 1, name: "Công nghệ", description: "Tin tức và cập nhật công nghệ mới nhất" },
        { id: 2, name: "Sức khỏe", description: "Mẹo sức khỏe và hướng dẫn chăm sóc sức khỏe" },
        // ... Thêm các chuyên mục khác
    ];
    res.render('list', { title: 'Danh mục', categories: categories });
});

router.get('/aboutme', (req, res) => {
    const aboutme = {
        name: "Lê Văn Tuấn",
        MSV: "PH48359",
        SĐT: "0889220402",
        Major: "Công nghệ thông tin",
        Adress: "Vĩnh Phúc"
    };
    res.render('aboutme', { title: 'Giới thiệu', aboutme: aboutme });
});

router.get('/news', (req, res) => {
    res.render('news-list', { title: 'Tin tức', news: news });
});

router.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const newsItem = news.find(item => item.id == id);
    if (newsItem) {
        res.render('news-detail', { title: newsItem.title, item: newsItem });
    } else {
        res.status(404).send('Không tìm thấy tin tức');
    }
});

module.exports = router;