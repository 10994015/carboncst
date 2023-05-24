<?php

namespace App\Http\Controllers;

use App\Models\Letter;
use App\Http\Requests\LetterRequest;
use App\Http\Resources\LetterListResource;
use App\Http\Resources\LetterResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;

class LetterController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $search = request('search', '');
        $perPage = request('per_page', 10);
        $sortField = request('sort_field', 'updated_at');
        $sortDirection = request('sort_direction', 'desc');
        return LetterListResource::collection(Letter::where('name', 'like', "%$search%")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\LetterRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(LetterRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = $request->user()->id;
        $data['updated_by'] = $request->user()->id;

        
        $file = $data['file'] ?? NULL;

        if($file){
            $relatevePath = $this->saveImage($file);
            $data['file'] = URL::to(Storage::url($relatevePath));
            $data['file_mime'] = $file->getClientMimeType();
            $data['file_size'] = $file->getSize();
        }

        $letter = Letter::create($data);

        return new LetterResource($letter);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Letter  $letter
     * @return \Illuminate\Http\Response
     */
    public function show(Letter $letter)
    {
        return new LetterResource($letter);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\LetterRequest  $request
     * @param  \App\Models\Letter  $letter
     * @return \Illuminate\Http\Response
     */
    public function update(LetterRequest $request, Letter $letter)
    {
        $data = $request->validated();
        $data['updated_by'] = $request->user()->id;

        $file = $data['file'] ?? null;
        
        if($file){
            $relativePath = $this->saveImage($file);
            $data['file'] = URL::to(Storage::url($relativePath));
            $data['file_mime'] = $file->getClientMimeType();
            $data['file_size'] = $file->getSize();

            if($letter->file){
                Storage::deleteDirectory('/public/' . dirname($letter->file));
            }
        }
        $letter->update($data);
        return new LetterResource($letter);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Letter  $letter
     * @return \Illuminate\Http\Response
     */
    public function destroy(Letter $letter)
    {
        $letter->delete();

        return response()->noContent(); //回應204
    }
    public function saveImage(UploadedFile $file){
        $path = 'images/' . Str::random();
        if(!Storage::exists($path)){
            Storage::makeDirectory($path, 0755, true);
        }
        if(!Storage::putFileAs( $path, $file, $file->getClientOriginalName())){
            throw new \Exception("Unable to save file \"{$file->getClientOriginalName()}\"");
        }

        return $path . '/' .$file->getClientOriginalName();
    }

    public function isExistLetter(Request $req){
        $letter = Letter::find($req->id);
        return ($letter) ? true :false;
    }
    public function deleteItems(Letter $letter, Request $req){
        $ids = $req->ids;
        $letter->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}