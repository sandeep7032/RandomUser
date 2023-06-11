import axios from 'axios'

export const getUser = (setUsers, setState) => {
    axios.get("https://randomuser.me/api/?results=20")
        .then((res) => {
            console.log(res.data.results)
            setUsers(res.data.results)
            setState(res.data.results)
        })
        .catch((error) => {
            alert("Data not Found")
        })
}
