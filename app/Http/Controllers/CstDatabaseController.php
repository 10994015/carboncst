<?php

namespace App\Http\Controllers;

use App\Models\CstDatabase;
use App\Http\Requests\CstDatabaseRequest;
use App\Http\Resources\CstDatabaseListResource;
use App\Http\Resources\CstDatabaseResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
class CstDatabaseController extends Controller
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
        return CstDatabaseListResource::collection(CstDatabase::where('name', 'like', "%$search%")->orWhere('units', 'like', "$search")->orderBy($sortField, $sortDirection)->paginate($perPage));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\CstDatabaseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(CstDatabaseRequest $request)
    {
        $data = $request->validated();
        $data['created_by'] = $request->user()->id;
        $data['updated_by'] = $request->user()->id;
        Log::info($data);

        $cstDatabase = CstDatabase::create($data);

        return new CstDatabaseResource($cstDatabase);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\CstDatabase  $cstDatabase
     * @return \Illuminate\Http\Response
     */
    public function show(CstDatabase $cstDatabase)
    {
        return new CstDatabaseResource($cstDatabase);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\CstDatabaseRequest  $request
     * @param  \App\Models\CstDatabase  $cstDatabase
     * @return \Illuminate\Http\Response
     */
    public function update(CstDatabaseRequest $request, CstDatabase $cstDatabase)
    {
        $data = $request->validated();
        $data['updated_by'] = $request->user()->id;

      
        $cstDatabase->update($data);
        return new CstDatabaseResource($cstDatabase);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\CstDatabase  $cstDatabase
     * @return \Illuminate\Http\Response
     */
    public function destroy(CstDatabase $cstDatabase)
    {
        $cstDatabase->delete();

        return response()->noContent(); //回應204
    }

    public function isExistCstDatabase(Request $req){
        $cstDatabase = CstDatabase::find($req->id);
        return ($cstDatabase) ? true :false;
    }
    public function deleteItems(CstDatabase $cstDatabase, Request $req){
        $ids = $req->ids;
        $cstDatabase->whereIn('id', $ids)->delete();

        return response()->noContent();
    }
}