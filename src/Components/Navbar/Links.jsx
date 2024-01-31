export const links = [
    {
        name: "Home", submenu: false, link: "/"
    },
    {
        name: "About", submenu: true, link: "/about/about-us", sublinks: [
            {
                name: "About Us",
                link: "/about/about-us",
            },
            {
                name: "Mission & Vision",
                link: "/about/mission-vission"
            },
            {
                name: "Our Philosophy",
                link: "/about/philosophy"
            },
            {
                name: "Governing Body",
                link: "/about/governing-body"
            },
            {
                name: "Our Team",
                link: "/about/team"
            }
        ]
    },
    {
        name: "Programs", submenu: false, link: "programs"
    },
    {
        name: "Information Center", submenu: true, link: "/information-center/news", sublinks: [
            {
                name: "News",
                link: "/information-center/news"
            },
            {
                name: "Blogs",
                link: "/information-center/blogs"
            },
            {
                name: "Facilities",
                link: "/information-center/facilities"
            },
            {
                name: "School Calender",
                link: "/information-center/calender"
            },
            {
                name: "ECA",
                link: "/information-center/ECA"
            }
        ]
    },
    {
        name: "Gallery", submenu: true, sublinks: [
            {
                name: "Image Gallery",
                link: "/aboutus"
            },
            {
                name: "Video Gallery",
                link: "/ch"
            }
        ]
    },
]