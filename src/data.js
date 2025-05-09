
const products = [
    {
      id: 1,
      name: "کرم ضدآفتاب و ضدلک بی‌رنگ لافارر مدل SPF50، مناسب پوست‌های چرب، حجم 40 میلی‌لیتر",
      price: "۳۴۹,۹۹۰" ,
      image: "https://dkstatics-public.digikala.com/digikala-products/b813c6c0f16731e400ee1362ce103accf246bfce_1669110838.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      rate: 4.4
    },
    {
      id: 2,
      name: "فلوئید ضدآفتاب بی‌رنگ مای SPF50 مدل Hyaluronic Acid مناسب انواع پوست، حجم 50 میلی‌لیتر",
      price: "۲۸۸,۹۸۰",
      image: "https://dkstatics-public.digikala.com/digikala-products/71caa840492104dbddd2b74d744542fd5990aa4b_1625997515.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      rate: 4.5
    },
    {
      id: 3,
      name: "فلوئید ضدآفتاب بی‌رنگ برایت مکس SPF50 مدل هیدرابرایت ‌مناسب انواع پوست، حجم 50 میلی‌لیتر",
      price: "۵۵۰,۰۰۰",
      image: "https://dkstatics-public.digikala.com/digikala-products/0ee3f06de93861411ab39f4a60b010d7f52c52d7_1722638000.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      rate: 3.9 
    },
    {
      id: 4,
      name: "سرم پوست ویتالیر مدل هیالورونیک حجم 30 میلی لیتر",
      price: "۶۳۷,۰۰۰",
      image: "https://dkstatics-public.digikala.com/digikala-products/eb568173036d883595b85a2609cf07f71ce01d84_1697558288.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
      rate: 3
    },
    {
    id: 5,
    name: "سرم روشن کننده کلکسیون رویوال مدل Hyalusense حجم 30 میلی لیتر",
    price: "۷۱۸,۶۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/99d8056bef80b7331f8911d026adac1b6c53b13d_1676810099.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 3.5
    },
    {
    id: 6,
    name: "مجموعه مراقبت پوست ایمجز مدل Golden Luxury مجموعه 5 عددی",
    price: "۸۹۱,۲۶۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/a584e9463d6e42077a2b88e0c4d184bf8be70b14_1697026306.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.8
    },
    {
    id: 7,
    name: "سرم پوست اکسگین مدل ویتامین سی حجم 100 میلی لیتر",
    price: "۱۳۷,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/2c28bbec4d6ce0c455f11ca992f7463c1ce48cb4_1689618323.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.1
    },
    {
    id: 8,
    name: "ادوپرفیوم زنانه نوو اکسپرس مدل Black Opium حجم 50 میلی‌لیتر",
    price: "۴۲۰,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/c2eed71f63ad43e3302e73d5b478f21a428e82bd_1720015503.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.3
    },
    {
    id: 9,
    name: "ادوپرفیوم نوو اکسپرس مدل Black Orchid حجم 50 میلی‌لیتر",
    price: "۴۲۰,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/180426cbff9aa632e790644020dc56d2ddab5b4d_1720015401.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 2.8
    },
    {
    id: 10,
    name: "سرم پوست پرایم مدل C_Prime حجم 30 میلی لیتر",
    price: "۵۳۱,۱۵۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/394d4ae09af490f8b9a24f296fa38f2623eff8af_1674546094.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.4
    },
    {
    id: 11,
    name: "کرم مرطوب کننده کیووی مدل Moderate حجم 500 میلی لیتر",
    price: "۱,۶۹۰,۱۳۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/7cecfa052e8bbef234ec9973921d3706ce124402_1698771293.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 3.5
    },
    {
    id: 12,
    name: "کرم ضد چروک و لیفتینگ قوی الارو مدل Liftante Anti Age تحت لیسانس حجم 50 میلی لیتر",
    price: "۸۹۴,۰۱۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/120e01d560eb2c8bfe27d5cc7c351e32eb37cfff_1621759079.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.3
    },
    {
    id: 13,
    name: "کرم دور چشم رک مدل رتینول کارکشن حجم 15 میلی لیتر",
    price: "۲,۸۷۰,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/125e349b60802116295d6fe248443797d97a1dca_1695313018.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.1
    },
    {
    id: 14,
    name: "فوم شست‌وشوی صورت لافارر مدل",
    price: "۵۸۵,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/36743547943b5ec11c54ca5c30ff6d1efb4a9736_1669621279.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.2
    },
    {
    id: 15,
    name: "کرم سفت کننده و لیفتینگ ادورامکس مدل Age Perfect حجم 50 میلی لیتر",
    price: "۱,۰۷۲,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/177b83f84a1c9f815e5a3137edee38ee2b5ac2f1_1710139649.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 3.2
    },
    {
    id: 16,
    name: "کرم ضدلک سیسپرسا مدل سیستئامین حجم 50 میلی لیتر",
    price: "۹۹۵,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/a154043566e403876f99fa5853671c47497f6f35_1706012106.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.1
    },
    {
    id: 17,
    name: "پالت کانتورینگ فوراور فیفتی تو مدل Camouflage HD شماره 001",
    price: "۱,۸۴۵,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/5bdd9f226a8754ed61745775e258ff8102b1d196_1678785077.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.9
    },
    {
    id: 18,
    name: "کرم پودر دنادیا شماره 001 حجم 30 میلی لیتر",
    price: "۳۴۹,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/110993122.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4
    },
    {
    id: 19,
    name: "پالت هایلایتر فوراور فیفتی تو مدل Desert Glow شماره 003",
    price: "۱,۴۹۵,۰۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/c66da9c46a3cd53fd64c0f7bf7ccbd1930b15a31_1699982431.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4
    },
    {
    id: 20,
    name: "کانسیلر فلر شماره 03",
    price: "۳۵۳,۵۰۰",
    image: "https://dkstatics-public.digikala.com/digikala-products/e2d3234e7091491672938d3871a0ab19939557c2_1622445160.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
    rate: 4.5
    }
  ];
  
  export default products;
  