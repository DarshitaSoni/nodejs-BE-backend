const ZipcodeModal = require('../models/zipcodes');
const CountryModal = require('../models/country');
const StateModal = require('../models/state');
const CountyModal = require('../models/county');
const axios = require('axios');

const fetchCityStateBasedOnZipcode = async (request) => {
    try {
        const zipcode = request.query.key;
        if (zipcode && zipcode !== '') {
            const data = await ZipcodeModal.find({
                zipcode: zipcode
            });
            if (data && data.length > 0) {
                console.log('data present', data)
            } else {
                console.log('data not present')
                // Make GET request to the external API
                const cityStateResponse = await axios.get(`https://zip.getziptastic.com/v2/US/${zipcode}`);
                console.log('a', cityStateResponse)
                if (cityStateResponse && cityStateResponse['data']) {
                    // countryObject = ;
                    const countryObject = new CountryModal({
                        id: null,
                        slug: null,
                        name: cityStateResponse['data']['country'],
                        country_code: null,
                        phone_code: null,
                    });
                    console.log('country obj', countryObject)
                    const countryResponseData =  await countryObject.save();
                    console.log('================', countryResponseData)
                    const stateObject = new StateModal({
                        id: null,
                        name: cityStateResponse['data']['state'],
                        code: cityStateResponse['data']['state_code'],
                        country_id: countryResponseData['_id'],
                        slug: null,
                    });
                    const stateDataResponse =  await stateObject.save();
                    const countyObject = new CountyModal({
                        id: null,
                        name: cityStateResponse['data']['county'],
                        state_id: stateDataResponse['_id'], 
                        slug: null, 
                    });
                    const countyDataResponse =  await countyObject.save();
                }
            }
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    fetchCityStateBasedOnZipcode
}