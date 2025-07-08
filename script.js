const loader = document.getElementById('loader');
const output = document.getElementById('output');

function fakeDataFetch (){
    return new Promise((resolve, reject) =>{
        let success = true;

        setTimeout(() =>{
            if(success){
                resolve('Data fetch successfully.')
            }
            else{
                reject('Data fetch Rejected.')
            }
        },3000)
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