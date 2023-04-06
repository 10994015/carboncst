<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CstSeminarResource extends JsonResource
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
            'title'=>$this->title,
            'link'=>$this->link,
            'content'=>$this->content ?? '',
            'image_url'=>$this->image ?? '',
            'hidden'=>$this->hidden ? true : false,
            'created_at'=>(new \DateTime($this->created_at))->format('Y-m-d H:i:s'),
            'updated_at'=>(new \DateTime($this->updated_at))->format('Y-m-d H:i:s'),
        ];
    }
}