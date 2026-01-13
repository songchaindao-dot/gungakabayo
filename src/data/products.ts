export type ProductCategory =
  | "livestock"
  | "crops"
  | "processed"
  | "grains";

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  quantity: string;
  unit: string;
  price: number;
  image: string;
  description: string;
  available: boolean;
}

export interface BarcodeProduct {
  id: string;
  name: string;
  baseCode: string;
}

export const products: Product[] = [
  {
    id: "quail-eggs",
    name: "Quail Eggs",
    category: "livestock",
    quantity: "120,000",
    unit: "trays",
    price: 15.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aic14wmvxlhdf4q6igt-SnbA5uJ1AhgKuqA4ljVdr7ktWD0vGs.jpg?download=1",
    description:
      "Premium quail eggs rich in nutrients and protein. Perfect for healthy eating.",
    available: true
  },
  {
    id: "quail-meat",
    name: "Quail Meat Pre-Packs",
    category: "livestock",
    quantity: "200,000",
    unit: "packs",
    price: 12.5,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh36zybt14whvxlhdbexdfk8-QdKcZB6IVSVZts6eOianiU5lktV1Q9.jpg?download=1",
    description:
      "Fresh, pre-packaged quail meat. Lean and delicious protein source.",
    available: true
  },
  {
    id: "chicken-broilers",
    name: "Chicken Broilers",
    category: "livestock",
    quantity: "150,000",
    unit: "birds",
    price: 8.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1",
    description:
      "Free-range chicken broilers raised with care and quality feed.",
    available: true
  },
  {
    id: "goat-meat",
    name: "Goat Meat",
    category: "livestock",
    quantity: "50,000",
    unit: "kg",
    price: 6.75,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh36zyg114wivxlh4vmyc2cy-SUEHc1dSv5JmaKZHxWBZQl2EAaeWi6.jpg?download=1",
    description: "Fresh goat meat from naturally raised livestock.",
    available: true
  },
  {
    id: "duck-meat",
    name: "Duck Meat",
    category: "livestock",
    quantity: "30,000",
    unit: "kg",
    price: 9.25,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370ahx14wlvxlhf2vj2he3-G3z6UiZr18DsjdwOF2YEueUi8CnxaY.jpg?download=1",
    description: "Premium duck meat with rich flavor and nutrition.",
    available: true
  },
  {
    id: "turkey",
    name: "Turkey",
    category: "livestock",
    quantity: "20,000",
    unit: "birds",
    price: 18.5,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5m14wsvxlh69zifb0f-kQNY0PeE9kRcGKpN6HJk3fMbOneKx0.jpg?download=1",
    description: "Farm-raised turkeys perfect for family meals.",
    available: true
  },
  {
    id: "free-range-eggs",
    name: "Free-range Eggs",
    category: "livestock",
    quantity: "90,000",
    unit: "trays",
    price: 11.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5u14wtvxlh3w939cu6-6fMPu58vTEwyZZGvnddTx1HACrlVvO.jpg?download=1",
    description: "Fresh eggs from free-range chickens. Natural and nutritious.",
    available: true
  },
  {
    id: "maize",
    name: "Maize",
    category: "crops",
    quantity: "200",
    unit: "tons",
    price: 350,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x6y14wuvxlhdk9085a6-uvlCloGkY64yxvlpzg9OA9YxEbvxNl.jpg?download=1",
    description: "Organic maize grown using sustainable farming practices.",
    available: true
  },
  {
    id: "groundnuts",
    name: "Groundnuts",
    category: "crops",
    quantity: "150",
    unit: "tons",
    price: 425,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3711un14wvvxlh7p89dl5t-CoI4Gw8hAld1GPsnruWQLjgTIoiwS6.jpg?download=1",
    description: "High-quality groundnuts perfect for various uses.",
    available: true
  },
  {
    id: "cassava",
    name: "Cassava",
    category: "crops",
    quantity: "100",
    unit: "tons",
    price: 280,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x3j14wrvxlhev32a3ws-Cc4c8MRy4HIPXwKdl3Kx56POs26k7i.jpg?download=1",
    description: "Fresh cassava roots from our organic farms.",
    available: true
  },
  {
    id: "beans",
    name: "Beans",
    category: "crops",
    quantity: "80",
    unit: "tons",
    price: 385,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371kn014xbvxlhhymsdr3m-d0Rxcj50FmJ8D1ivdel3mAaF6mlLmu.jpg?download=1",
    description: "Various bean varieties rich in protein and fiber.",
    available: true
  },
  {
    id: "sweet-potatoes",
    name: "Sweet Potatoes",
    category: "crops",
    quantity: "60",
    unit: "tons",
    price: 310,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ko714xcvxlh7s7idypc-C3xzLLiNq74JL7LajhYH0eTQX3eSWI.jpg?download=1",
    description: "Nutritious sweet potatoes grown organically.",
    available: true
  },
  {
    id: "seasonal-vegetables",
    name: "Seasonal Vegetables",
    category: "crops",
    quantity: "40",
    unit: "tons",
    price: 290,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ks514xdvxlh1kt38r2r-tMqXQiWiwPOCmTWlbl7HGYnEXOkdHT.jpg?download=1",
    description:
      "Fresh seasonal vegetables harvested at peak ripeness.",
    available: true
  },
  {
    id: "dried-meats",
    name: "Dried Meats",
    category: "processed",
    quantity: "10,000",
    unit: "packs",
    price: 14.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3727b214xhvxlhclct64db-HvqiiJZFX8EYbf9On8NJLjd7F2KEoB.jpg?download=1",
    description: "Naturally dried meat products with no preservatives.",
    available: true
  },
  {
    id: "organic-flours",
    name: "Organic Flours",
    category: "processed",
    quantity: "15,000",
    unit: "bags",
    price: 22.5,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh3727ob14xivxlhdczq8rx3-vMIqxbHurWSDFAvODrQYzBfuegkarm.jpg?download=1",
    description: "Stone-ground organic flours from various grains.",
    available: true
  },
  {
    id: "animal-feed",
    name: "Animal Feed Supplements",
    category: "processed",
    quantity: "8,000",
    unit: "packs",
    price: 35.75,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uwi14xsvxlhanvaf9je-cBTMJFQUBcTsfXpu2zWjMeowZeZfcw.jpg?download=1",
    description: "Natural feed supplements for livestock health.",
    available: true
  },
  {
    id: "wheat",
    name: "Wheat",
    category: "grains",
    quantity: "60",
    unit: "tons",
    price: 395,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372utp14xovxlhf4c27386-WA0cBXh3HQEWAQLaO0hMd8V3uyxqqT.jpg?download=1",
    description: "Premium quality wheat for milling and baking.",
    available: true
  },
  {
    id: "millet",
    name: "Millet",
    category: "grains",
    quantity: "50",
    unit: "tons",
    price: 340,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uv714xqvxlh0lynacgd-ci99rFROamEHdTclxpjyMAcJToWSe2.jpg?download=1",
    description: "Nutritious millet grains rich in minerals.",
    available: true
  },
  {
    id: "sorghum",
    name: "Sorghum",
    category: "grains",
    quantity: "40",
    unit: "tons",
    price: 325,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uum14xpvxlhay8pd3ai-w5bB1FF0Zf3zwOvgG0zoApUwYw6TIh.jpg?download=1",
    description: "High-quality sorghum for various applications.",
    available: true
  },
  {
    id: "rice",
    name: "Rice",
    category: "grains",
    quantity: "70",
    unit: "tons",
    price: 425,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh372uvr14xrvxlh7h2felu3-DZxcdaGWuAf2p7rhdXw9xf88B00LaK.jpg?download=1",
    description: "Premium rice varieties grown organically.",
    available: true
  },
  {
    id: "quail-chicks",
    name: "Quail Chicks",
    category: "livestock",
    quantity: "50,000",
    unit: "chicks",
    price: 2.5,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aic14wmvxlhdf4q6igt-SnbA5uJ1AhgKuqA4ljVdr7ktWD0vGs.jpg?download=1",
    description:
      "Healthy quail chicks perfect for starting your own quail farm.",
    available: true
  },
  {
    id: "ducks-and-chicks",
    name: "Ducks and Chicks",
    category: "livestock",
    quantity: "30,000",
    unit: "birds",
    price: 4.5,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370ahx14wlvxlhf2vj2he3-G3z6UiZr18DsjdwOF2YEueUi8CnxaY.jpg?download=1",
    description: "Mixed ducks and chicks for diverse poultry farming.",
    available: true
  },
  {
    id: "exotic-village-chickens",
    name: "Exotic Village Chickens",
    category: "livestock",
    quantity: "25,000",
    unit: "birds",
    price: 7.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1",
    description:
      "Premium exotic village chickens with unique characteristics.",
    available: true
  },
  {
    id: "day-old-village-chickens",
    name: "Day Old Village Chickens",
    category: "livestock",
    quantity: "40,000",
    unit: "chicks",
    price: 1.99,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370aha14wkvxlh7zoq9am0-bCzT25Fb1k3RVt4f5TMpI28ZKzMkrs.jpg?download=1",
    description: "Fresh day-old village chickens ready for raising.",
    available: true
  },
  {
    id: "guineafowls-eggs-chicks",
    name: "Guineafowls Eggs and Chicks",
    category: "livestock",
    quantity: "15,000",
    unit: "units",
    price: 5.75,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh370x5u14wtvxlh3w939cu6-6fMPu58vTEwyZZGvnddTx1HACrlVvO.jpg?download=1",
    description:
      "Guineafowl eggs and chicks, great for pest control and meat.",
    available: true
  },
  {
    id: "sunflower",
    name: "Sunflower",
    category: "crops",
    quantity: "45",
    unit: "tons",
    price: 365,
    image:
      "https://usdozf7pplhxfvrl.public.blob.vercel-storage.com/miniapp_cmh11k2e008vnvxlh5u1wg2le_cmh371ks514xdvxlh1kt38r2r-tMqXQiWiwPOCmTWlbl7HGYnEXOkdHT.jpg?download=1",
    description:
      "High-quality sunflower seeds for oil production and consumption.",
    available: true
  }
];

export const barcodeProducts: BarcodeProduct[] = [
  { id: "chicken-broilers", name: "Chicken Broilers", baseCode: "25753384" },
  { id: "quail-eggs", name: "Quail Eggs", baseCode: "25753385" },
  {
    id: "quail-meat",
    name: "Quail Meat Pre-Packs",
    baseCode: "25753386"
  },
  { id: "goat-meat", name: "Goat Meat", baseCode: "25753387" },
  { id: "duck-meat", name: "Duck Meat", baseCode: "25753388" },
  { id: "turkey", name: "Turkey", baseCode: "25753389" },
  { id: "free-range-eggs", name: "Free-range Eggs", baseCode: "25753390" },
  { id: "maize", name: "Maize", baseCode: "25753391" },
  { id: "groundnuts", name: "Groundnuts", baseCode: "25753392" },
  { id: "cassava", name: "Cassava", baseCode: "25753393" },
  { id: "beans", name: "Beans", baseCode: "25753394" },
  {
    id: "sweet-potatoes",
    name: "Sweet Potatoes",
    baseCode: "25753395"
  },
  {
    id: "seasonal-vegetables",
    name: "Seasonal Vegetables",
    baseCode: "25753396"
  },
  { id: "dried-meats", name: "Dried Meats", baseCode: "25753397" },
  { id: "organic-flours", name: "Organic Flours", baseCode: "25753398" },
  {
    id: "animal-feed",
    name: "Animal Feed Supplements",
    baseCode: "25753399"
  },
  { id: "wheat", name: "Wheat", baseCode: "25753400" },
  { id: "millet", name: "Millet", baseCode: "25753401" },
  { id: "sorghum", name: "Sorghum", baseCode: "25753402" },
  { id: "rice", name: "Rice", baseCode: "25753403" },
  { id: "quail-chicks", name: "Quail Chicks", baseCode: "25753404" },
  {
    id: "ducks-and-chicks",
    name: "Ducks and Chicks",
    baseCode: "25753405"
  },
  {
    id: "exotic-village-chickens",
    name: "Exotic Village Chickens",
    baseCode: "25753406"
  },
  {
    id: "day-old-village-chickens",
    name: "Day Old Village Chickens",
    baseCode: "25753407"
  },
  {
    id: "guineafowls-eggs-chicks",
    name: "Guineafowls Eggs and Chicks",
    baseCode: "25753408"
  },
  { id: "sunflower", name: "Sunflower", baseCode: "25753409" }
];

