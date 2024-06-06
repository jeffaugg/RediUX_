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
        .catch(error => {
            console.error("Erro ao listar conteúdo:", error);
            response.status(500).json({ error: "Erro interno ao listar conteúdo." });
        });
    }


    static register = (request, response) => {
        addDoc(collection(db, "content"), request.body)
            .then(
                (docRef) => {
                    response.json({_id:docRef.id})
                }
            )
            .catch(error => {
                console.error("Erro ao registrar conteúdo:", error);
                response.status(500).json({ error: "Erro interno ao registrar conteúdo." });
            });
    }

    static retrieve(request, response) {
        const docRef = doc(db, "content", request.params.id)
        getDoc(docRef)
            .then(  
                (content) => {
                    if (content.exists()) {
                        const res = {
                            titulo: content.data().titulo,
                            tags: content.data().tags,
                            midia: content.data().midia,
                            descricao: content.data().descricao,
                            link: content.data().link,
                            autor: content.data().autor,
                            imgUrl: content.data().imgUrl,
                            file: content.data().file,
                        }
                        response.json(res)
                    } else {
                        response.status(404).json({ error: "Conteúdo não encontrado." });
                    }
                }
            )
            .catch(error => {
                console.error("Erro ao recuperar conteúdo:", error);
                response.status(500).json({ error: "Erro interno ao recuperar conteúdo." });
            });
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
            .catch(error => {
                console.error("Erro ao atualizar conteúdo:", error);
                response.status(500).json({ error: "Erro interno ao atualizar conteúdo." });
            });
    }

    static delete = (request,response) => {
        deleteDoc(doc(db, "content", request.params.id))
            .then(() => response.json({_id:request.params.id}))
            .catch(error => {
                console.error("Erro ao deletar conteúdo:", error);
                response.status(500).json({ error: "Erro interno ao deletar conteúdo." });
            });
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
          .catch((error) => {
              console.error("Erro ao buscar conteúdo:", error);
              response.status(500).json({ error: "Erro interno ao buscar conteúdo." });
          });
      }
}

export default ContentServices
