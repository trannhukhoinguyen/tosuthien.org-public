export interface rule {
  id: number;
  title: string;
  description: string;
}

const rules: rule[] = [
  {
    id: 1,
    title: "PHÁ NGÃ CHẤP",
    description: "Theo Phật pháp, bất cứ tiểu thừa, trung thừa, đại thừa, cho đến tối thượng thừa, chẳng có thừa nào là không phá ngã chấp cả. / " +
        "Nếu không phá ngã chấp thì không được giải thoát cái khổ sanh tử, không được ra khỏi sanh tử luân hồi. / " +
        "Vậy tham thiền phải phá ngã chấp bằng cách nào? Là bằng chín chữ: \"Vô sở đắc, vô sở cầu, vô sở sợ\" đó là cái căn bản để thực hành phá ngã chấp. / " +
        "Nếu có sở đắc là còn chấp ngã, có sở cầu là còn chấp ngã, có sở sợ là còn chấp ngã."
  },
  {
    id: 2,
    title: "PHÂN BIỆT HỔ NGHI VÀ CHÁNH NGHI",
    description: "Tham thiền là chánh nghi. Chánh nghi là chỉ cho tâm nghi, chứ không cho tâm đi tìm hiểu so sánh, để nuôi cái nghi tình cho thật mạnh. / " +
        "Khi nghi tình mạnh tới cùng tột, thình lình bùng nổ gọi là kiến tánh. Kiến tánh là giác ngộ, là biết được chính mình mới làm chủ được mình. / " +
        "Tự làm chủ được mới tự do tự tại được. Tự do tự tại là vĩnh viễn giải thoát tất cả khổ, cho nên gọi là kiến tánh thành Phật. / " +
        "Còn hồ nghi là lấy tâm đi tìm hiểu, hoặc giải thích câu thoại đầu cho ra đáp án, đó không phải là tham thiền, hồ nghi chỉ có thể được giải ngộ, chứ không được chứng ngộ, cũng như nhà khoa học Newton thấy trái táo từ trên cây rơi xuống mà sanh ra nghi vấn: Tại sao trái táo rớt xuống đất mà không bay lên trời? Từ đó, ông lấy tâm đi nghiên cứu tìm hiểu, cuối cùng ngộ được: Lực hấp dẫn vạn vật. Đó là hồ nghi. Hồ nghi chỉ có thể phát minh được đồ dùng của thế gian, chỉ có giá trị đối với thế gian vì không ngộ được chính mình nên không làm chủ mình được, không đạt đến tự do tự tại được."
  },
  {
    id: 3,
    title: "CHẲNG CHO KHỞI BIỆT NIỆM",
    description: "Ngoài nghi tình ra không cho khởi niệm khác, không cho đè nén vọng tưởng, không cho buông bỏ vọng tưởng, cũng không cho trừ vọng tưởng, vọng tưởng khởi lên bao nhiêu cũng mặc kệ không cần biết tới có vọng tưởng hay không có vọng tưởng, vì nghi tình chính là cây chổi automatic, không cần sự tác ý, tự nó quét sạch tất cả. Vó vọng tưởng cũng quét, không có vọng tưởng nó cũng quét. Nếu nghi tình được miên mật thì tất nhiên vọng tưởng không có kẽ hở mà nổi lên, hễ có khởi lên một niệm khác tức là đã có kẽ hở rồi."
  },
  {
    id: 4,
    title: "NHÂN QUẢ, NGHI NGỘ",
    description: "Phải biết nghi là nhân, ngộ là quả. " +
        "Không có nhân thì không có quả cho nên bất nghi bất ngộ, nhân nhỏ, quả nhỏ, cho nên tiểu nghi, tiểu ngộ, nhân lớn, quả lớn, cho nên đại nghi, đại ngộ. " +
        "Nếu tham thiền lúc nghi tình nặng, ảnh hưởng đến nhức đầu, tức ngực, khó thở, đó là đại nghi. / " +
        "Khi đó, thì nhức nhiều chừng nào thì tốt chừng nấy, chớ nên sợ, đó là tình hình tốt bởi vì đại nghi sẽ được đại ngộ. " +
        "Nhưng lúc ngồi mà có tình trạng như vậy thì không được. " +
        "Không được thì phải làm sao? Phải mau mau đứng dậy kiếm công việc làm nhưng vẫn phải tiếp tục tham cứu. / " +
        "Nếu tham tới cảm thấy thần kinh căng thẳng quá chịu không nổi thì câu thoại đầu phải đề chậm lại từng chữ một, chậm thật chậm, mỗi chữ kéo dài độ mười giây như vậy sự căng thẳng thần kinh sẽ dần dần được giải tỏa."
  },
  {
    id: 5,
    title: "CHẲNG PHÂN BIỆT TƯ CÁCH",
    description: "Tham Tổ Sư Thiền không kể sơ tham, lão tham, thông minh, dốt nát, ngu si, người già hay trẻ con. " +
        "Trong Kinh Pháp Hoa: Long Nữ 8 tuổi được thành Phật. / " +
        "Truyền Đăng Lục (lịch sử thiền tông Trung Hoa) có một cô họ Trịnh 13 tuổi kiến tánh, một cô họ Tô 15 tuổi được kiến tánh. / " +
        "Và nhiều Tổ ngu si dốt nát cũng tham thiền được kiến tánh. " +
        "Người tham thiền chỉ cần thống thiết vì việc sanh tử, dũng mãnh tham cứu thì bất cứ người nào cũng có thể kiến tánh thành Phật, không nên tự khinh khả năng thành Phật của mình."
  },
  {
    id: 6,
    title: "THÂM TIN TỰ TÂM",
    description: "Tham thiền phải tin tự tâm, nếu chỉ tin pháp môn tham thiền mà không tin tự tâm thì dù tinh tiến đến mức nào cũng không được kiến tánh, nên Ngài Bác Sơn nói: tin có chánh, tà; tin \"tự tâm tức Phật\" là chánh, ngoài tâm chấp có pháp gọi là tà; \"tức Phật\" là cần phải tham cứu cho sáng tỏ tự tâm và phải đích thân dẫm đến tới chỗ chẳng nghi mới gọi là chánh tín. / " +
        "Còn như mập mờ, lầm lạc, đoán mò chỉ nói \"tức tâm tức Phật\" mà thật không muốn tham cứu rõ tự tâm thì gọi là tà tín.\" "
  },
  {
    id: 7,
    title: "PHẢI NGỘ TỰ TÁNH ",
    description: "\"Hàn lu trục khối, sư tử giảo nhân\" (Chó Hàn đuổi cục xương, sư tử thì cắn người). " +
        "Đây là hai câu thí dụ của Tổ Sư, nghĩa là: " +
        "Một người quăng cục xương, con chó đuổi theo cục xương mà cắn còn con sư tử thì không ngó tới cục xương cứ cắn ngay người đó. / " +
        "Người đó dụ cho tự tánh, cục xương dụ cho lời nói của Tổ, của Phật. Nếu hướng vào lời nói của Tổ, của Phật mà ngộ là con chó, hướng vào tự tánh mà ngộ là con sư tử. / " +
        "Cổ Đức nói: \"Tử ư cú hạ\" (chết trong ngữ cú), hướng cử khởi xứ thừa đương (hướng vào chỗ lời nói mà nhận lấy)\", nghĩa là lời nói của Tổ vừa nói ra, vừa nghe hiểu liền cho đó là ngộ, nhưng sự hiểu ngộ đó còn nằm trong ý thức phân biệt, mặc dù đúng lý thế gian rất lô-gích, nhưng vì chẳng biết cần phải lìa ý thức mới chứng ngộ được. Cho nên bị Tổ chê là Hàn lu (loại chó mực rất thông minh ở nước Hàn)."
  },
  {
    id: 8,
    title: "KHÔNG LỌT VÔ KÝ",
    description: "Tham thiền nên tránh lọt vào \"Vô ký không\". Pháp môn khác chỉ cầu được dứt niệm, nhưng tham thiền trái lại không cho dứt niệm tức là nghi tình phải luôn luôn tiếp tục, không cho gián đoạn. / " +
        "Nếu không có nghi tình cũng không có vọng tưởng thì lọt vào Vô ký không là một thứ thiền bệnh, Tổ Sư gọi là \"ngâm nước chết\". Mặc dù lúc ấy cảm thấy được thanh thanh tịnh tịnh, trong mình cảm thấy nhẹ nhàng nhưng chấp lấy cái đó thì vĩnh viễn không được kiến tánh, chẳng thà có nghi tình, có vọng tưởng còn tốt hơn. Vậy tham thiền nếu chưa đến thoại đầu chớ nên bỏ câu thoại. Có người bỏ câu thoại vẫn còn nghi tình cho là tốt, thực thì không đúng vì có thể bị gián đoạn một khoảng thời gian lâu mà tự mình không hay, lại cũng dễ bị lọt vào Vô ký không nữa."
  },
  {
    id: 9,
    title: "HÀNH KHỞI GIẢI TUYỆT",
    description: "Theo giáo môn thông thường, sự tu hành phải trải qua bốn giai đoạn là: tín, giải, hành, chứng. " +
        "Ban đầu do tin rồi đi tìm hiểu (giải), theo sự hiểu mà thực hành, vừa thực hành vừa tìm hiểu thêm, vừa hiểu thêm vừa thực hành thêm từng bậc tiến lên chứng từ thập tín, thập trụ, thập hạnh, thập hồi hướng, thập địa cho đến đẳng giác, diệu giác. / " +
        "Đó là cách tu thông thường. Còn Tổ Sư thiền thì không phải vậy. Trước tiên cũng phải có tin, có hiểu, nhưng khi bắt đầu thực hành thì không được tìm hiểu nữa. Thiền môn gọi là \"Hành khởi giải tuyệt\" tức là đã bắt đầu tham thiền rồi thì sự tìm hiểu kiến giải phải chấm dứt. Cho nên tham thiền không cho hiểu thiền, hiểu đạo. / " +
        "Tại sao vậy? Vì đang tham thiền là đã có thiền, có đạo rồi. Nếu đi tìm hiểu thiền hiểu đạo nữa thì cũng như mình đã có một cái đầu rồi còn sinh thêm một cái đầu thứ hai nữa. / " +
        "Tổ Sư gọi: \"Đầu thượng an đầu\" (trên đầu thêm đầu) thì cái đầu thứ hai, không những không có ích cho cái đầu bổn lai, lại còn làm chướng ngại khổ sở cho cái đầu bổn lai nên phải mời Bác sĩ cắt bỏ mới được khôi phục sức khỏe lại. / " +
        "Vậy hiểu thiền hiểu đạo còn không cho huống là đi tìm hiểu cái khác nữa. " +
        "Phải biết rằng ham tìm hiểu rất chướng ngại cho sự chứng ngộ. Thế nên \"Hành khởi giải tuyệt\" là vậy."
  },
  {
    id: 10,
    title: "CHÚ TRỌNG THỰC HÀNH",
    description: "Tổ Sư Thiền chỉ chú trọng thực hành không cần lý luận, nhưng khi đang thực hành sẽ tùy theo căn cơ trình độ khác biệt, tình chấp nặng nhẹ, kiến giải cao thấp và sự ham thích bất đồng của mỗi người mà sinh ra muôn ngàn lối tẻ sai biệt. / " +
        "Cho nên quyển sách này chỉ được nêu ra những điều thực hành chung, còn nhiều chi tiết vi tế không thể kể hết ở trong này, phải tùy bệnh mà cho thuốc, vì thế mặc dù cách tham thoại đầu rất dễ nhưng cũng phải có người lão tham hướng dẫn mới được. / " +
        "Nếu tự làm tài khôn mà không đi đúng với tôn chỉ chính xác tủa Tổ Sư Thiền thì sẽ có thể trở thành phỉ báng Phật pháp, tạo tội địa ngục mà tự mình không biết, xin người học thiền để ý cho."
  }
];

export default rules;
