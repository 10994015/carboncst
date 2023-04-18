<?php

namespace App\Http\Controllers;

use App\Models\Chairman;
use App\Http\Requests\ChairmanRequest;
use App\Http\Resources\ChairmanListResource;
use App\Http\Resources\ChairmanResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
class ChairmanController extends Controller
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
        return ChairmanListResource::collection(Chairman::where('name', 'like', "%$search%")->orWhere('content', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ChairmanRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ChairmanRequest $request)
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

        $chairman = Chairman::create($data);

        return new ChairmanResource($chairman);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Chairman  $chairman
     * @return \Illuminate\Http\Response
     */
    public function show(Chairman $chairman)
    {
        return new ChairmanResource($chairman);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\ChairmanRequest  $request
     * @param  \App\Models\Chairman  $chairman
     * @return \Illuminate\Http\Response
     */
    public function update(ChairmanRequest $request, Chairman $chairman)
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

            if($chairman->image){
                Storage::deleteDirectory('/public/' . dirname($chairman->image));
            }
        }
        $chairman->update($data);
        return new ChairmanResource($chairman);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Chairman  $chairman
     * @return \Illuminate\Http\Response
     */
    public function destroy(Chairman $chairman)
    {
        $chairman->delete();

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
    public function isExistChairman(Request $req){
        $chairman = Chairman::find($req->id);
        return ($chairman) ? true :false;
    }
    public function deleteItems(Chairman $chairman, Request $req){
        $ids = $req->ids;
        $chairman->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}