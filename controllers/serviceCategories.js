const { getCommercialServiceCategories } = require('../services/serviceCategories');

module.exports = {
    getServiceCategories: async (req,res) => {
        try {
            const serviceCategoriesResponse = await getCommercialServiceCategories(req);
            if (serviceCategoriesResponse && serviceCategoriesResponse.length > 0) {
                for (let i = 0; i < serviceCategoriesResponse.length; i++) {
                    serviceCategoriesResponse[i]['slug'] = serviceCategoriesResponse[i]['_id'];
                    serviceCategoriesResponse[i]['id'] = serviceCategoriesResponse[i]['_id'];
                }
            }
            return res.status(200).json({data: serviceCategoriesResponse});
        } catch (err) {
            return res.status(500).json({message: 'error', error: err});
        }
    }
}