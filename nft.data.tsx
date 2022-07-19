import { INFT } from "./components/NFTCard/types";
// assets
import bored_ape1 from "./assets/nft/1.jpg";
import bored_ape2 from "./assets/nft/2.jpg";
import bored_ape3 from "./assets/nft/3.jpg";
import bored_ape4 from "./assets/nft/4.jpg";

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
                name: "Bored ape",
                image: bored_ape1,
                data: {
                    price: 5.5,
                    likes: 20,
                    comments: 10
                },
                comments: [],
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 4,
                    name: "Danielle",
                    background: colors.orange,
                    pfp: mutantape,
                },
                collection: "collection 1"
            },
            {
                id: 2,
                name: "Bored ape2",
                image: bored_ape2,
                data: {
                    price: 4.2,
                    likes: 32,
                    comments: 12
                },
                comments: [],
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 5,
                    name: "Tom",
                    background: colors.orange,
                    pfp: coolcats,
                },
                collection: "collection 1"
            },
            {
                id: 3,
                name: "Bored ape 3",
                image: bored_ape3,
                data: {
                    price: 6.4,
                    likes: 62,
                    comments: 24
                },
                comments: [],
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator: {
                    id: 2,
                    name: "Austin",
                    background: colors.orange,
                    pfp: coolcats,
                },
                collection: "collection 1"
            },
            {
                id: 4,
                name: "Bored ape 4",
                image: bored_ape4,
                data: {
                    price: 2.1,
                    likes: 80,
                    comments: 28
                },
                comments: [],
                description: "Quisque cursus, metus vitae pharetra Nam libero tempore, cum soluta nobis est eligendi",
                creator:         {
                    id: 1,
                    name: "Anthoney",
                    background: colors.orange,
                    pfp: bayc,
                },
                collection: "collection 1"
            },
            
        ]
];