export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  sizes: string[];
  description: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  isLimited?: boolean;
  colors: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic Street Tee',
    price: 18900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAgyaNZlVMzUfesGLqf8BaB33dEMpNouzdYElUSvogcoEr9SCgQFMOqD27g9p2EhE8f8CwNFalkE0OA5-1qgvk4kdt1UNStx4InyDYA2oHGUbUTzR8_tOZeKmLvuIZGZkpksB7zfEx-FWkLQZlyXINJEU0cp5NBHCyirhaRsqlaN6ECSEM1GeoZyMK27WSnOnmQrfMPk4xsEo4E0fR4k6meS-N1jSomlICV5sE1VRv37sSz2T7k6LOIdbxZiJp7dtEsieajShIJl_M',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL', 'GG'],
    description: 'T-shirt 100% algodão de alta gramagem. Desenhada para as ruas.',
    colors: ['Preto Noir'],
  },
  {
    id: '2',
    name: 'Concrete Cargo V1',
    price: 34900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD18x22Qmw3lnbjAnGOftxMYZBGP3xl791qp0KakA_fLLRu_3MkFUVcRtfhXOSYObit5EKsp0mWQu8mFOtdbCqKi-bGQ04YLFDfLyiwQr3NoMsEBhDkcGmnVGiW0nUUE9gZLuQLFP2EbdSVwczXqxWxcCrOWtw14YDhZdUS95DIV7x3QgNz0_yX02NHxCDsXHJQJcxlTj2B2POIvC_foe3lT7fR9Lp9QFLFZ7IWWFnhTPwE2IclZnbqx2j4FG8rEyOnNVa6hRGZDck',
    category: 'Calças',
    sizes: ['38', '40', '42', '44'],
    description: 'Calças cargo utilitárias com acabamento resistente à água e alças ajustáveis.',
    colors: ['Cimento'],
  },
  {
    id: '3',
    name: 'RUAXA Urban Tee',
    price: 12900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC-5RYNmaPlfEuCqbYtW5JbBIY67eZwAKaOQ7F4bIEqcESfhFAyeshUKBmiGCCeZark9F-TpA42lyyc2Se1V8RnPMNwBBjBEsq2_trZOvK6WdypenVCtEJCfWRi3_TRzygtquRO_4iv-dUXC_whJ4QEYlz7AAYeNcTo51Ds05ElPwiuNzk0JUOrD7FSLRXymTsdFIsFO2X2v_W0d6sP9DaMDBERv2gD6mz6aDqzg8bOo386y4-y0eS9VaKVOiMBAriVaY8YPFcQ33w',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'T-shirt 100% algodão de alta gramagem. Desenhada para as ruas.',
    isNew: true,
    colors: ['Branco'],
  },
  {
    id: '4',
    name: 'Concrete Core Hoodie',
    price: 28900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsYIm7Rys8hE0rILzFvta6ZYC71g5suOlzlNsL1-pnj8o0JgpaYbo3X2UZ0XLYbL_Mg33AFHERUFju56rUZUj83yANf-p6wc0WLx0OU6_Wmzh4GvPJX9dODW4qWhx6bPfybLGiJog4HhLzEyDW2bQZF56Wy92yEF0s8HLrnxB6maJpJSdqodr8K9XWJKlRCk4WnyQQZOCjMg5UW9INN-urk4iv1FQIfpbuoqf7RfgpZ_DNaDEKmMmekwJ5nCmKQd2vOhKWG0DNAbU',
    category: 'Casacos',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Moletom ultra-grosso com ombros descaídos e costura industrial.',
    colors: ['Cinzento'],
  },
  {
    id: '5',
    name: 'Mundo Cargo Pants',
    price: 34900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxztx9Hfc7TeDpiYCgnePuH4XWdYuwVMKpU_6OhHrFnMNwtn0eiCVRLYpk480r1elo8hEL2GvzbrimycSJ6g3hDG0Loi5sF3R7PJ6kcmljmSygF6wKv0OmclZXUCVA8GXndMrF8nuiiGLwTjM3Kd22_gIztp4YZiHioS-muXoOltrL0pNvYEmYONNQcXWxD8GTycnZCA0-i5GLyspo6CYp_0nhgCMLH7fh105JRBN7o0zPr2xWMR5o-e42mZQsqeEO5OL-r87qz2c',
    category: 'Calças',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Calças cargo utilitárias com acabamento resistente à água e alças ajustáveis.',
    colors: ['Preto'],
  },
  {
    id: '6',
    name: 'RUAXA Beanie',
    price: 8900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCQmPPsbwnAH-RdWloZGYCpUR1hLq6WjScxUV8jecn4wgzaQ8D9_wJ9-HZAKOa_1s8-Xq-S0zye_lTF4KpWgVHKedO-EJot6gDUweixvUoVd8DEaR7uUvENKPchVyOI9HEAn6innqaYi0hjotKy3e5lH30c0tbd4V4-2snDaS-iQpL7dgyf8xHzdhL-rBMa3oFJwW7rfc_tHSBTcSY_1JplphHRJy9CfNbKVSW_wTWXyZXFiUayu7REtm3kVe6N8M-ethMJmiYTBi8',
    category: 'Acessórios',
    sizes: ['Tamanho Único'],
    description: 'Gorro de malha premium de toque suave com logótipo bordado de alta densidade.',
    isLimited: true,
    colors: ['Preto'],
  },
  {
    id: '7',
    name: 'Statement Tee',
    price: 14900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkcpXRRoEdM9JMFy-EzPQzdW8Emk6DXwDmR4jJnCM9qKaDgNdIPexfTw2gBslyoTrZFhChFVa1NZShbiaIi1IJuB4dKj1dfvdrHpItXiPVGxUjbnGi34EBtzdHZ_L32ipNHAWRj8ZREXqmHUk_QHzfgmSVcL-YyCyq27FlQ1mUb7mnCwLvBbpkd1xy10MQle6gz8_pBKzvsSwfYBHwQ5LrphFD6rOeM7M8DMX6TVLoMqxbD5o-DUBpWYBXf17ECqMh59aTDKbB-ZE',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Gráfico em relevo de alta densidade na frente e nas costas. Quantidade limitada.',
    colors: ['Branco'],
  },
  {
    id: '8',
    name: 'Shadow Windbreaker',
    price: 41900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAjsa63YNT5-ecuEhH5ykPamZVgAGVo-OoY9r_KYte8725kl7RB3qw1bKHf5W0CFtRgpVO-2Eq7zN7dubORn3bPs2-kkiXXdEAFSdtrWLMfYlQPbJYPQatvajWTbyj4hfu51Uk-jGzOpVGT7513WjzS6h0HfJavy6aXyJa2qjcf91kWw0aRi54876xhoe85lBVPE3DiUM-xSfkoVIBP_wyXDT4QFPOH-Nto6YSRH8d5WH9jnZaixNBx-WVqPcIAYj9zWW2B_0ioBjU',
    category: 'Casacos',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Tecido técnico leve com detalhes refletores 3M.',
    colors: ['Preto'],
  },
  {
    id: '9',
    name: 'District Jacket',
    price: 52900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAL4rCwwkIQP0S6U1G_5k1WqO3LLPSym5Mr2xVP71Xk3DYqGs6hn0MfQwZNQZPCzRNE_2nnBcYd3VhfCoOXImdl9_IX7Uo-9pL3bXGtHh4xEjjdGpJ6zpPK9vxTwBP_eWGX_DVWfc4GRIqHpiqrC6Z2-uAete9bU2bPrgYR8eh9RhccAXBVUTIUEczKgNn3sV-wj_T0tTSje1DK-wnrTF-P4OoRl8byLktx9qLJDwmBMmHhkUPOqV-AtGwU0yfz3KwdfjK8waLOhGs',
    category: 'Casacos',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Ganga crua pesada de 14oz. Acabamento desgastado personalizado.',
    colors: ['Ganga'],
  },
  {
    id: '10',
    name: 'Urban Rush Sneakers',
    price: 78900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDHHQsqWXsWrlM3ofBqpngi8wv1ODRE_H_43xr-fTPC4vwJwSdhhonRn9ikap6hLtcUg7zkbMB-t9McTNS-E6pv7y6PryKZti42rVw3xPRkOhhEJCWq9IHtrgm4Dcz6cc-RdV1MV5TCMAUokUARjELSM5GCvR7pNiCs96nc6adG7wW2DhY0xQXIsm42zAZNSOxTukCRr_GQmrt-V9FmffXyXfR6dNGwEkhST-ZWK64HbCfUMEN8l1Rdt9-jsJQN7xvwb_oWsrPFBvY',
    category: 'Calçado',
    sizes: ['38', '39', '40', '41', '42', '43', '44'],
    description: 'Design de sola arquitetónica. Construção em pele premium.',
    colors: ['Preto/Branco'],
  },
  {
    id: '11',
    name: 'Graffiti Logo Tee',
    price: 14900,
    originalPrice: 18900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4i0tmzFUG3AEaM9LMQxLHIL8nxRYqgLNhf6ncFD5DDqIReFrnIU8em3nGMwp3nMcSvr0bd631bwdZgz2a3zhJlm391HWWJU54QJG1uI9O5ybTKxsTYpqB5-b_0HVHXQ9IpZ2tIqy61L0tc9h3KD7g-OcMm8enW6vT-yLUPLEUhCNyIDebnpfOXS96gQxlYet69nHY5L0_22BZPrz4GHRXswu0FD5UeKJd47WEVbvdRnIIJ0nY0izr-cBsQPlicJa-LKgVkCIyHK8',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Preto / Algodão Pesado',
    isLimited: true,
    colors: ['Preto'],
  },
  {
    id: '12',
    name: 'Monarch Oversized',
    price: 18900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBllnmh-LjiDJli9gUWweNdh7HlzFrCKDJ0jc14B46QxhrpfFWwKyptHKx31ch6qsHjQIlvv1rY7uVFGjpJXaN-RexJTSaIlyW55u2b4RlkqfUsu31vfaF9PHsAIJrrlcpucJxhW2lNi0cYBHpUUZhldF2UZVJa_5cL4kxC_igEFTVwgRyCm_YX3daJswTN9GbloFi1wdRLYSIBP0TwnEW8v6YydQAH5ECnQtpk7HR6NatJKpmkOcWhcQIOLkzPp7vHhEwTTDZGKCk',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Bege / Corte Quadrado',
    isBestSeller: true,
    colors: ['Bege'],
  },
  {
    id: '13',
    name: 'Concrete Jungle',
    price: 15900,
    originalPrice: 19900,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4ax83Js4RwF78O266bdxHTBn1STu0Ax-CAuCaB7VygzIUdFTOKPhzkRFm1RX2UNXr0skYuO5xZo9XKcqdM2e9YXdhxEDjSQEYbgt3mxOBYoUmIOiwHEieYfSJcCRFO-cdZt9omnL9TGIBQZsjVz5J8hYloQBkTq0unA_1faDyDb2A1SQufhPg2hcvFn_GwhYNRsRG0e5_MELxmnypLDWY1IxSwPNeKAjkY-w4_Krm6XJiKzk8f2hTTr2pVxZ4aGND9-nJUJ4QNnc',
    category: 'T-shirts',
    sizes: ['S', 'M', 'L', 'XL'],
    description: 'Cinza Ardósia / Gráfico',
    colors: ['Cinza Ardósia'],
  }
];
