let cacheData = 'appV1';
this.addEventListener('install',(event)=>{
    event.waitUntil(
        caches.open(cacheData).then((cache)=>{
            cache.addAll([
                '/static/js/bundle.js',
                '/index.html',
                '/',
                '/book-store',
                '/bookDetails',
                '/bookListing',
                '/schoolDetails',
                '/uploadBook',
                '/static/js/main.544e39f5.js'
            ])
        })
    )
})

this.addEventListener('fetch',(event)=>{
    if(!navigator.onLine){
        event.respondWith(
            caches.match(event.request).then((resp)=>{
                if(resp){
                    return resp
                }
            })
        )
    }
})