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
  "acai-berry": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAwEAAAAAAAAAAAAAAAAABAYHCBAAAgICAgMAAAAAAAAAAAAAAAECBAURAzESIlEBAAMBAQAAAAAAAAAAAAAAAAIDBAABEQADAQEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8A45qUXJlkWLfiT8dwx2XfjrxcejvdK4iXJkVjHyT6BpVqivgDJqS0r+Nlto0WtH1AGJCXTItzSABgdP/Z",
    author: "Andrea Farao",
    authorUrl: "https://unsplash.com/@inside_faraostudio",
    photoUrl: "https://unsplash.com/photos/a-drink-with-strawberries-and-ice-on-a-table-mYw2rvn2Nx4",
  },
  "adacayi-bal": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAAMBAAAAAAAAAAAAAAAABgECBAUQAAICAgIDAAAAAAAAAAAAAAABAgQDEhETISIxAQADAQAAAAAAAAAAAAAAAAAAAQIDEQADAQEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AzUoNMp68dAlGJr2psyusRUTrKWrl8A5afwDmuA5Wk/nb4POxye4BNIJZXU5eoAGhNn//2Q==",
    author: "krzhck",
    authorUrl: "https://unsplash.com/@krzhck",
    photoUrl: "https://unsplash.com/photos/a-cup-of-tea-sitting-on-top-of-a-table-D5KmUipO7Iw",
  },
  "americano": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAAMBAAAAAAAAAAAAAAAABwQFBggQAAIBBQEBAAAAAAAAAAAAAAABAgMEBRJBITEBAQADAQAAAAAAAAAAAAAAAAUAAgMEEQACAgMBAAAAAAAAAAAAAAAAAgEDERIxBP/aAAwDAQACEQMRAD8Av6voLpsKV/B9I5c5CUOmDQz7U0tgStswL2JMHoeFxGSBP8blN4L0Fpcz0JTf+xZwbclX+9ABfLY2Ojl9alXwtSSpoAEe19unNCKf/9k=",
    author: "One Zen",
    authorUrl: "https://unsplash.com/@onezen",
    photoUrl: "https://unsplash.com/photos/black-ceramic-teacup-with-saucer-close-up-photography-SKoZa7rcLlU",
  },
  "atom-cayi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEBAAAAAAAAAAAAAAAAAgQDBhABAQEBAAMAAAAAAAAAAAAAAAIBEQMTIQEBAAMAAAAAAAAAAAAAAAAAAwACBBEBAQEBAAAAAAAAAAAAAAAAAAERAv/aAAwDAQACEQMRAD8A9/Gbut8+P4mIxqwORs4RMiug9SuUN0x3AXDKeoAdNH//2Q==",
    author: "Lidiya Pavlikova",
    authorUrl: "https://unsplash.com/@lidiya_pavlikova",
    photoUrl: "https://unsplash.com/photos/white-and-pink-flower-petals-beside-red-and-white-ceramic-mug-y_gKWLrw3N4",
  },
  "ayicikli-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABwYIAhAAAgMAAgMBAAAAAAAAAAAAAAECAwUEEgYTIVEBAAMBAAAAAAAAAAAAAAAAAAMEBQIRAAMBAAMBAAAAAAAAAAAAAAABAgMEEzEh/9oADAMBAAIRAxEAPwDnnCznKSLRw8d9ET3xyyCki6cS6v1oS3uk/hS48S0ZSeSDV231go4VThE3eZWjOUMbScZIrfF2ZdF9AN9cv1Au214zxfty/QAGlJIXqm2f/9k=",
    author: "Donald Guy Robinson",
    authorUrl: "https://unsplash.com/@donaldguyrobinson",
    photoUrl: "https://unsplash.com/photos/latte-art-in-mug-qhCzBebyiKE",
  },
  "balli-ihlamur": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAwEBAAAAAAAAAAAAAAAABAUGAwcQAAMBAQEBAAAAAAAAAAAAAAABAgQDBTEBAQEBAAAAAAAAAAAAAAAAAAQDBREBAQEAAgMAAAAAAAAAAAAAAQACEiEDFDH/2gAMAwEAAhEDEQA/APNudF7l+ogZszbNDzyuUZe8v21UDqvc8JoEfhdIEPaSseJmfGkzRRiTkAVp6gC8rpHnIAAHJN56v//Z",
    author: "Deniz Rona",
    authorUrl: "https://unsplash.com/@denizrona",
    photoUrl: "https://unsplash.com/photos/clear-glass-jar-with-yellow-liquid-inside-qMox5bflmd8",
  },
  "black-long": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAwEBAAAAAAAAAAAAAAAAAgMEBggQAAIDAQEAAAAAAAAAAAAAAAABAwQRAhMBAQEBAQAAAAAAAAAAAAAAAAUAAgMRAAMAAwEAAAAAAAAAAAAAAAABEgIDIhH/2gAMAwEAAhEDEQA/APF3Fcm4iXusM7sLQvtiPKLXW0F3NnnAcq2G/MTm3MzO5HoArKD6ZNTMAFKKmf/Z",
    author: "Lu",
    authorUrl: "https://unsplash.com/@lucaakalu",
    photoUrl: "https://unsplash.com/photos/teacup-and-saucer-with-golden-rim-73VfLFgp8SM",
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
  "caramel-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABkAAEAAwEBAAAAAAAAAAAAAAAAAgUGBAcQAAEEAgIDAAAAAAAAAAAAAAABAgMEBRESMRMhQQEBAAMBAAAAAAAAAAAAAAAABAABAgMRAAMBAQEBAAAAAAAAAAAAAAABAgMRMSH/2gAMAwEAAhEDEQA/ALxtf2TnhXgV1bKRqvZbS3ovH2gXR0/BGcpennF/bXqDmy9piuXSgE5fR018M+229n0jLmJUTWwDrlpXDGkT0ytrIPcvYAKZEj//2Q==",
    author: "Michael Kubisky",
    authorUrl: "https://unsplash.com/@mkubisky",
    photoUrl: "https://unsplash.com/photos/latte-on-tabletop-P5JMfBAo_i8",
  },
  "caramel-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEAAgMBAAAAAAAAAAAAAAAABQYBBAcIEAACAgMBAQAAAAAAAAAAAAAAAgEEAwURMSEBAAMBAAAAAAAAAAAAAAAAAAABAwQRAQEAAwEBAAAAAAAAAAAAAAEAAgMREiH/2gAMAwEAAhEDEQA/APRMoajwZsXEWPSt5dqnfQyzCZgtMygIdNisgXojw1R2d94SfpS8NzI+XnQDJsfpb9Ycuh0K8ssAAviHKCvb/9k=",
    author: "An Nguyen",
    authorUrl: "https://unsplash.com/@ngocan1909",
    photoUrl: "https://unsplash.com/photos/clear-glass-cup-with-brown-liquid-MHWbEt0VfEY",
  },
  "churchill": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQADAAAAAAAAAAAAAAAABQMEBggQAAMBAQEBAAAAAAAAAAAAAAABAgMEESEBAAEFAAAAAAAAAAAAAAAAAAMAAQIEBREBAQACAgMAAAAAAAAAAAAAAQACAwQSITEy/9oADAMBAAIRAxEAPwD1z00vDr1apMx07W0R72bZncnFUpYpWa6JBFiLoFrX8kzcp5+mDx+gAt/qWJ5rPLmvAAD15PWKhf/Z",
    author: "montatip lilitsanong",
    authorUrl: "https://unsplash.com/@montatip",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-ice-and-lemon-mZT5bMpmDGQ",
  },
  "cicibebe-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEAAAAAAAAAAAAAAAAABAYHBRAAAgICAgMAAAAAAAAAAAAAAAIBAwQFERITITEBAQADAAAAAAAAAAAAAAAAAAYDBAURAAICAgMAAAAAAAAAAAAAAAECAAQDEhEUMf/aAAwDAQACEQMRAD8A2FUmZI+XS0KWfDpWZJWdjL45BValXZBGvY0zDiZYlvVvYI2xpdbJ4gF8UEiMZkYAky6a/PmWLY9vdADKqOQIdfGu04z69LJ+AARITqJCzsD7P//Z",
    author: "Israel Piña",
    authorUrl: "https://unsplash.com/@israelpinapol",
    photoUrl: "https://unsplash.com/photos/a-hand-holding-a-cup-of-ice-cream-with-flowers-in-the-background-0C2LG8SKhTQ",
  },
  "cikolata-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAQEAAAAAAAAAAAAAAAAABwUGEAACAwADAQAAAAAAAAAAAAAAAgEEBRESIRMBAAMBAAAAAAAAAAAAAAAAAAIDBAURAQADAQEAAAAAAAAAAAAAAAABAhESIv/aAAwDAQACEQMRAD8A57ModjpXzPDDwbqTMFGZ0lOTOi2WaHPlML1LgGjr2kUFSZIcTTZWj0qUbDfIACaxpvUpzr6jS0+gAaB//9k=",
    author: "Madeline Tallman",
    authorUrl: "https://unsplash.com/@lookatthedawg",
    photoUrl: "https://unsplash.com/photos/frappe-with-chocolate-crunch-sticks-on-footed-glass-m5oypz13kkc",
  },
  "cilek-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAwEAAAAAAAAAAAAAAAAAAwQFCBAAAgIDAQAAAAAAAAAAAAAAAAEDEQISISIBAAIDAAAAAAAAAAAAAAAAAAIDAAEEEQADAQEAAAAAAAAAAAAAAAAAAQIDIf/aAAwDAQACEQMRAD8A7Ixjol2RLnxGTs9zTVCss00aTjsFmJWgEqFVHSJ9RVUXoApoPNs08FSAAJGf/9k=",
    author: "Kofi Buckley",
    authorUrl: "https://unsplash.com/@kofi_buckley",
    photoUrl: "https://unsplash.com/photos/a-pink-drink-in-a-mason-jar-on-a-white-background-RWjAFiWFj58",
  },
  "cilek-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEBAQEBAAAAAAAAAAAAAAAABwQFAxAAAgIDAQAAAAAAAAAAAAAAAAIDBAEFEUEBAAMBAAAAAAAAAAAAAAAAAAIDBAERAQEBAQEAAAAAAAAAAAAAAAEAAhEh/9oADAMBAAIRAxEAPwCHRaZs+GW1qWXwsUFZOGG5TXIt09qjGeUOegwKRPSXHgDNUzj27S7Ph5SbPoAtmi3DsXwAbCt//9k=",
    author: "Annerose Walz",
    authorUrl: "https://unsplash.com/@awalz2021",
    photoUrl: "https://unsplash.com/photos/a-pink-smoothie-with-strawberries-on-a-plate-feT5QVBIzUo",
  },
  "cilekli-limonata": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAwAAAAAAAAAAAAAAAAAABAUGEAACAwEBAQAAAAAAAAAAAAAAAgEDBBIhEwEBAQEAAAAAAAAAAAAAAAAABQYEEQADAAICAwAAAAAAAAAAAAAAAQIDEhEhBAUx/9oADAMBAAIRAxEAPwC3qs+slqqwkGZwvyStWyYjwC8iLaKz1ms32aZGWQYujc4MU4r4+DWa43fZNmjiCl0WegFLlS4JXA3sTsdSsAAxsUP/2Q==",
    author: "Jay Gajjar",
    authorUrl: "https://unsplash.com/@jaygajjar",
    photoUrl: "https://unsplash.com/photos/a-glass-of-red-liquid-PiX32V6Sgsg",
  },
  "coca-cola": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEAAwEBAAAAAAAAAAAAAAAAAwUHAgYQAAEEAgMAAAAAAAAAAAAAAAABAgMEERIhIiMBAAIDAAAAAAAAAAAAAAAAAAECAwQFEQEBAAIDAAAAAAAAAAAAAAABAAIRAyEx/9oADAMBAAIRAxEAPwDbpl4IKr/QrZraYOadhNzXzaXjDTajWf1QFPXtJqA6q77YzNM4lpzO2AH13EW9lBO7AAHkb//Z",
    author: "Maximilian Kunstwadl",
    authorUrl: "https://unsplash.com/@mxi",
    photoUrl: "https://unsplash.com/photos/a-bottle-of-coca-cola-sitting-on-top-of-ice-qQ0hJARkTJM",
  },
  "cocostar-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEBAAMBAAAAAAAAAAAAAAAABgMEBQcQAAMBAQEBAAAAAAAAAAAAAAABAgQDEQUBAQEBAAAAAAAAAAAAAAAAAAMEBREBAQADAQAAAAAAAAAAAAAAAAECERIx/9oADAMBAAIRAxEAPwC+uWpIz6HrZ6h14S5ZJaMHtmXbqKcPUfnzUC64YpSAKnt0Oe10ZnSYAtTRrvr4AA6R/9k=",
    author: "Flavio Shibata",
    authorUrl: "https://unsplash.com/@shibataskaterock2018",
    photoUrl: "https://unsplash.com/photos/chocolate-parfait-on-saucer-z_eoi3ppf5U",
  },
  "cookies-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAAMBAAAAAAAAAAAAAAAABgEFBwgQAAEEAgMBAQAAAAAAAAAAAAABAgMFBAYSITETQQEAAwEBAAAAAAAAAAAAAAAAAwQFAQIRAQEAAwEAAAAAAAAAAAAAAAEAAhIhE//aAAwDAQACEQMRAD8A0NXWulcVs+tu+XhjWpouSHU8nIhSD88J+alQwBvIl/TKx6gttpyIuagHsxfMouov3xuTstp9pesXoAwdlHjcavbtz3L2ADrUtMm//9k=",
    author: "Fabio Mascio",
    authorUrl: "https://unsplash.com/@fabiomascio",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-cappuccino-2jRPsgjwmJA",
  },
  "cool-lime": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEBAAAAAAAAAAAAAAAABQQGBxAAAwEBAQAAAAAAAAAAAAAAAAECBAMFAQACAwAAAAAAAAAAAAAAAAACBAMFBhEAAgMBAQEAAAAAAAAAAAAAAAECAxIEESH/2gAMAwEAAhEDEQA/AMubzixGBmjL2hlddJMhb1S0C0R3iBR7aZQHa+l5QB5P53qU2dnG1uQBCyEdjLJWvbQALauqGV8IvD//2Q==",
    author: "Jason Roy",
    authorUrl: "https://unsplash.com/@jason_1234",
    photoUrl: "https://unsplash.com/photos/a-close-up-of-a-drink-in-a-glass-__pSDRusvVE",
  },
  "cortado": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABTAAEAAwEAAAAAAAAAAAAAAAAAAgQFBhABAAMBAQAAAAAAAAAAAAAAAAECAwQSAQEAAAAAAAAAAAAAAAAAAAAAEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDAxqnrj6RouVBh35JHQxnEgMeNF2mgAsxoAD//2Q==",
    author: "Haberdoedas",
    authorUrl: "https://unsplash.com/@haberdoedas",
    photoUrl: "https://unsplash.com/photos/two-coffees-and-a-glass-of-water-on-table-iemVrUqIgzI",
  },
  "dalgona": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABkAAEAAwEBAAAAAAAAAAAAAAAABQYHBAgQAAICAwADAQAAAAAAAAAAAAABAgQDBRESFSExAQEBAQAAAAAAAAAAAAAAAAAEBQMRAAICAgMBAAAAAAAAAAAAAAACAQMSIQQRMUH/2gAMAwEAAhEDEQA/APWlu1FRf0z6/sYpsifdrL8UiHupyi30IzN8KKIsekfe2kO/oMz22acZPjAVp3saqx0cmr3U/JdZdp7juMAzqsbETyakhvCn2siyyABKusbOdiERcYP/2Q==",
    author: "Oana Cristina",
    authorUrl: "https://unsplash.com/@ocilie",
    photoUrl: "https://unsplash.com/photos/clear-glass-jar-with-brown-liquid-inside-4FXXvl8rvQM",
  },
  "damla-sakizli-turk-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEAAwEBAAAAAAAAAAAAAAAABAUGAgcQAAIDAQEBAAAAAAAAAAAAAAAEAQIDEQUSAQADAQAAAAAAAAAAAAAAAAABAgMEEQEBAQEAAAAAAAAAAAAAAAABAAIR/9oADAMBAAIRAxEAPwDwhTCS30xn5OkbUJ7WlIqKtpCw7S/ZBJYYp0A7FzVOD9qhn1LTABEWu5LNauWmQAPRb//Z",
    author: "Dex Ezekiel",
    authorUrl: "https://unsplash.com/@dexezekiel",
    photoUrl: "https://unsplash.com/photos/a-coffee-cup-and-saucer-on-a-table-SmQiXULsE0E",
  },
  "dibek-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAQEBAAAAAAAAAAAAAAAABwYECBAAAgICAwEBAAAAAAAAAAAAAAECBQMEBhExEiEBAQEBAAAAAAAAAAAAAAAAAAQGBREAAgMAAgMAAAAAAAAAAAAAAAECAxEEIhITI//aAAwDAQACEQMRAD8Aw9Px6UmvwpEOOyUPDS0etj7KFLBj+Cask0VTzTz5tU0ovwFd2tSDfgEQqbimFny/F4Tiot2miiwtW4AB7H2Nj1Qw53udsAGzSuiJPkr6M//Z",
    author: "Eric Wang",
    authorUrl: "https://unsplash.com/@lroolash",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-coffee-Wt1HnJ_NHWw",
  },
  "double-cay": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAgMBAQEAAAAAAAAAAAAAAAECAwQRBRIBAAIDAAAAAAAAAAAAAAAAAAIFAwQGEQADAQEBAQAAAAAAAAAAAAAAAQIRAyEx/9oADAMBAAIRAxEAPwDk6vN+WdHk5AkcotFPrUhPHQ0lxv0vadAM65rgIq6vQVyko06WTztADhYi1a8MDXskgAGpQvdPT//Z",
    author: "Zeki Okur",
    authorUrl: "https://unsplash.com/@zekiokur",
    photoUrl: "https://unsplash.com/photos/a-cup-of-tea-sitting-on-top-of-a-table-_tLxpvQtrDE",
  },
  "double-espresso": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEAAgMAAAAAAAAAAAAAAAAABgcDBAUQAAIDAQEBAAAAAAAAAAAAAAABAgMEETEFAQEBAQEAAAAAAAAAAAAAAAACAQMEEQEBAQEAAAAAAAAAAAAAAAABAAIh/9oADAMBAAIRAxEAPwCrM+aTM9+OfPCY5MiXqN2+mvhz71b5zVBdil0E6voh0DHkErNs+eoIiuyEk2ARCotxHFsACi3/2Q==",
    author: "Kris Gerhard",
    authorUrl: "https://unsplash.com/@krsp",
    photoUrl: "https://unsplash.com/photos/clear-glass-mug-with-brown-liquid-N2Lxs1FAzSE",
  },
  "double-turk-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEBAAMBAAAAAAAAAAAAAAAABwMFBggQAAIDAAIDAAAAAAAAAAAAAAABAgMEBRESIkEBAQEBAAAAAAAAAAAAAAAAAAEFABEAAwADAAAAAAAAAAAAAAAAAAECAxIh/9oADAMBAAIRAxEAPwDzJTFtnW5MrlE02GpOSKbxuePSJ7ooTBwevi5v4CoaqK+gG4vGRjBd7IouPX4xACl00MxbOSYAFJC6Z//Z",
    author: "engin akyurt",
    authorUrl: "https://unsplash.com/@enginakyurt",
    photoUrl: "https://unsplash.com/photos/a-tray-with-a-silver-tea-pot-and-two-cups-on-it-AB691ZLUfyI",
  },
  "espresso-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEBAQEBAAAAAAAAAAAAAAAABwYDBBAAAgMBAAMAAAAAAAAAAAAAAAECAwURBCExAQADAQAAAAAAAAAAAAAAAAACAwUEEQACAwEBAAAAAAAAAAAAAAAAAQIDERIh/9oADAMBAAIRAxEAPwDyYmI016N9PO5Dh2yrKjSTUWifdZyU6K+iN6WQ5MFH8uFYFKTZozCNZG/Lv0o9Wy3AAKaTYEfEZrT3WgAOUVgrWf/Z",
    author: "Anubhav Arora",
    authorUrl: "https://unsplash.com/@_anubhavarora",
    photoUrl: "https://unsplash.com/photos/white-ceramic-teacup-with-latte-RFLDagtOsMM",
  },
  "filtre-kahve-v60": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABXAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAgIDAQAAAAAAAAAAAAAAAAMBAgQRIRIBAQEAAAAAAAAAAAAAAAAAAAIDEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A4nDNe+pqc+m3mS/ORwqKm+nQQPfABarEzK6M1rpgASTJa+dgAJP/2Q==",
    author: "syahmi syahir",
    authorUrl: "https://unsplash.com/@subspace_stills",
    photoUrl: "https://unsplash.com/photos/barista-making-pour-over-coffee-with-a-gooseneck-kettle-AQTgvFfwOcg",
  },
  "flat-white": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABnAAEAAwEAAAAAAAAAAAAAAAAABQYHCBAAAgEEAQUBAAAAAAAAAAAAAAECAwQFERIGExQhIjEBAAIDAAAAAAAAAAAAAAAAAAQFAQMGEQACAgMBAQAAAAAAAAAAAAABAgADERIhBFH/2gAMAwEAAhEDEQA/AOdsZgpzkvRodHpiahvReMVjacJraNKVtR7X4hZZW4PIWvqqA7Od6tg6LBfc3bR5PSAZWzajMEcoTkGTtH5ZKeVJRAGLKJn9jKvfy5sAEhFlgsb7P//Z",
    author: "Snappr",
    authorUrl: "https://unsplash.com/@snappr",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-sitting-on-top-of-a-saucer-3e_6WZOWu-A",
  },
  "fondan-cikolatali-sufle": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAQEAAAAAAAAAAAAAAAAABQMEEAADAAMBAQAAAAAAAAAAAAAAAQMCBBESIgEBAQEAAAAAAAAAAAAAAAAAAQMCEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/ALldfycqkmVd98RFjR+iUjVus66oKeTXAUT127X0ibhJIACxtTgANB//2Q==",
    author: "Max Griss",
    authorUrl: "https://unsplash.com/@grissphoto",
    photoUrl: "https://unsplash.com/photos/chocolate-cake-on-white-ceramic-plate-Pzjez86SsvQ",
  },
  "frappe": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAwEAAAAAAAAAAAAAAAAABQYHCBAAAgICAgMBAAAAAAAAAAAAAAECAwQFEhMGISIxAQEBAQEAAAAAAAAAAAAAAAADBAECEQEAAwEAAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8A5u8erTaNMyK49Jimo2PW0XS7dp1/pFfdV0jinb2C5MELtM3nJgWu4K0dR9EWmTH04gGEV/Lj7AAkOX//2Q==",
    author: "Meet Anjarlekar",
    authorUrl: "https://unsplash.com/@meet_anjarlekar",
    photoUrl: "https://unsplash.com/photos/a-glass-filled-with-a-drink-on-top-of-a-wooden-table-uXAVcrCblbU",
  },
  "hibiscus-berry": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABgUHBBAAAgMAAgMAAAAAAAAAAAAAAAECAwQFERIhIgEBAQEBAAAAAAAAAAAAAAAABAMABREAAgICAwAAAAAAAAAAAAAAAAEDBAIRITFB/9oADAMBAAIRAxEAPwCXepM9FN/0YldE+ymwY3OSDz2vEIr0eNspMmpqINrPxfUV6BFSIq4tHOlFIq+ISc0AFyR009I6hVBeCABkFy7P/9k=",
    author: "Youwoon Park",
    authorUrl: "https://unsplash.com/@qqquack_",
    photoUrl: "https://unsplash.com/photos/a-drink-with-a-slice-of-lemon-on-the-rim-ZuS3gahdbRw",
  },
  "ice-caramel-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAQEBAAAAAAAAAAAAAAAABgcEBRAAAQQDAQEAAAAAAAAAAAAAAAECAwQFESESYQEBAQEAAAAAAAAAAAAAAAAAAwQFEQEAAgIDAAAAAAAAAAAAAAABAAIDEhEhMf/aAAwDAQACEQMRAD8A1jNP9sUlcPGrbG/pYXIk104qkLPXCW2QGMUUmv428xkSbUEHuVE4Bi0PWTOUtKjTysbcV0gBlZV2Jo4w4ms0omvYgALqeSWx3P/Z",
    author: "Kari Shea",
    authorUrl: "https://unsplash.com/@karishea",
    photoUrl: "https://unsplash.com/photos/brown-and-white-ice-cream-on-brown-wooden-table-1e5V69AQjgA",
  },
  "ice-caramel-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEBAAAAAAAAAAAAAAAAAwUGBwEQAAICAwADAAAAAAAAAAAAAAABAgMEERIFISIBAQEBAAAAAAAAAAAAAAAAAAQDBREAAgICAwEAAAAAAAAAAAAAAAECAxIiESExMv/aAAwDAQACEQMRAD8A7go6PHaizyqeYsyE7GrAl9m6K1Q5iWsvYJKOWgOg1iiEl2aTyC+Wc3ynqYBk3JZjKnqS0ZMgAPr+UQl6f//Z",
    author: "Tin Ma",
    authorUrl: "https://unsplash.com/@mavantin",
    photoUrl: "https://unsplash.com/photos/iced-coffee-with-cream-and-caramel-on-a-wooden-coaster-EdDf35V696k",
  },
  "ice-chocolate-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAwEAAAAAAAAAAAAAAAAABAUGCBAAAgMAAwEAAAAAAAAAAAAAAAECAwQREiExAQEBAQAAAAAAAAAAAAAAAAACAwQRAAMBAQEAAAAAAAAAAAAAAAABAhESIf/aAAwDAQACEQMRAD8A4+x5pNm1z0Sil4SMmBRl8NXDLFxDSHLKyi7qgTZYJc+AnwLSN3SZcZLOWAaaXoZNfnojJAArMrCbb0//2Q==",
    author: "Elena Soroka",
    authorUrl: "https://unsplash.com/@photohelensoroka",
    photoUrl: "https://unsplash.com/photos/chocolate-sauce-being-poured-into-a-glass-of-milk-PXjL-XZbklM",
  },
  "ice-cookies-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAQEBAAAAAAAAAAAAAAAABgUHBBAAAgMAAgMAAAAAAAAAAAAAAAECAwQFERIUIgEBAQEBAAAAAAAAAAAAAAAAAgUDBBEAAwADAQAAAAAAAAAAAAAAAAECAxESE//aAAwDAQACEQMRAD8A7P7CPPPXExL7/FE1Pe3PrshzZdeIvo6EwYmSblED7B5kjyGxqJOZrnO0A4enopzKOkYX8IACTZg0tn//2Q==",
    author: "Chang Duong",
    authorUrl: "https://unsplash.com/@iamchang",
    photoUrl: "https://unsplash.com/photos/black-coffee-beans-on-clear-drinking-glass-DxMSLddUGuc",
  },
  "ice-espresso-freddo": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAwEAAAAAAAAAAAAAAAAABQYHAhAAAgIDAQAAAAAAAAAAAAAAAAIDBAERMQUBAQEAAAAAAAAAAAAAAAAAAAIDEQACAgIDAAAAAAAAAAAAAAAAAgExAwQREiH/2gAMAwEAAhEDEQA/AMvSo7Z4T0FV1XhO14E2WmCijKF3goimU2on3wGjW/NTfAT7D4IVGyuSwVr2sAEs0ej16O5rewAGKA1n/9k=",
    author: "Declan Cronin",
    authorUrl: "https://unsplash.com/@dipaccicoffeeco",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-brown-liquid-Va27HzSM_Ik",
  },
  "ice-flat-white": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEBAQEBAAAAAAAAAAAAAAAABgUDCBAAAgIDAQEAAAAAAAAAAAAAAAECAwQFETEhAQEBAQEAAAAAAAAAAAAAAAADBAIFEQEBAQEAAAAAAAAAAAAAAAAAAQIR/9oADAMBAAIRAxEAPwD0LX8NWqxE3O7iOFeZyRzJVvFt3oJ1bGCXoHGnJT6jCy8hwABy2k8jczT9ABTIJ//Z",
    author: "Casual Grains",
    authorUrl: "https://unsplash.com/@casualgrains",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-on-white-ceramic-saucer-M9YVLHqTqmU",
  },
  "ice-latte-freddo": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEAAwEAAAAAAAAAAAAAAAAABAUGBxAAAgIDAAMAAAAAAAAAAAAAAAECAwQFEhEhMQEAAQUAAAAAAAAAAAAAAAAABAACAwUGEQADAQEBAQAAAAAAAAAAAAAAAQIRAzFR/9oADAMBAAIRAxEAPwDpFVy8l1CxcnI8Pb9SXs2NewXH0NfRYDLlTZG20l0Ciz8xSYGahOWZTCxmmaNxkogFI7r6aKYnPCG6HJgAmV1gO4nfD//Z",
    author: "Trương Tuyết Ly",
    authorUrl: "https://unsplash.com/@liliantruong2603",
    photoUrl: "https://unsplash.com/photos/iced-coffee-with-plant-shadow-on-wall-FMTrtALmM1Y",
  },
  "ice-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEBAQEBAAAAAAAAAAAAAAAABgcECBAAAgMBAQEAAAAAAAAAAAAAAAECAwQFEiIBAAIDAQAAAAAAAAAAAAAAAAQGAAEDBREBAQEBAQEAAAAAAAAAAAAAAQACAyIy/9oADAMBAAIRAxEAPwCdxzSZWU1e0Z9msbmjW+PncoIWDCzJrYUptwyBfbsqSBNYRtcbEsM5H3aj0NxqUqkAH8QuT2W5utZ5ABXQ9RPH4L//2Q==",
    author: "Nathan Dumlao",
    authorUrl: "https://unsplash.com/@nate_dumlao",
    photoUrl: "https://unsplash.com/photos/clear-glass-filled-ice-coffee-vZOZJH_xkUk",
  },
  "ice-mocha": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAQEBAAAAAAAAAAAAAAAABwYIBRAAAwACAwEAAAAAAAAAAAAAAAECBAUDITESAQEBAQAAAAAAAAAAAAAAAAAEAQMRAAMBAQEAAAAAAAAAAAAAAAABAgMRMf/aAAwDAQACEQMRAD8A9rVZczaLBgZMuEcwY+x+bXZRdfv0pXYRXwdWfUXF2mCf8G7lr0G60DvI474Ni3RtMHKppdgBaFQzVcWbcr0AFnwlen//2Q==",
    author: "Youwoon Park",
    authorUrl: "https://unsplash.com/@qqquack_",
    photoUrl: "https://unsplash.com/photos/a-couple-of-drinks-sitting-on-top-of-a-table-aPeyLdY2Pvo",
  },
  "ice-pumpkin-spice-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAAMBAAAAAAAAAAAAAAAABgMEBwgQAAEEAgMBAAAAAAAAAAAAAAABAgQFAxEGEzESAQADAQAAAAAAAAAAAAAAAAACAwQGEQADAQEBAAAAAAAAAAAAAAAAAQIRIRP/2gAMAwEAAhEDEQA/AIasrFepQSqF/XvRtUeRn2mzpUhcK4F88Eesh+daeU7WE7G9QVfI0Z2LoBdYzDPBmOY4qcty7q1sAiiU7RSnw5laSVe9QAaKYnFwhpvT/9k=",
    author: "Hiang Kanjinna",
    authorUrl: "https://unsplash.com/@hiangg",
    photoUrl: "https://unsplash.com/photos/orange-candle-on-brown-wooden-table-YSZa-CA8N4g",
  },
  "ice-red-eye": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABkAAEBAQEAAAAAAAAAAAAAAAAABwYFEAACAgIBBQAAAAAAAAAAAAAAAgEDBAUREiEyQYEBAAMBAQAAAAAAAAAAAAAAAAIDBQEEEQACAwADAQAAAAAAAAAAAAAAAQIDEQQTFCH/2gAMAwEAAhEDEQA/AMVgaq1XiZgomNS0JEG3fTIkc9JyVRVt4JHpswtR49b1mVydXZb6BZcHCrdI7AHtmKdcUzs51MQkkxuXjI+gDM+GwbKLq/CAAc+hM//Z",
    author: "Lachlan Wang",
    authorUrl: "https://unsplash.com/@lachlanwang",
    photoUrl: "https://unsplash.com/photos/iced-coffee-in-a-clear-cup-on-a-wooden-table-ISRg1YMppPo",
  },
  "ice-spanish-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEAAAAAAAAAAAAAAAAABwYFEAACAQUBAQAAAAAAAAAAAAAAAQIDBAURIRIGAQEBAQAAAAAAAAAAAAAAAAADAAQRAAICAQUAAAAAAAAAAAAAAAABAgMhBBESMUH/2gAMAwEAAhEDEQA/ALXWo6RjMhXUNm5va0FB9I5nbpL1pmeVmB4wycC/ykE30Epyl5L2+gzq4Z6cuF99HLy+kvymbc99AKXRekwvrxykwADshOTP/9k=",
    author: "marke",
    authorUrl: "https://unsplash.com/@sabinajeinku",
    photoUrl: "https://unsplash.com/photos/a-glass-of-coffee-sitting-on-top-of-a-wooden-table-f_Fpa1EnDh0",
  },
  "ice-strawberry-matcha-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAwEAAAAAAAAAAAAAAAAABAUHBhAAAgMBAQEAAAAAAAAAAAAAAAECAwQRIgUBAAMBAQAAAAAAAAAAAAAAAAIDBAABEQEBAQEBAAAAAAAAAAAAAAAAAQIRIf/aAAwDAQACEQMRAD8AtIWpyOnzVdicDnn2SNAwWeESX2qc8SXQCxi0wNlBYwb5ulymjT8k/CAFSO5SnqaYADZ//9k=",
    author: "Rimsha Noor",
    authorUrl: "https://unsplash.com/@rimshaj123",
    photoUrl: "https://unsplash.com/photos/a-drink-in-a-glass-on-a-tray-next-to-a-spoon-LORFhPUzHGo",
  },
  "ice-sutlu-filtre-kahve": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAwEBAAAAAAAAAAAAAAAABAUGBwgQAAMAAgMBAAAAAAAAAAAAAAABAgQFAxESMQEBAQEBAAAAAAAAAAAAAAAABAACAxEAAgMBAQAAAAAAAAAAAAAAAAECEjEhIv/aAAwDAQACEQMRAD8A9sVaId8qK/IyfKMjk7hTXXZWRVZvJtMGSw9mrX0HQwSszvwzlmxinyABZL0Ki+FrrVSkACFgd6f/2Q==",
    author: "Michal Mokrzycki",
    authorUrl: "https://unsplash.com/@michmok",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-brown-liquid-5xwlRt_386c",
  },
  "ice-vanilya-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEAAAAAAAAAAAAAAAAABwQIEAABAwQCAwAAAAAAAAAAAAAAAQIFAwYTIRIxERZBAQADAQAAAAAAAAAAAAAAAAACAwQAEQEBAAIDAAAAAAAAAAAAAAAAAQIREiEx/9oADAMBAAIRAxEAPwCTwMI6o5NFYS2FxdGK1sXJC4+aOD50Q8l9jkmchHU3LoFJuhaXJQbZk8S+Cm3U3JsqftDsXYAeiqmM1MuquXYAAPxnT//Z",
    author: "Welcome",
    authorUrl: "https://unsplash.com/@________________1a",
    photoUrl: "https://unsplash.com/photos/white-liquid-in-clear-drinking-glass-uXOKDnzpanU",
  },
  "ice-white-macchiato": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEAAAAAAAAAAAAAAAAABwUGEAACAgEEAwAAAAAAAAAAAAAAAQIEBQMGETESIUEBAQEBAAAAAAAAAAAAAAAAAAEEAhEBAAMBAAAAAAAAAAAAAAAAAAECERL/2gAMAwEAAhEDEQA/AKxbrRcSf38R58mvLLOX00ak1qsgtZZEIvc21JvoF/lj4NdAx1Y8wh2hebO4xV32gBsYdxG5zEABpx//2Q==",
    author: "Di Weng",
    authorUrl: "https://unsplash.com/@skies457",
    photoUrl: "https://unsplash.com/photos/a-glass-of-beer-on-a-coaster-Qjz2RJuSFs0",
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
  "karadut-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABgcEBRAAAgIBAwUAAAAAAAAAAAAAAAIBBAMFQVEGERIhMQEAAgMAAAAAAAAAAAAAAAAAAgMABAURAQEBAQEAAAAAAAAAAAAAAAABAhES/9oADAMBAAIRAxEAPwCNXp142OPPobrsbw64Y4PFtYEaPUFGbaGc8ZLX0Nn2Bsen0Y4Afoyp/DbfI30rqtXziO4APIRLVXVpwsAAguv/2Q==",
    author: "Haberdoedas",
    authorUrl: "https://unsplash.com/@haberdoedas",
    photoUrl: "https://unsplash.com/photos/coffee-and-a-purple-smoothie-sit-on-a-table-md0RSAP2IIY",
  },
  "karpuz-cilek-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAQEAAAAAAAAAAAAAAAAABwUGEAACAQQDAQAAAAAAAAAAAAAAAQIDBAUGESKBEwEAAwEBAAAAAAAAAAAAAAAAAQMEAgURAAMBAQEAAAAAAAAAAAAAAAABAiEDEf/aAAwDAQACEQMRAD8Am2tW6ckWSVlH4eEP125lGSLIr1uj4RVjO8qVLSP7HZ92DUzHebBpdiSuS9MLFQUZIpMK6VMAE6gt+M47IVeZAARS0Ymf/9k=",
    author: "James Radvan",
    authorUrl: "https://unsplash.com/@jamesradvan",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-red-liquid-Exun_gFJH2E",
  },
  "karpuz-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABlAAEAAgMBAAAAAAAAAAAAAAAABQYBAgQHEAACAgIDAQAAAAAAAAAAAAAAAQIEAwUREiEiAQEBAQEAAAAAAAAAAAAAAAAEAgUGEQACAwACAwAAAAAAAAAAAAABAwACEQUhEhMy/9oADAMBAAIRAxEAPwD0SWSPBFZmjOVuJxZZfPIBpEfRFyOhNG0CsWL3ST9BFcyQV22TF2+Q09g3FgBH2PkJ3HGJoVnRKNsrMuzAApfyJnvVT2Hqf//Z",
    author: "Rodolphe HÉRAUD",
    authorUrl: "https://unsplash.com/@leguian",
    photoUrl: "https://unsplash.com/photos/clear-glass-jar-with-red-liquid-and-green-leaf-Ha3kOtpNO84",
  },
  "kavun-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABlAAEAAwEBAAAAAAAAAAAAAAAAAwUHBAYQAAICAgIDAAAAAAAAAAAAAAABAgQDIRESBRMiAQACAwAAAAAAAAAAAAAAAAACAwQFBhEAAgIDAQEAAAAAAAAAAAAAAAECAwQRMhMU/9oADAMBAAIRAxEAPwCkxWl1POeQfsmVUL3OuSzwx77M/wDJGuWy893NaI8NTQO95FADUpsQ3BGb0pOUjQKi+QCTlAY5DbbAAVfKE2dH/9k=",
    author: "Negar Mz",
    authorUrl: "https://unsplash.com/@negar_mz",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-yellow-liquid-g_EE5EBfcZU",
  },
  "kavun-karadut-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAAMBAAAAAAAAAAAAAAAABQECBwYQAAICAgEFAAAAAAAAAAAAAAABAgQDBTEREiEjUQEAAwEAAAAAAAAAAAAAAAAAAwQFAhEAAgMBAQAAAAAAAAAAAAAAAAECAyEEEv/aAAwDAQACEQMRAD8At1dlD6bXLkZQZy+rbl15K2e56+RZzKXPR6IO3uxUmDxG4sNyfkG0xe2tKTKmO00Zz7CXYABKcMWHPtjcbkwAFQhZsj//2Q==",
    author: "Collab Media",
    authorUrl: "https://unsplash.com/@collab_media",
    photoUrl: "https://unsplash.com/photos/a-pink-drink-with-a-cherry-on-the-rim-jLZ-xt1r4_E",
  },
  "kis-cayi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAwEAAAAAAAAAAAAAAAAAAwQGBRABAAEFAQEAAAAAAAAAAAAAAAECAwQRIRMxAQABBQAAAAAAAAAAAAAAAAAEAAECAwURAAIDAQAAAAAAAAAAAAAAAAABAgMSEf/aAAwDAQACEQMRAD8A3d34zeVyXeuV8cTIjYSSDaZ5ZWs5GhX8Z2IZYa7YM0dUoKqAWGYQxbgA4un/2Q==",
    author: "Stacy",
    authorUrl: "https://unsplash.com/@stacysuxx",
    photoUrl: "https://unsplash.com/photos/cozy-autumn-scene-with-tea-book-and-fall-leaves-RUBTNr2zr1s",
  },
  "latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABbAAEBAQAAAAAAAAAAAAAAAAAABQcQAAMBAQEBAQAAAAAAAAAAAAABAgMEBRIxAQACAwEAAAAAAAAAAAAAAAABBQACAwQRAAMBAAAAAAAAAAAAAAAAAAABAhH/2gAMAwEAAhEDEQA/AMsny3SIff5lSmaNhvmiN6m2TliGKej+kZHeDTBS6Kn6YOjSIvad9Sv0g9HpXQAIlFaZIezbABpiCj//2Q==",
    author: "KWON JUNHO",
    authorUrl: "https://unsplash.com/@juno1412",
    photoUrl: "https://unsplash.com/photos/brown-and-white-ceramic-mug-on-black-ceramic-saucer-2GWE2w2ppAE",
  },
  "limonata": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAgMBAAAAAAAAAAAAAAAABAUCAwYHEAADAQEBAQAAAAAAAAAAAAAAAQMCEQQTAQACAwAAAAAAAAAAAAAAAAACAwAEBREAAwEBAQEAAAAAAAAAAAAAAAECAxEEIf/aAAwDAQACEQMRAD8A99tZJHOXv1lhdvhQ1TMT173NJJD4XTH6A15npgdnVOUGdVTPUQXBNgF7XOW/qESSZ+dAAilcC6f/2Q==",
    author: "Mahdi Kordi",
    authorUrl: "https://unsplash.com/@mahdikordi_ir",
    photoUrl: "https://unsplash.com/photos/a-lemon-slice-in-a-glass-of-water-DSuiziv7r8o",
  },
  "limonlu-tart": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABUAAEBAQEAAAAAAAAAAAAAAAAAAQQHEAEBAQEAAAAAAAAAAAAAAAAAARECAQEBAQEAAAAAAAAAAAAAAAAAAQIDEQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEQMRAD8A6zzxjQkVxbWAKJEtwEEl0Ag//9k=",
    author: "Estúdio Bloom",
    authorUrl: "https://unsplash.com/@estudiobloom",
    photoUrl: "https://unsplash.com/photos/brown-and-white-bread-with-white-background-B4LfDN2vMGg",
  },
  "mango-ananas-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEBAAMBAAAAAAAAAAAAAAAABgMEBQcQAAICAwEAAAAAAAAAAAAAAAACAQMEBREhAQEBAQAAAAAAAAAAAAAAAAAFBgQRAAMBAQADAAAAAAAAAAAAAAECAwAEBRES/9oADAMBAAIRAxEAPwC8rSZOrRjSZdfUrFA6pWvST7fItNwMvDmDbjWYgNXK2qLPOgc56/UwdkrMhyNOazZz0ocrNlqwCX65q1R7yfOxAO8v2Vzy8+gApedAJrsFWJc7/9k=",
    author: "Rimsha Noor",
    authorUrl: "https://unsplash.com/@rimshaj123",
    photoUrl: "https://unsplash.com/photos/a-glass-of-orange-juice-with-a-straw-K5RiUMU3q-4",
  },
  "mango-frozen": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAAMAAAAAAAAAAAAAAAAABgUHCBAAAwACAwEAAAAAAAAAAAAAAAECAwQFERITAQACAwAAAAAAAAAAAAAAAAADBgIEBREAAgICAwEAAAAAAAAAAAAAAQIAAwQREhQhMf/aAAwDAQACEQMRAD8AvXjZgN+epZYtSTXKpeGAvy1QyNVJaad5K16YG9q3dsAe4suDGnQuzLlEjuZO00AL4YvkAGGUarOpPfCWwANaUV8R5M42vv7P/9k=",
    author: "Julia Zyablova",
    authorUrl: "https://unsplash.com/@foyu",
    photoUrl: "https://unsplash.com/photos/a-glass-filled-with-a-smoothie-next-to-a-mango-KlVIYmGVRQ8",
  },
  "menengic-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEAAgMAAAAAAAAAAAAAAAAABAYBAwUQAAIDAQEBAAAAAAAAAAAAAAABAgMREiEFAQEBAQAAAAAAAAAAAAAAAAAEAwERAAMBAQEAAAAAAAAAAAAAAAABAhEDIf/aAAwDAQACEQMRAD8A5nWm2NTIFFq0sUJQ5AX1c0lg/jwmp0hrwGbJLQLnGglzlMpFl7gyVR9CT80Asolr1GxdJFhobkgAQZNs/9k=",
    author: "Mustafa akın",
    authorUrl: "https://unsplash.com/@msaimakin",
    photoUrl: "https://unsplash.com/photos/white-cup-with-creamy-drink-on-an-ornate-blue-saucer-HrgVpXEPBzk",
  },
  "mexican-limonata": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABQYCBxAAAgMBAQEBAAAAAAAAAAAAAAECAwQFERIxAQADAQAAAAAAAAAAAAAAAAADBAUAEQABAwUBAAAAAAAAAAAAAAAAAQIEAwUREiFB/9oADAMBAAIRAxEAPwDZ1ZfSisDKubM1+osx+ETJlwp68HmR3+kCjI0DWV1wYEqc1NUCLHOdsY1wbR5rr68oW+egETGU6UX8U0/L6DnEAGwBP//Z",
    author: "Quilia",
    authorUrl: "https://unsplash.com/@heyquilia",
    photoUrl: "https://unsplash.com/photos/filled-drinking-glass-wyLp_6cKqqs",
  },
  "meyveli-soda": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEAAAAAAAAAAAAAAAAABQYHCBAAAgEFAAMAAAAAAAAAAAAAAAECAwQFETEGElEBAQEBAAAAAAAAAAAAAAAAAAUEAxEAAgMAAgMAAAAAAAAAAAAAAAECAxEEMRIhUf/aAAwDAQACEQMRAD8A56XjstcIO6wji+G+RjT9SvXdrGTekF8e6UmJ2cfwWswueJfwGvrFbfAKaTYiyU5skadJSABqm10OWpNeyao2cdcABq7Jb2TquPw//9k=",
    author: "Sama Hosseini",
    authorUrl: "https://unsplash.com/@samahosseini",
    photoUrl: "https://unsplash.com/photos/three-different-colored-drinks-sitting-on-top-of-a-wooden-table-DrCvlwPg0pQ",
  },
  "mojito": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEAAwEBAAAAAAAAAAAAAAAABQYHBAgQAAICAgMAAAAAAAAAAAAAAAABAgQDBREVIgEAAgMAAAAAAAAAAAAAAAAAAgMBBAURAAMAAwEAAAAAAAAAAAAAAAABAgMRIRL/2gAMAwEAAhEDEQA/APNNWnzIsfVtwOOlL0i+15QcDHy3aoO66ZLe1kkwaHsceMFuKfkgruBJEhG44gBZZWxZD3tg2AApXBh//9k=",
    author: "Milan Trninic",
    authorUrl: "https://unsplash.com/@wedesignmarbella",
    photoUrl: "https://unsplash.com/photos/a-refreshing-mojito-cocktail-with-mint-and-lime-RDA_meDugeU",
  },
  "muz-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABdAAEBAQEBAAAAAAAAAAAAAAAABgUHAhAAAQQCAwEAAAAAAAAAAAAAAAECAwUEIRESEzEBAQEBAAAAAAAAAAAAAAAAAAECAxEBAQEBAAAAAAAAAAAAAAAAAAECEf/aAAwDAQACEQMRAD8As8SNZHFC6rXpyY9dI1jtlXPbQti+obat6Y59lxebgYNzcx914UFyh6lzXNTRG2d5K1F2AO4nNcrzbeVzl2ADBT//2Q==",
    author: "Giorgio Trovato",
    authorUrl: "https://unsplash.com/@giorgiotrovato",
    photoUrl: "https://unsplash.com/photos/a-close-up-of-a-drink-on-a-table-FlnetxXdnmQ",
  },
  "naneli-limonata": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABlAAEAAwEBAAAAAAAAAAAAAAAABAcIBQYQAAICAwADAAAAAAAAAAAAAAACAQQDBRIRIUEBAAMBAAAAAAAAAAAAAAAAAAQFBgERAAICAgIDAAAAAAAAAAAAAAECAAMEIQUSERQj/9oADAMBAAIRAxEAPwDRL7VI+k2nslZipLWTIp0dVZfqPMkTZyrLojcPGIxM0DXsrKg8Hi2PKx7AUnKN4GphoAMrW4sEWo3LACPIRfYWO6z8jJ9i20QACkrpr6jURWMexn//2Q==",
    author: "Caglar Araz",
    authorUrl: "https://unsplash.com/@caglararaz",
    photoUrl: "https://unsplash.com/photos/glass-of-lemon-drink-with-slice-of-lemon-I4wP2ap25rc",
  },
  "nitro-cold-brew": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABYAAEBAQEBAAAAAAAAAAAAAAAAAQMCBRAAAwEBAQAAAAAAAAAAAAAAAAECEQMSAQADAQAAAAAAAAAAAAAAAAABAgUAEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AKuiROtpyeVVUzaPTROUq15VjBxKxgGlXFgiloBqJ1AAhn//2Q==",
    author: "Alex He",
    authorUrl: "https://unsplash.com/@helium325",
    photoUrl: "https://unsplash.com/photos/close-up-of-ice-cubes-in-dark-liquid-H9wRcF1GKXg",
  },
  "oreo-milkshake": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEAAwEBAAAAAAAAAAAAAAAABAYHCAUQAAIDAQEAAwAAAAAAAAAAAAABAgMFBBMRIUEBAAMBAQAAAAAAAAAAAAAAAAEDBAAFEQACAwEBAAAAAAAAAAAAAAAAAQIREgMh/9oADAMBAAIRAxEAPwDlzNz5y/CZo5U1B/Rd8Oqs9fYqr8mJtD8nL3bQ4TYLBr1L0fwA6QMmt5VriTdLocoNAEEZujoSgjM+rmUpNgAkfSVv02Uf/9k=",
    author: "ABHISHEK HAJARE",
    authorUrl: "https://unsplash.com/@abhishek_hajare",
    photoUrl: "https://unsplash.com/photos/a-glass-of-ice-cream-with-a-cookie-on-top-pYmOaWZAPqI",
  },
  "pumpkin-spice-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEAAAAAAAAAAAAAAAAABwUGEAACAwEBAQEAAAAAAAAAAAAAAgEDBAUxERIBAQEBAQAAAAAAAAAAAAAAAAMEAAIRAAMAAwEAAAAAAAAAAAAAAAABAgMRITH/2gAMAwEAAhEDEQA/AJmyM0m1kqf54b+LnQ7eHZV8hFXwmnIhVJNrcrMChWZK4BxT6UTfBhSFY6HRf+agAMfQ2Tbb15V5ABq9FlLR/9k=",
    author: "adison clark",
    authorUrl: "https://unsplash.com/@_adisonclark",
    photoUrl: "https://unsplash.com/photos/white-ceramic-cup-with-saucer-on-brown-wooden-table-naHZe5cQBJY",
  },
  "red-bull": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEBAAAAAAAAAAAAAAAABAUGBwgQAAICAwEBAAAAAAAAAAAAAAABAgQDBRESEwEBAAMAAAAAAAAAAAAAAAAABAMFBhEAAgEEAwAAAAAAAAAAAAAAAAEDAhESMhMiMf/aAAwDAQACEQMRAD8A8T67F1mrnVfzKLVNdRt8kofM0ETXGHxuzll/HyTBL2kl6YKaXZiLEWnYcWX09g/AAyOp4h3sZWzmcpAABI+zJ14f/9k=",
    author: "Philipp Raifer",
    authorUrl: "https://unsplash.com/@philippraifer",
    photoUrl: "https://unsplash.com/photos/red-bull-energy-drink-can-UIwnggHrTnI",
  },
  "red-eye": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABcAAEAAgMAAAAAAAAAAAAAAAAABQYDBwgQAAICAwEBAAAAAAAAAAAAAAABAgQFERUDEgEAAwEAAAAAAAAAAAAAAAAAAAECAxEBAQEAAAAAAAAAAAAAAAAAAAER/9oADAMBAAIRAxEAPwDjGnScmT3MfyZcc4lnU4aNZGTXljHtAttuUAGBSKtxxJvoPQBMUjfe62ABk//Z",
    author: "ruesauveur 7373",
    authorUrl: "https://unsplash.com/@jkxphotographyx",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-sitting-on-top-of-a-wooden-table--8ZUcgS4if4",
  },
  "sade-soda": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEBAAMBAAAAAAAAAAAAAAAABgMFBwgQAAMBAAIDAAAAAAAAAAAAAAABBAIDMRITFAEAAwEAAAAAAAAAAAAAAAAAAQIDABEBAAMAAwAAAAAAAAAAAAAAAAECMQMRIf/aAAwDAQACEQMRAD8A8NTTtsocyPxM0Erb6Kr5GsdGK5vVM0Df3cTT6AOxV8M2VpFa58+sASuE5NRt0qemACcz6vXH/9k=",
    author: "Ian Talmacs",
    authorUrl: "https://unsplash.com/@iantalmacs",
    photoUrl: "https://unsplash.com/photos/a-glass-of-water-with-a-black-background-isI5lZeLXUs",
  },
  "sahlep": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAgMAAAAAAAAAAAAAAAAAAwYEBQcQAAMBAAMBAAAAAAAAAAAAAAABAgQDBRITAQACAwAAAAAAAAAAAAAAAAABAwACBBEBAQEAAwAAAAAAAAAAAAAAAQACAxEx/9oADAMBAAIRAxEAPwCTPmdM214KUk/XefRbOaJ+RTTEuVc8OWDP7BJWwQjMGlqi1XtfzAEci92dWo27mbpgAdnyYN//2Q==",
    author: "Anil Sharma",
    authorUrl: "https://unsplash.com/@anil_sharma_india",
    photoUrl: "https://unsplash.com/photos/a-glass-of-milk-sitting-on-top-of-a-green-coaster-3GhsY3UCl3k",
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
  "satsuma": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEBAAAAAAAAAAAAAAAABQcCBhAAAgEEAwEBAAAAAAAAAAAAAAECAwQFERITIQZhAQEBAQAAAAAAAAAAAAAAAAAEBQIRAAIDAQEAAAAAAAAAAAAAAAECAAMRBCH/2gAMAwEAAhEDEQA/AIOLm3NG0Y644U0QF850+6KVvTafEm29disBkr08VboTs7vcg9gvUsL2regMW5sk56VDET22Vt4Rg/DLoz1c6/QDFijRF87sFM1zExTpoAGwIVvSZ//Z",
    author: "Lachlan Wang",
    authorUrl: "https://unsplash.com/@lachlanwang",
    photoUrl: "https://unsplash.com/photos/iced-orange-beverage-in-a-plastic-cup-jdvoYlzlYyw",
  },
  "sicak-cikolata": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEBAAAAAAAAAAAAAAAABgcIAwUQAAEEAwEBAQAAAAAAAAAAAAABAgQFAyExEhEVAQEBAAAAAAAAAAAAAAAAAAAEBREAAgEEAwAAAAAAAAAAAAAAAAECAxESIRMiMf/aAAwDAQACEQMRAD8AujNe4nJ05RpzFf0zVguc/wB2qkuhXL9bB8ichipPE05Gms8psFTV1q5ydA6K0AldMrL8NqLw9DFUogBKS7FPJpEtr4flAAU4+E6T2f/Z",
    author: "American Heritage Chocolate",
    authorUrl: "https://unsplash.com/@americanheritagechocolate",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-brown-and-black-liquid-AOoNx98hdm8",
  },
  "single-espresso": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEBAQEBAAAAAAAAAAAAAAAABgMFBxAAAgICAwEAAAAAAAAAAAAAAAEDBQIRBBIhEwEAAwEAAAAAAAAAAAAAAAAAAAEDBBEAAwEBAQAAAAAAAAAAAAAAAAECAxEx/9oADAMBAAIRAxEAPwC84Fe4yrj1rRn2wa8M8W09mPfZw0aMcVZyLKs+gOvLzo0vWC8X2UyNzxkLV2rkZWTz6i2AOol+oU214ePXd5nHm/QACSSBvp//2Q==",
    author: "Mila Vasileva",
    authorUrl: "https://unsplash.com/@milavasileva",
    photoUrl: "https://unsplash.com/photos/a-cup-of-coffee-on-a-saucer-with-a-spoon-IXzrKxmPlQg",
  },
  "spanish-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEAAAAAAAAAAAAAAAAABQIHEAACAgIDAQAAAAAAAAAAAAAAAQIDBBEFITFRAQADAQAAAAAAAAAAAAAAAAABAgMEEQADAQEBAAAAAAAAAAAAAAAAAQIRAyH/2gAMAwEAAhEDEQA/AJjp2iZfgORcq3ss1YykjJ0qt8NvKJw5fdxkt+A6Tdgx+AvL8IWlpuFCTKlPSAECmZtYAGQGf//Z",
    author: "- Kenny",
    authorUrl: "https://unsplash.com/@kennyzhang29",
    photoUrl: "https://unsplash.com/photos/a-glass-of-coffee-with-cream-and-sunlight-Uhdp6G8zzWw",
  },
  "su": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEBAAAAAAAAAAAAAAAABAUDBxAAAwACAwEAAAAAAAAAAAAAAAEDAgQFERMhAQADAQAAAAAAAAAAAAAAAAACAwQFEQEBAQADAAAAAAAAAAAAAAABAAIDETH/2gAMAwEAAhEDEQA/APQNLpo6bEvvZPx08jZtJtGc7qzjsqd8cQR11c2wKdE8w13HWRtUqgBSxntL6YgAnVqgOr//2Q==",
    author: "joah brown",
    authorUrl: "https://unsplash.com/@joahbrown_",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-N59Vi1H8-zU",
  },
  "sutlu-filtre-kahve": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABeAAEAAgMAAAAAAAAAAAAAAAAABgcBAgMQAAMAAwEBAAAAAAAAAAAAAAABAgMEBRNBAQEBAQEAAAAAAAAAAAAAAAAFBAMGEQADAQEBAAAAAAAAAAAAAAAAAQIDEhH/2gAMAwEAAhEDEQA/AKpx81ma5xIJ2ISOsXFMKcrk6DppkMy8qn8BYPnDQCrrxl8z6iunsUb4N+lQBRldOWZaQvUS3W2HUgAH1t9sSzlco//Z",
    author: "Kalei de Leon",
    authorUrl: "https://unsplash.com/@kaleigrace",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-brown-liquid-0npS7Ruv6ao",
  },
  "tiramisu": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABZAAEBAQEAAAAAAAAAAAAAAAAABQQCEAEAAwEBAQAAAAAAAAAAAAAAAQMEEQIhAQACAwAAAAAAAAAAAAAAAAAAAgEDBBEBAQEAAAAAAAAAAAAAAAAAAQAR/9oADAMBAAIRAxEAPwDRRnb/AFV8d08LJlWWpNo9+foozwGQNgzaVOfcTAJhpei/gBVmC//Z",
    author: "Max Bovkun",
    authorUrl: "https://unsplash.com/@maxbovkun",
    photoUrl: "https://unsplash.com/photos/sliced-strawberries-on-white-ceramic-plate-myffvvnqHz4",
  },
  "turk-kahvesi": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABeAAEBAQEBAAAAAAAAAAAAAAAABgMBBRAAAwEBAQEAAAAAAAAAAAAAAAEDBCICIQEAAwEBAAAAAAAAAAAAAAAAAwQFAQIRAAMAAwEAAAAAAAAAAAAAAAABAgMRIRL/2gAMAwEAAhEDEQA/AKyl0ZxqmyapqZtn0fSRMb6U3wu5ek0Dx4XbQOHWmaoJeuc5CXQAHBdB8iWivyQ5AAy0hb0z/9k=",
    author: "Charlota Blunarova",
    authorUrl: "https://unsplash.com/@charlotablunarova",
    photoUrl: "https://unsplash.com/photos/moka-pot-and-ceramic-teacup-on-tray-Uxna1lo-0Ts",
  },
  "turk-kahvesi-portakal-cilek": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEAAgMAAAAAAAAAAAAAAAAABQYBAgQQAAIDAQADAAAAAAAAAAAAAAACAQMEBRESIQEAAgMAAAAAAAAAAAAAAAAABAYBAwURAAMBAQEBAAAAAAAAAAAAAAABAgMRBBL/2gAMAwEAAhEDEQA/ALjiTwZ3XrCzBtRavqQXQhmn4LkVxj3rH0VLfXDtIOmyhgHLdcM2vI+kjztjMTjtAALcoMxtsrO7TCgAguP/2Q==",
    author: "Timothy Dachraoui",
    authorUrl: "https://unsplash.com/@thjperry",
    photoUrl: "https://unsplash.com/photos/brewing-coffee-in-hot-sand-with-a-copper-pot-963RZ9HwVZY",
  },
  "vanilya-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABbAAEAAwEAAAAAAAAAAAAAAAAABQYHAxAAAwEBAAMAAAAAAAAAAAAAAAECBAUDERMBAAMBAAAAAAAAAAAAAAAAAAMEBQIRAQEBAQAAAAAAAAAAAAAAAAEAEQL/2gAMAwEAAhEDEQA/AOfNxv2i8Tgbghue4TLzHkj5kl0auYlmu/G1QJ/oOWwbhtnePptMtkdVuQAnQQuF2jdG9tgAWVmQv//Z",
    author: "Phil Desforges",
    authorUrl: "https://unsplash.com/@storybyphil",
    photoUrl: "https://unsplash.com/photos/cafe-latte-Nw8wbiDE3gU",
  },
  "vegan-cikolatali-brownie": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAAMBAAAAAAAAAAAAAAAABQEDBAYQAAICAwAAAAAAAAAAAAAAAAABAgMEERIBAQEBAAAAAAAAAAAAAAAAAAMCBBEBAQEBAAAAAAAAAAAAAAAAAQACEv/aAAwDAQACEQMRAD8A9JDUTE8lEZ5YhZ0wOrWYqqyAaI86BYxpSbqOUcddjUgAkmyrUVN6ABRQ3//Z",
    author: "Chaman Raj",
    authorUrl: "https://unsplash.com/@chamanraj",
    photoUrl: "https://unsplash.com/photos/a-bunch-of-brownies-sitting-on-top-of-a-cooling-rack-0lmVsDyqpVI",
  },
  "white-chocolate-mocha": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEBAAAAAAAAAAAAAAAABgMEBxAAAwACAgMAAAAAAAAAAAAAAAECBAUDERIhMQEAAwEAAAAAAAAAAAAAAAAABAUGAxEAAwEAAwEAAAAAAAAAAAAAAQIDABESIQT/2gAMAwEAAhEDEQA/AKZ2jqS7ghI2aql7LLFypfGTyP21HSJXSmz+g02bVUDB7ANxzi5/MSoO8wnKc0U+Jta8egAGTt1zWiKW2/JluwALK0bufcxnNQo83//Z",
    author: "Enrico Sorrentino",
    authorUrl: "https://unsplash.com/@esorr3ntino",
    photoUrl: "https://unsplash.com/photos/white-ceramic-mug-with-white-cream-on-brown-wooden-table-3IMDf0nw82w",
  },
  "yesil-cay-yasemin": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAwEAAAAAAAAAAAAAAAAAAwQFBhAAAgMBAQEAAAAAAAAAAAAAAAECBBEDBSIBAAIDAAAAAAAAAAAAAAAAAAADAQIEEQADAAMBAAAAAAAAAAAAAAAAAQIDESEx/9oADAMBAAIRAxEAPwDh/PRetr5IKMcLNprAqtIZE7ZiwljBW6zxgUs5d4empX6YiG1YeAE34EcZgT6awAZB2z//2Q==",
    author: "Max Griss",
    authorUrl: "https://unsplash.com/@grissphoto",
    photoUrl: "https://unsplash.com/photos/yellow-flowers-in-clear-glass-jar-xaa3T_BpMuY",
  },
  "zepresso-ametist": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABfAAEAAgMAAAAAAAAAAAAAAAAABAUBAwYQAAMBAQEBAAAAAAAAAAAAAAABAwIEEQUBAQEBAAAAAAAAAAAAAAAAAAUGBBEAAgIDAQEAAAAAAAAAAAAAAAECAwQRITIS/9oADAMBAAIRAxEAPwCgV0yzlTPhUvl1k1pURFQqhKtimPjPW2Y+hVAiWhTQD3TFMx2tKbO0pNNkqXFl59AEKfLGr38w4QrxzlgANs9Mnn1n/9k=",
    author: "Abhishek Sapkal",
    authorUrl: "https://unsplash.com/@abhinetic",
    photoUrl: "https://unsplash.com/photos/a-hand-holding-a-wine-glass-with-a-drink-in-it-Qnop6E82XnE",
  },
  "zepresso-blue-sky": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABkAAEBAQEBAAAAAAAAAAAAAAAABQQGCBAAAgICAwEAAAAAAAAAAAAAAAEDBAIRBRIxYQEAAgMBAAAAAAAAAAAAAAAAAQMCBAUGEQACAgIDAAAAAAAAAAAAAAAAAQIDBDEREiL/2gAMAwEAAhEDEQA/APbTsoySWEQHZ+meSytei9Ek+WUJpwQHZTfoCpxC4TOfkvtGOa++oA21LoUsRt3ok4chlsAGdHR0Vi9H/9k=",
    author: "Norbert Braun",
    authorUrl: "https://unsplash.com/@medion4you",
    photoUrl: "https://unsplash.com/photos/a-couple-of-glasses-filled-with-liquid-and-drinking-straws-v_RGL0q1pTg",
  },
  "zepresso-demleme-siyah-cay": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABaAAEBAQEBAAAAAAAAAAAAAAAABgECBRAAAgMBAQAAAAAAAAAAAAAAAAECAwQREgEAAgMAAAAAAAAAAAAAAAAAAgMAAQQRAQEBAAAAAAAAAAAAAAAAAAABEf/aAAwDAQACEQMRAD8As7ZJI8O7QunWrYvJHaNr9irGnVdGxMEtTuYFi1t+htE9bLsgCtorI2E2gADamP/Z",
    author: "Doğan Alpaslan DEMİR",
    authorUrl: "https://unsplash.com/@izafi",
    photoUrl: "https://unsplash.com/photos/traditional-turkish-tea-in-a-glass-on-a-wooden-table-w-EIoCN75-Q",
  },
  "zepresso-hibiscus": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABQYHCBAAAgICAgMBAAAAAAAAAAAAAAIBBQMEERIGITFBAQEBAQAAAAAAAAAAAAAAAAADBAURAAMAAgMAAAAAAAAAAAAAAAABAgMRBCIx/9oADAMBAAIRAxEAPwCVpUnZSLceOT1n0bGttMcfpS3N3C6SQqmmXY+M6WzyNcUzI8+gdWusON3kFaYFRpkDRtn5+mkmzeV+gAVK2auC6UGRsLGeQAOvDNyvsz//2Q==",
    author: "Jonas Allert",
    authorUrl: "https://unsplash.com/@visuallert",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-red-liquid-and-sliced-lemon-puYGQBdD9Ic",
  },
  "zepresso-red-sky": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEBAAMBAAAAAAAAAAAAAAAABwIFCAYQAAICAwEBAAAAAAAAAAAAAAACAQUDBDERIwEAAwEBAAAAAAAAAAAAAAAAAwUGAAQRAAMAAgMBAAAAAAAAAAAAAAABAgMREhMxIf/aAAwDAQACEQMRAD8A5lr6pmPQvTvC8NvR5MbTBU8ehjyJwnO3IqKyIxqTm7arH94C5b1MkTwDaNuRXkc8mQ2ksGV4L9VWfzgA1RO/AU3XH0xsrKAAGRzN/T//2Q==",
    author: "Riccardo Andolfo",
    authorUrl: "https://unsplash.com/@lennyphotographic",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-red-liquid-and-sliced-lemon-DtKrV2K5vq8",
  },
  "zepresso-redbull": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABiAAEBAQEBAAAAAAAAAAAAAAAABQQCBxAAAgICAgMAAAAAAAAAAAAAAAECAwQFEUESIjEBAAMBAAAAAAAAAAAAAAAAAAMEBQYRAAMBAAMBAAAAAAAAAAAAAAABAgMREjEh/9oADAMBAAIRAxEAPwDuvFaZU8PUnxzoPs0rJi+xDfBNlLG2kTL6G2DVZfABJlJAb7NnjdW4nz9K0NzIAUvSuTQzjHHhQqzpTAA1HhN1+Uz/2Q==",
    author: "Lukman Rabbani Azhar",
    authorUrl: "https://unsplash.com/@awasbis",
    photoUrl: "https://unsplash.com/photos/clear-drinking-glass-with-brown-liquid-and-sliced-orange-EWdRXfQTyhY",
  },
  "zepresso-signature-latte": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAgJCQsOCw8QEA8UFhQWFB4bGRkbHiwgIiAiICxDKjEqKjEqQztIOzc7SDtqU0pKU2p6Z2JnepSFhZS6sbrz8/8BCAkJCw4LDxAQDxQWFBYUHhsZGRseLCAiICIgLEMqMSoqMSpDO0g7NztIO2pTSkpTanpnYmd6lIWFlLqxuvPz///AABEIABgAGAMBIgACEQEDEQH/xABbAAEBAQEBAAAAAAAAAAAAAAAABQQGAhAAAgMBAAMAAAAAAAAAAAAAAAEDBBECEiEiAQADAQAAAAAAAAAAAAAAAAACAwQBEQEBAQAAAAAAAAAAAAAAAAAAASH/2gAMAwEAAhEDEQA/APNWH2XFX+THWa0uc9LxJLlVzY5qxBjBQs42DQudgtvStzceAB2BlZpbGgAUa//Z",
    author: "Phil Desforges",
    authorUrl: "https://unsplash.com/@storybyphil",
    photoUrl: "https://unsplash.com/photos/cafe-latte-Nw8wbiDE3gU",
  },
  "zepresso-sour": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAwEAAAAAAAAAAAAAAAAABgcIAxAAAgIBAgcAAAAAAAAAAAAAAAIBAwYEBRESEyEjcYEBAQEBAAAAAAAAAAAAAAAAAAMFAhEBAQEAAwEAAAAAAAAAAAAAAQADAhJBEf/aAAwDAQACEQMRAD8Az9jjrzQXbXanRM648zS8F8aXSWtT8NfWNKt8jZZaQdt+0FnGQG6E/HFSgeMW+RTVO0ys0R6AF8h9ohkFaTM9gATNF7VjIOhf/9k=",
    author: "ooneiroslyl",
    authorUrl: "https://unsplash.com/@ooneiroslyl",
    photoUrl: "https://unsplash.com/photos/a-frothy-cocktail-in-a-fancy-glass-KClrrYZqxaQ",
  },
  "zepresso-sunlight": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEBAQEAAAAAAAAAAAAAAAAABgQFEAACAgIDAQAAAAAAAAAAAAAAAQMEESECBRIxAQEBAQAAAAAAAAAAAAAAAAAFBgcRAQACAgIDAAAAAAAAAAAAAAEAAgMSETIEFCH/2gAMAwEAAhEDEQA/AOFVh2UkUTRlrRbKyvW9JGfe5yhxLa/haHyZoXhApIusbXwCdaqDD24MkIY1ksaMa0ACFTcjF7urLmrHxwACkx9CTuTsz//Z",
    author: "Trình Minh Thư",
    authorUrl: "https://unsplash.com/@imdauphong",
    photoUrl: "https://unsplash.com/photos/a-glass-filled-with-orange-juice-next-to-a-cutting-board-ueC_Ago3Bec",
  },
  "zepresso-sunset": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABjAAEAAgMAAAAAAAAAAAAAAAAABgcDBQgQAAICAgMBAAAAAAAAAAAAAAABAgUDMQQREhUBAAIDAAAAAAAAAAAAAAAAAAQFAAIDEQACAwEBAQAAAAAAAAAAAAABAgADBBESIf/aAAwDAQACEQMRAD8AomWPvRglWTktG+rMKySXZYmKvxLHoR6N4U8EbUZC0575lXNPQLUtuNjTBK9pK9lnygGRGpsfLROvtPwAAW1KXhmZzyQuytHJgAZ1Up4HyYWu3sz/2Q==",
    author: "Milan Trninic",
    authorUrl: "https://unsplash.com/@wedesignmarbella",
    photoUrl: "https://unsplash.com/photos/a-colorful-cocktail-garnished-with-fruit-and-straws-e9AhE02-UCs",
  },
  "zepresso-the-fruity": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABgAAEAAgMAAAAAAAAAAAAAAAAABQYBAwgQAAMBAAMBAQAAAAAAAAAAAAABAgQDERIFMQEBAQEBAAAAAAAAAAAAAAAAAwUBAhEAAwEBAQEAAAAAAAAAAAAAAAECAyERIv/aAAwDAQACEQMRAD8A7m5L6Ibn0Ixt1KZKle9Ov0m71SfCllHqLTw32CPx6JaAsacOanpp+on5ZRHNegDdJTHzfyTuKqSAAClANv0//9k=",
    author: "James Kern",
    authorUrl: "https://unsplash.com/@jamesrkern",
    photoUrl: "https://unsplash.com/photos/red-apple-and-orange-fruit-RqpfDKTh14c",
  },
  "zepresso-white": {
    blur: "data:image/jpeg;base64,/9j/2wCEAAQFBQYIBggJCQgLDAsMCxEPDg4PERkSExITEhkmGBwYGBwYJiEoIR8hKCE8LyoqLzxFOjc6RVRLS1RpZGmJibgBBAUFBggGCAkJCAsMCwwLEQ8ODg8RGRITEhMSGSYYHBgYHBgmISghHyEoITwvKiovPEU6NzpFVEtLVGlkaYmJuP/AABEIABgAGAMBIgACEQEDEQH/xABhAAEAAwEAAAAAAAAAAAAAAAAABQYHCBAAAgICAwEAAAAAAAAAAAAAAAIBBAURAzFBQgEAAgMAAAAAAAAAAAAAAAAAAgUBAwQRAQACAwEAAAAAAAAAAAAAAAABBAIDEhP/2gAMAwEAAhEDEQA/AMms1paCEnBs/hrCYyZnona+KjXQorU/M03WO3NV3AvHgOkLGAh/kDOMWGZW/hqrssPBUUAsBKXSimugAEh//9k=",
    author: "Nima Naseri",
    authorUrl: "https://unsplash.com/@nimanaseri",
    photoUrl: "https://unsplash.com/photos/a-white-table-topped-with-a-glass-filled-with-a-drink-m_47g-Dfb4g",
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
