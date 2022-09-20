export const fetchAPI=(api)=>{
    return fetch(api)
    .then((res)=>{
        return res.json();
    })
    .catch((err)=>{
        throw new Error('Invalid response')
    })
    // finally(()=>{
    //     console.log('Over..!')
    // })
}