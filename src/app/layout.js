import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata = {
  title: {
    default: "SANTEX OPTOM - Сантехника в Бухаре | Душевые кабины, радиаторы, унитазы, раковины",
    template: "%s | SANTEX OPTOM Бухара"
  },
  description: "SANTEX OPTOM в Бухаре - продажа сантехники душевые кабины, радиаторы отопления, унитазы, раковины, смесители. Доставка по Бухаре и Узбекистану. Выгодные цены.",
  keywords: [
    "сантехника Бухара",
    "душевые кабины Бухара",
    "радиаторы отопления Бухара",
    "унитазы Бухара",
    "раковины Бухара",
    "магазин сантехники Бухара",
    "сантехника оптом Бухара",
    "SANTEX OPTOM Бухара",
    "купить унитаз в Бухаре",
    "купить душевую кабину в Бухаре",
    "радиаторы в Бухаре",
    "сантехника Узбекистан"
  ],
  authors: [{ name: "SANTEX OPTOM", url: "https://santexoptom.uz" }],
  creator: "SANTEX OPTOM",
  publisher: "SANTEX OPTOM",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://santexoptom.uz'),
  alternates: {
    canonical: '/',
    languages: {
      'ru': '/',
      'uz': '/uz',
    },
  },
  openGraph: {
    title: "SANTEX OPTOM - Сантехника в Бухаре",
    description: "Широкий выбор сантехники в Бухаре: душевые кабины, радиаторы, унитазы, раковины. Оптом и в розницу. Доставка по городу.",
    url: 'https://santexoptom.uz',
    siteName: 'SANTEX OPTOM',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SANTEX OPTOM - магазин сантехники в Бухаре',
      },
    ],
    locale: 'ru_RU',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "SANTEX OPTOM - Сантехника в Бухаре",
    description: "Душевые кабины, радиаторы, унитазы, раковины в Бухаре. Оптом и в розницу.",
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'ваш_код_верификации_google',
    yandex: 'ваш_код_верификации_yandex',
  },
  category: 'business',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        {/* Гео-мета теги для Бухары */}
        <meta name="geo.region" content="UZ-BU" />
        <meta name="geo.placename" content="Bukhara" />
        <meta name="geo.position" content="39.768;64.421" /> {/* Координаты Бухары */}
        <meta name="ICBM" content="39.768, 64.421" />

        {/* Для локального SEO */}
        <meta name="yandex-verification" content="ваш_код" />

        {/* Hreflang для Узбекистана */}
        <link rel="alternate" href="https://santexoptom.uz" hreflang="ru-uz" />
        <link rel="alternate" href="https://santexoptom.uz/uz" hreflang="uz-uz" />
        <link rel="alternate" href="https://santexoptom.uz" hreflang="x-default" />

        {/* Структурированные данные для локального бизнеса */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              "name": "SANTEX OPTOM",
              "description": "Магазин сантехники в Бухаре",
              "url": "https://santexoptom.uz",
              "telephone": "+998-XX-XXX-XX-XX", // Добавьте ваш телефон
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "ваш адрес", // Добавьте адрес
                "addressLocality": "Бухара",
                "addressRegion": "Bukhara Region",
                "addressCountry": "UZ"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 39.768,
                "longitude": 64.421
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                  "opens": "09:00",
                  "closes": "19:00"
                }
              ],
              "priceRange": "₽₽",
              "areaServed": {
                "@type": "City",
                "name": "Бухара"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Каталог сантехники",
                "itemListElement": [
                  {
                    "@type": "Product",
                    "name": "Душевые кабины",
                    "description": "Душевые кабины в Бухаре"
                  },
                  {
                    "@type": "Product",
                    "name": "Радиаторы отопления",
                    "description": "Радиаторы в Бухаре"
                  },
                  {
                    "@type": "Product",
                    "name": "Унитазы",
                    "description": "Унитазы в Бухаре"
                  },
                  {
                    "@type": "Product",
                    "name": "Раковины",
                    "description": "Раковины в Бухаре"
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}