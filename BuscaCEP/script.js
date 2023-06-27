function buscaCep(){
    let cep = document.getElementById("cep").value
    let cidade = document.getElementById("Cidade")
    let estado = document.getElementById("Estado")
    let bairro = document.getElementById("Bairro")
    let logradouro = document.getElementById("Logradouro")
    let cepValido = cep.substr(0,5)+ "-" + cep.substr(5)+".json"
    let url = "https://cdn.apicep.com/file/apicep/"+cepValido
    fetch(url)
            .then(res => res.json())
            .then(data => {
                cidade.value = "    "+data.city;
                estado.value = "    "+data.state;
                bairro.value = "    "+data.district;
                logradouro.value = "    "+data.address;
            })
            

}