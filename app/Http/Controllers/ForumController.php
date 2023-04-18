<?php

namespace App\Http\Controllers;

use App\Models\Forum;
use App\Http\Requests\ForumRequest;
use App\Http\Resources\ForumListResource;
use App\Http\Resources\ForumResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
class ForumController extends Controller
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
        return ForumListResource::collection(Forum::where('title', 'like', "%$search%")->orWhere('content', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\ForumRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ForumRequest $request)
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

        $forum = Forum::create($data);

        return new ForumResource($forum);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function show(Forum $forum)
    {
        return new ForumResource($forum);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\ForumRequest  $request
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function update(ForumRequest $request, Forum $forum)
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

            if($forum->image){
                Storage::deleteDirectory('/public/' . dirname($forum->image));
            }
        }
        $forum->update($data);
        return new ForumResource($forum);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Forum  $forum
     * @return \Illuminate\Http\Response
     */
    public function destroy(Forum $forum)
    {
        $forum->delete();

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

    public function isExistForum(Request $req){
        $forum = Forum::find($req->id);
        return ($forum) ? true :false;
    }
    public function deleteItems(Forum $forum, Request $req){
        $ids = $req->ids;
        $forum->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}