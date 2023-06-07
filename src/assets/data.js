import Card1 from "./notifications/Card1.png";
import Card2 from "./notifications/Card2.png";
import Card3 from "./notifications/Card3.png";
import Cohorts from "./Cohorts_1.svg";
import Bell from "./notifications/Bell.png";
import Eye from "./notifications/Eye.png"

export const testimonials  = [
    {
        id: 1,
        name: "Jack F",
        designation:"Ex Blackrock PM",
        reviewMsg: "“Love how Loch integrates portfolio analytics and whale watching into one unified app.”",
    },
    {
        id: 2,
        name: "Yash P",
        designation:"Research, 3poch Crypto Hedge Fund",
        reviewMsg: "“I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!”",
    },
    {
        id: 3,
        name: "Shiv S",
        designation:"Co-Founder Magik Labs",
        reviewMsg: "“Managing my own portfolio is helpful and well designed. What’s really interesting is watching the whales though. No one else has made whale tracking so simple.”",
    },
];

export const features = [
    {
        id: 1,
        title: "Get notified when a highly correlated whale makes a move",
        detail: "Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.",
        icon: Bell,
        isCarousel: true,
        carouselData: [{
            id: 11,
            imgData: Card1,
        },
        {
            id: 12,
            imgData: Card2,
        },
        {
            id: 13,
            imgData: Card3,
        }]
    },
    {
        id: 2,
        title: "Watch what the whales are doing",
        detail: "All whales are not equal. Know exactly what the whales impacting YOUR portfolio are doing.",
        icon: Eye,
        isCarousel: false,
        imgData: Cohorts,
    }
]