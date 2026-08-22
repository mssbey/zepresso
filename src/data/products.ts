/**
 * OTOMATİK ÜRETİLDİ — elle düzenlemeyin.
 * Admin panelden içerik değiştikçe bu dosya Vercel Blob'daki
 * kaynaktan yeniden üretilir (`src/lib/server/content-render.js`).
 */
import type { Product } from "@/types/menu";

export const products: Product[] = [
  {
    "id": "zepresso-signature-latte",
    "name": "Zepresso Signature Latte",
    "categoryId": "sicak-kahveler",
    "price": 185,
    "summary": "Çift shot espresso, tuzlu vanilya kreması ve kavrulmuş fındık notaları",
    "description": "Menümüzün imza içeceği. Kendi harmanımızdan çekilen çift shot espressonun üzerine, mutfağımızda hazırlanan tuzlu vanilya kreması ve hafif kavrulmuş fındık şurubu ekleniyor. Süt 62 °C'de buharlanıyor; böylece köpük ilk yudumdan son yudama kadar ipeksi kalıyor.",
    "ingredients": [
      "Zepresso harman espresso (2 shot)",
      "Tam yağlı süt",
      "Tuzlu vanilya kreması",
      "Kavrulmuş fındık şurubu",
      "Deniz tuzu"
    ],
    "allergens": [
      "Süt",
      "Sert kabuklu yemiş (fındık)"
    ],
    "calories": 240,
    "tags": [
      "cok-sevilen"
    ],
    "badge": "zepresso-imzasi",
    "featured": true,
    "serving": "330 ml",
    "image": "/menu/photos/zepresso-signature-latte.jpg",
    "art": {
      "vessel": "cappuccinoCup",
      "liquid": [
        "#C08A55",
        "#7A4A25"
      ],
      "crema": "#E8D2AE",
      "light": "#E4B46A",
      "lightFrom": "right",
      "steam": true,
      "garnish": "beans",
      "seed": 0.12
    }
  },
  {
    "id": "spanish-latte",
    "name": "Spanish Latte",
    "categoryId": "sicak-kahveler",
    "price": 175,
    "summary": "Yoğunlaştırılmış süt ile katmanlı, tatlı ve kadifemsi",
    "description": "İspanyol kahve kültürünün en sevilen tarifi. Yoğunlaştırılmış sütün tatlılığı, koyu kavrulmuş espressonun keskinliğini yumuşatıyor. Bardakta oluşan katmanlar karıştırılmadan önce fotoğraflanmayı hak ediyor.",
    "ingredients": [
      "Espresso (2 shot)",
      "Yoğunlaştırılmış süt",
      "Tam yağlı süt",
      "Bir tutam tarçın"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 285,
    "tags": [
      "cok-sevilen"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/spanish-latte.jpg",
    "art": {
      "vessel": "latteGlass",
      "liquid": [
        "#D2A574",
        "#6B3E1E"
      ],
      "crema": "#F0DEC0",
      "light": "#E4B46A",
      "lightFrom": "left",
      "steam": true,
      "garnish": "cinnamon",
      "seed": 0.31
    }
  },
  {
    "id": "flat-white",
    "name": "Flat White",
    "categoryId": "sicak-kahveler",
    "price": 155,
    "summary": "Ristretto yoğunluğu, ince mikro köpük, sade denge",
    "description": "Kahvenin kendisini dinlemek isteyenler için. İki shot ristretto, yalnızca birkaç milimetrelik mikro köpükle örtülüyor. Süt oranı düşük tutulduğu için çekirdeğin karamel ve kakao notaları öne çıkıyor.",
    "ingredients": [
      "Ristretto (2 shot)",
      "Tam yağlı süt"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 150,
    "tags": [],
    "serving": "220 ml",
    "image": "/menu/photos/flat-white.jpg",
    "art": {
      "vessel": "cappuccinoCup",
      "liquid": [
        "#B98A5E",
        "#66391A"
      ],
      "crema": "#E6D6BC",
      "light": "#D8A868",
      "lightFrom": "left",
      "steam": true,
      "garnish": "none",
      "seed": 0.47
    }
  },
  {
    "id": "salted-caramel-mocha",
    "name": "Salted Caramel Mocha",
    "categoryId": "sicak-kahveler",
    "price": 190,
    "summary": "Bitter çikolata, ev yapımı tuzlu karamel ve espresso",
    "description": "%70 kakao oranlı bitter çikolata sosu espresso ile eritiliyor, üzerine kendi kazanımızda kaynattığımız tuzlu karamel geliyor. Tatlı ve tuzlu arasındaki dengeyi bozmamak için krema şekersiz çırpılıyor.",
    "ingredients": [
      "Espresso (2 shot)",
      "Bitter çikolata sosu",
      "Tuzlu karamel",
      "Tam yağlı süt",
      "Şekersiz krema"
    ],
    "allergens": [
      "Süt",
      "Soya"
    ],
    "calories": 380,
    "tags": [
      "cok-sevilen"
    ],
    "serving": "350 ml",
    "image": "/menu/photos/salted-caramel-mocha.jpg",
    "art": {
      "vessel": "mug",
      "liquid": [
        "#8A5A32",
        "#3E2010"
      ],
      "crema": "#F2E3C8",
      "light": "#E0A45E",
      "lightFrom": "right",
      "steam": true,
      "garnish": "cocoa",
      "seed": 0.63
    }
  },
  {
    "id": "espresso-doppio",
    "name": "Espresso Doppio",
    "categoryId": "sicak-kahveler",
    "price": 110,
    "summary": "18 gr dozla çekilen çift shot, yoğun krema tabakası",
    "description": "Zepresso harmanının en saf hâli. 18 gramlık dozdan 36 gram çıkış alınıyor, ekstraksiyon 28 saniyede tamamlanıyor. Kuru meyve asiditesi ve uzun kakao bitişi belirgin.",
    "ingredients": [
      "Zepresso harman espresso (18 gr)"
    ],
    "allergens": [],
    "calories": 10,
    "tags": [],
    "serving": "60 ml",
    "image": "/menu/photos/espresso-doppio.jpg",
    "art": {
      "vessel": "espresso",
      "liquid": [
        "#8C5628",
        "#2E1508"
      ],
      "crema": "#C98F52",
      "light": "#D9A05C",
      "lightFrom": "right",
      "steam": true,
      "garnish": "beans",
      "seed": 0.08
    }
  },
  {
    "id": "cortado",
    "name": "Cortado",
    "categoryId": "sicak-kahveler",
    "price": 140,
    "summary": "Birebir espresso ve süt oranı, cam bardakta",
    "description": "Espresso ile buharlanmış sütün eşit oranda buluştuğu, İspanya kökenli kısa içecek. Bardağın inceliği sıcaklığı elde hissettirir; kahvenin gövdesi süte boğulmadan kalır.",
    "ingredients": [
      "Espresso (1 shot)",
      "Tam yağlı süt"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 90,
    "tags": [],
    "serving": "150 ml",
    "image": "/menu/photos/cortado.jpg",
    "art": {
      "vessel": "latteGlass",
      "liquid": [
        "#C09062",
        "#6E3F1C"
      ],
      "crema": "#EADCC4",
      "light": "#D9A868",
      "lightFrom": "right",
      "steam": true,
      "garnish": "none",
      "seed": 0.72
    }
  },
  {
    "id": "filtre-kahve-v60",
    "name": "Filtre Kahve V60",
    "categoryId": "sicak-kahveler",
    "price": 165,
    "summary": "Tek köken Etiyopya, yasemin ve şeftali notaları",
    "description": "Elle demlenen V60. Bu ayın çekirdeği Etiyopya Yirgacheffe: yasemin, olgun şeftali ve bergamot. 15 gram kahve, 250 gram su, dört aşamalı dökümle üç buçuk dakikada hazırlanıyor.",
    "ingredients": [
      "Tek köken filtre kahve (15 gr)",
      "Filtrelenmiş su"
    ],
    "allergens": [],
    "calories": 5,
    "tags": [
      "yeni"
    ],
    "badge": "yeni",
    "featured": true,
    "serving": "250 ml",
    "image": "/menu/photos/filtre-kahve-v60.jpg",
    "art": {
      "vessel": "teacup",
      "liquid": [
        "#A9713C",
        "#4A2711"
      ],
      "light": "#E0AE6C",
      "lightFrom": "left",
      "steam": true,
      "garnish": "beans",
      "seed": 0.55
    }
  },
  {
    "id": "turk-kahvesi",
    "name": "Türk Kahvesi",
    "categoryId": "sicak-kahveler",
    "price": 120,
    "summary": "Bakır cezvede, kum üzerinde pişirilmiş, lokumla",
    "description": "Dibek usulü öğütülen çekirdek, bakır cezvede kum üzerinde yavaşça kabartılıyor. Yanında bir bardak soğuk su ve gül lokumu ile servis ediliyor. Şeker tercihinizi garsonumuza iletebilirsiniz.",
    "ingredients": [
      "Dibek öğütülmüş kahve",
      "Su",
      "İsteğe bağlı şeker",
      "Gül lokumu"
    ],
    "allergens": [
      "Nişasta (lokum)"
    ],
    "calories": 45,
    "tags": [],
    "serving": "90 ml",
    "image": "/menu/photos/turk-kahvesi.jpg",
    "art": {
      "vessel": "espresso",
      "liquid": [
        "#7A4A22",
        "#261206"
      ],
      "crema": "#B8804A",
      "light": "#D9A05C",
      "lightFrom": "left",
      "steam": true,
      "garnish": "cinnamon",
      "seed": 0.88
    }
  },
  {
    "id": "cappuccino",
    "name": "Cappuccino",
    "categoryId": "sicak-kahveler",
    "price": 160,
    "summary": "Klasik oran, bulut kıvamında köpük, kakao serpme",
    "description": "Üçte bir espresso, üçte bir süt, üçte bir köpük. Klasik tarife sadık kalıyoruz; tek farkımız köpüğü kaşıkla değil, buhar kolunun açısıyla oluşturmamız. Üzerine ince kakao serpiliyor.",
    "ingredients": [
      "Espresso (1 shot)",
      "Tam yağlı süt",
      "Kakao tozu"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 135,
    "tags": [],
    "serving": "200 ml",
    "image": "/menu/photos/cappuccino.jpg",
    "art": {
      "vessel": "cappuccinoCup",
      "liquid": [
        "#C69566",
        "#71411D"
      ],
      "crema": "#F0E2CA",
      "light": "#DDA967",
      "lightFrom": "right",
      "steam": true,
      "garnish": "cocoa",
      "seed": 0.24
    }
  },
  {
    "id": "tiramisu-cold-brew",
    "name": "Tiramisu Cold Brew",
    "categoryId": "soguk-kahveler",
    "price": 195,
    "summary": "18 saat soğuk demleme, mascarpone köpüğü, kakao",
    "description": "18 saat boyunca soğuk demlediğimiz konsantre, buz üzerine dökülüyor. Üzerine mascarpone ve vanilya ile hazırlanan soğuk köpük geliyor; en üstte ince bir kakao tabakası. Karıştırmadan, köpükten geçerek içmenizi öneririz.",
    "ingredients": [
      "Cold brew konsantre (18 saat)",
      "Mascarpone soğuk köpük",
      "Vanilya",
      "Kakao tozu",
      "Buz"
    ],
    "allergens": [
      "Süt",
      "Yumurta"
    ],
    "calories": 220,
    "tags": [
      "buzlu",
      "cok-sevilen"
    ],
    "badge": "cok-sevilen",
    "featured": true,
    "serving": "400 ml",
    "image": "/menu/photos/tiramisu-cold-brew.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#5A3418",
        "#1E0E05"
      ],
      "crema": "#EFE0C4",
      "light": "#DEA765",
      "lightFrom": "left",
      "garnish": "cocoa",
      "seed": 0.19
    }
  },
  {
    "id": "nitro-cold-brew",
    "name": "Nitro Cold Brew",
    "categoryId": "soguk-kahveler",
    "price": 175,
    "summary": "Azotla servis, kadife dokulu, şekersiz",
    "description": "Soğuk demlenmiş kahve azot gazıyla servis ediliyor. Bardağa dökülürken oluşan kaskad etkisi ve yoğun mikro kabarcıklar, şeker eklenmeden bile tatlı bir doku hissi yaratıyor.",
    "ingredients": [
      "Cold brew",
      "Azot (N₂)"
    ],
    "allergens": [],
    "calories": 15,
    "tags": [
      "buzlu",
      "vegan"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/nitro-cold-brew.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#4A2B14",
        "#150903"
      ],
      "crema": "#C9A87C",
      "light": "#D29A5C",
      "lightFrom": "right",
      "garnish": "none",
      "seed": 0.41
    }
  },
  {
    "id": "buzlu-americano",
    "name": "Buzlu Americano",
    "categoryId": "soguk-kahveler",
    "price": 145,
    "summary": "Çift shot espresso, buz ve süzme su",
    "description": "Espresso doğrudan buzun üzerine çekiliyor; ani soğuma aromayı kilitliyor. Sade, hafif ve gün boyu içilebilir. Dilerseniz yanında portakal dilimi ile servis edebiliriz.",
    "ingredients": [
      "Espresso (2 shot)",
      "Filtrelenmiş su",
      "Buz"
    ],
    "allergens": [],
    "calories": 15,
    "tags": [
      "buzlu",
      "vegan"
    ],
    "serving": "350 ml",
    "image": "/menu/photos/buzlu-americano.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#6B4020",
        "#2A1408"
      ],
      "light": "#D6A25F",
      "lightFrom": "left",
      "garnish": "citrus",
      "seed": 0.58
    }
  },
  {
    "id": "iced-spanish-latte",
    "name": "Iced Spanish Latte",
    "categoryId": "soguk-kahveler",
    "price": 185,
    "summary": "Buz üzerinde katmanlı yoğunlaştırılmış süt ve espresso",
    "description": "Spanish Latte'nin soğuk versiyonu. Yoğunlaştırılmış süt bardağın dibinde kalıyor, espresso buzların arasından süzülerek koyu bir damar oluşturuyor. Görsel olarak da en sevilen içeceklerimizden.",
    "ingredients": [
      "Espresso (2 shot)",
      "Yoğunlaştırılmış süt",
      "Soğuk süt",
      "Buz"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 290,
    "tags": [
      "buzlu",
      "cok-sevilen"
    ],
    "serving": "400 ml",
    "image": "/menu/photos/iced-spanish-latte.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#D8B085",
        "#5E3517"
      ],
      "crema": "#F4E6CC",
      "light": "#E4B46A",
      "lightFrom": "right",
      "garnish": "none",
      "seed": 0.33
    }
  },
  {
    "id": "affogato",
    "name": "Affogato",
    "categoryId": "soguk-kahveler",
    "price": 170,
    "summary": "Sıcak espresso, Madagaskar vanilyalı dondurma",
    "description": "Bir top Madagaskar vanilyalı dondurmanın üzerine masanızda sıcak espresso döküyoruz. Sıcak ve soğuğun buluştuğu o ilk otuz saniye için hemen içmenizi öneririz.",
    "ingredients": [
      "Espresso (1 shot)",
      "Madagaskar vanilyalı dondurma"
    ],
    "allergens": [
      "Süt",
      "Yumurta"
    ],
    "calories": 230,
    "tags": [],
    "serving": "150 ml",
    "image": "/menu/photos/affogato.jpg",
    "art": {
      "vessel": "teacup",
      "liquid": [
        "#B2814E",
        "#4E2B12"
      ],
      "crema": "#F6EBD6",
      "light": "#E0AC68",
      "lightFrom": "right",
      "steam": true,
      "garnish": "cream",
      "seed": 0.66
    }
  },
  {
    "id": "buzlu-beyaz-cikolatali-mocha",
    "name": "Buzlu Beyaz Çikolatalı Mocha",
    "categoryId": "soguk-kahveler",
    "price": 195,
    "summary": "Beyaz çikolata, espresso ve buzlu süt",
    "description": "Belçika beyaz çikolatası sıcak espresso ile eritilip soğutuluyor, ardından buzlu sütle buluşuyor. Tatlıyı sevenler için menünün en yumuşak kahvesi.",
    "ingredients": [
      "Espresso (2 shot)",
      "Belçika beyaz çikolatası",
      "Soğuk süt",
      "Buz"
    ],
    "allergens": [
      "Süt",
      "Soya"
    ],
    "calories": 340,
    "tags": [
      "buzlu"
    ],
    "serving": "400 ml",
    "image": "/menu/photos/buzlu-beyaz-cikolatali-mocha.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#E3CBA4",
        "#8A5F33"
      ],
      "crema": "#FAF0DC",
      "light": "#E4B46A",
      "lightFrom": "left",
      "garnish": "cream",
      "seed": 0.77
    }
  },
  {
    "id": "coconut-cold-brew",
    "name": "Coconut Cold Brew",
    "categoryId": "soguk-kahveler",
    "price": 190,
    "summary": "Hindistan cevizi sütü, cold brew, tarçın tozu",
    "description": "Tamamen bitkisel. Soğuk demleme kahve, kremamsı hindistan cevizi sütüyle harmanlanıyor. Üzerine ince tarçın serpiliyor; tropikal tatlılık kahvenin toprağımsı bitişini dengeliyor.",
    "ingredients": [
      "Cold brew",
      "Hindistan cevizi sütü",
      "Tarçın",
      "Buz"
    ],
    "allergens": [],
    "calories": 130,
    "tags": [
      "vegan",
      "buzlu"
    ],
    "badge": "yeni",
    "featured": true,
    "serving": "400 ml",
    "image": "/menu/photos/coconut-cold-brew.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#CFB08A",
        "#5C3A1D"
      ],
      "crema": "#F6EEDC",
      "light": "#DDAE70",
      "lightFrom": "right",
      "garnish": "cinnamon",
      "seed": 0.51
    }
  },
  {
    "id": "espresso-tonik",
    "name": "Espresso Tonik",
    "categoryId": "soguk-kahveler",
    "price": 180,
    "summary": "Tonik, espresso ve portakal kabuğu",
    "description": "Bol buzlu tonik üzerine yavaşça akıtılan espresso. Kinin acılığı ile kahvenin meyveli asiditesi birbirini yükseltiyor. Bardağın ağzına sıkılan portakal kabuğu yağı aromayı tamamlıyor.",
    "ingredients": [
      "Espresso (1 shot)",
      "Premium tonik",
      "Portakal kabuğu",
      "Buz"
    ],
    "allergens": [],
    "calories": 90,
    "tags": [
      "buzlu",
      "vegan",
      "yeni"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/espresso-tonik.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#C98F4E",
        "#4A2A10"
      ],
      "light": "#E4B46A",
      "lightFrom": "left",
      "garnish": "citrus",
      "seed": 0.85
    }
  },
  {
    "id": "iced-matcha-latte",
    "name": "Iced Matcha Latte",
    "categoryId": "imza-icecekler",
    "price": 185,
    "summary": "Uji seremoni matcha, buzlu badem sütü",
    "description": "Japonya Uji bölgesinden gelen seremoni sınıfı matcha, bambu çırpıcı ile hazırlanıyor ve buzlu badem sütünün üzerine dökülüyor. Şeker eklenmeden servis edilir; dilerseniz akasya balı ekleyebiliriz.",
    "ingredients": [
      "Seremoni matcha (3 gr)",
      "Badem sütü",
      "Buz"
    ],
    "allergens": [
      "Sert kabuklu yemiş (badem)"
    ],
    "calories": 120,
    "tags": [
      "buzlu",
      "vegan",
      "cok-sevilen"
    ],
    "badge": "cok-sevilen",
    "featured": true,
    "serving": "350 ml",
    "image": "/menu/photos/iced-matcha-latte.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#9DB16A",
        "#4C5C2A"
      ],
      "crema": "#EFE8D2",
      "light": "#DBAE6A",
      "lightFrom": "right",
      "garnish": "mint",
      "seed": 0.29
    }
  },
  {
    "id": "zepresso-karanlik-kakao",
    "name": "Zepresso Karanlık Kakao",
    "categoryId": "imza-icecekler",
    "price": 195,
    "summary": "%80 bitter kakao, espresso ve deniz tuzu",
    "description": "Menünün en koyu içeceği. %80 kakao oranlı çikolata, tek shot espresso ile eritiliyor; üzerine bir tutam deniz tuzu ve kavrulmuş kakao nibs. Şeker oranı bilinçli olarak düşük tutuluyor.",
    "ingredients": [
      "%80 bitter çikolata",
      "Espresso (1 shot)",
      "Tam yağlı süt",
      "Deniz tuzu",
      "Kakao nibs"
    ],
    "allergens": [
      "Süt",
      "Soya"
    ],
    "calories": 310,
    "tags": [],
    "badge": "zepresso-imzasi",
    "featured": true,
    "serving": "300 ml",
    "image": "/menu/photos/zepresso-karanlik-kakao.jpg",
    "art": {
      "vessel": "mug",
      "liquid": [
        "#6A3F22",
        "#1C0C05"
      ],
      "crema": "#D9BE96",
      "light": "#D49A56",
      "lightFrom": "left",
      "steam": true,
      "garnish": "cocoa",
      "seed": 0.14
    }
  },
  {
    "id": "fistikli-ruya-latte",
    "name": "Fıstıklı Rüya Latte",
    "categoryId": "imza-icecekler",
    "price": 205,
    "summary": "Antep fıstığı ezmesi, espresso, portakal çiçeği",
    "description": "Gaziantep'ten gelen fıstık ezmesi sütle emülsiyon hâline getiriliyor, espresso ile buluşuyor. Bir damla portakal çiçeği suyu tarifin imzası. Üzerine dövülmüş fıstık serpiliyor.",
    "ingredients": [
      "Antep fıstığı ezmesi",
      "Espresso (2 shot)",
      "Tam yağlı süt",
      "Portakal çiçeği suyu"
    ],
    "allergens": [
      "Süt",
      "Sert kabuklu yemiş (antep fıstığı)"
    ],
    "calories": 350,
    "tags": [
      "yeni"
    ],
    "badge": "zepresso-imzasi",
    "featured": true,
    "serving": "330 ml",
    "image": "/menu/photos/fistikli-ruya-latte.jpg",
    "art": {
      "vessel": "latteGlass",
      "liquid": [
        "#B5B072",
        "#5E4A22"
      ],
      "crema": "#EFE7C8",
      "light": "#E0B270",
      "lightFrom": "right",
      "steam": true,
      "garnish": "pistachio",
      "seed": 0.37
    }
  },
  {
    "id": "lavanta-bal-latte",
    "name": "Lavanta & Bal Latte",
    "categoryId": "imza-icecekler",
    "price": 195,
    "summary": "Isparta lavantası infüzyonu ve çam balı",
    "description": "Isparta lavantası sütün içinde soğuk infüzyona bırakılıyor, ardından çam balı ile tatlandırılıyor. Espresso miktarı bilinçli olarak düşük; çiçeksi aroma öne çıksın diye.",
    "ingredients": [
      "Lavanta infüzyonlu süt",
      "Çam balı",
      "Espresso (1 shot)"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 260,
    "tags": [],
    "serving": "300 ml",
    "image": "/menu/photos/lavanta-bal-latte.jpg",
    "art": {
      "vessel": "teacup",
      "liquid": [
        "#C4A98F",
        "#6A4A3C"
      ],
      "crema": "#F2E5D0",
      "light": "#DFAE73",
      "lightFrom": "left",
      "steam": true,
      "garnish": "berry",
      "seed": 0.69
    }
  },
  {
    "id": "aci-cikolata-chili",
    "name": "Acı Çikolata & Chili",
    "categoryId": "imza-icecekler",
    "price": 190,
    "summary": "Bitter çikolata, ancho chili ve tarçın",
    "description": "Aztek geleneğinden esinlenen tarif. Bitter çikolata, ancho chili ve tarçın ile yavaş yavaş ısıtılıyor. İlk yudum yumuşak, bitiş sıcak. Acılık seviyesi orta; garsonumuzdan hafif isteyebilirsiniz.",
    "ingredients": [
      "%70 bitter çikolata",
      "Ancho chili",
      "Tarçın",
      "Tam yağlı süt",
      "Espresso (1 shot)"
    ],
    "allergens": [
      "Süt",
      "Soya"
    ],
    "calories": 300,
    "tags": [
      "acili",
      "yeni"
    ],
    "serving": "280 ml",
    "image": "/menu/photos/aci-cikolata-chili.jpg",
    "art": {
      "vessel": "mug",
      "liquid": [
        "#8E4426",
        "#2A0D06"
      ],
      "crema": "#DDB287",
      "light": "#DE8F4A",
      "lightFrom": "right",
      "steam": true,
      "garnish": "cinnamon",
      "seed": 0.93
    }
  },
  {
    "id": "portakal-cicegi-cold-foam",
    "name": "Portakal Çiçeği Cold Foam",
    "categoryId": "imza-icecekler",
    "price": 185,
    "summary": "Cold brew üzerine portakal çiçekli soğuk köpük",
    "description": "Soğuk demleme kahvenin üzerine, portakal çiçeği suyu ile aromalandırılmış soğuk köpük. Köpük yavaşça aşağı inerken her yudumda farklı bir yoğunluk yakalıyorsunuz.",
    "ingredients": [
      "Cold brew",
      "Portakal çiçeği soğuk köpüğü",
      "Portakal kabuğu",
      "Buz"
    ],
    "allergens": [
      "Süt"
    ],
    "calories": 160,
    "tags": [
      "buzlu"
    ],
    "serving": "350 ml",
    "image": "/menu/photos/portakal-cicegi-cold-foam.jpg",
    "art": {
      "vessel": "icedGlass",
      "liquid": [
        "#7A4A22",
        "#221006"
      ],
      "crema": "#F6E4C2",
      "light": "#E7B972",
      "lightFrom": "left",
      "garnish": "citrus",
      "seed": 0.44
    }
  },
  {
    "id": "tahin-pekmez-latte",
    "name": "Tahin Pekmez Latte",
    "categoryId": "imza-icecekler",
    "price": 200,
    "summary": "Susam tahini, üzüm pekmezi ve espresso",
    "description": "Anadolu kahvaltısının iki klasiği kahveye taşındı. Tahin sütle emülsiyon hâline getiriliyor, üzüm pekmezi doğal tatlandırıcı olarak kullanılıyor. Rafine şeker içermez.",
    "ingredients": [
      "Susam tahini",
      "Üzüm pekmezi",
      "Tam yağlı süt",
      "Espresso (2 shot)"
    ],
    "allergens": [
      "Süt",
      "Susam"
    ],
    "calories": 330,
    "tags": [
      "yeni"
    ],
    "badge": "yeni",
    "serving": "330 ml",
    "image": "/menu/photos/tahin-pekmez-latte.jpg",
    "art": {
      "vessel": "latteGlass",
      "liquid": [
        "#C9A46E",
        "#5A3618"
      ],
      "crema": "#EFDFBE",
      "light": "#DEAC68",
      "lightFrom": "right",
      "steam": true,
      "garnish": "beans",
      "seed": 0.61
    }
  },
  {
    "id": "zepresso-demleme-siyah-cay",
    "name": "Zepresso Demleme Siyah Çay",
    "categoryId": "caylar",
    "price": 90,
    "summary": "Rize harmanı, ince belli bardakta, semaverde demlenmiş",
    "description": "Rize'nin birinci sürgün yapraklarından hazırlanan özel harman, semaverde yirmi dakika demleniyor. Tavşan kanı ya da açık; tercihiniz garsonumuza iletilebilir.",
    "ingredients": [
      "Rize siyah çay harmanı",
      "Kaynak suyu"
    ],
    "allergens": [],
    "calories": 2,
    "tags": [
      "vegan"
    ],
    "serving": "120 ml",
    "image": "/menu/photos/zepresso-demleme-siyah-cay.jpg",
    "art": {
      "vessel": "teaGlass",
      "liquid": [
        "#C2551E",
        "#65240A"
      ],
      "light": "#E0975A",
      "lightFrom": "left",
      "steam": true,
      "garnish": "none",
      "seed": 0.05
    }
  },
  {
    "id": "bergamot-earl-grey",
    "name": "Bergamot Earl Grey",
    "categoryId": "caylar",
    "price": 110,
    "summary": "Seylan bazlı harman, gerçek bergamot yağı",
    "description": "Seylan siyah çayı, İtalyan bergamotundan soğuk sıkım elde edilen yağla aromalandırılıyor. Aroma yapay değil; bardaktaki narenciye kokusu ilk demlemede en yoğun hâlinde.",
    "ingredients": [
      "Seylan siyah çay",
      "Bergamot yağı",
      "Peygamber çiçeği"
    ],
    "allergens": [],
    "calories": 3,
    "tags": [
      "vegan"
    ],
    "serving": "250 ml",
    "image": "/menu/photos/bergamot-earl-grey.jpg",
    "art": {
      "vessel": "teacup",
      "liquid": [
        "#C97B2A",
        "#5E2C0C"
      ],
      "light": "#E4B46A",
      "lightFrom": "right",
      "steam": true,
      "garnish": "citrus",
      "seed": 0.22
    }
  },
  {
    "id": "adacayi-bal",
    "name": "Adaçayı & Bal",
    "categoryId": "caylar",
    "price": 105,
    "summary": "Ege adaçayı, akasya balı ve limon dilimi",
    "description": "Ege yamaçlarından toplanan adaçayı yaprakları demleniyor; yanında akasya balı ve limon dilimi ile servis ediliyor. Soğuk günlerde en çok istenen infüzyonumuz.",
    "ingredients": [
      "Kuru adaçayı yaprağı",
      "Akasya balı",
      "Limon"
    ],
    "allergens": [],
    "calories": 60,
    "tags": [],
    "serving": "300 ml",
    "image": "/menu/photos/adacayi-bal.jpg",
    "art": {
      "vessel": "teaGlass",
      "liquid": [
        "#C8A24A",
        "#6A4A14"
      ],
      "light": "#E4B46A",
      "lightFrom": "right",
      "steam": true,
      "garnish": "citrus",
      "seed": 0.39
    }
  },
  {
    "id": "yesil-cay-yasemin",
    "name": "Yeşil Çay & Yasemin",
    "categoryId": "caylar",
    "price": 110,
    "summary": "Yasemin çiçeğiyle katmanlanmış Çin yeşil çayı",
    "description": "Yaprakları taze yasemin çiçekleriyle katmanlayarak aromalandırılan geleneksel Çin çayı. 75 °C suda üç dakika demleniyor; daha sıcak su acılık yaratacağı için sıcaklık kontrollü hazırlanır.",
    "ingredients": [
      "Çin yeşil çayı",
      "Yasemin çiçeği"
    ],
    "allergens": [],
    "calories": 2,
    "tags": [
      "vegan"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/yesil-cay-yasemin.jpg",
    "art": {
      "vessel": "teaGlass",
      "liquid": [
        "#B9B462",
        "#5A5A20"
      ],
      "light": "#DDB268",
      "lightFrom": "left",
      "steam": true,
      "garnish": "mint",
      "seed": 0.57
    }
  },
  {
    "id": "nane-limon",
    "name": "Nane Limon",
    "categoryId": "caylar",
    "price": 100,
    "summary": "Taze nane yaprağı, limon ve zencefil",
    "description": "Toz karışım kullanmıyoruz. Taze nane yaprakları, dilimlenmiş limon ve rendelenmiş zencefil sıcak suda demleniyor. Bal isteğe bağlı eklenir.",
    "ingredients": [
      "Taze nane",
      "Limon",
      "Zencefil",
      "İsteğe bağlı bal"
    ],
    "allergens": [],
    "calories": 25,
    "tags": [
      "vegan"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/nane-limon.jpg",
    "art": {
      "vessel": "teaGlass",
      "liquid": [
        "#C6B95C",
        "#5E5418"
      ],
      "light": "#DEB86E",
      "lightFrom": "right",
      "steam": true,
      "garnish": "mint",
      "seed": 0.74
    }
  },
  {
    "id": "kis-cayi",
    "name": "Kış Çayı",
    "categoryId": "caylar",
    "price": 115,
    "summary": "Kuşburnu, tarçın, karanfil ve elma",
    "description": "Kuşburnu, çubuk tarçın, karanfil ve kurutulmuş elma dilimleriyle hazırlanan meyveli infüzyon. Kafeinsiz olduğu için akşam saatlerinde de rahatlıkla tercih edilebilir.",
    "ingredients": [
      "Kuşburnu",
      "Çubuk tarçın",
      "Karanfil",
      "Kurutulmuş elma"
    ],
    "allergens": [],
    "calories": 40,
    "tags": [
      "vegan"
    ],
    "serving": "300 ml",
    "image": "/menu/photos/kis-cayi.jpg",
    "art": {
      "vessel": "teaGlass",
      "liquid": [
        "#C0421C",
        "#5A1608"
      ],
      "light": "#E09A52",
      "lightFrom": "left",
      "steam": true,
      "garnish": "cinnamon",
      "seed": 0.91
    }
  },
  {
    "id": "matcha-toreni",
    "name": "Matcha Töreni",
    "categoryId": "caylar",
    "price": 165,
    "summary": "Bambu çırpıcı ile hazırlanan sade seremoni matcha",
    "description": "Süt yok, şeker yok. Uji seremoni matcha, chawan kâsesinde bambu chasen ile çırpılıyor. Umami dolu, kremsi bir doku ve uzun bir bitiş. Yanında bir yudum su ile servis edilir.",
    "ingredients": [
      "Seremoni matcha (2 gr)",
      "70 °C su"
    ],
    "allergens": [],
    "calories": 5,
    "tags": [
      "vegan"
    ],
    "serving": "80 ml",
    "image": "/menu/photos/matcha-toreni.jpg",
    "art": {
      "vessel": "bowl",
      "liquid": [
        "#8FA85C",
        "#3E4E1E"
      ],
      "crema": "#D8E0B4",
      "light": "#D9AC66",
      "lightFrom": "right",
      "steam": true,
      "garnish": "none",
      "seed": 0.17
    }
  },
  {
    "id": "san-sebastian-cheesecake",
    "name": "San Sebastian Cheesecake",
    "categoryId": "tatlilar",
    "price": 210,
    "summary": "Yüzeyi karamelize, ortası akışkan Bask usulü",
    "description": "Yüksek ısıda pişirilerek yüzeyi bilinçli olarak karamelize edilen Bask cheesecake'i. Kenarları yoğun, ortası kaşıkla açıldığında akıyor. Her sabah mutfağımızda hazırlanıyor ve gün içinde bitiyor.",
    "ingredients": [
      "Krem peynir",
      "Taze krema",
      "Yumurta",
      "Toz şeker",
      "Buğday unu",
      "Vanilya"
    ],
    "allergens": [
      "Süt",
      "Yumurta",
      "Gluten"
    ],
    "calories": 480,
    "tags": [
      "cok-sevilen"
    ],
    "badge": "cok-sevilen",
    "featured": true,
    "serving": "150 gr dilim",
    "image": "/menu/photos/san-sebastian-cheesecake.jpg",
    "art": {
      "vessel": "cheesecakeSlice",
      "liquid": [
        "#E8CB9A",
        "#8A5A2A"
      ],
      "crema": "#F6E8CC",
      "light": "#E4B46A",
      "lightFrom": "left",
      "garnish": "none",
      "seed": 0.11
    }
  },
  {
    "id": "tiramisu",
    "name": "Tiramisu",
    "categoryId": "tatlilar",
    "price": 195,
    "summary": "Mascarpone, savoiardi ve gerçek espresso şerbeti",
    "description": "Klasik tarif, taviz yok. Savoiardi bisküvileri taze çekilmiş espressoya batırılıyor, mascarpone kreması katman katman diziliyor. En az altı saat dinlendikten sonra servis ediliyor.",
    "ingredients": [
      "Mascarpone",
      "Savoiardi bisküvi",
      "Espresso",
      "Yumurta sarısı",
      "Kakao tozu"
    ],
    "allergens": [
      "Süt",
      "Yumurta",
      "Gluten"
    ],
    "calories": 420,
    "tags": [
      "cok-sevilen"
    ],
    "serving": "140 gr porsiyon",
    "image": "/menu/photos/tiramisu.jpg",
    "art": {
      "vessel": "cakeSlice",
      "liquid": [
        "#D9BE93",
        "#6E4622"
      ],
      "crema": "#F2E4C6",
      "light": "#DFAD69",
      "lightFrom": "right",
      "garnish": "cocoa",
      "seed": 0.27
    }
  },
  {
    "id": "fondan-cikolatali-sufle",
    "name": "Fondan Çikolatalı Sufle",
    "categoryId": "tatlilar",
    "price": 205,
    "summary": "Sıcak servis, akışkan çikolata dolgusu, dondurma ile",
    "description": "Siparişiniz üzerine pişirilir; yaklaşık on iki dakika sürer. İçindeki %70 bitter çikolata dolgusu kaşık değdiğinde akar. Yanında bir top vanilyalı dondurma ile gelir.",
    "ingredients": [
      "%70 bitter çikolata",
      "Tereyağı",
      "Yumurta",
      "Toz şeker",
      "Buğday unu",
      "Vanilyalı dondurma"
    ],
    "allergens": [
      "Süt",
      "Yumurta",
      "Gluten",
      "Soya"
    ],
    "calories": 520,
    "tags": [],
    "serving": "160 gr",
    "image": "/menu/photos/fondan-cikolatali-sufle.jpg",
    "art": {
      "vessel": "plated",
      "liquid": [
        "#7A4322",
        "#1E0B04"
      ],
      "crema": "#F4EAD4",
      "light": "#DC9E58",
      "lightFrom": "left",
      "steam": true,
      "garnish": "cocoa",
      "seed": 0.49
    }
  },
  {
    "id": "fistikli-kadayif-cheesecake",
    "name": "Fıstıklı Kadayıf Cheesecake",
    "categoryId": "tatlilar",
    "price": 225,
    "summary": "Çıtır kadayıf tabanı, Antep fıstığı, tuzlu krem peynir",
    "description": "Tereyağında kavrulan kadayıf taban, üzerinde hafif tuzlu krem peynir kreması ve bol dövülmüş Antep fıstığı. Doğu ile Batı tatlı kültürünü aynı dilimde buluşturuyor.",
    "ingredients": [
      "Tel kadayıf",
      "Tereyağı",
      "Krem peynir",
      "Antep fıstığı",
      "Toz şeker"
    ],
    "allergens": [
      "Süt",
      "Gluten",
      "Sert kabuklu yemiş (antep fıstığı)"
    ],
    "calories": 510,
    "tags": [
      "yeni"
    ],
    "badge": "zepresso-imzasi",
    "featured": true,
    "serving": "150 gr dilim",
    "image": "/menu/photos/fistikli-kadayif-cheesecake.jpg",
    "art": {
      "vessel": "cheesecakeSlice",
      "liquid": [
        "#DCCB92",
        "#7E6626"
      ],
      "crema": "#F4EBCC",
      "light": "#E4B46A",
      "lightFrom": "right",
      "garnish": "pistachio",
      "seed": 0.35
    }
  },
  {
    "id": "karamelli-profiterol",
    "name": "Karamelli Profiterol",
    "categoryId": "tatlilar",
    "price": 190,
    "summary": "Vanilya kremalı toplar, sıcak karamel sos",
    "description": "Elde şekillendirilen ekler hamuru topları vanilya kreması ile dolduruluyor. Üzerine servis anında sıcak tuzlu karamel sos döküyoruz. Paylaşmaya uygun porsiyon.",
    "ingredients": [
      "Ekler hamuru",
      "Vanilya kreması",
      "Tuzlu karamel sos",
      "Taze krema"
    ],
    "allergens": [
      "Süt",
      "Yumurta",
      "Gluten"
    ],
    "calories": 460,
    "tags": [],
    "serving": "180 gr",
    "image": "/menu/photos/karamelli-profiterol.jpg",
    "art": {
      "vessel": "plated",
      "liquid": [
        "#C08B4E",
        "#5A3416"
      ],
      "crema": "#F6E9CE",
      "light": "#E2AF6C",
      "lightFrom": "right",
      "garnish": "cream",
      "seed": 0.64
    }
  },
  {
    "id": "vegan-cikolatali-brownie",
    "name": "Vegan Çikolatalı Brownie",
    "categoryId": "tatlilar",
    "price": 175,
    "summary": "Hurma tatlandırmalı, cevizli, süt ve yumurtasız",
    "description": "Rafine şeker, süt ve yumurta içermez. Tatlılığı hurma ezmesinden, yoğunluğu ise avokado ve kakaonun birleşiminden geliyor. Üzerine kavrulmuş ceviz.",
    "ingredients": [
      "Hurma ezmesi",
      "Kakao",
      "Avokado",
      "Ceviz",
      "Yulaf unu"
    ],
    "allergens": [
      "Sert kabuklu yemiş (ceviz)",
      "Gluten"
    ],
    "calories": 330,
    "tags": [
      "vegan"
    ],
    "serving": "120 gr",
    "image": "/menu/photos/vegan-cikolatali-brownie.jpg",
    "art": {
      "vessel": "cakeSlice",
      "liquid": [
        "#6E4326",
        "#1C0C05"
      ],
      "crema": "#C9A578",
      "light": "#D69C58",
      "lightFrom": "left",
      "garnish": "cocoa",
      "seed": 0.79
    }
  },
  {
    "id": "limonlu-tart",
    "name": "Limonlu Tart",
    "categoryId": "tatlilar",
    "price": 185,
    "summary": "Kum tart tabanı, keskin limon kreması, brûlée beze",
    "description": "Taze sıkılmış limon suyu ile hazırlanan keskin krema, tereyağlı kum tart tabanının üzerinde. En üstteki İtalyan bezesi servis öncesi alevle karamelize ediliyor.",
    "ingredients": [
      "Tart hamuru",
      "Limon suyu ve kabuğu",
      "Yumurta",
      "Tereyağı",
      "İtalyan beze"
    ],
    "allergens": [
      "Süt",
      "Yumurta",
      "Gluten"
    ],
    "calories": 390,
    "tags": [],
    "serving": "130 gr dilim",
    "image": "/menu/photos/limonlu-tart.jpg",
    "art": {
      "vessel": "plated",
      "liquid": [
        "#DFC260",
        "#8A6A18"
      ],
      "crema": "#F8EFD2",
      "light": "#E4B46A",
      "lightFrom": "left",
      "garnish": "citrus",
      "seed": 0.86
    }
  },
  {
    "id": "kruvasan-sandvic",
    "name": "Kruvasan Sandviç",
    "categoryId": "atistirmaliklar",
    "price": 180,
    "summary": "Tereyağlı kruvasan, kaşar, dana füme ve roka",
    "description": "Her sabah açtığımız hamurdan pişen tereyağlı kruvasan; içinde olgunlaştırılmış kaşar, ince dilimlenmiş dana füme ve taze roka. Servis öncesi kısa süre ızgarada ısıtılır.",
    "ingredients": [
      "Tereyağlı kruvasan",
      "Kaşar peyniri",
      "Dana füme",
      "Roka",
      "Hardal sos"
    ],
    "allergens": [
      "Gluten",
      "Süt",
      "Yumurta",
      "Hardal"
    ],
    "calories": 520,
    "tags": [
      "cok-sevilen"
    ],
    "serving": "1 adet",
    "image": "/menu/photos/kruvasan-sandvic.jpg",
    "art": {
      "vessel": "croissant",
      "liquid": [
        "#D7A662",
        "#7A4C1C"
      ],
      "crema": "#F2DFB8",
      "light": "#E4B46A",
      "lightFrom": "right",
      "garnish": "none",
      "seed": 0.09
    }
  },
  {
    "id": "avokadolu-eksi-maya-tost",
    "name": "Avokadolu Ekşi Maya Tost",
    "categoryId": "atistirmaliklar",
    "price": 225,
    "summary": "Ekşi maya ekmek, ezme avokado, poşe yumurta",
    "description": "48 saat fermente edilen ekşi maya ekmeğimiz kızartılıyor; üzerine limon ve pul biberle ezilen avokado, ardından akışkan poşe yumurta. Kişniş yağı ve turp filizi ile tamamlanıyor.",
    "ingredients": [
      "Ekşi maya ekmek",
      "Avokado",
      "Poşe yumurta",
      "Limon",
      "Pul biber",
      "Turp filizi"
    ],
    "allergens": [
      "Gluten",
      "Yumurta"
    ],
    "calories": 440,
    "tags": [
      "cok-sevilen"
    ],
    "badge": "cok-sevilen",
    "featured": true,
    "serving": "2 dilim",
    "image": "/menu/photos/avokadolu-eksi-maya-tost.jpg",
    "art": {
      "vessel": "sandwich",
      "liquid": [
        "#9CAE64",
        "#4A5A26"
      ],
      "crema": "#E8D4A6",
      "light": "#DFAF6C",
      "lightFrom": "left",
      "garnish": "mint",
      "seed": 0.26
    }
  },
  {
    "id": "truf-mantarli-kruvasan",
    "name": "Trüf Mantarlı Kruvasan",
    "categoryId": "atistirmaliklar",
    "price": 210,
    "summary": "Kremalı mantar, trüf yağı ve gruyere",
    "description": "Tereyağında soteledeğimiz karışık mantarlar, taze krema ve bir damla beyaz trüf yağı ile kruvasanın içine yerleştiriliyor. Üzerine rendelenmiş gruyere ile fırınlanıyor.",
    "ingredients": [
      "Tereyağlı kruvasan",
      "Karışık mantar",
      "Taze krema",
      "Beyaz trüf yağı",
      "Gruyere peyniri"
    ],
    "allergens": [
      "Gluten",
      "Süt",
      "Yumurta"
    ],
    "calories": 560,
    "tags": [
      "yeni"
    ],
    "badge": "yeni",
    "serving": "1 adet",
    "image": "/menu/photos/truf-mantarli-kruvasan.jpg",
    "art": {
      "vessel": "croissant",
      "liquid": [
        "#C79A5E",
        "#6A4218"
      ],
      "crema": "#EEDCB4",
      "light": "#DDA964",
      "lightFrom": "left",
      "garnish": "none",
      "seed": 0.43
    }
  },
  {
    "id": "acili-sucuklu-sandvic",
    "name": "Acılı Sucuklu Sandviç",
    "categoryId": "atistirmaliklar",
    "price": 215,
    "summary": "Ekşi maya baget, acı sucuk, kaşar ve közlenmiş biber",
    "description": "Kendi fırınımızda pişen ekşi maya baget; içinde dilimlenmiş acı sucuk, eriyen kaşar ve közlenmiş kırmızı biber. Acı seviyesi belirgindir, hassas damaklar için önerilmez.",
    "ingredients": [
      "Ekşi maya baget",
      "Acı sucuk",
      "Kaşar peyniri",
      "Közlenmiş kırmızı biber",
      "Pul biber"
    ],
    "allergens": [
      "Gluten",
      "Süt"
    ],
    "calories": 610,
    "tags": [
      "acili"
    ],
    "serving": "1 adet",
    "image": "/menu/photos/acili-sucuklu-sandvic.jpg",
    "art": {
      "vessel": "sandwich",
      "liquid": [
        "#B95626",
        "#4E1C08"
      ],
      "crema": "#EBD2A2",
      "light": "#E09250",
      "lightFrom": "right",
      "garnish": "none",
      "seed": 0.59
    }
  },
  {
    "id": "somon-krem-peynir-bagel",
    "name": "Somon & Krem Peynir Bagel",
    "categoryId": "atistirmaliklar",
    "price": 245,
    "summary": "Füme somon, krem peynir, kapari ve dereotu",
    "description": "Susamlı bagel ikiye ayrılıp hafifçe ısıtılıyor; üzerine dereotlu krem peynir, ince dilimlenmiş füme somon, kapari ve mor soğan. Yanında limon dilimi ile servis edilir.",
    "ingredients": [
      "Susamlı bagel",
      "Füme somon",
      "Krem peynir",
      "Kapari",
      "Dereotu",
      "Mor soğan"
    ],
    "allergens": [
      "Gluten",
      "Süt",
      "Balık",
      "Susam"
    ],
    "calories": 480,
    "tags": [],
    "serving": "1 adet",
    "image": "/menu/photos/somon-krem-peynir-bagel.jpg",
    "art": {
      "vessel": "sandwich",
      "liquid": [
        "#D98A62",
        "#7A3A1E"
      ],
      "crema": "#F4E6CE",
      "light": "#E2A868",
      "lightFrom": "left",
      "garnish": "mint",
      "seed": 0.71
    }
  },
  {
    "id": "humuslu-vegan-wrap",
    "name": "Humuslu Vegan Wrap",
    "categoryId": "atistirmaliklar",
    "price": 195,
    "summary": "Humus, közlenmiş sebze ve nar ekşili tahin",
    "description": "Tam buğday lavaşın içinde ev yapımı humus, közlenmiş kabak ve patlıcan, marul ve nar ekşili tahin sos. Tamamen bitkisel, doyurucu ve hafif.",
    "ingredients": [
      "Tam buğday lavaş",
      "Humus",
      "Közlenmiş kabak ve patlıcan",
      "Marul",
      "Nar ekşili tahin sos"
    ],
    "allergens": [
      "Gluten",
      "Susam"
    ],
    "calories": 400,
    "tags": [
      "vegan"
    ],
    "serving": "1 adet",
    "image": "/menu/photos/humuslu-vegan-wrap.jpg",
    "art": {
      "vessel": "sandwich",
      "liquid": [
        "#CBA766",
        "#6A4A1E"
      ],
      "crema": "#EEDDB6",
      "light": "#DCAA66",
      "lightFrom": "right",
      "garnish": "mint",
      "seed": 0.82
    }
  },
  {
    "id": "zeytinli-pogaca",
    "name": "Zeytinli Poğaça",
    "categoryId": "atistirmaliklar",
    "price": 95,
    "summary": "Günlük açılan hamur, siyah zeytin ve kekik",
    "description": "Her sabah açılan yumuşak poğaça hamuru; içinde çekirdeği alınmış siyah zeytin, taze kekik ve zeytinyağı. Kahvenin yanında en sade, en tanıdık eşlikçi.",
    "ingredients": [
      "Buğday unu",
      "Siyah zeytin",
      "Zeytinyağı",
      "Kekik",
      "Süt",
      "Yumurta"
    ],
    "allergens": [
      "Gluten",
      "Süt",
      "Yumurta"
    ],
    "calories": 290,
    "tags": [],
    "serving": "1 adet",
    "image": "/menu/photos/zeytinli-pogaca.jpg",
    "art": {
      "vessel": "croissant",
      "liquid": [
        "#CE9E5E",
        "#6E4418"
      ],
      "crema": "#EFDDB2",
      "light": "#DBA660",
      "lightFrom": "right",
      "garnish": "none",
      "seed": 0.96
    }
  },
  {
    "id": "granola-yogurt-kasesi",
    "name": "Granola & Yoğurt Kâsesi",
    "categoryId": "atistirmaliklar",
    "price": 165,
    "summary": "Süzme yoğurt, ev yapımı granola, mevsim meyveleri",
    "description": "Ev yapımı granolamız yulaf, badem ve akçaağaç şurubu ile fırınlanıyor. Altında süzme yoğurt, üstünde mevsim meyveleri ve bir kaşık çiçek balı.",
    "ingredients": [
      "Süzme yoğurt",
      "Ev yapımı granola (yulaf, badem)",
      "Mevsim meyveleri",
      "Çiçek balı"
    ],
    "allergens": [
      "Süt",
      "Gluten",
      "Sert kabuklu yemiş (badem)"
    ],
    "calories": 350,
    "tags": [],
    "serving": "300 gr",
    "image": "/menu/photos/granola-yogurt-kasesi.jpg",
    "art": {
      "vessel": "bowl",
      "liquid": [
        "#E0CFAA",
        "#8A6E42"
      ],
      "crema": "#F8F0DC",
      "light": "#E4B46A",
      "lightFrom": "left",
      "garnish": "berry",
      "seed": 0.15
    }
  }
];

export const featuredProducts = products.filter((product) => product.featured);

export const productsByCategory = (categoryId: Product["categoryId"]) =>
  products.filter((product) => product.categoryId === categoryId);

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);

/** Detay panelinde gösterilen benzer ürünler — aynı kategoriden, kendisi hariç. */
export const getRelatedProducts = (product: Product, limit = 6) =>
  products
    .filter((item) => item.categoryId === product.categoryId && item.id !== product.id)
    .slice(0, limit);
