export const mobile = "07039734721"
export const email = "info@lincgreen.org"
export const fcbk = ""
export const twtr = ""
export const lkdn = ""
export const ingr = ""
export const ytbe = "/"
export const location = "A108 ABC Street, Port Harcourt, PH 535022 Nigeria"
export const medium = ""
export const iam = "LincGreenProspects"

export const tabs = [
    { text: "About LincGreen", href: "/#about" },
    { text: "Portfolio", href: "/#portfolio" },
    { text: "Catch up", href: "/#contact" },
    { text: "Blog", href: "/pages/blog" }
]

export const intro = `We, the founding members of 
the LincGreen Initiative NGO, in recognition of the urgent 
need to address climate crises faced by communities in Nigeria, 
and driven by a commitment to fostering collaboration between 
technical professionals and communities, hereby establish this 
constitution to guide our mission, vision, principles, and 
operations. `

export const objectives = [
    { text: "Collaboration", icon: "bi bi-command", href: "" },
    { text: "Research", icon: "bi bi-easel", href: "" },
    { text: "Development", icon: "bi bi-gem", href: "" },
    { text: "Platform", icon: "bi bi-geo-alt", href: "" }
]

export const vizn = `A world where communities are resilient to climate change 
through innovative solutions developed by collaborative efforts between technical 
professionals and local communities.`

export const aboutIntro = `Conducting research to trace the causes 
and effects of climate crises and recommending evidence-based solutions.`

export const aboutArticle = {
    topic: "",
    excerpt: "",
    image: ""
}

export const topicAbout = `Climate Smart Agriculture: Supporting Smallholder Farmers 
to Adapt to the Impact of Climate Change
`

export const storyAbout = `Climate Smart Agriculture: Supporting Smallholder Farmers to 
Adapt to the Impact of Climate Change As climate change continues to pose significant 
challenges to agriculture worldwide, smallholder farmers are among the most vulnerable. 
Climate Smart Agriculture (CSA) is emerging as a vital strategy to help these farmers adapt 
to the changing climate. By integrating sustainable practices, improving resilience, and 
enhancing productivity, CSA supports smallholder farmers in maintaining their livelihoods and 
ensuring food security. This blog explores how CSA initiatives are empowering farmers to 
overcome climate-related challenges and build a more sustainable future.`

export const greens = [
    {text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`},
    {text: `Investigate the causes and effects of climate crises and provide evidence-based solutions.
    `},
    {text: `Design models, systems, and technologies to effectively address climate crises through structured frameworks and actionable plans.
    `},
    {text: `Offer a platform for young people with technological and scientific solutions to collaborate on climate change mitigation and adaptation.`},
    {text: `Increase awareness of climate issues and promote policy changes at local, national, and international levels.`},
    {text: `Enhance education and build capacity related to climate change and innovation.`}
]

export const clientItems = [
    { src: "/assets/img/clients/client-1.png" },
    { src: "/assets/img/clients/client-2.png" },
    { src: "/assets/img/clients/client-3.png" },
    { src: "/assets/img/clients/client-4.png" },
    { src: "/assets/img/clients/client-5.png" },
    { src: "/assets/img/clients/client-6.png" },
    { src: "/assets/img/clients/client-7.png" },
    { src: "/assets/img/clients/client-8.png" }
]

export const textService = `Raising awareness about climate issues and advocating for 
policy changes at local, national, and international levels.`

export const portfolios = [
    { iconClassName: "bi bi-activity", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" },
    { iconClassName: "bi bi-broadcast", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" },
    { iconClassName: "bi bi-easel", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" },
    { iconClassName: "bi bi-bounding-box-circles", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" },
    { iconClassName: "bi bi-calendar4-week", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" },
    { iconClassName: "bi bi-chat-square-text", title: "In the journey...", text: `Encourage cooperation among technical professionals, communities, 
    and young innovators to identify and understand specific climate crises 
    faced by communities.`, href: "" }
]

export const iconClasses: any = {
    research: "bi bi-easel",
    outreach: "bi bi-broadcast",
    timeline: "bi bi-calendar4-week",
    education: "bi bi-chat-square-text",
    individual: "bi bi-bounding-box-circles",
    development: "bi bi-activity",
    collaboration: "bi bi-chat-square-text",
    platform: "bi bi-bounding-box-circles"
}

export const contactText = `Collaborate with us to conduct research tracing the causes and effects of 
climate crises and to recommend evidence-based solutions.`

export const makeTime = ({ timestamp }: { timestamp: string }) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    };
    const date = new Date(timestamp)
    return date.toLocaleString('en-US', options)
};
