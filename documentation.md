# Documentation for Trainer 
svendeprøve, something  
forår 2023

## Trainer appen
bla bla vla hvad er det for en app

## Tech-stack

- **React** Det er et fram work
jeg har valgt react fordi - god documentation, stor community, stor efterspørgsel på arbejdmarket 
- **Tailwind** fordi det er godt
hurtigere end normal css, overskuelighed kompatibilitet,
standardisering

## perskepektivering


## skarlering

## kode-eksempel

Jeg har valgt xyz kode

```javascript
useEffect(() => {
    (async function(){
        if(!url) return
        
        try {
            
            setLoading(true)
            const res = await axios({url, method, headers})
            setData(res.data)
        } catch (error) {
         setError("du har fået en fejl")
         console.error(error)   
        }
        finally{
            setLoading(false)
        }
    })()
    
    /*eslint-disable-next-line */
}, [url]);


```

**forklaring**
bla bla bla
