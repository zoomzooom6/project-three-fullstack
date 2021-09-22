const { Schema, model } = require('mongoose');

const StoreSchema = new Schema(
    {
        storeName: {
            type: String,
            required: true
        },
        storeOwner: {
            type: Schema.Types.String,
            ref: 'User',
            required: true
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product'
            }
        ]
    },
    {
        toJSON: {
            virtuals: true
        },
        id: false
    }
);

StoreSchema.virtual('productCount').get(function () {
    return this.products.length;
})

const Store = model('Store', StoreSchema);

module.exports = Store;