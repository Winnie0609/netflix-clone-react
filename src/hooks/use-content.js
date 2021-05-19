import { useContext, useEffect, useState } from "react"
import { FirebaseContext } from "../context/firebase"

function useContent(target) {
    const { firebase } = useContext(FirebaseContext)
    const [ content, setContent ] = useState([])

    useEffect(() => {
        firebase
            .firestore()
            .collection(target)
            .get()
            .then((snapshot) => {
                const allContent = snapshot.docs.map((contentObj) => ({
                    ...contentObj.data(),
                    docID : contentObj.id
                }))

                setContent(allContent)
            })
            
            .catch((error) => {
                console.error(error)
            })
    }, [])
    
    return { [target] : content }
}

export default useContent