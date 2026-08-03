/* Bu dosya üretilmiştir — elle düzenlemeyin.
   Kaynak: scripts/fetch-photos.mjs  (npm run photos)

   blur      → görsel yüklenene kadar gösterilen minik bulanık önizleme
   author/…  → Unsplash lisansının istediği künye bilgisi */

export interface PhotoMeta {
  /** 24 px genişliğinde, bulanıklaştırılmış JPEG (data URI). */
  blur: string;
  author: string;
  authorUrl: string;
  photoUrl: string;
}

/** Anahtar: ürün kimliği. Giriş görseli için `__hero`. */
export const photoMeta: Record<string, PhotoMeta> = {
  "__hero": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAQEBAAAAAAAAAAAAAAAABQYDBBABAAMBAQEAAAAAAAAAAAAAAAEDBAIRIQEBAAAAAAAAAAAAAAAAAAAAAxEBAQEBAQAAAAAAAAAAAAAAAAECIRH/2gAMAwEAAhEDEQA/AMtVml6ZzqdPETDrNYbvpZjjNWZZGg7jgLB1Iy7FHvV8AfkJLUW/ZPoBBv/Z",
    author: "Matt Hoffman",
    authorUrl: "https://unsplash.com/@__matthoffman__",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-fill-with-coffee-IE-gdqEg45M",
  },
  "aci-cikolata-chili": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAAMBAAAAAAAAAAAAAAAABAIDBQYQAQACAwEAAAAAAAAAAAAAAAABAgMREyEBAQEBAQAAAAAAAAAAAAAAAAIFAAERAAMBAQEAAAAAAAAAAAAAAAABAiEDEf/aAAwDAQACEQMRAD8A8bWVFZT46LefiPWMqzpj0gRZdxIXhwprLf08AuiQYZz8s7kApWGbP//Z",
    author: "Angela Petrosyan",
    authorUrl: "https://unsplash.com/@anzhela20",
    photoUrl: "https://unsplash.com/photos/a-cup-of-hot-chocolate-with-marshmallows-and-orange-slices-mtb6yNdEUeo",
  },
  "acili-sucuklu-sandvic": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABcAAEAAgMBAAAAAAAAAAAAAAAAAgMBBAUHEAEAAwEBAAAAAAAAAAAAAAAAAQIDERIBAQEBAAAAAAAAAAAAAAAAAAMCBBEBAQEBAQEAAAAAAAAAAAAAAQACAyER/9oADAMBAAIRAxEAPwD1zXZTnr2UL5zKEV8g2o2rAfLs00HPpeQmenkTz9tiaqpoBtBFlbNcwEGSt03/2Q==",
    author: "Mustafa Fatemi",
    authorUrl: "https://unsplash.com/@solaticace",
    photoUrl: "https://unsplash.com/photos/a-white-plate-topped-with-a-sandwich-and-chips-ySTzkbMBWMw",
  },
  "adacayi-bal": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAAMBAAAAAAAAAAAAAAAABgECBAUQAAICAgIDAAAAAAAAAAAAAAABAgQDEhETISIxAQADAQAAAAAAAAAAAAAAAAAAAQIDEQADAQEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AzUoNMp68dAlGJr2psyusRUTrKWrl8A5afwDmuA5Wk/nb4POxye4BNIJZXU5eoAGhNn//2Q==",
    author: "krzhck",
    authorUrl: "https://unsplash.com/@krzhck",
    photoUrl: "https://unsplash.com/photos/a-cup-of-tea-sitting-on-top-of-a-table-D5KmUipO7Iw",
  },
  "affogato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAQEBAAAAAAAAAAAAAAAABAEDBhAAAgMBAQEAAAAAAAAAAAAAAAECAwQREhMBAQEBAQAAAAAAAAAAAAAAAAIDBAURAQADAQEAAAAAAAAAAAAAAAEAAgMEEf/aAAwDAQACEQMRAD8A2NfTpLM+G1WJMslfDydTp6bUZLHISebvr4wUaZpsArqp7BagMnna0RS1SANHRSrBndCZ9GwARA8hV9n/2Q==",
    author: "Bon Vivant",
    authorUrl: "https://unsplash.com/@bonvivant",
    photoUrl: "https://unsplash.com/photos/bowl-of-ice-cream-oY74As6S3n8",
  },
  "avokadolu-eksi-maya-tost": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABZAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAwEBAQAAAAAAAAAAAAAAAAECAxEUAQADAQAAAAAAAAAAAAAAAAAAAgMBEQEBAQEAAAAAAAAAAAAAAAABABEC/9oADAMBAAIRAxEAPwDua06QIqvXhF6BXt2ocmWzGyQMmabBQ6aaUe8cRVyz6wAw23XLSSUoADSX/9k=",
    author: "Ben Kolde",
    authorUrl: "https://unsplash.com/@benkolde",
    photoUrl: "https://unsplash.com/photos/bread-with-sunny-side-up-egg-served-on-white-ceramic-plate-FFqNATH27EM",
  },
  "bergamot-earl-grey": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEAAgMBAAAAAAAAAAAAAAAAAwQBAgUGEAACAwEBAAAAAAAAAAAAAAAAAQMEEQISAQEBAQAAAAAAAAAAAAAAAAAAAQIRAQEBAAAAAAAAAAAAAAAAAAAREv/aAAwDAQACEQMRAD8AqOsyWKq2zvOAkihxmImVHmo8B6BcrACNfAzACtsegAQf/9k=",
    author: "Miska Sage",
    authorUrl: "https://unsplash.com/@miskasage",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-on-white-table-UJGYOM5tpGo",
  },
  "buzlu-americano": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAgMAAAAAAAAAAAAAAAAABAUCAwYQAAICAwEAAAAAAAAAAAAAAAACAwQBERIhAQACAwAAAAAAAAAAAAAAAAAAAwECBBEBAQEBAAAAAAAAAAAAAAAAAQACEv/aAAwDAQACEQMRAD8Ag1anp0kacqQo8ck1JNmbOkJvBVdnOdgts1ugMNsclk1c1JHpgCdkvDXcCeAAArX/2Q==",
    author: "Oak & Bond Coffee Co.",
    authorUrl: "https://unsplash.com/@oakandbondcoffee",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-sitting-next-to-a-box-of-coffee-OViWURN_WWI",
  },
  "buzlu-beyaz-cikolatali-mocha": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAAMAAAAAAAAAAAAAAAAABQMEBhAAAgMBAQEAAAAAAAAAAAAAAAECAwQREiEBAAIDAAAAAAAAAAAAAAAAAAEEAgMFEQADAQEAAAAAAAAAAAAAAAAAAQIRE//aAAwDAQACEQMRAD8AiQl1lejO5EPNF+jsc0UomSx6IZPtzcBuaJACou5EamlJlyt8iALKmNKUYLfoABrJ4f/Z",
    author: "Christian Dala",
    authorUrl: "https://unsplash.com/@kurisuchanxx",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-next-to-a-bottle-of-coffee-fOUSzzNZlDc",
  },
  "cappuccino": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABcAAEBAAMAAAAAAAAAAAAAAAAABAUGBxAAAwADAQEAAAAAAAAAAAAAAAECAwQREhQBAAMBAAAAAAAAAAAAAAAAAAECAwQRAQEBAQEAAAAAAAAAAAAAAAEAAgMh/9oADAMBAAIRAxEAPwDut2kiT6F0bDfDCOq9EdatWOYlskWmCLXb4Bxo6PavJHSF666ABImmrxwkgAMSLf/Z",
    author: "Trent Erwin",
    authorUrl: "https://unsplash.com/@tjerwin",
    photoUrl: "https://unsplash.com/photos/flat-lay-photography-teacup-on-top-of-saucer-fKImVjUwkXc",
  },
  "coconut-cold-brew": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAQEAAAAAAAAAAAAAAAAABgUHEAACAwEBAQAAAAAAAAAAAAAAAQIDEQQxBQEBAQEAAAAAAAAAAAAAAAAABQQDEQADAQADAQAAAAAAAAAAAAAAAQMCERMyIf/aAAwDAQACEQMRAD8Asp1PCf63hYXRWEf9FehOYcoU7vpiTmgZ1k2mCHcGmIZomjr9vhL9te6AMyBtkZ2QxgAzp6LpeEf/2Q==",
    author: "Markus Winkler",
    authorUrl: "https://unsplash.com/@markuswinkler",
    photoUrl: "https://unsplash.com/photos/coconut-dessert-with-straw-1DYP5F-vAQQ",
  },
  "cortado": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABTAAEAAwEAAAAAAAAAAAAAAAAAAgQFBhABAAMBAQAAAAAAAAAAAAAAAAECAwQSAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDAxqnrj6RouVBh35JHQxnEgMeNF2mgAsxoAD//2Q==",
    author: "Haberdoedas",
    authorUrl: "https://unsplash.com/@haberdoedas",
    photoUrl: "https://unsplash.com/photos/two-coffees-and-a-glass-of-water-on-table-iemVrUqIgzI",
  },
  "espresso-doppio": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABZAAEBAAMBAAAAAAAAAAAAAAAABQIDBgQQAAMAAwEBAAAAAAAAAAAAAAABAwQRIgIhAQEBAQAAAAAAAAAAAAAAAAACAQARAQEAAAAAAAAAAAAAAAAAAAAR/9oADAMBAAIRAxEAPwDjceumVHk8k+Uk2e54/JKKZeu2DC89MBRsxbbZc9V4AETncqv0AEjP/9k=",
    author: "Heather Newsom",
    authorUrl: "https://unsplash.com/@native7photo",
    photoUrl: "https://unsplash.com/photos/small-plant-growing-in-a-white-coffee-cup-LK_YagB2t2E",
  },
  "espresso-tonik": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEAAAAAAAAAAAAAAAAABQQGEAADAQEBAQAAAAAAAAAAAAAAAQIDBBETAQADAQAAAAAAAAAAAAAAAAABAgMEEQEBAQEBAAAAAAAAAAAAAAAAAQIREv/aAAwDAQACEQMRAD8An4bJMv49M+HDq6Rsx1sTOo0azXRdNKgZM1VIBT8IvzXpT58UAQjZVeJSAA3Q4//Z",
    author: "Haberdoedas",
    authorUrl: "https://unsplash.com/@haberdoedas",
    photoUrl: "https://unsplash.com/photos/coffee-drinks-and-cookies-with-dog-in-background-069HrW7J9uU",
  },
  "filtre-kahve-v60": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABXAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAgIDAQAAAAAAAAAAAAAAAAMBAgQRIRIBAQEAAAAAAAAAAAAAAAAAAAIDEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A4nDNe+pqc+m3mS/ORwqKm+nQQPfABarEzK6M1rpgASTJa+dgAJP/2Q==",
    author: "syahmi syahir",
    authorUrl: "https://unsplash.com/@subspace_stills",
    photoUrl: "https://unsplash.com/photos/barista-making-pour-over-coffee-with-a-gooseneck-kettle-AQTgvFfwOcg",
  },
  "fistikli-kadayif-cheesecake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABVAAEAAgMAAAAAAAAAAAAAAAAABAUBAgcQAQEBAQEAAAAAAAAAAAAAAAABAhEDAQEBAAAAAAAAAAAAAAAAAAACAREBAQAAAAAAAAAAAAAAAAAAABH/2gAMAwEAAhEDEQA/AOtTTfsV+t2GfS1aEWPRHmgkRbOs5wAkkSAEj//Z",
    author: "Yupinto Ngadiman",
    authorUrl: "https://unsplash.com/@yupinto",
    photoUrl: "https://unsplash.com/photos/white-and-brown-pastry-on-white-ceramic-plate-pDv-2ztj4k0",
  },
  "fistikli-ruya-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEAAAAAAAAAAAAAAAAABAUGEAEAAwEBAQEAAAAAAAAAAAAAAQIDESESFAEAAwEAAAAAAAAAAAAAAAAAAAIDAREBAQEBAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8A5r9ESfSGmc9VT5VLUUiXe4i3v6EmDdjcmqTa3IBXRYxdJ7IDRX//2Q==",
    author: "Haberdoedas",
    authorUrl: "https://unsplash.com/@haberdoedas",
    photoUrl: "https://unsplash.com/photos/pastries-and-colorful-macarons-displayed-in-a-cafe-case-cF0m6nMdUt8",
  },
  "flat-white": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABWAAEAAwEBAAAAAAAAAAAAAAAAAQMEAgYQAQEBAQEAAAAAAAAAAAAAAAABAhEhAQEBAQEAAAAAAAAAAAAAAAAAAQIDEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD3eqrm1e9OMX12ZbYIlFGFOQBf0BR//9k=",
    author: "Ambo Ampeng",
    authorUrl: "https://unsplash.com/@ambo_ampeng",
    photoUrl: "https://unsplash.com/photos/a-white-coffee-cup-with-a-black-lid-FWIV8I2h-s0",
  },
  "fondan-cikolatali-sufle": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAQEAAAAAAAAAAAAAAAAABQMEEAADAAMBAQAAAAAAAAAAAAAAAQMCBBESIgEBAQEAAAAAAAAAAAAAAAAAAQMCEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALldfycqkmVd98RFjR+iUjVus66oKeTXAUT127X0ibhJIACxtTgANB//2Q==",
    author: "Max Griss",
    authorUrl: "https://unsplash.com/@grissphoto",
    photoUrl: "https://unsplash.com/photos/chocolate-cake-on-white-ceramic-plate-Pzjez86SsvQ",
  },
  "granola-yogurt-kasesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABbAAEBAQAAAAAAAAAAAAAAAAAABQYQAAICAwEAAAAAAAAAAAAAAAACAQQDBRESAQACAwAAAAAAAAAAAAAAAAACAwABBBEBAQEBAQAAAAAAAAAAAAAAAQACESH/2gAMAwEAAhEDEQA/AMLXry0l1NfPka9F6anqKglXtpyHLC2akqCpfyr0Dc68gc+0SrclSjk2U+QAEplo2WxLyABgVK3/2Q==",
    author: "Mitch Fox",
    authorUrl: "https://unsplash.com/@mitchellf0x",
    photoUrl: "https://unsplash.com/photos/white-rice-with-sliced-strawberries-and-brown-nuts-on-white-ceramic-plate-5pk7ZB1xyjU",
  },
  "humuslu-vegan-wrap": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEBAAAAAAAAAAAAAAAABQQGAxAAAgIDAQAAAAAAAAAAAAAAAAECAwQRIRIBAQADAQAAAAAAAAAAAAAAAAMBAgQFEQACAgIDAAAAAAAAAAAAAAAAAQIDBBESITL/2gAMAwEAAhEDEQA/AOn8aMttmkVLI8IGUmBbPRrqr5E+6W2DyaYBV5Lxns7OUuEe/rADyWdTFgjNGlMAAwXRafo//9k=",
    author: "To Uyen",
    authorUrl: "https://unsplash.com/@_uynskypie_",
    photoUrl: "https://unsplash.com/photos/a-plate-of-sushi-1HAQ4vKDDAo",
  },
  "iced-matcha-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABZAAEBAQEBAAAAAAAAAAAAAAAABAUBAxABAAMBAQAAAAAAAAAAAAAAAAECAxESAQEBAAAAAAAAAAAAAAAAAAAFBhEAAwEBAQAAAAAAAAAAAAAAAAECERID/9oADAMBAAIRAxEAPwDTl2lepfUytxAJ4xB9YaGNR6UkO+VrlBty9IK4QojLgJtt6UrlclWdQCfnT5QdUTp//9k=",
    author: "Christian Dala",
    authorUrl: "https://unsplash.com/@kurisuchanxx",
    photoUrl: "https://unsplash.com/photos/a-green-drink-sitting-on-top-of-a-wooden-table-gatApZX7xWk",
  },
  "iced-spanish-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABcAAEBAQEAAAAAAAAAAAAAAAAABgUEEAABBQEBAQAAAAAAAAAAAAAAAQIDBBEFEjEBAAMBAAAAAAAAAAAAAAAAAAECAwARAQEBAQEAAAAAAAAAAAAAAAABAhMR/9oADAMBAAIRAxEAPwC2ezEMWzIjTdne3CN6E30ndKTLgs22ooJO3OvoE+hua5sdNcJe3fVwBqKXsTaoAEH2v//Z",
    author: "marke",
    authorUrl: "https://unsplash.com/@sabinajeinku",
    photoUrl: "https://unsplash.com/photos/a-glass-of-coffee-sitting-on-top-of-a-wooden-table-f_Fpa1EnDh0",
  },
  "karamelli-profiterol": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABbAAEAAwEAAAAAAAAAAAAAAAAABAUGAxAAAgIDAQEAAAAAAAAAAAAAAAECAwQFERIxAQEBAQAAAAAAAAAAAAAAAAABAgMRAQEBAQAAAAAAAAAAAAAAAAABESH/2gAMAwEAAhEDEQA/AMza2yfhPyzQWadpfDhXr5KRjJjVa4964CRTr5cBeJ41dlMWiJHFj6AELeqmPAAIf//Z",
    author: "Charles Betito Filho",
    authorUrl: "https://unsplash.com/@cbetito",
    photoUrl: "https://unsplash.com/photos/a-plate-of-ice-cream-gFOIWazx-xg",
  },
  "kis-cayi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAwEAAAAAAAAAAAAAAAAAAwQGBRABAAEFAQEAAAAAAAAAAAAAAAECAwQRIRMxAQABBQAAAAAAAAAAAAAAAAAEAAECAwURAAIDAQAAAAAAAAAAAAAAAAABAgMSEf/aAAwDAQACEQMRAD8A3d34zeVyXeuV8cTIjYSSDaZ5ZWs5GhX8Z2IZYa7YM0dUoKqAWGYQxbgA4un/2Q==",
    author: "Stacy",
    authorUrl: "https://unsplash.com/@stacysuxx",
    photoUrl: "https://unsplash.com/photos/cozy-autumn-scene-with-tea-book-and-fall-leaves-RUBTNr2zr1s",
  },
  "kruvasan-sandvic": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAgMBAAAAAAAAAAAAAAAABAUBAgYDEAEAAwEBAQEAAAAAAAAAAAAAAQIDBAUREgEAAwEAAAAAAAAAAAAAAAAAAAIDAREAAwEBAQAAAAAAAAAAAAAAAAECEQNB/9oADAMBAAIRAxEAPwCdycU1l0GdfzDGdqNdLl6Nj81PpYUtArKbAVPDaidORx9OUyfQ+wC1JEJbPCe8AJINZ//Z",
    author: "Vitalii Kyktov",
    authorUrl: "https://unsplash.com/@i_am_vitality",
    photoUrl: "https://unsplash.com/photos/croissant-sandwich-with-melted-cheese-and-ham-wiWfgKrp0Q8",
  },
  "lavanta-bal-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAAMBAAAAAAAAAAAAAAAABQMEBgcQAAMBAQEBAAAAAAAAAAAAAAABAgMRIQQBAAMBAAAAAAAAAAAAAAAAAAIEBQMRAQEBAAMAAAAAAAAAAAAAAAEAAxIjMv/aAAwDAQACEQMRAD8A94qvDnvvfUyjpr4Rd6dMWNhY+NCcPoKsYgZGGs6moo6ASczstnzZpgAFUl7/2Q==",
    author: "Reina Lovefull",
    authorUrl: "https://unsplash.com/@reinalovefull",
    photoUrl: "https://unsplash.com/photos/yellow-book-beside-purple-flowers-mL-APFOBXWs",
  },
  "limonlu-tart": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABUAAEBAQEAAAAAAAAAAAAAAAAAAQQHEAEBAQEAAAAAAAAAAAAAAAAAARECAQEBAQEAAAAAAAAAAAAAAAAAAQIDEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A6zzxjQkVxbWAKJEtwEEl0Ag//9k=",
    author: "Estúdio Bloom",
    authorUrl: "https://unsplash.com/@estudiobloom",
    photoUrl: "https://unsplash.com/photos/brown-and-white-bread-with-white-background-B4LfDN2vMGg",
  },
  "matcha-toreni": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABcAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYHEAACAgMBAQAAAAAAAAAAAAAAAQIDBBEUEiEBAQEBAAAAAAAAAAAAAAAAAAIBABEBAQEAAAAAAAAAAAAAAAAAAAES/9oADAMBAAIRAxEAPwD1e+3RCWUjPKfwoZ+tgtVfdKYOeTmgLSOgvjshxpACrdzIACZ//9k=",
    author: "Sydney Turturro",
    authorUrl: "https://unsplash.com/@sydturturro",
    photoUrl: "https://unsplash.com/photos/a-can-of-matcha-next-to-a-container-of-matcha-powder-BIxyKcZ76yI",
  },
  "nane-limon": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhABAAIDAQEAAAAAAAAAAAAAAAEDAgQhERMBAQEBAQAAAAAAAAAAAAAAAAQCAAMRAQEBAAMAAAAAAAAAAAAAAAACAQMRIf/aAAwDAQACEQMRAD8A4HW1012txZonxZs7AdWTkudiro1/hINXJ6rpFVl1qVx6C6dMWYwgAbcZ/9k=",
    author: "Pranjall Kumar",
    authorUrl: "https://unsplash.com/@pranjallk1995",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-lemon-juice-7Bywrek4tFY",
  },
  "nitro-cold-brew": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAQEBAAAAAAAAAAAAAAAAAQMCBRAAAwEBAQAAAAAAAAAAAAAAAAECEQMSAQADAQAAAAAAAAAAAAAAAAABAgUAEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKuiROtpyeVVUzaPTROUq15VjBxKxgGlXFgiloBqJ1AAhn//2Q==",
    author: "Alex He",
    authorUrl: "https://unsplash.com/@helium325",
    photoUrl: "https://unsplash.com/photos/close-up-of-ice-cubes-in-dark-liquid-H9wRcF1GKXg",
  },
  "portakal-cicegi-cold-foam": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABiAAEAAgMBAAAAAAAAAAAAAAAABQYCAwQHEAABBQEBAQAAAAAAAAAAAAAAAQIDBBIFERMBAQEBAQAAAAAAAAAAAAAAAAMBAgURAQEAAQUAAAAAAAAAAAAAAAEAEgIRISIx/9oADAMBAAIRAxEAPwCDqVVcd83PXJu57m6LLKrPmHmWsW8ouQK1QS3T80oLWzrzq1SVfeXAAIdpTyrNuXTgAdE0m0C83//Z",
    author: "Hiang Kanjinna",
    authorUrl: "https://unsplash.com/@hiangg",
    photoUrl: "https://unsplash.com/photos/orange-candle-on-brown-wooden-table-YSZa-CA8N4g",
  },
  "salted-caramel-mocha": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAAMBAAAAAAAAAAAAAAAABAIDBQYQAAIDAQEAAAAAAAAAAAAAAAACAQMREhMBAQEBAAAAAAAAAAAAAAAAAAEABREBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhEDEQA/APXM8Gr1ghtsnCFLm6MqNm139BNW2wALB6tJ1ojQAVXIuQACL//Z",
    author: "Aditya Saxena",
    authorUrl: "https://unsplash.com/@adityaries",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-with-whipped-cream-on-top-2ZCu4wC-mW8",
  },
  "san-sebastian-cheesecake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAgMBAAAAAAAAAAAAAAAABAUBAwYHEAADAAMBAAAAAAAAAAAAAAAAAQIDBBEUAQADAQAAAAAAAAAAAAAAAAAAAgMBEQACAgMAAAAAAAAAAAAAAAAAARESAgMT/9oADAMBAAIRAxEAPwD1irSNfoXSHmpkHl9JPYVWB0U7CBVY5oC9DaFg9dMytZADVQsskxgSAAVQSz//2Q==",
    author: "Chaman Raj",
    authorUrl: "https://unsplash.com/@chamanraj",
    photoUrl: "https://unsplash.com/photos/brown-bread-with-chocolate-on-white-ceramic-plate-xH0TWBxGVZM",
  },
  "somon-krem-peynir-bagel": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEBAAAAAAAAAAAAAAAABgUDBBABAAIDAAMAAAAAAAAAAAAAAAECAwQRBSExAQADAQAAAAAAAAAAAAAAAAADBAUBEQEAAgEFAAAAAAAAAAAAAAAAAQIRAxIhMUH/2gAMAwEAAhEDEQA/AJWvj7O8aUra+pWHivhiESdRXxhJ21BuXiOjdwM25WGX4n9rLwAvTMsHJsewBSlu3//Z",
    author: "Erwan NONON",
    authorUrl: "https://unsplash.com/@erwannonon",
    photoUrl: "https://unsplash.com/photos/a-close-up-of-a-sandwich-on-a-plate-4xCroQgmehc",
  },
  "spanish-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEAAAAAAAAAAAAAAAAABQIHEAACAgIDAQAAAAAAAAAAAAAAAQIDBBEFITFRAQADAQAAAAAAAAAAAAAAAAABAgMEEQADAQEBAAAAAAAAAAAAAAAAAQIRAyH/2gAMAwEAAhEDEQA/AJjp2iZfgORcq3ss1YykjJ0qt8NvKJw5fdxkt+A6Tdgx+AvL8IWlpuFCTKlPSAECmZtYAGQGf//Z",
    author: "- Kenny",
    authorUrl: "https://unsplash.com/@kennyzhang29",
    photoUrl: "https://unsplash.com/photos/a-glass-of-coffee-with-cream-and-sunlight-Uhdp6G8zzWw",
  },
  "tahin-pekmez-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABbAAEBAQEAAAAAAAAAAAAAAAAABgUBEAADAQEBAQAAAAAAAAAAAAAAAQIEAxEUAQEBAQEAAAAAAAAAAAAAAAADBAACEQEBAQEBAQAAAAAAAAAAAAABABECITH/2gAMAwEAAhEDEQA/AJLFRsdY9gk8WlJlF9cuSDodrecynNs+MDZ0VMCh5G/ac5dmjQnXQAuEYt122ADm1//Z",
    author: "nameless 3791",
    authorUrl: "https://unsplash.com/@unidentifieduser",
    photoUrl: "https://unsplash.com/photos/a-cappuccino-sitting-on-top-of-a-saucer-wPwtw6BzsSo",
  },
  "tiramisu": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABZAAEBAQEAAAAAAAAAAAAAAAAABQQCEAEAAwEBAQAAAAAAAAAAAAAAAQMEEQIhAQACAwAAAAAAAAAAAAAAAAAAAgEDBBEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwDRRnb/AFV8d08LJlWWpNo9+foozwGQNgzaVOfcTAJhpei/gBVmC//Z",
    author: "Max Bovkun",
    authorUrl: "https://unsplash.com/@maxbovkun",
    photoUrl: "https://unsplash.com/photos/sliced-strawberries-on-white-ceramic-plate-myffvvnqHz4",
  },
  "tiramisu-cold-brew": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEBAAAAAAAAAAAAAAAABgUHBBAAAgIDAQEAAAAAAAAAAAAAAAEDBAIRMQUSAQEBAAAAAAAAAAAAAAAAAAADABEBAQEBAAAAAAAAAAAAAAAAAAECEv/aAAwDAQACEQMRAD8A9tOZLIsK8qaOYRWdZFFW9HS6D0e5XP0gT8d9NdAk0Phx2Oy9m1XlbACpY1MJ2gAUVf/Z",
    author: "Youwoon Park",
    authorUrl: "https://unsplash.com/@qqquack_",
    photoUrl: "https://unsplash.com/photos/a-couple-of-drinks-sitting-on-top-of-a-table-aPeyLdY2Pvo",
  },
  "truf-mantarli-kruvasan": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAwEBAAAAAAAAAAAAAAAAAgQFAwYQAQADAAMAAAAAAAAAAAAAAAABAgMREyEBAAMBAAAAAAAAAAAAAAAAAAIDBQQRAQEAAwEBAAAAAAAAAAAAAAEAAgMTETH/2gAMAwEAAhEDEQA/APdcozpCnbRUteyK7CrGu1uyBkxrIHpHyumfqdqAzEx+1W0AH4h5C5N//9k=",
    author: "Emmanuel Zua",
    authorUrl: "https://unsplash.com/@oldblack",
    photoUrl: "https://unsplash.com/photos/brown-bread-on-brown-wooden-table-w_6i2Dky2RQ",
  },
  "turk-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEBAAAAAAAAAAAAAAAABgMBBRAAAwEBAQEAAAAAAAAAAAAAAAEDBCICIQEAAwEBAAAAAAAAAAAAAAAAAwQFAQIRAAMAAwEAAAAAAAAAAAAAAAABAgMRIRL/2gAMAwEAAhEDEQA/AKyl0ZxqmyapqZtn0fSRMb6U3wu5ek0Dx4XbQOHWmaoJeuc5CXQAHBdB8iWivyQ5AAy0hb0z/9k=",
    author: "Charlota Blunarova",
    authorUrl: "https://unsplash.com/@charlotablunarova",
    photoUrl: "https://unsplash.com/photos/moka-pot-and-ceramic-teacup-on-tray-Uxna1lo-0Ts",
  },
  "vegan-cikolatali-brownie": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAAMBAAAAAAAAAAAAAAAABQEDBAYQAAICAwAAAAAAAAAAAAAAAAABAgMEERIBAQEBAAAAAAAAAAAAAAAAAAMCBBEBAQEBAAAAAAAAAAAAAAAAAQACEv/aAAwDAQACEQMRAD8A9JDUTE8lEZ5YhZ0wOrWYqqyAaI86BYxpSbqOUcddjUgAkmyrUVN6ABRQ3//Z",
    author: "Chaman Raj",
    authorUrl: "https://unsplash.com/@chamanraj",
    photoUrl: "https://unsplash.com/photos/a-bunch-of-brownies-sitting-on-top-of-a-cooling-rack-0lmVsDyqpVI",
  },
  "yesil-cay-yasemin": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAgMBAQEAAAAAAAAAAAAAAAECBBEDBSIBAAIDAAAAAAAAAAAAAAAAAAADAQIEEQADAAMBAAAAAAAAAAAAAAAAAQIDESEx/9oADAMBAAIRAxEAPwDh/PRetr5IKMcLNprAqtIZE7ZiwljBW6zxgUs5d4empX6YiG1YeAE34EcZgT6awAZB2z//2Q==",
    author: "Max Griss",
    authorUrl: "https://unsplash.com/@grissphoto",
    photoUrl: "https://unsplash.com/photos/yellow-flowers-in-clear-glass-jar-xaa3T_BpMuY",
  },
  "zepresso-demleme-siyah-cay": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEBAAAAAAAAAAAAAAAABgECBRAAAgMBAQAAAAAAAAAAAAAAAAECAwQREgEAAgMAAAAAAAAAAAAAAAAAAgMAAQQRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8As7ZJI8O7QunWrYvJHaNr9irGnVdGxMEtTuYFi1t+htE9bLsgCtorI2E2gADamP/Z",
    author: "Doğan Alpaslan DEMİR",
    authorUrl: "https://unsplash.com/@izafi",
    photoUrl: "https://unsplash.com/photos/traditional-turkish-tea-in-a-glass-on-a-wooden-table-w-EIoCN75-Q",
  },
  "zepresso-karanlik-kakao": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAwEBAAAAAAAAAAAAAAAABQYHAgQQAAIDAQADAAAAAAAAAAAAAAABAgMEEQUUQQEBAQAAAAAAAAAAAAAAAAAABAMRAAICAwAAAAAAAAAAAAAAAAABETECEiH/2gAMAwEAAhEDEQA/ALpPyEH9OatCbM0r3WEvRukR26WWDg06q9cBUs2xtAug7Kz6CPRDHwAIrFS4JfNRwAClQZ2f/9k=",
    author: "American Heritage Chocolate",
    authorUrl: "https://unsplash.com/@americanheritagechocolate",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-brown-and-black-liquid-AOoNx98hdm8",
  },
  "zepresso-signature-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABbAAEBAQEBAAAAAAAAAAAAAAAABQQGAhAAAgMBAAMAAAAAAAAAAAAAAAEDBBECEiEiAQADAQAAAAAAAAAAAAAAAAACAwQBEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APNWH2XFX+THWa0uc9LxJLlVzY5qxBjBQs42DQudgtvStzceAB2BlZpbGgAUa//Z",
    author: "Phil Desforges",
    authorUrl: "https://unsplash.com/@storybyphil",
    photoUrl: "https://unsplash.com/photos/cafe-latte-Nw8wbiDE3gU",
  },
  "zeytinli-pogaca": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEBAAAAAAAAAAAAAAAABAUGAxAAAgMBAQAAAAAAAAAAAAAAAAECAwQRBQEBAQEBAAAAAAAAAAAAAAAAAgQAAREAAwEAAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8A6yHm8Llm4jSnZFENmhIgu8LpjTPtzg87NcegyrUJzhJPe2QXbnwAdytBNPDndHotMADUrDjpn//Z",
    author: "Jay",
    authorUrl: "https://unsplash.com/@ja024",
    photoUrl: "https://unsplash.com/photos/freshly-baked-rolls-in-a-basket-u6riCxkz1rY",
  },
};

export function getPhotoMeta(id: string): PhotoMeta | undefined {
  return photoMeta[id];
}

/** Künye bölümünde listelenen fotoğrafçılar — tekrar edenler birleştirilir. */
export const photoCredits = Array.from(
  new Map(
    Object.values(photoMeta).map((item) => [item.author, item]),
  ).values(),
).sort((a, b) => a.author.localeCompare(b.author, "tr"));
