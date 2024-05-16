const { fetchCityStateBasedOnZipcode } = require('../services/zipcodes');

module.exports = {
    fetchCityStateBasedOnKey: async (req,res) => {
        try {
            console.log('req')
            const listOfDomainsResp = await fetchCityStateBasedOnZipcode(req);
            return res.status(200).json({data: listOfDomainsResp});
        } catch (err) {
            return res.status(500).json({message: 'error', error: err});
        }
    }
}