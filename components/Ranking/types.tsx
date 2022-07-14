export interface RankingProps {
    id: number;
    name: string;
    rank: string
    volume?: string;
    trades?: string;
    sales?: string;
    MKTCap?: string;
    art: {
        icon: any;
        background: string;
    };
}

export interface RankingSectionProps {
    data: Array<RankingProps>;
}

export interface RankingAviProps {
    icon: any;
    background: string;
}