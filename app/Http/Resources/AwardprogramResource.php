<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AwardprogramResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            'id'=>$this->id,
            'award_name'=>$this->award_name,
            'name'=>$this->name,
            'units'=>$this->units,
            'year'=>$this->year,
            'link'=>$this->link ?? '',
            'hidden'=>$this->hidden ? true : false,
            'file_url'=>$this->file ?? '',
            'file_name'=>$this->file_name ?? '',
            'category'=>$this->category,
            'created_at'=>(new \DateTime($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at'=>(new \DateTime($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}