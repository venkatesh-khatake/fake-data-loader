const loader = document.getElementById('loader');
const output = document.getElementById('output');

function fakeDataFetch (){
    return new Promise((resolve, reject) =>{
        let success = true;

        setTimeout(() =>{
            if(success){
                resolve('Data fetched successfully.')
            }
            else{
                reject('Failed to fetch data.')
            }
        },5000)
    });
}

fakeDataFetch()
.then((result)=>{
    output.innerText = result;
    output.style.color = 'green';
})
.catch((error) =>{
    output.innerText = error;
    output.style.color = 'red';
})
.finally(()=>{
    loader.style.display = 'none'
})