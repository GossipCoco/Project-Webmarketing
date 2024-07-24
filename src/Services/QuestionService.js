import http from '../http/http-common'

class QuestionClass{
    GetAllQuestions(){
        return http.get('/Question')
    }
}

export default new QuestionClass