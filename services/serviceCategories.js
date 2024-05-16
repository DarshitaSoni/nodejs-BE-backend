const ServiceCategoryModal = require('../models/serviceCategories');

const getCommercialServiceCategories = async (request) => {
    try {
        const onlyCommercial = request.query.only_commercial;
        if (onlyCommercial && onlyCommercial === 'true') {
            const data = await ServiceCategoryModal.find({
                service_category_group_name: 'Commercial'
            });
            return data;
        }
    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getCommercialServiceCategories
}