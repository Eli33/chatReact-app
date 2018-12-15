import { type } from "os";
import { dispatch } from "rxjs/internal/observable/range";
import axios from 'axios'
import{enviaMensagem} from './chat'

export const conversaWatsonRequest =() =>{
    return{
        type:'CONVERSA_WATSON_REQUEST',
        carregando: true,
        erro: false
    }

}
export const conversaWatsonSucess = (respostas)=>{
    return {
    type: 'CONVERSA_WATSON_SUCESS',
    respostas,
    carregando: false,
    erro:false
    }
}
export const conversaWatsonErro = () =>{
    return {
        type: 'CONVERSA_WATSON_ERROR',
        carregando: false,
        erro:true
    }
}
export const conversaWatson = ((mensagem, contexto)=>{
return dispatch => {
    
    dispatch(conversaWatsonRequest())
    const url = 'https://us-central1-chatbot-em-react-app.cloudfunctions.net/conversa'
    
    axios
    .post(url,{ input: { text: mensagem.texto }, context: contexto})
    .then((data) => {
        dispatch(conversaWatsonSucess(data))
        const msg = {
            texto: data.data.output.text[0],
            origem:'bot'
        }
        dispatch(enviaMensagem())
    })
    .catch(() => dispatch(conversaWatsonErro()))
   }
})