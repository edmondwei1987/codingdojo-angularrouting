import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class AuthorService {

  constructor(private _http:HttpClient) { }
  getAuthors(){
    return this._http.get('/api/authors');
  }
  newAuthor(name){
    return this._http.post('/api/authors',{name:name});
  }
  deleteAuthor(id){
    return this._http.delete('/api/author/'+id);
  }
  updateAuthor(author){
    return this._http.put('/api/authors/'+author.id,{name:author.name});
  }
  getAuthor(id){
    return this._http.get('/api/authors/'+id);
  }
  getQuotes(id){
    return this._http.get('/api/quotes/'+id);
  }
  addQuote(id,quote){
    return this._http.post('/api/authors/'+id,{quote:quote});
  }
  vote(author_id,quote_id,action){
    return this._http.post('/api/authors/'+author_id+'/quotes/'+quote_id,{vote:action});
  }
  deleteQuote(author_id,quote_id){
    return this._http.delete('/api/authors/'+author_id+'/quotes/'+quote_id);
  }
}
