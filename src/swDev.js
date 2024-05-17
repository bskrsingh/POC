export default function swDev(){
    debugger
    let swUrl = `${process.env.PUBLIC_URL}/sw.js`
    navigator.serviceWorker.register(swUrl).then((res)=>{
        console.log('res',res);
    });
}