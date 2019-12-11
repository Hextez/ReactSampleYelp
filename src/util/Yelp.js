const apiKey = "YSd-NNBpoQsiXWNHlYCKQWX3HParbmycdkEbTOLIeL3V5b-a-TtrRhp6dATlBLb9lq14uHP57XVSgmAAUXi4rIC0jdIuEcP2ovZAsPVzTMrXxsJo2CtRlJGNwXjvXXYx";
const Yelp = {};


export const search = (term, location, sortBy) =>{
    return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
    {
        headers: { "Authorization" : `Bearer ${apiKey}`}
    }).then(response => {
        return response.json()
    }).then(jsonResponse => {
        if (jsonResponse.businesses){
            return jsonResponse.businesses.map(business => {
                return {id: business.id,
                        imageSrc: business.imageSrc,
                        name: business.name,
                        address: business.address,
                        city: business.city,
                        state: business.state,
                        zipCode: business.zipCode,
                        category: business.category,
                        rating: business.rating,
                        reviewCount: business.reviewCount}
            })
        }
    });
}