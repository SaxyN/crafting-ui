import axios from 'axios';

const closeCraftUrl = 'http://esx_crafting/closeCraft'
const craftItemUrl = 'http://esx_crafting/craftItem'

export const closeCraft = () => {
    return axios.post(closeCraftUrl, {})
}

export const craftItem = (item) => {
    return axios.post(craftItemUrl, {item})
}