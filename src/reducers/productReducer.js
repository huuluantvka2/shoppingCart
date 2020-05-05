// import { v4 as uuidv4 } from 'uuid';
var initialState = [
    {
        id : 1,
        name : 'Samsung Galaxy A11',
        rating : 4,
        description : 'Xuất xứ từ Trung Quốc',
        image : 'https://cdn.tgdd.vn/Products/Images/42/216173/samsung-galaxy-a11-600x600-3-400x400.jpg',
        reventory : 100,
        price :350
    },
    {
        id : 2,
        name : 'OPPO A91',
        rating : 3,
        description : 'Xuất xứ từ Tàu Khựa',
        image : 'https://cdn.tgdd.vn/Products/Images/42/217287/oppo-a91-trang-600x600-400x400.jpg',
        reventory : 100,
        price :500
    },
    {
        id : 3,
        name : 'iPhone 11 Pro Max 512GB',
        rating : 5,
        description : 'Xuất xứ từ Trung Quốc',
        image : 'https://cdn.tgdd.vn/Products/Images/42/210654/iphone-11-pro-max-512gb-gold-400x400.jpg',
        reventory : 100,
        price :2500
    },
    {
        id : 4,
        name : 'iPhone 11 Pro Max 64GB',
        rating : 4,
        description : 'Xuất xứ từ Trung Quốc',
        image : 'https://cdn.tgdd.vn/Products/Images/42/200533/iphone-11-pro-max-green-400x400.jpg',
        reventory : 100,
        price :2000
    },
    {
        id : 5,
        name : 'Xiaomi Redmi Note 8 (4GB/128GB)',
        rating : 4,
        description : 'Xuất xứ từ Trung Quốc',
        image : 'https://cdn.tgdd.vn/Products/Images/42/214924/xiaomi-redmi-note-9s-4gb-green-400x460-400x400.jpg',
        reventory : 100,
        price :400
    },
    {
        id : 6,
        name : 'Vsmart Joy 3 (3GB/32GB)',
        rating : 2,
        description : 'Xuất xứ từ Trung Quốc',
        image : 'https://cdn.tgdd.vn/Products/Images/42/217920/vsmart-joy-3-tim-600x600-400x400.jpg',
        reventory : 100,
        price :300
    },
];

const appReducers = (state = initialState,action) => {
    switch(action.type){
        default : return state;
    }
};

export default appReducers;