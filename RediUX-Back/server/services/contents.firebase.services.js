import { collection, getDocs, addDoc, doc, getDoc, updateDoc, deleteDoc, query, onSnapshot, where } from "firebase/firestore"
import db from "../db/firebase.connection"

class ContentServices {

    static list (request, response) {
        getDocs(collection(db, "content"))
        .then(
            (contentSnapshot)=>{
                const contents = []
                contentSnapshot.forEach(
                    (content)=>{
                        const _id = content.id
                        const {titulo, tags, midia, descricao, link, autor, imgUrl, file} = content.data()
                        contents.push({_id, tags, titulo, midia, descricao, link, autor, imgUrl, file})
                    }
                )
                response.json(contents)
            }
        )
        .catch(error=>console.log(error))
    }


    static register = (request, response) => {
        addDoc(collection(db, "content"), request.body)
            .then(
                (docRef) => {
                    response.json({_id:docRef.id})
                }
            )
            .catch(error => console.log(error))
    }

    static retrieve(request, response) {
        const docRef = doc(db, "content", request.params.id)
        getDoc(docRef)
            .then(  
                (content) => {
                    const res = {
                        titulo: content.data().titulo,
                        tags: content.data().tags,
                        midia: content.data().midia,
                        description: content.data().descricao,
                        link: content.data().link,
                        author: content.data().autor,
                        imgUrl: content.data().imgUrl,
                        file: content.data().file,
                    }
                    response.json(res)
                }
            )
            .catch(error => console.log(error))
    }

    static update = (request,response) => {
        updateDoc(
            doc(db,"content", request.params.id),
            request.body)
            .then(
                () => {
                    response.json({_id:request.params.id})
                }
            )
            .catch(error => console.log(error))
    }

    static delete = (request,response) => {
        deleteDoc(doc(db, "content", request.params.id))
            .then(() => response.json({_id:request.params.id}))
            .catch(error => console.log(error))
    }

    static search(request, response) {
        const searchTerm = String(request.query.term).toLowerCase();
        const searchMedia = String(request.query.media).toLowerCase();

        
        const contentCollectionRef = collection(db, "content");
        
        const contentHasMedia = (objMedia) => {
            if (searchMedia === "null") {
                return true; // Permitir a pesquisa sem considerar o valor de 'media'
            }
            return objMedia[searchMedia];
        }
        
        console.log("Valor do parâmetro 'media':", request.query.media);
        getDocs(contentCollectionRef)
          .then((contentSnapshot) => {
            const contents = [];
            contentSnapshot.forEach((content) => {
              const _id = content.id;
              const { titulo, tags, midia, descricao, link, autor, imgUrl, file } = content.data();
              if (titulo.toLowerCase().includes(searchTerm)&& contentHasMedia(midia)) {
                contents.push({ _id, tags, titulo, midia, descricao, link, autor, imgUrl, file });
              }
            });
            response.json(contents);
          })
          .catch((error) => console.log(error));
      }


}

// module.exports = ContentServices 

export default ContentServices