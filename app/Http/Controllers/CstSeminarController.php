<?php

namespace App\Http\Controllers;

use App\Models\CstSeminar;
use App\Http\Requests\CstSeminarRequest;
use App\Http\Resources\CstSeminarListResource;
use App\Http\Resources\CstSeminarResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
class CstSeminarController extends Controller
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
        return CstSeminarListResource::collection(CstSeminar::where('title', 'like', "%$search%")->orWhere('content', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CstSeminarRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CstSeminarRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = $request->user()->id;
        $data['updated_by'] = $request->user()->id;

        
        $image = $data['image'] ?? NULL;

        if($image){
            $relatevePath = $this->saveImage($image);
            // $data['image'] = URL::to(Storage::url($relatevePath));
            $data['image'] = URL::to('/storage/public/'.$relatevePath);

            $data['image_mime'] = $image->getClientMimeType();
            $data['image_size'] = $image->getSize();
        }

        $cstSeminar = CstSeminar::create($data);

        return new CstSeminarResource($cstSeminar);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CstSeminar  $cstSeminar
     * @return \Illuminate\Http\Response
     */
    public function show(CstSeminar $cstSeminar)
    {
        return new CstSeminarResource($cstSeminar);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CstSeminarRequest  $request
     * @param  \App\Models\CstSeminar  $cstSeminar
     * @return \Illuminate\Http\Response
     */
    public function update(CstSeminarRequest $request, CstSeminar $cstSeminar)
    {
        $data = $request->validated();
        $data['updated_by'] = $request->user()->id;

        $image = $data['image'] ?? null;
        
        if($image){
            $relativePath = $this->saveImage($image);
            // $data['image'] = URL::to(Storage::url($relativePath));
            $data['image'] = URL::to('/storage/public/'.$relativePath);

            $data['image_mime'] = $image->getClientMimeType();
            $data['image_size'] = $image->getSize();

            if($cstSeminar->image){
                Storage::deleteDirectory('/public/' . dirname($cstSeminar->image));
            }
        }
        $cstSeminar->update($data);
        return new CstSeminarResource($cstSeminar);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CstSeminar  $cstSeminar
     * @return \Illuminate\Http\Response
     */
    public function destroy(CstSeminar $cstSeminar)
    {
        $cstSeminar->delete();

        return response()->noContent(); //回應204
    }
    public function saveImage(UploadedFile $image){
        $path = 'images/' . Str::random();
        if(!Storage::exists($path)){
            Storage::makeDirectory($path, 0755, true);
        }
        if(!Storage::putFileAs('public/' . $path, $image, $image->getClientOriginalName())){
            throw new \Exception("Unable to save file \"{$image->getClientOriginalName()}\"");
        }

        return $path . '/' .$image->getClientOriginalName();
    }

    public function isExistCstSeminar(Request $req){
        $cstSeminar = CstSeminar::find($req->id);
        return ($cstSeminar) ? true :false;
    }
    public function deleteItems(CstSeminar $cstSeminar, Request $req){
        $ids = $req->ids;
        $cstSeminar->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}