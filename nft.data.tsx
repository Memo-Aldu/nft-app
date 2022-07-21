import { INFT } from "./components/NFTCard/types";
// assets
import bored_ape1 from "./assets/nft/1.jpg";
import bored_ape2 from "./assets/nft/2.jpg";
import bored_ape3 from "./assets/nft/3.jpg";
import bored_ape4 from "./assets/nft/4.jpg";
import cat_zombie from "./assets/nft/5.png";
import cat_astro from "./assets/nft/6.png";
import cat_king from "./assets/nft/14.png";
import cryptopunks_1 from "./assets/nft/7.jpg";
import cryptopunks_2 from "./assets/nft/8.png";
import mutan_1 from "./assets/nft/9.jpg";
import mutan_2 from "./assets/nft/10.jpg";
import mutan_3 from "./assets/nft/11.jpg";
import mutan_4 from "./assets/nft/12.png";
import mutan_5 from "./assets/nft/13.png";

import bayc from "./assets/nft-collections/bayc-1.png";
import coolcats from "./assets/nft-collections/coolcats.png";
import cryptopunks from "./assets/nft-collections/Cryptopunks.png";
import meebits from "./assets/nft-collections/meebits.png";
import mutantape from "./assets/nft-collections/mutantape.png";

import {colors} from "./components/colors";


export const data = [
        [
            {
                id: 1,
                name: "Bored Ape",
                image: bored_ape1,
                data: {
                    price: 5.5,
                    likes: 20,
                    comments: [
                        {
                            id: 1,
                            text: "This is a comment",
                            author: {
                                id: 1,
                                name: "Meebits",
                                description: "Art studio Meebits",
                                background: colors.orange,
                                pfp: meebits,
                            }
                        },
                        {
                            id: 2,
                            text: "This is a comment 2",
                            author: {
                                id: 2,
                                name: "Austin",
                                description: "Art studio Austin",
                                background: colors.orange,
                                pfp: coolcats,
                            }
                        }, 
                        {
                            id: 3,
                            text: "This is a comment 3",
                            author: {
                                id: 3,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: mutantape,
                            },
                        },
                        {
                            id: 4,
                            text: "This is a comment 4",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: mutantape,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Bayc",
                    description: "Art studio Bayc",
                    background: colors.orange,
                    pfp: bayc,
                },
                collection: "collection 1"
            },
            {
                id: 2,
                name: "Smoking Ape",
                image: bored_ape2,
                data: {
                    price: 4.2,
                    likes: 32,
                    comments: [
                        {
                            id: 1,
                            text: "This is a comment",
                            author: {
                                id: 1,
                                name: "Austin",
                                description: "Art studio Austin",
                                background: colors.orange,
                                pfp: mutantape,
                            }
                        },
                        {
                            id: 2,
                            text: "This is a comment 2",
                            author: {
                                id: 2,
                                name: "Austin",
                                description: "Art studio Austin",
                                background: colors.orange,
                                pfp: cryptopunks,
                            }
                        }, 
                        {
                            id: 3,
                            text: "This is a comment 3",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: coolcats,
                            },
                        }
                    ],
                },

                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Bayc",
                    description: "Art studio Bayc",
                    background: colors.orange,
                    pfp: bayc,
                },
                collection: "collection 1"
            },
            {
                id: 3,
                name: "Smoking Nike Ape",
                image: bored_ape3,
                data: {
                    price: 6.4,
                    likes: 62,
                    comments: [
                        {
                            id: 1,
                            text: "This is a comment",
                            author: {
                                id: 2,
                                name: "Austin",
                                description: "Art studio Austin",
                                background: colors.orange,
                                pfp: coolcats,
                            }
                        },
                        {
                            id: 2,
                            text: "This is a comment 3",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Bayc",
                    description: "Art studio Bayc",
                    background: colors.orange,
                    pfp: bayc,
                },
                collection: "collection 1"
            },
            { 
                id: 4,
                name: "Nike Ape",
                image: bored_ape4,
                data: {
                    price: 2.1,
                    likes: 80,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: bayc,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Bayc",
                    description: "Art studio Bayc",
                    background: colors.orange,
                    pfp: bayc,
                },
                collection: "collection 1"
            },
        ],
        [
            { 
                id: 5,
                name: "Cool Cats Zombie",
                image: cat_zombie,
                data: {
                    price: 3.2,
                    likes: 40,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: bayc,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Cool Cats",
                    description: "Art studio CoolCats",
                    background: colors.orange,
                    pfp: coolcats,
                },
                collection: "collection 2"
            },            { 
                id: 6,
                name: "Cool Cats Astro",
                image: cat_astro,
                data: {
                    price: 4.2,
                    likes: 36,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: mutantape,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Cool Cats",
                    description: "Art studio CoolCats",
                    background: colors.orange,
                    pfp: coolcats,
                },
                collection: "collection 2"
            },
            { 
                id: 14,
                name: "Cool Cats King",
                image: cat_king,
                data: {
                    price: 3.1,
                    likes: 84,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 5,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: mutantape,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Cool Cats",
                    description: "Art studio CoolCats",
                    background: colors.orange,
                    pfp: coolcats,
                },
                collection: "collection 2"
            }
        ],
        [ 
            { 
                id: 7,
                name: "Crypto Punks Smoking",
                image: cryptopunks_1,
                data: {
                    price: 5.0,
                    likes: 43,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Crypto Pucks",
                    description: "Art studio Crypto Pucks",
                    background: colors.orange,
                    pfp: cryptopunks,
                },
                collection: "collection 3"
            },
            { 
                id: 8,
                name: "Crypto Punks Glasses",
                image: cryptopunks_2,
                data: {
                    price: 1.6,
                    likes: 33,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 2,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Crypto Pucks",
                    description: "Art studio Crypto Pucks",
                    background: colors.orange,
                    pfp: cryptopunks,
                },
                collection: "collection 3"
            },
        ],
        [
            { 
                id: 9,
                name: "Meetbits Rainbow",
                image: mutan_1,
                data: {
                    price: 3.6,
                    likes: 55,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 2,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Meetbits",
                    description: "Art studio Meetbits",
                    background: colors.orange,
                    pfp: meebits,
                },
                collection: "collection 4"
            },  
            { 
                id: 116,
                name: "Meetbits Gamer",
                image: mutan_2,
                data: {
                    price: 3.1,
                    likes: 10,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 2,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Meetbits",
                    description: "Art studio Meetbits",
                    background: colors.orange,
                    pfp: meebits,
                },
                collection: "collection 4"
            },  
        ],
        [
            { 
                id: 11,
                name: "Mutant Ape Pink",
                image: mutan_3,
                data: {
                    price: 3.6,
                    likes: 102,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 1,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Mutant Ape",
                    description: "Art studio Mutant Ape",
                    background: colors.orange,
                    pfp: mutantape,
                },
                collection: "collection 5"
            },
            { 
                id: 115,
                name: "Mutant Ape Devil",
                image: mutan_4,
                data: {
                    price: 6.6,
                    likes: 98,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 1,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Mutant Ape",
                    description: "Art studio Mutant Ape",
                    background: colors.orange,
                    pfp: mutantape,
                },
                collection: "collection 5"
            },
            { 
                id: 12,
                name: "Mutant Ape Zombie",
                image: mutan_5,
                data: {
                    price: 5.6,
                    likes: 68,
                    comments: [
                        {
                            id: 1,
                            text: "Best NFT Ever!!!",
                            author: {
                                id: 1,
                                name: "Tom",
                                description: "Art studio Tom",
                                background: colors.orange,
                                pfp: cryptopunks_1,
                            },
                        },
                        {
                            id: 1,
                            text: "Yes, I like this",
                            author: {
                                id: 2,
                                name: "Memo",
                                description: "Art studio Memo",
                                background: colors.orange,
                                pfp: meebits,
                            },
                        }
                    ],
                },
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Mutant Ape",
                    description: "Art studio Mutant Ape",
                    background: colors.orange,
                    pfp: mutantape,
                },
                collection: "collection 5"
            },
        ]
];