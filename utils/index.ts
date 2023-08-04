export async function fetchCars(){
    const headers = {
            'X-RapidAPI-Key': '6c12a134cdmshd62323d13ff369ep176af1jsne61af6cd4261',
            'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'

    }

    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
        headers: headers,
    });
    const result = await response.json();

    return result;
}