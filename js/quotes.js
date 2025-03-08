const quotes = [
    {
        quote: "재영이는 멋져",
        author: "재영1",
    },
    {
        quote: "재영이는 귀여워",
        author: "재영2",
    },
    {
        quote: "재영이는 잘생겼어",
        author: "재영3",
    },
    {
        quote: "재영이는 예뻐",
        author: "재영4",
    },
    {
        quote: "재영이는 착해",
        author: "재영5",
    },
    {
        quote: "재영이는 배려가 넘쳐",
        author: "재영6",
    },
    {
        quote: "재영이는 상냥해",
        author: "재영7",
    },
    {
        quote: "재영이는 섬세해",
        author: "재영8",
    },
    {
        quote: "재영이는 활기차",
        author: "재영9",
    },
    {
        quote: "재영이는 자상해",
        author: "재영10"
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = todaysQuote.author