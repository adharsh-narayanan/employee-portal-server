const jServer=require('json-server')

const newServer=jServer.create()

const router = jServer.router('data.json')

const midware=jServer.defaults()

newServer.use(midware)
newServer.use(router)

const port=4003 || process.env.PORT 

newServer.listen(port,()=>{
    console.log('server running successfully at port 4003');
})