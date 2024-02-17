const ROUTES = [
    {
        HOME: {
            name: 'Home',
            url: '/'
        },
    },
    {
        MEMBERS: {
            name: 'Members',
            url: '/members'
        },
    },
    {
        TAGS: {
            name: "Tags",
            url: "/tags",
        },
    },
    {
        TASKS: {
            name: "Tasks",
            url: "/tasks",
        },
    }
]


const URL_ROUTES = {}

ROUTES.forEach((route) => {
    const key = Object.keys(route).at(0)
    const { url } = Object.values(route).at(0)
    URL_ROUTES[key] = url
})


export {
    ROUTES,
    URL_ROUTES
}

