let btn = document.getElementById('btn');
btn.addEventListener("click", function(){
    fetch('https://thatsthespir.it/api')
    .then((response) => response.json())
    .then((data)=>{
        document.getElementById('output').innerHTML = data.quote;
    })
    .catch((err) =>{
        console.log(err);
    });
  });