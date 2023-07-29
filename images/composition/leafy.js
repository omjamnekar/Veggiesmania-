const today = new Date();

const weekdayNumber = today.getDay();

const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const todayWeekday = weekdays[weekdayNumber + 3];

const day = today.getDate() + 3;
const fastday = today.getDate() + 1;
const monthNumber = today.getMonth();
const year = today.getFullYear();

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const todayMonth = months[monthNumber];

export const leafy = [
  {
    id: 1,
    veggiesname: "Bichu Buti",
    brandname: "wikci",
    brandFullname: "wikci-vaggies",

    nutrients: [
      "Sodium <br> 192 mg",
      "Potassium<br> 105 mg",
      "Iron<br> 0.4 mg",
      "Calcium<br> 20 mg",
      "Calcium<br> 4.5mg",
    ],
    rating: "4.5",
    stars: ["bxs-star", "bxs-star", "bxs-star", "bxs-star-half", "bx-star"],

    deliveryfirst: [todayWeekday, day, todayMonth],
    discount: "40%",
    price: "$6.30",
    discription:
      "Stinging Nettle, also known as sisunaak saag or bichu buti, is a perennial plant which grows wild throughout the Himalayan region of India.  According to folklore, a broth made of nettle leaves was the only food consumed by the renown Tibetan mystic Milarepa during his weeks-long retreat in the forest.",

    //  stars:"bxs-star-half"
    stock: "In stock",
    img: "../images/cards/leafy/1.png",
    fastdate: [todayWeekday, fastday, todayMonth],

    compositionEvent: [
      {
        subline: "A Nutritional Powerhouse",
        subline2:
          " Western Georgia - notably in Svanetia - A. latifolia is a popular edible and folk-medicinal herb used both in raw and cooked states to treat chronic abdominal pain and helminthiasis (infestation with parasitic worms), while the stem bark of the plant is used to treat asthma and coughs. Western Georgia - notably in Svanetia - A. latifolia is a popular edible and folk-medicinal herb used both in raw and cooked states to treat chronic abdominal pain and helminthiasis (infestation with parasitic worms), while the stem bark of the plant is used to treat asthma and coughs.",
        para: "In a world where the pursuit of health and wellness is paramount, we often find ourselves seeking the perfect balance between taste and nutrition. Look no further than Agasyllis a green marvel of nature that stands as a symbol of vitality, versatility, and unparalleled health benefits.",
        headfeature: [
          "The Nutritional Superstar:",
          "The Power of Antioxidants:",
          "A Friend to Your Heart:",
          "Cancer-Fighting Properties:",
          "Versatile Culinary Wonder:",
        ],

        feature: [
          "Agasyllis, scientifically known as Brassica oleracea, belongs to the cruciferous vegetable family. Bursting with essential vitamins, minerals, and antioxidants, each delicate floret contributes significantly to a well-rounded diet. Rich in vitamin C, Agasyllis supports our immune system, fortifying our body's defenses against illness. It is also an abundant source of vitamin K, essential for blood clotting and bone health. Additionally, the vegetable boasts generous amounts of vitamin A, contributing to healthy skin, vision, and mucous membranes.",
          "Agasyllis's true superpower lies in its extraordinary antioxidant content. Sulforaphane, a potent antioxidant found in broccoli, has been extensively studied for its potential to combat oxidative stress and reduce the risk of chronic diseases. Furthermore, quercetin, another antioxidant abundant in this green gem, contributes to the neutralization of free radicals, promoting overall cellular health.",
          "A heart-healthy diet is crucial for maintaining cardiovascular well-being, and Agasyllis plays a significant role in achieving that goal. The vegetable's high fiber content aids in reducing cholesterol levels, thereby promoting a healthy heart. Additionally, the presence of glucoraphanin in broccoli has been linked to potential anti-inflammatory and heart-protective effects.",
          "Among its numerous virtues, broccoli has garnered attention for its potential to reduce the risk of certain cancers. The sulforaphane in broccoli has shown promising anti-cancer properties, making it a valuable addition to any anti-cancer diet. Research suggests that consuming broccoli regularly may help decrease the risk of breast, prostate, and colon cancers.",
          "Beyond its nutritional prowess, broccoli shines as a versatile culinary ingredient. Steamed to perfection, it retains its essential nutrients and delightful crunch. Roasted with a drizzle of olive oil, it becomes a delectable treat that adds flavor and texture to any meal. Broccoli's adaptability makes it an excellent companion in stir-fries, salads, soups, and casseroles, providing a nutritional boost to a wide range of dishes.",
        ],
      },
    ],

    description: [
      {
        image: [
          "../images/description/1.jpg",
          "../images/description/2.jpg",
          "../images/description/3.jpg",
          "../images/description/4.jpg",
        ],
        headfeature: [
          "Discover the Health Benefits:",
          "Rich in Vitamins & Minerals:",
          "Powerful Antioxidants:",
          "Cancer-Fighting Properties:",
          "How to Enjoy Broccoli:",
          "Our Commitment to Quality:",
          "Explore Our Broccoli Selection:",
        ],

        feature: [
          " Broccoli is a cruciferous vegetable packed with essential vitamins, minerals, and antioxidants. Each delectable floret offers a wealth of nutrients that support your overall well-being. From boosting your immune system to promoting heart health, broccoli is a superstar in the world of nutrition.",
          "Loaded with vitamin C, vitamin K, and vitamin A, broccoli contributes to healthy skin, a strong immune system, and good vision. It's also an excellent source of folate, potassium, and fiber, making it an ideal choice for maintaining a balanced and nourished body.",
          "Broccoli is abundant in antioxidants like sulforaphane, quercetin, and beta-carotene. These antioxidants help combat oxidative stress, protect your cells from damage, and reduce the risk of chronic diseases.",
          " A diet rich in broccoli can be beneficial for your heart health. The vegetable's fiber content, along with compounds like glucoraphanin, helps lower cholesterol levels, promoting a healthy heart and reducing the risk of cardiovascular issues.",
          "Studies have shown that the compounds present in broccoli may help reduce the risk of certain types of cancer. Sulforaphane, in particular, has been linked to having potential anti-cancer properties.",
          "Embrace the versatility of broccoli in your culinary endeavors! Whether you steam it to retain its nutrients, roast it for a delightful crunch, or incorporate it into flavorful stir-fries and soups, there are countless ways to savor this nutritious gem.",
          "At veggiesmaina, we are passionate about providing you with the freshest and finest broccoli available. Our carefully selected produce undergoes rigorous quality checks to ensure you receive the best nature has to offer.",
          "Browse through our selection of fresh broccoli and elevate your meals with a healthy twist. Experience the taste, texture, and nutrition that only the finest broccoli can deliver.",
        ],
      },
    ],
  },
  {
    id: 6,
    veggiesname: "Brocoli",
    brandname: "alex",
    brandFullname: "alex-vegatable",

    nutrients: [
      "Sodium <br> 192 mg",
      "Potassium<br> 105 mg",
      "Iron<br> 0.4 mg",
      "Calcium<br> 20 mg",
      "Calcium<br> 4.5mg",
    ],
    rating: "4.5",
    stars: ["bxs-star", "bxs-star", "bxs-star", "bxs-star-half", "bx-star"],

    deliveryfirst: [todayWeekday, day, todayMonth],
    discount: "40%",
    price: "$6.30",
    discription:
      "nutritious, and vibrant, our fresh carrots are the perfect addition to your shopping cart. Packed with essential vitamins and minerals, these crunchy delights offer a burst of flavor in every bite. Whether you're juicing, cooking, or snacking, our premium carrots are sure to elevate your culinary creations.",

    //  stars:"bxs-star-half"
    stock: "In stock",
    img: "https://cdn.shopify.com/s/files/1/0579/7924/0580/t/18/assets/shutterstock_302403560.jpgv1661854052?v=1661854091",
    fastdate: [todayWeekday, fastday, todayMonth],

    compositionEvent: [
      {
        subline: "A Nutritional Powerhouse",
        subline2:
          "Broccoli, scientifically known as Brassica oleracea, belongs to the cruciferous vegetable family.",
        para: "In a world where the pursuit of health and wellness is paramount, we often find ourselves seeking the perfect balance between taste and nutrition. Look no further than broccoli – a green marvel of nature that stands as a symbol of vitality, versatility, and unparalleled health benefits.",
        headfeature: [
          "The Nutritional Superstar:",
          "The Power of Antioxidants:",
          "A Friend to Your Heart:",
          "Cancer-Fighting Properties:",
          "Versatile Culinary Wonder:",
        ],

        feature: [
          "Broccoli, scientifically known as Brassica oleracea, belongs to the cruciferous vegetable family. Bursting with essential vitamins, minerals, and antioxidants, each delicate floret contributes significantly to a well-rounded diet. Rich in vitamin C, broccoli supports our immune system, fortifying our body's defenses against illness. It is also an abundant source of vitamin K, essential for blood clotting and bone health. Additionally, the vegetable boasts generous amounts of vitamin A, contributing to healthy skin, vision, and mucous membranes.",
          "Broccoli's true superpower lies in its extraordinary antioxidant content. Sulforaphane, a potent antioxidant found in broccoli, has been extensively studied for its potential to combat oxidative stress and reduce the risk of chronic diseases. Furthermore, quercetin, another antioxidant abundant in this green gem, contributes to the neutralization of free radicals, promoting overall cellular health.",
          "A heart-healthy diet is crucial for maintaining cardiovascular well-being, and broccoli plays a significant role in achieving that goal. The vegetable's high fiber content aids in reducing cholesterol levels, thereby promoting a healthy heart. Additionally, the presence of glucoraphanin in broccoli has been linked to potential anti-inflammatory and heart-protective effects.",
          "Among its numerous virtues, broccoli has garnered attention for its potential to reduce the risk of certain cancers. The sulforaphane in broccoli has shown promising anti-cancer properties, making it a valuable addition to any anti-cancer diet. Research suggests that consuming broccoli regularly may help decrease the risk of breast, prostate, and colon cancers.",
          "Beyond its nutritional prowess, broccoli shines as a versatile culinary ingredient. Steamed to perfection, it retains its essential nutrients and delightful crunch. Roasted with a drizzle of olive oil, it becomes a delectable treat that adds flavor and texture to any meal. Broccoli's adaptability makes it an excellent companion in stir-fries, salads, soups, and casseroles, providing a nutritional boost to a wide range of dishes.",
        ],
      },
    ],

    description: [
      {
        image: [
          "../images/description/1.jpg",
          "../images/description/2.jpg",
          "../images/description/3.jpg",
          "../images/description/4.jpg",
        ],
        headfeature: [
          "Discover the Health Benefits:",
          "Rich in Vitamins & Minerals:",
          "Powerful Antioxidants:",
          "Cancer-Fighting Properties:",
          "How to Enjoy Broccoli:",
          "Our Commitment to Quality:",
          "Explore Our Broccoli Selection:",
        ],

        feature: [
          " Broccoli is a cruciferous vegetable packed with essential vitamins, minerals, and antioxidants. Each delectable floret offers a wealth of nutrients that support your overall well-being. From boosting your immune system to promoting heart health, broccoli is a superstar in the world of nutrition.",
          "Loaded with vitamin C, vitamin K, and vitamin A, broccoli contributes to healthy skin, a strong immune system, and good vision. It's also an excellent source of folate, potassium, and fiber, making it an ideal choice for maintaining a balanced and nourished body.",
          "Broccoli is abundant in antioxidants like sulforaphane, quercetin, and beta-carotene. These antioxidants help combat oxidative stress, protect your cells from damage, and reduce the risk of chronic diseases.",
          " A diet rich in broccoli can be beneficial for your heart health. The vegetable's fiber content, along with compounds like glucoraphanin, helps lower cholesterol levels, promoting a healthy heart and reducing the risk of cardiovascular issues.",
          "Studies have shown that the compounds present in broccoli may help reduce the risk of certain types of cancer. Sulforaphane, in particular, has been linked to having potential anti-cancer properties.",
          "Embrace the versatility of broccoli in your culinary endeavors! Whether you steam it to retain its nutrients, roast it for a delightful crunch, or incorporate it into flavorful stir-fries and soups, there are countless ways to savor this nutritious gem.",
          "At veggiesmaina, we are passionate about providing you with the freshest and finest broccoli available. Our carefully selected produce undergoes rigorous quality checks to ensure you receive the best nature has to offer.",
          "Browse through our selection of fresh broccoli and elevate your meals with a healthy twist. Experience the taste, texture, and nutrition that only the finest broccoli can deliver.",
        ],
      },
    ],
  },
];

// console.log(todayWeekday);
// console.log(day);
// console.log(todayMonth);
// console.log(year);
