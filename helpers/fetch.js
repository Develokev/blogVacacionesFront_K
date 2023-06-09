//*FETCH
const petition = async (url, method, body = {}) => {
    let options = {};
    console.log('esta es la url que llega al fetch', url)
    const data = { ...body }


    try {
        if (method == "POST" || method == "PUT" || method == "DELETE") {

            options = {
                method: method,
                body: JSON.stringify(data),
                headers: {
                    "Content-type": "application/json",
                }
            }
        }

        // console.log('esto es options', options)
        let respuesta = await fetch(url, options);

        let resp = await respuesta.json();

        return resp;

    } catch (error) {
        console.log('FAILED while fetching', error)
    }
}



module.exports = { petition };