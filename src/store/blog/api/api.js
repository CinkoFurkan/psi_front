import axios from "axios";
import {setLikes, setViews} from "../actions/actions";


const increaceLikesAPI = async (id, newLike, newViews) => {
    try {
        const {data} = await axios.put("/psinous_app/api/like_view/", {id, new_like: newLike, new_view: newViews})
        setLikes(id)
    } catch (error) {
        console.log(error.message)
    }
}

const increaseViewsAPI = async (id, newLike, newViews) => {
    try {
        const {data} = await axios.put("/psinous_app/api/like_view/", {id, new_like: newLike, new_view: newViews})
        setViews(id)
    } catch (error) {
        console.log(error.message)
    }
}

export {increaceLikesAPI, increaseViewsAPI}