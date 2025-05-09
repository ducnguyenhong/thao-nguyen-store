const META_TITLE = 'Thảo Nguyên Store | Cửa Hàng Đồ Gia Dụng Chất Lượng, Giá Tốt';
export const META_DESCRIPTION =
  'Thảo Nguyên Store chuyên cung cấp đồ gia dụng thông minh, hiện đại với giá cả hợp lý. Cam kết sản phẩm chính hãng, giao hàng toàn quốc, đổi trả linh hoạt.';
const META_IMAGE = '/images/preview.webp';
export const META_KEYWORDS = [
  'Thảo Nguyên Store',
  'đồ gia dụng',
  'mua đồ gia dụng online',
  'đồ gia dụng thông minh',
  'đồ gia dụng giá rẻ',
  'thiết bị gia đình',
  'đồ dùng nhà bếp',
  'dụng cụ nhà bếp',
  'nồi chiên không dầu',
  'nồi cơm điện',
  'nồi áp suất điện',
  'bếp từ',
  'bếp điện hồng ngoại',
  'chảo chống dính',
  'lò vi sóng',
  'lò nướng điện',
  'máy ép chậm',
  'máy xay sinh tố',
  'máy xay đa năng',
  'máy pha cà phê',
  'ấm siêu tốc',
  'máy lọc nước',
  'máy lọc không khí',
  'máy hút bụi',
  'máy sấy tóc',
  'bàn ủi hơi nước',
  'máy giặt mini',
  'quạt điều hòa',
  'quạt hơi nước',
  'quạt đứng',
  'quạt treo tường',
  'quạt sạc tích điện',
  'máy sưởi dầu',
  'máy sưởi gốm',
  'đèn bắt muỗi',
  'đèn cảm biến',
  'đèn sạc led',
  'camera giám sát gia đình',
  'ổ cắm điện thông minh',
  'robot hút bụi',
  'máy làm sữa hạt',
  'máy làm sữa chua',
  'khay đựng đồ nhà bếp',
  'kệ để lò vi sóng',
  'thùng rác thông minh',
  'đồ dùng phòng tắm',
  'kệ nhà tắm đa năng',
  'vòi sen tăng áp',
  'máy đánh răng tự động',
  'gương nhà tắm có đèn',
  'hộp đựng giấy vệ sinh',
  'thảm lau chân chống trượt',
  'đồ dùng phòng ngủ',
  'đèn ngủ cảm ứng',
  'máy khuếch tán tinh dầu',
  'đệm ngồi bệt',
  'gối cổ chữ u',
  'tủ vải đựng quần áo',
  'thiết bị nhà thông minh',
  'điều khiển từ xa bằng điện thoại',
  'hệ thống đèn thông minh',
  'chuông cửa có camera',
  'cảm biến chuyển động',
  'tiện ích gia đình',
  'đồ tiện ích nhà cửa',
  'mẹo vặt gia đình',
  'mua đồ gia dụng giao nhanh',
  'giao hàng toàn quốc',
  'đổi trả đồ gia dụng',
  'gia dụng bán chạy'
];
const META_URL = 'https://giadungmoi.top';
const META_TYPE = 'website';

export const getMetadata = (data) => {
  const {
    title = META_TITLE,
    description = META_DESCRIPTION,
    keywords,
    url = META_URL,
    siteName = META_TITLE,
    type = META_TYPE,
    image = META_IMAGE
  } = data || {};

  return {
    title,
    description,
    keywords: keywords ? [...META_KEYWORDS, ...keywords] : META_KEYWORDS,
    url,
    type,
    images: [image],
    openGraph: {
      title,
      description,
      url,
      siteName,
      images: [image],
      type
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image]
    }
  };
};
