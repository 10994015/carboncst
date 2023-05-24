<?php

namespace App\Http\Controllers;

use App\Models\Awardprogram;
use App\Http\Requests\AwardprogramRequest;
use App\Http\Resources\AwardprogramListResource;
use App\Http\Resources\AwardprogramResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\URL;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
class AwardprogramController extends Controller
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
        return AwardprogramListResource::collection(Awardprogram::where('award_name', 'like', "%$search%")->orWhere('year', 'like', "$search")->orWhere('name', 'like', "$search")->orWhere('units', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\AwardprogramRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(AwardprogramRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = $request->user()->id;
        $data['updated_by'] = $request->user()->id;

        
        $file = $data['file'] ?? NULL;

        if($file){
            $relatevePath = $this->saveImage($file);
            log::info($relatevePath);
            $data['file'] = URL::to(Storage::url($relatevePath));
            $data['file_mime'] = $file->getClientMimeType();
            $data['file_size'] = $file->getSize();
        }

        $awardprogram = Awardprogram::create($data);

        return new AwardprogramResource($awardprogram);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Awardprogram  $awardprogram
     * @return \Illuminate\Http\Response
     */
    public function show(Awardprogram $awardprogram)
    {
        return new AwardprogramResource($awardprogram);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\AwardprogramRequest  $request
     * @param  \App\Models\Awardprogram  $awardprogram
     * @return \Illuminate\Http\Response
     */
    public function update(AwardprogramRequest $request, Awardprogram $awardprogram)
    {
        $data = $request->validated();
        $data['updated_by'] = $request->user()->id;

        $file = $data['file'] ?? null;
        
        if($file){
            $relativePath = $this->saveImage($file);
            log::info($relativePath);
            $data['file'] = URL::to(Storage::url($relativePath));
            $data['file_mime'] = $file->getClientMimeType();
            $data['file_size'] = $file->getSize();

            if($awardprogram->file){
                Storage::deleteDirectory('/public/' . dirname($awardprogram->file));
            }
        }
        $awardprogram->update($data);
        return new AwardprogramResource($awardprogram);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Awardprogram  $awardprogram
     * @return \Illuminate\Http\Response
     */
    public function destroy(Awardprogram $awardprogram)
    {
        $awardprogram->delete();

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

    public function isExistAwardprogram(Request $req){
        $awardprogram = Awardprogram::find($req->id);
        return ($awardprogram) ? true :false;
    }
    public function deleteItems(Awardprogram $awardprogram, Request $req){
        $ids = $req->ids;
        $awardprogram->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}