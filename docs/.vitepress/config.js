export default {
    themeConfig: {
        search: {
            provider: 'local'
        },
        nav: [
            {
                text: 'Home',
                link: '/'
            },
            {
                text: 'LangGraph',
                link: '/langgraph'
            }
        ],
        sidebar: {
            "/langgraph": [
                {
                    text: "LangGraph",
                    items: [
                        {
                            text: "Started",
                            link: "/langgraph"
                        }
                    ]
                }
            ]
        }
    }
}