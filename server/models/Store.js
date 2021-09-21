const { Schema, model, Types } = require('mongoose');

const StoreSchema = new Schema(
    {
        storeId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        storeName: {
            type: String,
            required: true
        },
        storeOwner: {
            type: Schema.Types.ObjectId,
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