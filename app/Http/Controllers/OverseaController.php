<?php

namespace App\Http\Controllers;

use App\Models\Oversea;
use App\Http\Requests\OverseaRequest;
use App\Http\Resources\OverseaListResource;
use App\Http\Resources\OverseaResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
class OverseaController extends Controller
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
        return OverseaListResource::collection(Oversea::where('title', 'like', "%$search%")->orWhere('content', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\OverseaRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(OverseaRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = $request->user()->id;
        $data['updated_by'] = $request->user()->id;

        
        $image = $data['image'] ?? NULL;

        if($image){
            $relatevePath = $this->saveImage($image);
            $data['image'] = URL::to(Storage::url($relatevePath));
            $data['image_mime'] = $image->getClientMimeType();
            $data['image_size'] = $image->getSize();
        }

        $oversea = Oversea::create($data);

        return new OverseaResource($oversea);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Oversea  $oversea
     * @return \Illuminate\Http\Response
     */
    public function show(Oversea $oversea)
    {
        return new OverseaResource($oversea);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\OverseaRequest  $request
     * @param  \App\Models\Oversea  $oversea
     * @return \Illuminate\Http\Response
     */
    public function update(OverseaRequest $request, Oversea $oversea)
    {
        $data = $request->validated();
        $data['updated_by'] = $request->user()->id;

        $image = $data['image'] ?? null;
        
        if($image){
            $relativePath = $this->saveImage($image);
            $data['image'] = URL::to(Storage::url($relativePath));
            $data['image_mime'] = $image->getClientMimeType();
            $data['image_size'] = $image->getSize();

            if($oversea->image){
                Storage::deleteDirectory('/public/' . dirname($oversea->image));
            }
        }
        $oversea->update($data);
        return new OverseaResource($oversea);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Oversea  $oversea
     * @return \Illuminate\Http\Response
     */
    public function destroy(Oversea $oversea)
    {
        $oversea->delete();

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

    public function isExistOversea(Request $req){
        $oversea = Oversea::find($req->id);
        return ($oversea) ? true :false;
    }
    public function deleteItems(Oversea $oversea, Request $req){
        $ids = $req->ids;
        $oversea->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}