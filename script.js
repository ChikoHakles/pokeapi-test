const apilink = "https://pokeapi.co/api/v2/berry/"

async function tampil(api) {
    const data = await fetch(api)
    const value = await data.json()
    const result = value.results.map(data => {
        return {
            label: data.name, 
            value: data.name
        }
    })

    result.sort((a, b) => a.value.localeCompare(b.label))

    console.log(result)

    result.forEach(element => {
        const option = document.createElement("option")
        option.innerHTML = element.value


        document.getElementsByClassName("selector")[0].appendChild(option)
    });
}

tampil(apilink)

const show = (pilihan) => {
    const h1 = document.getElementsByClassName("hasil")[0]
    h1.innerHTML = pilihan
}