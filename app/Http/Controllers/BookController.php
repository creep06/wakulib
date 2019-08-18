<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;

class BookController extends Controller
{
    // 全ての自分の本情報をjsonで返す
    public function index($user_id)
    {
        // $books = User::find($user_id)->books();
        $books = Book::where('user_id', $user_id)->get();
        return $books;
    }

    public function create(Request $req)
    {
        $book = new Book;
        $book->title = $req->title;
        $book->phonetic = $req->phonetic;
        $book->author = $req->author;
        $book->volume = $req->volume;
        $book->chapter = $req->chapter;
        $book->status = $req->status;
        $book->user_id = $req->user_id;
        $book->save();
        return $book;
    }

    public function update(Request $req, $id)
    {
        $book = Book::find($id);
        $book->title = $req->title;
        $book->phonetic = $req->phonetic;
        $book->author = $req->author;
        $book->volume = $req->volume;
        $book->chapter = $req->chapter;
        $book->status = $req->status;
        $book->user_id = $req->user_id;
        $book->save();
        return $book;
    }

    public function destroy($id)
    {
        $book = Book::find($id);
        $book->delete();
    }
}
