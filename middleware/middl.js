export default function ({ isServer, req, redirect, route, store }) {
    // let pcOrigin = 'http://localhost:3003'
    // let mobileOrigin = 'http://localhost:3004'
    let isMobile = (ua) => {
        return !!ua.match(/AppleWebKit.*Mobile.*/)
    }
    let userAgent = req ? req.headers['user-agent'] : navigator.userAgent || ''
    if (isMobile(userAgent)) {
        return store.state.isMobile = true
    } else {
        return store.state.isMobile = false
    }
    // 使用redirect 重定向到外链需要加上前缀:http / https
}